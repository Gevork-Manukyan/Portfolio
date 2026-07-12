"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { AnimatedBackground } from "@/components/backgrounds/AnimatedBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDownIcon, ArrowUpRightIcon } from "@/components/ui/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Interactive constellation + grid + glow */}
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            Available for opportunities
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-2xl font-medium text-muted sm:text-3xl"
          >
            <span className="gradient-text">{profile.title}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#experience">
              View my experience <ArrowDownIcon width={16} height={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Get in touch <ArrowUpRightIcon width={16} height={16} />
            </MagneticButton>
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              variant="ghost"
              ariaLabel="Open resume in a new tab"
            >
              Resume
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
