import { Link } from "react-router-dom"

const footerLinks = {
  Navigation: [
    { label: "Home",      href: "/" },
    { label: "Apps",      href: "/apps" },
    { label: "About",     href: "/#about" },
    { label: "Changelog", href: "/#updates" },
  ],
  Legal: [
    { label: "Privacy Policy",  href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Delete Account",  href: "/delete-account" },
  ],
  Contact: [
    { label: "movexlabs@gmail.com", href: "mailto:movexlabs@gmail.com" },
    { label: "Contact Form",        href: "/#contact" },
    { label: "Support",             href: "/#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#09090b] font-bold text-sm overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgb(245,158,11,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #fb923c 0%, #f59e0b 60%, #fbbf24 100%)",
                  boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.25)",
                }}
              >
                <span className="font-mono font-bold leading-none">X</span>
              </div>
              <span className="font-semibold text-sm tracking-[-0.01em]">
                Move<span className="text-primary">X</span>Labs
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              An independent studio building thoughtful software for millions.
            </p>
            <p className="text-xs text-foreground-subtle font-mono tracking-wide mt-auto">
              Made with care · India
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="md:col-span-2 col-span-1 flex flex-col gap-3">
              <h4 className="text-xs font-mono text-foreground-subtle tracking-widest uppercase">{group}</h4>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 hover-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground-subtle">
          <p>© {new Date().getFullYear()} MoveXLabs. All rights reserved.</p>
          <p className="font-mono">v1.0</p>
        </div>
      </div>
    </footer>
  )
}
