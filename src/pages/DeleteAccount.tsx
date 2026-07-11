import { motion } from "framer-motion"
import { Mail } from "lucide-react"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="label inline-flex items-center gap-2.5 mb-8">
      <span className="w-4 h-px bg-brand/60" aria-hidden="true" />
      {children}
    </p>
  )
}

const steps = [
  {
    step: "01",
    title: "Open the app",
    body: "Launch ReQuit on your Android device.",
  },
  {
    step: "02",
    title: "Go to Settings",
    body: 'Tap the menu icon in the top-right corner and select "Settings".',
  },
  {
    step: "03",
    title: "Select Delete Account",
    body: 'Scroll to the bottom of Settings and tap "Delete Account". You\'ll be asked to confirm.',
  },
  {
    step: "04",
    title: "Confirm deletion",
    body: "Enter the confirmation phrase and tap Delete. Your data is permanently removed from our systems within 30 days.",
  },
]

export function DeleteAccount() {
  return (
    <div className="min-h-screen pt-[68px]">
      <div className="container mx-auto px-6 py-20 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Account</SectionLabel>
          <h1 className="text-4xl font-bold tracking-tight text-heading mb-4">
            Delete your account
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-12 text-[0.9375rem]">
            You can delete your account and all associated data directly from
            within the app. This action is permanent and cannot be undone.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-0 mb-14"
        >
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-6 pb-8 relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[17px] top-10 bottom-0 w-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  aria-hidden="true"
                />
              )}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0"
                style={{
                  background:
                    i === steps.length - 1
                      ? "linear-gradient(135deg, #fb923c, #f59e0b)"
                      : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color:
                    i === steps.length - 1
                      ? "#09090b"
                      : "rgba(255,255,255,0.4)",
                }}
              >
                {s.step}
              </div>
              <div className="pt-1.5">
                <h2 className="text-sm font-semibold text-foreground mb-1">
                  {s.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl p-5 border border-border/50 mb-10"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <h3 className="text-sm font-semibold text-foreground mb-2">
            What gets deleted
          </h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {[
              "Your progress and streak data",
              "Craving logs and notes",
              "App settings and preferences",
              "Any locally stored data on your device",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  className="w-1 h-1 rounded-full bg-muted flex-shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Need help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="divider-h mb-8" aria-hidden="true" />
          <p className="text-sm text-muted-foreground mb-3">
            Can't find the option in the app, or need help?
          </p>
          <a
            href="mailto:movexlabs@gmail.com?subject=Account Deletion Request"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-150 link-underline"
          >
            <Mail size={14} />
            Email us directly
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            We'll process your request within 5 business days.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
