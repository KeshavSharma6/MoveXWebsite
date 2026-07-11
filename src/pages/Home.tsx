import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { apps } from "@/data/apps"
import { updates } from "@/data/updates"
import { cn } from "@/lib/utils"

// ─── Shared helpers ───────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const

function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("label inline-flex items-center gap-2.5 mb-8", className)}>
      <span className="w-4 h-px bg-brand/55" aria-hidden="true" />
      {children}
    </p>
  )
}

// ─── Inline ReQuit App Mockup ─────────────────────────────────────────────────
// A pure-code app preview — no image dependency, no placeholder.

function ReQuitMockup({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        width: `${220 * scale}px`,
        height: `${430 * scale}px`,
        borderRadius: `${32 * scale}px`,
        background: "linear-gradient(160deg, #111116 0%, #0d0d0f 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
        fontSize: `${scale}rem`,
      }}
    >
      {/* Status bar */}
      <div
        className="flex justify-between items-center"
        style={{
          padding: `${16 * scale}px ${20 * scale}px ${8 * scale}px`,
          fontSize: `${10 * scale}px`,
          color: "rgba(255,255,255,0.25)",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)" }}>9:41</span>
        <span style={{ letterSpacing: "2px" }}>●●●</span>
      </div>

      {/* App name */}
      <div style={{ padding: `${4 * scale}px ${20 * scale}px ${12 * scale}px` }}>
        <p
          style={{
            fontSize: `${10 * scale}px`,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
            fontFamily: "var(--font-mono)",
          }}
        >
          ReQuit
        </p>
      </div>

      {/* Circular progress ring */}
      <div
        className="flex flex-col items-center"
        style={{ paddingBottom: `${20 * scale}px` }}
      >
        <div
          className="relative"
          style={{ width: `${128 * scale}px`, height: `${128 * scale}px` }}
        >
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 100 100"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Track */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="5"
            />
            {/* Progress arc ~76% */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#requit-ring)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="264"
              strokeDashoffset="64"
            />
            <defs>
              <linearGradient
                id="requit-ring"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
          {/* Counter inside ring */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ gap: `${2 * scale}px` }}
          >
            <span
              className="font-bold text-white tracking-tight leading-none"
              style={{ fontSize: `${32 * scale}px` }}
            >
              47
            </span>
            <span
              style={{
                fontSize: `${9 * scale}px`,
                color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              days
            </span>
          </div>
        </div>
        <p
          style={{
            marginTop: `${10 * scale}px`,
            fontSize: `${10 * scale}px`,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.08em",
          }}
        >
          smoke-free
        </p>
      </div>

      {/* Thin divider */}
      <div
        style={{
          margin: `0 ${20 * scale}px`,
          height: "1px",
          background: "rgba(255,255,255,0.05)",
        }}
        aria-hidden="true"
      />

      {/* Stats grid */}
      <div
        style={{
          margin: `${16 * scale}px ${16 * scale}px 0`,
          borderRadius: `${14 * scale}px`,
          padding: `${14 * scale}px`,
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.05)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: `${10 * scale}px`,
        }}
      >
        {[
          { label: "Saved", value: "$94", color: "#f59e0b" },
          { label: "Not smoked", value: "564", color: "rgba(255,255,255,0.7)" },
          { label: "Cravings beat", value: "23", color: "rgba(255,255,255,0.7)" },
          { label: "Life gained", value: "+2.3d", color: "#4ade80" },
        ].map((stat) => (
          <div key={stat.label}>
            <p
              style={{
                fontSize: `${9 * scale}px`,
                color: "rgba(255,255,255,0.22)",
                marginBottom: `${2 * scale}px`,
                letterSpacing: "0.04em",
              }}
            >
              {stat.label}
            </p>
            <p
              className="font-bold leading-none"
              style={{ fontSize: `${15 * scale}px`, color: stat.color }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Log craving button */}
      <div style={{ margin: `${12 * scale}px ${16 * scale}px 0` }}>
        <div
          style={{
            borderRadius: `${12 * scale}px`,
            padding: `${10 * scale}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.15)",
          }}
        >
          <span
            style={{
              fontSize: `${11 * scale}px`,
              color: "#f59e0b",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Log a craving
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Cyberpunk Abstract Visual ────────────────────────────────────────────────
function CyberpunkVisual({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${340 * scale}px`,
        height: `${340 * scale}px`,
      }}
    >
      {/* Abstract rotating glowing elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-[1.5px] border-cyan-500/20 border-t-cyan-400/80 border-r-fuchsia-500/50"
        style={{ boxShadow: "0 0 60px rgba(6,182,212,0.1), inset 0 0 20px rgba(6,182,212,0.05)" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[30px] rounded-full border border-fuchsia-500/20 border-b-fuchsia-400/80 border-l-cyan-500/40"
        style={{ boxShadow: "0 0 40px rgba(217,70,239,0.1)" }}
      />
      
      {/* Central core */}
      <div className="relative w-32 h-32 rounded-full border border-cyan-500/40 flex items-center justify-center overflow-hidden bg-[#050505] shadow-[0_0_30px_rgba(6,182,212,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-cyan-400 blur-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border border-white/20 rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating HUD elements */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-10 -left-12 glass rounded-md px-3 py-1.5 border border-cyan-500/30"
      >
        <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">SYS.ONLINE</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-12 -right-8 glass rounded-md px-3 py-1.5 border border-fuchsia-500/30"
      >
        <p className="text-[10px] text-fuchsia-400 font-mono tracking-widest uppercase">NEUROLINK_ACTIVE</p>
      </motion.div>
    </div>
  )
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-[68px]"
      aria-label="Welcome to MoveXLabs"
    >
      {/* Ambient glow — off-center left, does not dominate */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(6,182,212,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(217,70,239,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* LEFT — editorial content */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.09 } },
              }}
            >
              {/* Studio label */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease },
                  },
                }}
                className="label inline-flex items-center gap-2.5 mb-10"
              >
                <span className="w-5 h-px bg-brand/55" aria-hidden="true" />
                Independent App Studio · India
              </motion.p>

              {/* Main heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease },
                  },
                }}
                className="font-bold leading-[0.92] tracking-[-0.04em] mb-8"
                style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)" }}
              >
                <span className="text-heading block">We build</span>
                <span className="text-cyan-400 block" style={{ textShadow: "0 0 35px rgba(6,182,212,0.4)" }}>next-gen</span>
                <span className="text-heading block">software.</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease },
                  },
                }}
                className="text-[1.0625rem] text-muted-foreground leading-[1.72] max-w-[440px] mb-10"
              >
                MoveXLabs is a small studio from India. Every app we release
                reflects our values — craft, honesty, and long-term thinking.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease },
                  },
                }}
                className="flex flex-wrap items-center gap-5"
              >
                <Link to="/apps">
                  <Button
                    size="lg"
                    id="hero-cta-apps"
                    className="gap-2 px-7"
                  >
                    See our apps
                    <ArrowRight size={14} />
                  </Button>
                </Link>
                <Link
                  to="/#contact"
                  id="hero-cta-contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-underline"
                >
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Cyberpunk abstract visual */}
          <div className="hidden lg:flex col-span-5 xl:col-span-6 justify-end items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
              >
                <CyberpunkVisual scale={1.1} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
        className="absolute bottom-8 left-6"
      >
        <div className="flex flex-col items-start gap-3">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-border/35 ml-1" />
          <p className="text-[10px] text-muted-foreground/40 font-mono tracking-widest uppercase -rotate-90 origin-left translate-y-[-1.5rem] translate-x-[1.5rem] whitespace-nowrap">
            scroll
          </p>
        </div>
      </motion.div>
    </section>
  )
}

// ─── Section 2: Featured Product ─────────────────────────────────────────────

function FeaturedSection() {
  const requit = apps[0]
  if (!requit) return null

  return (
    <section
      id="apps-preview"
      className="py-28 border-t border-border/40"
      aria-labelledby="featured-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
        >
          <SectionLabel>Featured App</SectionLabel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
          className="relative rounded-2xl border border-border/50 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d0d0f 0%, #0f0f12 100%)",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Amber accent stripe on left edge */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[18%] bottom-[18%] w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, #f59e0b 50%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: App info */}
            <div className="lg:col-span-7 p-10 lg:p-12">
              {/* Identity row */}
              <div className="flex items-start gap-4 mb-7">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)",
                    boxShadow:
                      "0 8px 24px rgba(245,158,11,0.22), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {requit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2
                      id="featured-heading"
                      className="text-xl font-bold tracking-tight"
                    >
                      {requit.name}
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                      {requit.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {requit.category} · {requit.platform}
                  </p>
                </div>
              </div>

              <p className="text-xl font-semibold tracking-tight leading-snug mb-3 text-foreground">
                {requit.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-[0.9375rem] max-w-[420px]">
                {requit.description}
              </p>

              {/* Feature checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
                {requit.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Stats + CTA */}
              <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-border/30">
                {requit.stats?.map((s) => (
                  <div key={s.label}>
                    <p className="text-base font-bold tracking-tight text-foreground">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-3">
                  <a
                    href={requit.playStoreUrl}
                    id="featured-download"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground border border-border/60 hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    <Download size={13} />
                    Get on Android
                  </a>
                  <Link
                    to="/apps"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 link-underline"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:flex lg:col-span-5 items-end justify-center px-8 pb-10 pt-6">
              <div style={{ opacity: 0.82 }}>
                <ReQuitMockup scale={0.92} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 3: Why MoveXLabs Exists ─────────────────────────────────────────

function WhySection() {
  return (
    <section
      id="about"
      className="py-28 border-t border-border/40"
      aria-labelledby="why-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">

          {/* Left: manifesto text */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionLabel>Our Story</SectionLabel>
              <h2
                id="why-heading"
                className="font-bold tracking-tight text-heading leading-[1.05] mb-8"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                We got tired of apps that don't respect you.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-[1.75] text-[0.9375rem]">
                <p>
                  We started MoveXLabs because we were tired of apps that treat
                  users as data points — designed to maximize time-in-app, not
                  quality of life.
                </p>
                <p>
                  Every product we build begins with a simple question: does
                  this make someone's day genuinely better? If it doesn't, it
                  doesn't get built. If it does, we work on it until it's
                  actually ready.
                </p>
                <p>
                  We're a small team, and we plan to stay that way. Small
                  enough to care about every detail. Focused enough to build
                  things that last.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: pull quote */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="lg:pt-[5.5rem]"
            >
              {/* Human face placeholder */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-border overflow-hidden border-2 border-border/50">
                   <img src="https://api.dicebear.com/7.x/notionists/svg?seed=founder&backgroundColor=e2e8f0" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Kesha</p>
                  <p className="text-xs text-muted-foreground font-mono">FOUNDER</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-brand/35">
                <p className="text-xl font-medium leading-[1.5] tracking-[-0.015em] text-foreground/90 italic">
                  "Every product begins with one question: does this make
                  someone's day genuinely better?"
                </p>
                <p className="mt-5 text-xs text-muted-foreground font-mono tracking-widest uppercase">
                  — Founding principle
                </p>
              </div>

              {/* Subtle callout */}
              <div
                className="mt-8 rounded-xl p-5 border border-border/40"
                style={{ background: "rgba(255,255,255,0.018)" }}
              >
                <p className="text-sm font-medium text-foreground mb-1">
                  Privacy-first by default
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We only collect what's necessary—like your username and email for your account. No creepy tracking.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Development Philosophy ───────────────────────────────────────

const principles = [
  {
    n: "01",
    title: "Build for the person, not the metric",
    body: "We don't optimize for engagement. We optimize for usefulness. These are not the same thing.",
  },
  {
    n: "02",
    title: "Ship when it's ready",
    body: "Not every sprint. Not every quarter. When it's genuinely finished — tested, refined, and worth your time.",
  },
  {
    n: "03",
    title: "Design is not decoration",
    body: "Every visual decision serves a purpose. If we can't explain why something is there, it gets removed.",
  },
  {
    n: "04",
    title: "Own the outcome",
    body: "We support what we build. Bugs get fixed. Feedback gets read. We don't ship and disappear.",
  },
]

function PhilosophySection() {
  return (
    <section
      className="py-28 border-t border-border/40"
      aria-labelledby="philosophy-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-14"
        >
          <SectionLabel>How We Work</SectionLabel>
          <h2
            id="philosophy-heading"
            className="font-bold tracking-tight text-heading leading-[1.05]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Our development philosophy.
          </h2>
        </motion.div>

        {/* 2×2 grid with gap lines as dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/25 rounded-2xl overflow-hidden border border-border/25">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="relative p-8 lg:p-10 bg-background"
            >
              {/* Ghost number watermark */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-7 font-mono font-bold select-none pointer-events-none leading-none"
                style={{
                  fontSize: "5.5rem",
                  color: "rgba(255,255,255,0.022)",
                  letterSpacing: "-0.06em",
                }}
              >
                {p.n}
              </span>

              <p className="label mb-4">{p.n}</p>
              <h3 className="text-[1.0625rem] font-semibold tracking-tight text-foreground mb-3 leading-snug max-w-[260px]">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[300px]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Our Process ───────────────────────────────────────────────────

const steps = [
  {
    n: "1",
    title: "Understand",
    body: "Research the problem. Talk to real users. Define success before writing code.",
  },
  {
    n: "2",
    title: "Define",
    body: "Decide what the product will NOT do. Constraints are features.",
  },
  {
    n: "3",
    title: "Design",
    body: "Prototype, test, iterate. Design for edge cases, not just the happy path.",
  },
  {
    n: "4",
    title: "Build",
    body: "Engineering with attention to detail. Performance and accessibility are not afterthoughts.",
  },
  {
    n: "5",
    title: "Ship & Support",
    body: "A deliberate release. Real support. We don't ship and disappear.",
  },
]

function ProcessSection() {
  return (
    <section
      className="py-28 border-t border-border/40"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-14"
        >
          <SectionLabel>Our Process</SectionLabel>
          <h2
            id="process-heading"
            className="font-bold tracking-tight text-heading leading-[1.05]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            How an idea becomes a product.
          </h2>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid grid-cols-5 relative gap-4">
          {/* Connecting line behind the nodes */}
          <div
            aria-hidden="true"
            className="absolute z-0"
            style={{
              top: "20px",
              left: "calc(10% + 8px)",
              right: "calc(10% + 8px)",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent)",
            }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.48, delay: i * 0.08, ease }}
              className="flex flex-col items-start px-3 relative z-10"
            >
              {/* Step node */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold font-mono mb-5 flex-shrink-0"
                style={
                  i === steps.length - 1
                    ? {
                        background:
                          "linear-gradient(135deg, #fb923c, #f59e0b)",
                        color: "#09090b",
                        boxShadow: "0 0 20px rgba(245,158,11,0.35)",
                        border: "none",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        color: "rgba(255,255,255,0.45)",
                      }
                }
              >
                {s.n}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="flex gap-5 pb-8 relative"
            >
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    left: "18px",
                    top: "40px",
                    bottom: 0,
                    width: "1px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              )}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0"
                style={
                  i === steps.length - 1
                    ? {
                        background:
                          "linear-gradient(135deg, #fb923c, #f59e0b)",
                        color: "#09090b",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.4)",
                      }
                }
              >
                {s.n}
              </div>
              <div className="pt-1.5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 6: Technology Stack ─────────────────────────────────────────────

const techStack = [
  { category: "Platform", items: ["Android", "React Native"], theme: { border: "rgba(6,182,212,0.4)", bg: "rgba(6,182,212,0.05)", text: "#22d3ee" } }, // Cyan
  { category: "Language", items: ["Kotlin", "TypeScript"], theme: { border: "rgba(217,70,239,0.4)", bg: "rgba(217,70,239,0.05)", text: "#e879f9" } }, // Fuchsia
  { category: "Design", items: ["Figma", "Framer"], theme: { border: "rgba(245,158,11,0.4)", bg: "rgba(245,158,11,0.05)", text: "#fbbf24" } }, // Amber
  { category: "Frontend", items: ["React", "Vite", "Tailwind"], theme: { border: "rgba(59,130,246,0.4)", bg: "rgba(59,130,246,0.05)", text: "#60a5fa" } }, // Blue
  { category: "Backend", items: ["Firebase", "Supabase"], theme: { border: "rgba(244,63,94,0.4)", bg: "rgba(244,63,94,0.05)", text: "#fb7185" } }, // Rose
  { category: "Tooling", items: ["GitHub", "VS Code"], theme: { border: "rgba(16,185,129,0.4)", bg: "rgba(16,185,129,0.05)", text: "#34d399" } }, // Emerald
]

function TechSection() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-5"
        >
          <div>
            <SectionLabel className="mb-4">Built With</SectionLabel>
            <h2
              className="font-bold tracking-tight text-heading"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Technology we trust.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[260px] leading-relaxed sm:text-right">
            Chosen for reliability, not hype.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: gi * 0.05, ease }}
              className="flex flex-col gap-3 p-6 rounded-xl border border-border/40 bg-surface/50 relative overflow-hidden group"
            >
              {/* Subtle background glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ background: `radial-gradient(circle at 80% 80%, ${group.theme.bg} 0%, transparent 70%)` }} 
              />
              
              <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: group.theme.text }}>
                {group.category}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors"
                    style={{
                      background: group.theme.bg,
                      border: `1px solid ${group.theme.border}`,
                      color: "#ffffff"
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 7: Latest Updates ────────────────────────────────────────────────

function UpdatesSection() {
  return (
    <section id="updates" className="py-28 border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4"
        >
          <div>
            <SectionLabel className="mb-4">Latest</SectionLabel>
            <h2
              className="font-bold tracking-tight text-heading"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              What's new.
            </h2>
          </div>
        </motion.div>

        <div className="space-y-0">
          {updates.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-5 border-b border-border/35 group"
            >
              {/* Date + version */}
              <div className="flex items-center gap-3 sm:w-40 flex-shrink-0">
                <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                  {u.date}
                </span>
                {u.version && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-surface border border-border/50 text-muted-foreground">
                    {u.version}
                  </span>
                )}
              </div>

              {/* App tag */}
              {u.app && (
                <span
                  className={cn(
                    "hidden sm:flex items-center justify-center text-[10px] font-mono px-2.5 py-1 rounded-full border flex-shrink-0 w-20",
                    u.app === "ReQuit"
                      ? "border-amber-500/30 text-amber-400 bg-amber-500/08"
                      : "border-border/50 text-muted-foreground bg-transparent"
                  )}
                >
                  {u.app}
                </span>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors duration-150">
                  {u.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {u.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 8: Contact ───────────────────────────────────────────────────────

function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Message from ${name || "Website visitor"}`
    )
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:movexlabs@gmail.com?subject=${subject}&body=${body}`
  }

  const inputBase =
    "w-full bg-surface-raised border border-border/55 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/45 focus:outline-none focus:border-primary/45 focus:ring-1 focus:ring-primary/15 transition-all duration-150"

  return (
    <section id="contact" className="py-28 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-20">

          {/* Left: Studio info */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionLabel>Get In Touch</SectionLabel>
              <h2
                className="font-bold tracking-tight text-heading leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Let's talk.
              </h2>
              <p className="text-muted-foreground leading-[1.75] mb-10 text-[0.9375rem] max-w-[360px]">
                Have a question about our apps, a collaboration idea, or just
                want to say hello? We read every message.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="label mb-2 text-[10px]">Email</p>
                  <a
                    href="mailto:movexlabs@gmail.com"
                    className="text-sm text-foreground hover:text-primary transition-colors duration-150 link-underline"
                  >
                    movexlabs@gmail.com
                  </a>
                </div>
                <div>
                  <p className="label mb-2 text-[10px]">Based in</p>
                  <span className="text-sm text-muted-foreground">India</span>
                </div>
                <div>
                  <p className="label mb-2 text-[10px]">Response time</p>
                  <span className="text-sm text-muted-foreground">
                    Usually within 24–48 hours
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="col-span-12 lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-muted-foreground mb-2 tracking-wide"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex"
                    className={inputBase}
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-muted-foreground mb-2 tracking-wide"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className={inputBase}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-muted-foreground mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className={cn(inputBase, "resize-none")}
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2 gap-4">
                <p className="text-xs text-muted-foreground/55">
                  Opens your email client to send.
                </p>
                <Button
                  type="submit"
                  id="contact-submit"
                  size="lg"
                  className="gap-2 flex-shrink-0"
                >
                  Send message
                  <ArrowRight size={14} />
                </Button>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Section: Hire Us ─────────────────────────────────────────────────────────

function HireUsSection() {
  return (
    <section className="py-28 border-t border-border/40 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <SectionLabel className="justify-center mb-4 text-cyan-400 [&>span]:bg-cyan-500/50">Services</SectionLabel>
          <h2
            className="font-bold tracking-tight text-heading leading-[1.05] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Need an app built right?
          </h2>
          <p className="text-muted-foreground leading-[1.75] text-[0.9375rem]">
            We build high-performance, beautiful mobile and web applications for startups and forward-thinking businesses. No bloatware, no missed deadlines. Just solid engineering and premium design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Tier 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="p-8 rounded-2xl border border-border/50 bg-background flex flex-col"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">MVP Sprint</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Perfect for validating an idea quickly with a high-quality prototype or V1.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-foreground">~$4,900</span>
              <span className="text-xs text-muted-foreground ml-2">/ project</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-foreground/80">
              <li className="flex gap-2"><span className="text-cyan-400">✓</span> iOS & Android app</li>
              <li className="flex gap-2"><span className="text-cyan-400">✓</span> Basic backend integration</li>
              <li className="flex gap-2"><span className="text-cyan-400">✓</span> 4-6 weeks delivery</li>
            </ul>
            <a href="#contact" className="mt-auto block w-full text-center py-2.5 rounded-lg border border-border/80 text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-colors">Start a project</a>
          </motion.div>

          {/* Tier 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="p-8 rounded-2xl border-2 border-fuchsia-500/50 bg-surface/50 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Full Build</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">A production-ready application scaled for thousands of users.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-foreground">~$12,500</span>
              <span className="text-xs text-muted-foreground ml-2">/ project</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-foreground/80">
              <li className="flex gap-2"><span className="text-fuchsia-400">✓</span> Complex UI/UX design</li>
              <li className="flex gap-2"><span className="text-fuchsia-400">✓</span> Custom backend architecture</li>
              <li className="flex gap-2"><span className="text-fuchsia-400">✓</span> Payment integration</li>
            </ul>
            <a href="#contact" className="mt-auto block w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 text-white text-sm font-bold shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:opacity-90 transition-opacity">Start a project</a>
          </motion.div>

          {/* Tier 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="p-8 rounded-2xl border border-border/50 bg-background flex flex-col"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">Team Extension</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Need ongoing design and engineering support for your existing product?</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-foreground">~$80</span>
              <span className="text-xs text-muted-foreground ml-2">/ hour</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-foreground/80">
              <li className="flex gap-2"><span className="text-brand">✓</span> React & Native expertise</li>
              <li className="flex gap-2"><span className="text-brand">✓</span> UI/UX system design</li>
              <li className="flex gap-2"><span className="text-brand">✓</span> Flexible capacity</li>
            </ul>
            <a href="#contact" className="mt-auto block w-full text-center py-2.5 rounded-lg border border-border/80 text-sm font-medium hover:border-brand hover:text-brand transition-colors">Let's talk</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Page export ──────────────────────────────────────────────────────────────

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <WhySection />
      <PhilosophySection />
      <ProcessSection />
      <TechSection />
      <HireUsSection />
      <UpdatesSection />
      <ContactSection />
    </>
  )
}
