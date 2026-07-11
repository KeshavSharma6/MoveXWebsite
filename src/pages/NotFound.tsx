import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-[480px]"
      >
        <p
          className="font-bold text-heading mb-6 select-none"
          style={{
            fontSize: "clamp(5rem, 15vw, 10rem)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            opacity: 0.06,
          }}
          aria-hidden="true"
        >
          404
        </p>

        <p className="label inline-flex items-center gap-2.5 mb-5">
          <span className="w-4 h-px bg-brand/60" aria-hidden="true" />
          Page not found
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-heading mb-4">
          Nothing here.
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10 text-[0.9375rem]">
          The page you're looking for doesn't exist or has been moved. If you
          think something is broken, let us know.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-border/60 hover:border-primary/40 hover:text-primary text-muted-foreground transition-all duration-200"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <a
            href="mailto:movexlabs@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 link-underline"
          >
            Report an issue
          </a>
        </div>
      </motion.div>
    </div>
  )
}
