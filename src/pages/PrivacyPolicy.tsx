import { motion } from "framer-motion"

interface LegalSectionProps {
  title: string
  children: React.ReactNode
}

function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-base font-semibold text-foreground mb-3 tracking-tight">
        {title}
      </h2>
      <div className="text-[0.9375rem] text-muted-foreground leading-[1.75] space-y-3">
        {children}
      </div>
    </div>
  )
}

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-[68px]">
      <div className="container mx-auto px-6 py-20 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="label inline-flex items-center gap-2.5 mb-6">
            <span className="w-4 h-px bg-brand/60" aria-hidden="true" />
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-heading mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: July 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="rounded-xl p-5 mb-10 border border-emerald-500/20"
            style={{ background: "rgba(16, 185, 129, 0.04)" }}
          >
            <p className="text-sm text-emerald-400 font-medium mb-1">
              Plain language summary
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We collect as little as possible. We only collect what's necessary—like your username and email for your account. We don't sell your data or track you across apps.
            </p>
          </div>

          <div className="divider-h mb-10" aria-hidden="true" />

          <LegalSection title="1. Who we are">
            <p>
              MoveXLabs is an independent app studio based in India. We build
              mobile apps for Android and iOS. You can reach us at{" "}
              <a
                href="mailto:movexlabs@gmail.com"
                className="text-foreground hover:text-primary transition-colors duration-150 link-underline"
              >
                movexlabs@gmail.com
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="2. What we collect">
            <p>
              <strong className="text-foreground font-medium">Account Data:</strong>
              {" "}We collect your username and email address when you create an account to provide essential functionality.
            </p>
            <p>
              <strong className="text-foreground font-medium">ReQuit</strong>
              {" "}stores all your other health data locally on your device. We do not have a server that receives your personal health data.
            </p>
            <p>
              We may collect anonymous, aggregated crash reports through
              Firebase Crashlytics to help us fix bugs. These reports do not
              include personally identifiable information.
            </p>
            <p>
              If you contact us by email, we retain your email address and
              message solely to respond to your inquiry.
            </p>
          </LegalSection>

          <LegalSection title="3. What we don't collect">
            <ul className="list-none space-y-1.5 pl-4">
              {[
                "Your true identity (outside of your chosen username and email)",
                "Location data",
                "Contacts, photos, or any other device data",
                "Usage analytics or behavioral tracking",
                "Any health data from your device",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-muted flex-shrink-0 mt-2.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection title="4. How we use data">
            <p>
              Anonymous crash data is used solely to improve app stability. We
              do not sell, share, or trade any data with third parties for
              marketing or advertising purposes.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-party services">
            <p>
              Our apps use Firebase (by Google) for crash reporting. Firebase
              may collect anonymous diagnostic data. You can review Google's
              privacy policy at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-150 link-underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="6. Data storage & retention">
            <p>
              Your app data lives on your device. If you uninstall the app, all
              local data is removed by Android's standard uninstall process. If
              you contact us by email, we retain that correspondence for up to
              12 months.
            </p>
          </LegalSection>

          <LegalSection title="7. Your rights">
            <p>
              You have the right to request deletion of any data we hold about
              you. Because most data lives on your device, uninstalling the app
              achieves this. For email correspondence or any questions, contact
              us and we'll respond within 5 business days.
            </p>
          </LegalSection>

          <LegalSection title="8. Children">
            <p>
              Our apps are not intended for children under 13. We do not
              knowingly collect data from children.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to this policy">
            <p>
              If we make material changes, we'll update the date at the top of
              this page. We'll notify users through the app if changes are
              significant.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              Privacy questions or requests:{" "}
              <a
                href="mailto:movexlabs@gmail.com"
                className="text-foreground hover:text-primary transition-colors duration-150 link-underline"
              >
                movexlabs@gmail.com
              </a>
            </p>
          </LegalSection>
        </motion.div>
      </div>
    </div>
  )
}
