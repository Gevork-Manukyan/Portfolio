import { profile } from "@/content/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, XIcon, DevToIcon, CodePenIcon } from "@/components/ui/icons";

const socialItems = [
  { key: "github", href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
  { key: "linkedin", href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "devto", href: profile.socials.devto, label: "DEV", Icon: DevToIcon },
  { key: "codepen", href: profile.socials.codepen, label: "CodePen", Icon: CodePenIcon },
  { key: "email", href: profile.socials.email, label: "Email", Icon: MailIcon },
  { key: "x", href: profile.socials.x, label: "X", Icon: XIcon },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted">
          © {2026} {profile.name}.
        </p>
        <div className="flex items-center gap-2">
          {socialItems.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-foreground"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
