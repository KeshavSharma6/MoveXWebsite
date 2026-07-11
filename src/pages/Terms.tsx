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

export function Terms() {
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
            Terms of Service
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
          <div className="divider-h mb-10" aria-hidden="true" />

          <LegalSection title="1. Acceptance">
            <p>
              By downloading or using any app published by MoveXLabs, you agree
              to these terms. If you don't agree, please don't use our apps.
            </p>
          </LegalSection>

          <LegalSection title="2. Use of our apps">
            <p>Our apps are provided for personal, non-commercial use. You agree not to:</p>
            <ul className="list-none space-y-1.5 pl-4">
              {[
                "Reverse-engineer, decompile, or modify any app",
                "Use an app for any illegal or harmful purpose",
                "Attempt to gain unauthorized access to our systems",
                "Scrape or harvest data from our apps",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-muted flex-shrink-0 mt-2.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection title="3. Intellectual property">
            <p>
              All content, design, code, and trademarks in our apps belong to
              MoveXLabs. You may not use them without our written permission.
            </p>
          </LegalSection>

          <LegalSection title="4. No warranty">
            <p>
              Our apps are provided "as is", without warranty of any kind. We do
              our best to keep them working well, but we can't guarantee
              uninterrupted or error-free operation.
            </p>
          </LegalSection>

          <LegalSection title="5. Limitation of liability">
            <p>
              MoveXLabs is not liable for any indirect, incidental, or
              consequential damages resulting from your use of our apps. Our
              total liability to you is limited to the amount you paid for the
              app (which in most cases is zero).
            </p>
          </LegalSection>

          <LegalSection title="6. Third-party services">
            <p>
              Our apps may integrate with third-party services (such as Firebase
              or Google Play). Your use of those services is governed by their
              own terms.
            </p>
          </LegalSection>

          <LegalSection title="7. Termination">
            <p>
              We may suspend or terminate access to our apps if you violate
              these terms or use them in a way that could harm others.
            </p>
          </LegalSection>

          <LegalSection title="8. Governing law">
            <p>
              These terms are governed by the laws of India. Any disputes will
              be resolved in the courts of India.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes">
            <p>
              We may update these terms from time to time. We'll update the date
              at the top. Continuing to use our apps after changes means you
              accept the updated terms.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              Questions about these terms?{" "}
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
