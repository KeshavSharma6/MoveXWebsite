import  { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const tiltPhoneRef = useRef(null)
  const perspectiveRef = useRef(null)
  const sceneRef = useRef(null)
  const processFillRef = useRef(null)

  useEffect(() => {
    // 3D Tilt on Hero Phone (Desktop only for 60fps mobile speed)
    if (window.innerWidth < 768) return
    const tiltPhone = tiltPhoneRef.current
    const perspectiveContainer = perspectiveRef.current
    if (perspectiveContainer && tiltPhone) {
      const handleMove = (e) => {
        const rect = perspectiveContainer.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        tiltPhone.style.transform = `translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
      const handleLeave = () => { tiltPhone.style.transform = '' }
      perspectiveContainer.addEventListener('mousemove', handleMove)
      perspectiveContainer.addEventListener('mouseleave', handleLeave)
      return () => {
        perspectiveContainer.removeEventListener('mousemove', handleMove)
        perspectiveContainer.removeEventListener('mouseleave', handleLeave)
      }
    }
  }, [])

  useEffect(() => {
    // 3D Parallax Scene (Desktop only for 60fps mobile speed)
    if (window.innerWidth < 768) return
    const scene = sceneRef.current
    if (!scene) return
    const layers = scene.querySelectorAll('.scene-layer')
    layers.forEach(layer => { layer.dataset.baseTransform = layer.style.transform || '' })

    const handleMove = (e) => {
      const rect = scene.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const percentX = (x - centerX) / centerX
      const percentY = (y - centerY) / centerY
      layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth) || 1
        const translateX = percentX * depth * 15
        const translateY = percentY * depth * 15
        layer.style.transform = `${layer.dataset.baseTransform} translate3d(${translateX}px, ${translateY}px, 0)`
      })
    }
    const handleLeave = () => { layers.forEach(layer => { layer.style.transform = layer.dataset.baseTransform }) }

    scene.addEventListener('mousemove', handleMove)
    scene.addEventListener('mouseleave', handleLeave)
    return () => {
      scene.removeEventListener('mousemove', handleMove)
      scene.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    // Process Line Animation
    const processFill = processFillRef.current
    const processSection = processFill?.closest('section')
    if (!processSection) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && processFill) {
          processFill.style.width = '100%'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    observer.observe(processSection)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => el.classList.remove('in'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    const timer = setTimeout(() => {
      reveals.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const techStack = [
    { glow: '#61DAFB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-icon w-8 h-8" alt="React" />, title: 'React Native', desc: 'Cross-platform codebase delivering native iOS and Android performance.' },
    { glow: '#ffffff', icon: <i className="fa-solid fa-rocket tech-icon text-2xl text-white"></i>, title: 'Expo & EAS', desc: 'Over-the-air updates and automated App Store submission pipelines.' },
    { glow: '#F05138', icon: <><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="tech-icon w-7 h-7" alt="Swift" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className="tech-icon w-7 h-7" alt="Kotlin" /></>, title: 'Swift & Kotlin', desc: 'Custom native bridges for hardware-level device integration.' },
    { glow: '#3ECF8E', icon: <><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" className="tech-icon w-7 h-7" alt="Supabase" /><span className="text-xl">⚡</span></>, title: 'Supabase & Convex', desc: 'Secure user auth, Postgres databases, and real-time backend sync.' },
    { glow: '#EC4980', icon: <i className="fa-solid fa-credit-card tech-icon text-2xl" style={{ color: '#EC4980' }}></i>, title: 'RevenueCat', desc: 'Cross-platform in-app subscriptions, paywalls, and revenue analytics.' },
    { glow: '#1D4AFF', icon: <i className="fa-solid fa-chart-line tech-icon text-2xl" style={{ color: '#1D4AFF' }}></i>, title: 'PostHog', desc: 'Product analytics, conversion tracking, and session replay.' },
    { glow: '#ffbe0b', icon: <><i className="fa-solid fa-wand-magic-sparkles tech-icon text-xl text-[#ffbe0b]"></i><i className="fa-solid fa-film tech-icon text-xl text-[#00DDB3]"></i></>, title: 'Rive & Lottie', desc: 'Interactive 60fps vector animations designed for mobile interfaces.' },
    { glow: '#F24E1E', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="tech-icon w-8 h-8" alt="Figma" />, title: 'Figma & UX', desc: 'Interactive mobile UI prototypes and production design systems.' }
  ]

  const steps = [
    { num: '01', title: 'Scope', subtitle: 'Product Roadmap & Estimate', icon: 'fa-compass', color: 'var(--fire-1)', items: ['Week 1', 'Feature specifications', 'Fixed price & timeline breakdown', 'Slack channel & Notion setup'] },
    { num: '02', title: 'Design', subtitle: 'UI/UX & Clickable Prototype', icon: 'fa-pen-ruler', color: 'var(--fire-2)', items: ['Weeks 2–3', 'User flows & screen architecture', 'High-fidelity Figma designs', 'Clickable mobile prototype'] },
    { num: '03', title: 'Build', subtitle: 'Development & Weekly Builds', icon: 'fa-code', color: 'var(--fire-3)', items: ['Weeks 4–6', 'Weekly TestFlight & Android builds', 'Daily async updates in Slack', 'Backend integration & testing'] },
    { num: '04', title: 'Launch', subtitle: 'Store Submission & Hand-off', icon: 'fa-rocket', color: 'var(--ember)', items: ['Week 7+', 'App Store & Google Play publishing', 'Paywall & analytics verification', 'Source code handoff + post-launch support'] }
  ]

  const tiers = [
    { name: 'Vibe-Code Finish', price: '$3,900', desc: 'Polish & launch your AI prototype · 2–3 weeks', icon: 'fa-wand-magic-sparkles', color: 'var(--fire-1)', features: ['Codebase audit & architectural cleanup', 'Fix broken state & memory leaks', 'Production database & auth integration', 'Mobile UI polish & 60fps tuning', 'App Store & Google Play submission', '14 days of post-launch support'], featured: false, btn: 'Finish My AI Prototype' },
    { name: 'MVP Package', price: '$6,500', desc: 'Single platform · 4 week delivery', icon: 'fa-check', color: 'var(--fire-1)', features: ['iOS or Android release', 'Up to 6 custom designed screens', 'User authentication & cloud database', 'App Store or Google Play submission', '14 days of post-launch bug support'], featured: false, btn: 'Start MVP Build' },
    { name: 'Full Production Build', price: '$15,900', desc: 'iOS & Android · 6–8 week delivery', icon: 'fa-fire', color: 'var(--fire-2)', features: ['Cross-platform release from one codebase', 'Custom mobile design system & animations', 'Complete cloud backend (Supabase / Convex)', 'In-app subscriptions & paywalls', 'Product analytics & crash tracking', '60 days of post-launch support'], featured: true, btn: 'Start Full Build' },
    { name: 'Custom & Retainer', price: 'Custom Quote', desc: 'Complex apps · Ongoing engineering', icon: 'fa-check', color: 'var(--fire-1)', features: ['Multi-phase product roadmap', 'Bluetooth / hardware native modules', 'Dedicated weekly development sprints', 'Direct GitHub repo commits', 'Priority support & SLA guarantee'], featured: false, btn: 'Schedule Strategy Call' }
  ]

  const faqs = [
    { q: 'I built a prototype using AI tools like Cursor, Bolt, or v0. Can you finish it?', a: 'Yes. AI tools are great for fast prototypes, but they often leave behind brittle state logic, edge-case bugs, and mockup backend data. We audit your vibe-coded project, refactor the code, connect real cloud databases, polish the mobile UI for 60fps speed, and manage the full App Store submission.' },
    { q: 'How long does it take to build an app from scratch?', a: 'Most MVP projects launch in 4 weeks. Full-featured applications with custom UI animations, backend integrations, and paywalls take 6 to 8 weeks. We provide a clear weekly milestone schedule before starting so you know exactly when each build will be ready for testing.' },
    { q: 'Is the pricing fixed or will there be surprise costs?', a: 'Our quotes are strictly fixed-price. You approve the product scope before work begins, and the agreed price is what you pay. Standard third-party services (such as an Apple Developer account or server hosting) are billed directly to you, and we help you set those up.' },
    { q: 'Who owns the app source code and intellectual property?', a: 'You own 100% of the code, Figma designs, and backend infrastructure. We build inside your GitHub repository and cloud accounts from day one, and complete ownership transfers automatically upon project completion.' },
    { q: 'Can you work with our existing backend or database API?', a: 'Yes. We regularly connect mobile frontends to existing Node.js, Python, or Firebase backends. If you do not have a backend yet, we build a scalable modern API using Supabase or Convex.' },
    { q: 'How do we track progress during development?', a: 'We share weekly TestFlight and Android builds so you can test real code on your own phone. We use a private Slack channel for daily async updates and quick questions, plus a shared Notion project board to track every feature.' },
    { q: 'What happens after the app is published to the App Store?', a: 'Every build includes a dedicated support period (14 to 60 days) to resolve any post-launch issues. After that, we offer monthly maintenance packages for feature updates, iOS/Android version compatibility, and ongoing improvements.' }
  ]

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-24">
            <div className="mb-8 reveal text-sm text-[color:var(--muted)] font-light tracking-[0.4em] uppercase">Mobile App Development Studio</div>
            <h1 className="hero-title reveal">We build mobile apps<br />that launch on <span className="grad-fire italic">schedule</span>.</h1>
            <p className="text-lg text-[color:var(--muted)] max-w-xl mt-8 reveal">movexlabs builds high-performance iOS and Android apps for startups and founders. Fixed pricing, weekly TestFlight builds, and full source code hand-off.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 reveal w-full sm:w-auto justify-center items-center">
              <Link to="/#hire" className="btn-fire w-full sm:w-auto px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2">Get a Fixed Quote <i className="fa-solid fa-fire text-sm"></i></Link>
              <Link to="/apps" className="btn-ghost w-full sm:w-auto px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 text-white">View Our Work</Link>
            </div>
          </div>

          <div ref={perspectiveRef} className="perspective-container flex justify-center items-center gap-6 md:gap-12 mb-10 md:mb-16 reveal">
            <div className="phone hidden md:block" style={{ animation: 'float1 6s ease-in-out infinite' }}>
              <div className="phone-screen"><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=800&fit=crop" alt="App UI Left" /></div>
            </div>
            <div ref={tiltPhoneRef} className="phone" style={{ width: '280px', height: '580px', animation: 'float2 7s ease-in-out infinite' }}>
              <div className="phone-screen"><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" alt="App UI Center" /></div>
            </div>
            <div className="phone hidden md:block" style={{ animation: 'float3 6.5s ease-in-out infinite' }}>
              <div className="phone-screen"><img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop" alt="App UI Right" /></div>
            </div>
          </div>

          {/* TRUST BADGES BAR */}
          <div className="glass rounded-3xl p-6 reveal grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-[color:var(--line)]">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-shield-halved text-2xl text-[color:var(--fire-1)] mb-2"></i>
              <span className="text-sm font-semibold text-white">Store Approval Guarantee</span>
              <span className="text-xs text-[color:var(--muted)]">We fix rejections at zero cost</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-file-contract text-2xl text-[color:var(--fire-2)] mb-2"></i>
              <span className="text-sm font-semibold text-white">Strict Fixed-Price Scope</span>
              <span className="text-xs text-[color:var(--muted)]">Zero hourly billing overruns</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-code-commit text-2xl text-[color:var(--fire-3)] mb-2"></i>
              <span className="text-sm font-semibold text-white">100% Code Ownership</span>
              <span className="text-xs text-[color:var(--muted)]">Direct to your GitHub repo</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-mobile-screen-button text-2xl text-[color:var(--ember)] mb-2"></i>
              <span className="text-sm font-semibold text-white">Weekly TestFlight Builds</span>
              <span className="text-xs text-[color:var(--muted)]">Test live builds every Friday</span>
            </div>
          </div>
        </div>
      </section>


      {/* VIBE-CODED PROJECT COMPLETION SECTION */}
      <section id="vibe-coding" className="relative py-24 px-6 border-y border-[color:var(--line)] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— AI Prototype Finishing</div>
            <h2 className="text-4xl md:text-6xl font-bold">Stuck at 80% on a <span className="grad-fire">vibe-coded app</span>?</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-2xl mx-auto">AI tools like Cursor, Bolt, and v0 are great for fast prototypes. We take your AI-generated codebase, clean up the architecture, connect production backends, and turn it into a launchable App Store release.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 reveal">
            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[color:var(--fire-1)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-amber-500/10">
                <i className="fa-solid fa-code-merge text-[color:var(--fire-1)] text-lg"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Codebase Audit & Refactor</h3>
              <p className="text-xs text-[color:var(--muted)] leading-relaxed">We untangle messy AI-generated state logic, fix memory leaks, and restructure your project into clean, maintainable mobile architecture.</p>
            </div>

            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[color:var(--fire-2)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-orange-500/10">
                <i className="fa-solid fa-database text-[color:var(--fire-2)] text-lg"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Production Backend & Auth</h3>
              <p className="text-xs text-[color:var(--muted)] leading-relaxed">We replace hardcoded mock data with production Supabase or Convex backends, secure OAuth authentication, and encrypted API routes.</p>
            </div>

            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[color:var(--fire-3)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-rose-500/10">
                <i className="fa-solid fa-wand-magic-sparkles text-[color:var(--fire-3)] text-lg"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">3. 60fps Mobile Polish</h3>
              <p className="text-xs text-[color:var(--muted)] leading-relaxed">We optimize touch targets, resolve webview responsiveness glitches, and implement buttery 60fps micro-animations that feel native.</p>
            </div>

            <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[color:var(--ember)]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-amber-400/10">
                <i className="fa-solid fa-circle-check text-[color:var(--ember)] text-lg"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">4. App Store & Play Launch</h3>
              <p className="text-xs text-[color:var(--muted)] leading-relaxed">We format store graphics, configure privacy labels and entitlements, and handle the complete submission process until your app is live.</p>
            </div>
          </div>

          <div className="mt-12 text-center reveal">
            <Link to="/#hire" className="btn-fire px-8 py-3.5 rounded-full inline-flex items-center gap-3 text-sm">
              Finish My Vibe-Coded App <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED APP */}
      <section id="work" className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Featured Case Study</div>
            <h2 className="text-4xl md:text-6xl font-bold flex items-center gap-4 mb-6">
              <img src="/requit-logo.jpg" alt="Requit Logo" className="w-14 h-14 rounded-2xl object-cover" />
              Requit<span className="grad-fire">.</span>
            </h2>
            <p className="text-[color:var(--muted)] mb-8 max-w-md text-lg">A mobile habit and fitness tracker designed for daily retention. Built with cross-platform React Native and 60fps vector micro-animations.</p>
            <div className="space-y-4 mb-10">
              <div className="glass rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-[color:var(--fire-2)] hover:translate-x-2">
                <div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,190,11,0.1)' }}><i className="fa-solid fa-bolt text-[color:var(--fire-1)]"></i></div>
                <div><h3 className="font-semibold mb-1">Adaptive daily routines</h3><p className="text-sm text-[color:var(--muted)]">Adjusts workout targets based on user sleep metrics and logged recovery levels.</p></div>
              </div>
              <div className="glass rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-[color:var(--fire-2)] hover:translate-x-2">
                <div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(251,86,7,0.1)' }}><i className="fa-solid fa-fire-flame-curved text-[color:var(--fire-2)]"></i></div>
                <div><h3 className="font-semibold mb-1">Streak retention mechanics</h3><p className="text-sm text-[color:var(--muted)]">Custom micro-interactions that keep users returning without notification spam.</p></div>
              </div>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.movexlabs.rewireapp&pcampaignid=web_share" className="inline-flex items-center gap-3 btn-fire px-6 py-3 rounded-full text-sm">View on Play Store <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>
          </div>
          <div className="md:col-span-7 reveal">
            <div className="app-gallery">
              <a href="#" className="app-screen-card card-1"><img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=1200&fit=crop" alt="Screen 1" /></a>
              <a href="#" className="app-screen-card card-2"><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=1200&fit=crop" alt="Screen 2" /></a>
              <a href="#" className="app-screen-card card-3"><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=1200&fit=crop" alt="Screen 3" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D INTERACTIVE CORE SECTION */}
      <section id="core" className="relative py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— What Sets Us Apart</div>
            <h2 className="text-4xl md:text-6xl font-bold">Engineered for speed,<br /><span className="grad-fire">built for production</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">We combine UI design, mobile architecture, and backend development into a single streamlined team.</p>
          </div>
          <div ref={sceneRef} className="scene-container reveal">
            <div className="scene-layer core-bg-text" data-depth="0.1">CORE</div>
            <div className="scene-layer" data-depth="0.2" style={{ top: '50%', left: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(251,86,7,0.15) 0%, transparent 70%)', transform: 'translate(-50%, -50%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>
            <div className="scene-layer glass core-card" data-depth="1.2" style={{ top: '10%', left: '15%', transform: 'rotate(-8deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,190,11,0.1)' }}><i className="fa-solid fa-palette text-[color:var(--fire-1)]"></i></div>
              <h3 className="font-semibold mb-1">Mobile UI/UX Design</h3><p className="text-xs text-[color:var(--muted)]">Interfaces designed specifically for mobile ergonomics and swift navigation.</p>
            </div>
            <div className="scene-layer glass core-card" data-depth="1.5" style={{ top: '15%', right: '15%', transform: 'rotate(6deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(251,86,7,0.1)' }}><i className="fa-solid fa-gauge-high text-[color:var(--fire-2)]"></i></div>
              <h3 className="font-semibold mb-1">Native 60fps Speed</h3><p className="text-xs text-[color:var(--muted)]">Fluid animations and quick load times. No webview lag or unhandled crashes.</p>
            </div>
            <div className="scene-layer glass core-card" data-depth="1.8" style={{ bottom: '15%', left: '20%', transform: 'rotate(4deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,77,0,0.1)' }}><i className="fa-solid fa-arrows-split-up-and-left text-[color:var(--fire-3)]"></i></div>
              <h3 className="font-semibold mb-1">Scalable Backend</h3><p className="text-xs text-[color:var(--muted)]">Architected on cloud backends designed to support growth from MVP to 100k+ users.</p>
            </div>
            <div className="scene-layer glass core-card" data-depth="1.3" style={{ bottom: '10%', right: '20%', transform: 'rotate(-5deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,140,66,0.1)' }}><i className="fa-solid fa-rocket text-[color:var(--ember)]"></i></div>
              <h3 className="font-semibold mb-1">App Store Approval</h3><p className="text-xs text-[color:var(--muted)]">We manage store assets, privacy guidelines, and approvals until your app is live.</p>
            </div>
            <div className="scene-layer" data-depth="2.5" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <i className="fa-solid fa-fire-flame-curved text-7xl grad-fire drop-shadow-[0_0_20px_rgba(251,86,7,0.5)]"></i>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Modern Stack</div>
            <h2 className="text-4xl md:text-6xl font-bold">Battle-tested tools for <span className="grad-fire">reliable apps</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">We select proven technologies that minimize bugs and speed up development timelines.</p>
          </div>
          <div className="overflow-hidden py-8 mb-16 border-y border-[color:var(--line)]">
            <div className="marquee-track gap-16 items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-10 opacity-60 hover:opacity-100 transition" alt="React Native" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="h-10 opacity-60 hover:opacity-100 transition" alt="Swift" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className="h-10 opacity-60 hover:opacity-100 transition" alt="Kotlin" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-10 opacity-60 hover:opacity-100 transition" alt="Figma" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" className="h-10 opacity-60 hover:opacity-100 transition" alt="Supabase" />
              <div className="h-10 flex items-center text-2xl font-bold text-white opacity-60 hover:opacity-100 transition">Expo</div>
              <div className="h-10 flex items-center text-2xl font-bold text-[#EC4980] opacity-60 hover:opacity-100 transition">RevenueCat</div>
              <div className="h-10 flex items-center text-2xl font-bold text-[#1D4AFF] opacity-60 hover:opacity-100 transition">PostHog</div>
              <div className="h-10 flex items-center text-2xl font-bold text-white opacity-60 hover:opacity-100 transition">Rive</div>
              <div className="h-10 flex items-center text-2xl font-bold text-[#00DDB3] opacity-60 hover:opacity-100 transition">Lottie</div>
              <div className="h-10 flex items-center text-2xl font-bold text-white opacity-60 hover:opacity-100 transition">Convex</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-card glass rounded-2xl p-4 md:p-6 reveal flex md:block items-center gap-3">
                <div className="tech-glow" style={{ background: tech.glow }}></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center md:mb-5 bg-white/5 gap-1 flex-shrink-0">{tech.icon}</div>
                <h3 className="text-sm md:text-lg font-semibold md:mb-1">{tech.title}</h3>
                <p className="tech-desc text-xs text-[color:var(--muted)]">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— How We Work</div>
            <h2 className="text-4xl md:text-6xl font-bold">Four predictable steps to <span className="grad-fire">App Store release</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">No bloated discovery phases or hidden surprises. You get testable builds on your phone every Friday.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            <div className="hidden md:block process-line-container"><div ref={processFillRef} className="process-fill"></div></div>
            {steps.map((step, i) => (
              <div key={i} className="process-step flex flex-col items-center text-center md:items-start md:text-left reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="process-icon-wrap mb-6"><i className={`fa-solid ${step.icon} text-xl`} style={{ color: step.color }}></i></div>
                <div className="num-font text-xs text-[color:var(--muted)] mb-2">{step.num} / {step.title}</div>
                <h3 className="text-xl font-semibold mb-3">{step.subtitle}</h3>
                <div className="text-left w-full">
                  {step.items.map((item, idx) => <div key={idx} className="process-sub-item text-xs text-[color:var(--muted)]">{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRE / PRICING */}
      <section id="hire" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Fixed-Price Plans</div>
            <h2 className="text-4xl md:text-6xl font-bold">Transparent pricing for <span className="grad-fire">your project</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">Clear deliverables, set launch dates, and zero hourly billing surprises.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className={`price-card glass rounded-3xl p-6 reveal ${tier.featured ? 'featured' : ''}`} style={tier.featured ? { borderColor: 'var(--fire-2)' } : {}}>
                {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold text-black uppercase tracking-wider" style={{ background: 'linear-gradient(120deg,#ffbe0b,#fb5607)' }}>RECOMMENDED</div>}
                <div className="text-sm font-semibold text-white mb-1">{tier.name}</div>
                <div className="display num-font text-3xl font-bold mb-1">{tier.price}</div>
                <div className="text-xs text-[color:var(--muted)] mb-6 min-h-[32px]">{tier.desc}</div>
                <ul className="space-y-2.5 text-xs mb-8 text-[color:var(--muted)]">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start"><i className={`fa-solid ${tier.icon} mt-0.5 flex-shrink-0`} style={{ color: tier.color }}></i> <span>{f}</span></li>
                  ))}
                </ul>
                <a href="mailto:mail@movexlabs.com" className={`${tier.featured ? 'btn-fire' : 'btn-ghost'} w-full py-3 rounded-full text-center block text-white text-xs font-semibold`}>
                  {tier.btn}
                </a>
              </div>
            ))}
          </div>

          {/* RISK REVERSAL & GUARANTEE BOX */}
          <div className="mt-12 glass rounded-3xl p-8 reveal border border-[color:var(--fire-2)]/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-shield-heart text-3xl text-[color:var(--fire-2)]"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Our 100% Launch Guarantee</h3>
              <p className="text-xs text-[color:var(--muted)] leading-relaxed">If Apple or Google rejects your app build during the initial review phase, our engineering team fixes compliance issues and resubmits at zero additional cost. All source code and IP remain 100% yours in your own GitHub repository from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Frequently Asked Questions</div>
            <h2 className="text-4xl md:text-6xl font-bold">Clear answers before <span className="grad-fire">we start</span>.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item glass rounded-2xl p-6 md:p-8 reveal">
                <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer">
                  <span className="pr-4">{faq.q}</span>
                  <i className="fa-solid fa-plus faq-icon text-[color:var(--fire-1)] flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-[color:var(--muted)] text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Get Started</div>
          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">Ready to turn your app idea<br /><span className="grad-fire">into a live product?</span></h2>
          <p className="text-[color:var(--muted)] mb-10 max-w-xl mx-auto">Send us a brief overview of your project. We reply within 24 hours with feedback and initial technical recommendations.</p>
          <a href="mailto:mail@movexlabs.com" className="inline-flex items-center gap-3 btn-fire px-8 py-4 rounded-full text-base"><i className="fa-solid fa-envelope"></i> Email mail@movexlabs.com</a>
        </div>
      </section>
    </div>
  )
}