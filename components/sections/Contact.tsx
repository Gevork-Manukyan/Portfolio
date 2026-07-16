"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, XIcon, ArrowUpRightIcon } from "@/components/ui/icons";

const initialState: ContactState = { status: "idle" };

const socialItems = [
  { key: "github", href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
  { key: "linkedin", href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "email", href: profile.socials.email, label: "Email", Icon: MailIcon },
  { key: "x", href: profile.socials.x, label: "X", Icon: XIcon },
].filter((s) => s.href);

const fieldClass =
  "w-full rounded-2xl border border-border bg-surface/60 px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent/70";

export function Contact() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const success = state.status === "success";

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="05" title="Let's build something" kicker="Get in touch" />

      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            Have a project in mind, a role to fill, or just want to say hi? Drop me a
            message and I&apos;ll get back to you.
          </p>

          <a
            href={profile.socials.email || `mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 font-display text-xl font-medium transition-colors hover:text-accent"
          >
            {profile.email} <ArrowUpRightIcon width={18} height={18} />
          </a>

          <div className="mt-8 flex items-center gap-3">
            {socialItems.map(({ key, href, label, Icon }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-foreground"
              >
                <Icon />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {success ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-3xl border border-accent/40 bg-surface/40 p-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl">
                ✓
              </div>
              <p className="font-display text-xl font-semibold">Message sent! 🎉</p>
              <p className="mt-2 text-muted">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4" noValidate>
              {/* Honeypot — visually hidden, must stay empty */}
              <div className="absolute left-[-9999px]" aria-hidden>
                <label>
                  Company
                  <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name
                  </label>
                  <input id="name" name="name" type="text" className={fieldClass} placeholder="Jane Doe" />
                  {state.errors?.name && (
                    <p className="mt-1.5 text-sm text-accent-3">{state.errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className={fieldClass} placeholder="jane@example.com" />
                  {state.errors?.email && (
                    <p className="mt-1.5 text-sm text-accent-3">{state.errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell me about your project or opportunity…"
                />
                {state.errors?.message && (
                  <p className="mt-1.5 text-sm text-accent-3">{state.errors.message}</p>
                )}
              </div>

              {state.status === "error" && !state.errors && (
                <p className="text-sm text-accent-3">{state.message}</p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-strong px-6 py-3.5 font-medium text-white transition-colors hover:bg-accent-strong/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {pending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
