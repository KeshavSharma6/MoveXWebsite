import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { Home } from "@/pages/Home"
import { Apps } from "@/pages/Apps"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { Terms } from "@/pages/Terms"
import { DeleteAccount } from "@/pages/DeleteAccount"
import { NotFound } from "@/pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apps" element={<Apps />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
