import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import { apps } from "@/data/apps"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="label inline-flex items-center gap-2.5 mb-6">
      <span className="w-4 h-px bg-brand/60" aria-hidden="true" />
      {children}
    </p>
  )
}

export function Apps() {
  return (
    <div className="min-h-screen pt-[68px]">
      <div className="container mx-auto px-6 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-[540px]"
        >
          <SectionLabel>Our Apps</SectionLabel>
          <h1
            className="font-bold tracking-tight text-heading mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05 }}
          >
            Everything we've built.
          </h1>
          <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
            Each app is designed with care and actively maintained. No
            abandonware. No half-finished products.
          </p>
        </motion.div>

        {/* Apps */}
        <div className="space-y-6 mb-20">
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-border/50 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0d0d0f 0%, #0f0f12 100%)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Amber accent line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-[20%] bottom-[20%] w-px"
                style={{
                  background: `linear-gradient(180deg, transparent, ${app.accentColor} 50%, transparent)`,
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 p-8 lg:p-10">
                  {/* Identity */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, #fb923c 0%, ${app.accentColor} 100%)`,
                        boxShadow: `0 8px 24px ${app.accentColor}33, inset 0 1px 0 rgba(255,255,255,0.2)`,
                      }}
                    >
                      {app.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold tracking-tight">{app.name}</h2>
                        <span
                          className={[
                            "px-2 py-0.5 rounded-full text-[10px] font-mono border",
                            app.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : app.status === "Beta"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
                          ].join(" ")}
                        >
                          {app.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {app.category} · {app.platform}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg font-semibold tracking-tight leading-snug mb-3 text-foreground">
                    {app.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-[0.9375rem] max-w-[460px]">
                    {app.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                    {app.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stats + CTA */}
                  <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-border/30">
                    {app.stats?.map((s) => (
                      <div key={s.label}>
                        <p className="text-base font-bold tracking-tight text-foreground">{s.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                      </div>
                    ))}
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        id={`${app.id}-download`}
                        className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground border border-border/60 hover:border-primary/40 hover:text-primary transition-all duration-200"
                      >
                        <Download size={13} />
                        Get on Android
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: placeholder for future media */}
                <div
                  className="hidden lg:flex lg:col-span-4 items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.01)" }}
                >
                  <div className="text-6xl select-none" aria-hidden="true">
                    {app.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center py-16 rounded-2xl border border-dashed border-border/40"
          style={{ background: "rgba(255,255,255,0.01)" }}
        >
          <p className="label mb-4 justify-center">In progress</p>
          <h3 className="text-xl font-semibold tracking-tight text-heading mb-3">
            More on the way.
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px] mx-auto mb-6">
            We're working on the next product. No launch date until it's ready.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 link-underline"
          >
            Follow along <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
