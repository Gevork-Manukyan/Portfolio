"use server";

import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validation";
import { profile } from "@/content/profile";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company") ?? "",
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
    }
    // Honeypot tripped — pretend success so bots get no signal.
    if (errors.company) {
      return { status: "success", message: "Thanks so much — your message is on its way and I'll be in touch soon! 🎉" };
    }
    return { status: "error", message: "Please fix the errors below.", errors };
  }

  const { name, email, message } = parsed.data;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user || profile.email;

  if (!user || !pass) {
    // Not configured yet — log server-side and fail gracefully.
    console.warn("[contact] GMAIL_USER/GMAIL_APP_PASSWORD not set; message not delivered:", {
      name,
      email,
    });
    return {
      status: "error",
      message:
        "The contact form isn't configured yet. Please email me directly for now.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    // 1) Notification to you (critical). replyTo lets you reply straight to the sender.
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("[contact] Notification send failed:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email me directly.",
    };
  }

  // 2) Auto-reply to the visitor (best-effort — never fails the submission).
  try {
    await transporter.sendMail({
      from: `"${profile.name}" <${user}>`,
      to: email,
      replyTo: to,
      subject: "Thanks for reaching out! 👋",
      text: `Hey ${name},

Thanks so much for reaching out — your message just landed in my inbox and honestly made my day. 🎉

I read everything that comes through personally, so this isn't an into-the-void kind of thing. I'll get back to you as soon as I can, usually within a day or two.

Talk soon,
${profile.name}`,
    });
  } catch (err) {
    console.error("[contact] Auto-reply failed (submission still succeeded):", err);
  }

  return { status: "success", message: "Thanks so much — your message is on its way and I'll be in touch soon! 🎉" };
}
