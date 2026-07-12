<div align="center">

# Gevork Manukyan — Portfolio

**Full Stack Software Engineer** · React · TypeScript · REST APIs · database-driven products

A creative, dark-first personal site with an interactive hero, scroll-driven motion, and a working contact form.

[**Live Site**](https://example.com) · [About](#-about) · [Getting Started](#-getting-started) · [Deploy](#-deploy)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-FF4D8D?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## ✨ About

A single-page portfolio built to double as an engineering artifact — the craft *is* part of the pitch. Highlights:

- 🎇 **Interactive hero** — a cursor-reactive particle constellation on `<canvas>`, kinetic typography, and a signature gradient glow.
- 🌀 **Scroll-driven motion** — sections and cards reveal on scroll, a progress bar tracks the page, and Lenis adds smooth scrolling.
- 🧩 **Bento & tiered layouts** — a featured project with live screenshot, "In progress" / "Live" / "Demo" status badges, and a compact "more builds" list.
- 🖱️ **Micro-interactions** — a custom accent cursor, magnetic buttons, and cursor-spotlight cards.
- 📮 **Working contact form** — a validated server action that emails via Gmail SMTP and sends the visitor a friendly auto-reply.
- ♿ **Accessible & fast** — semantic HTML, keyboard-friendly, honors `prefers-reduced-motion`, SEO metadata, generated OG image, sitemap & robots.

Everything is **data-driven**: all copy lives in typed files under [`content/`](content), so updating the site never means touching a component.

## 🛠 Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, design tokens |
| Animation | Motion (Framer Motion), Lenis |
| Email | Nodemailer + Gmail SMTP |
| Validation | Zod |
| Hosting | Vercel |

## 🚀 Getting Started

```bash
git clone https://github.com/Gevork-Manukyan/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

### Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## ✏️ Editing Content

All copy and data live in [`content/`](content) — edit these, not the components:

| File | Controls |
| --- | --- |
| `content/profile.ts` | Name, title, tagline, bio, email, socials, resume link |
| `content/projects.ts` | Featured projects + "more builds" list (with `status` badges) |
| `content/skills.ts` | Grouped skills & tools |
| `content/experience.ts` | Work timeline |
| `content/education.ts` | Education |

**Assets** live in [`public/`](public): `headshot.jpg`, your resume PDF, and project images in `public/projects/`.

**Rebrand in seconds** — change `--accent`, `--accent-2`, `--accent-3` in [`app/globals.css`](app/globals.css) and the whole site re-themes.

## 📮 Contact Form (Gmail SMTP)

The form posts to a server action ([`app/actions/contact.ts`](app/actions/contact.ts)) that sends two emails via Nodemailer: a notification to you and an auto-reply to the visitor. No custom domain required.

Set in `.env.local`:

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER` | The Gmail account that sends the mail |
| `GMAIL_APP_PASSWORD` | A 16-char [Google App Password](https://myaccount.google.com/apppasswords) (needs 2-Step Verification) |
| `CONTACT_TO_EMAIL` | Where submissions land (defaults to `GMAIL_USER`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata / OG / sitemap |

Without credentials the form fails gracefully and tells visitors to email directly. The auto-reply is best-effort — if it fails, the main notification still succeeds. Validation and a honeypot guard against spam.

## 📁 Project Structure

```
app/
  layout.tsx            # fonts, metadata, global providers
  page.tsx              # single-page composition
  actions/contact.ts    # contact server action (Gmail SMTP)
  icon.tsx              # generated favicon (GM monogram)
  opengraph-image.tsx   # generated social preview
  sitemap.ts / robots.ts
components/
  layout/               # Nav, Footer, ScrollProgress, SmoothScroll
  sections/             # Hero, About, Projects, Skills, Experience, Contact
  ui/                   # Cursor, MagneticButton, Reveal, ProjectCard, StatusBadge …
  backgrounds/          # AnimatedBackground (canvas constellation)
content/                # single source of truth for all copy/data
lib/                    # validation schema, helpers
public/                 # images, resume, favicons
```

## ☁️ Deploy

Deploys to [Vercel](https://vercel.com) with zero config:

1. Push to GitHub (done — this repo).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example` (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`).
4. Deploy — every push to `main` ships automatically.

## 📄 License

© 2026 Gevork Manukyan. All rights reserved.

<div align="center">

Built with Next.js & Tailwind · Designed and developed by Gevork Manukyan

</div>
