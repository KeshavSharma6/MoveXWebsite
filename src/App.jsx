
import { Routes, Route } from 'react-router-dom'
import GlobalEffects from './components/GlobalEffects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Blog from './pages/Blog'
import About from './pages/About'

export default function App() {
  return (
    <>
      <GlobalEffects />
      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}