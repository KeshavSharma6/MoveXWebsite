import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { BackToTop } from "@/components/ui/BackToTop"
import { LoadingScreen } from "@/components/ui/LoadingScreen"

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 120)
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [pathname, hash])

  return null
}

export function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/20 selection:text-white">
      <LoadingScreen />
      <ScrollProgress />
      <ScrollToHash />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
