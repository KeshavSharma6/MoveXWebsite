import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Minimum display time: 600ms, then fade out
    const timer = setTimeout(() => setVisible(false), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            {/* Brand mark */}
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg"
              style={{ boxShadow: "0 0 32px rgb(245 158 11 / 0.3)" }}
            >
              <span className="text-2xl font-bold text-[#09090b] leading-none font-mono">X</span>
            </div>
            {/* Loading indicator */}
            <motion.div
              className="h-px w-16 rounded-full overflow-hidden bg-border"
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #fb923c, #f59e0b)" }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "linear", repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
