import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home",    href: "/" },
  { name: "Apps",    href: "/apps" },
  { name: "About",   href: "/#about" },
  { name: "Support", href: "/#contact" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/"
    return location.pathname.startsWith(href.replace("/#", "/"))
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgb(255,255,255,0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div
            className="relative w-8 h-8 rounded-[9px] flex items-center justify-center text-[#09090b] font-bold text-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgb(245,158,11,0.4)]"
            style={{
              background: "linear-gradient(135deg, #fb923c 0%, #f59e0b 60%, #fbbf24 100%)",
              boxShadow: "inset 0 1px 0 rgb(255 255 255 / 0.25)",
            }}
          >
            <span className="relative z-10 leading-none font-mono font-bold">X</span>
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out skew-x-12" />
          </div>
          <span className="font-semibold text-[15px] tracking-[-0.01em] text-foreground">
            Move<span className="text-primary">X</span>Labs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                "hover:text-foreground",
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-md bg-border/40"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 40 }}
                />
              )}
            </Link>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          <Link
            to="/#contact"
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 border border-border/60 hover:border-primary/40 hover:text-primary bg-surface-raised/50 text-foreground"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors duration-150"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150",
                      isActive(link.href)
                        ? "text-foreground bg-border/40"
                        : "text-muted-foreground hover:text-foreground hover:bg-border/20"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 mt-1 border-t border-border/40"
              >
                <Link
                  to="/#contact"
                  className="block w-full text-center px-4 py-2.5 rounded-md text-sm font-medium text-foreground border border-border/60 hover:border-primary/40 hover:text-primary transition-colors duration-150"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
