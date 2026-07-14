import  { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const tiltPhoneRef = useRef(null)
  const perspectiveRef = useRef(null)
  const sceneRef = useRef(null)
  const processFillRef = useRef(null)

  useEffect(() => {
    // 3D Tilt on Hero Phone
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
    // 3D Parallax Scene
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
    { glow: '#61DAFB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-icon w-8 h-8" alt="React" />, title: 'React Native', desc: 'One codebase, true native performance.' },
    { glow: '#ffffff', icon: <i className="fa-solid fa-rocket tech-icon text-2xl text-white"></i>, title: 'Expo & EAS', desc: 'OTA updates & seamless CI/CD.' },
    { glow: '#F05138', icon: <><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="tech-icon w-7 h-7" alt="Swift" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className="tech-icon w-7 h-7" alt="Kotlin" /></>, title: 'Swift & Kotlin', desc: 'Native bridges when performance is critical.' },
    { glow: '#3ECF8E', icon: <><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" className="tech-icon w-7 h-7" alt="Supabase" /><span className="text-xl">⚡</span></>, title: 'Supabase & Convex', desc: 'Realtime Postgres & reactive backends.' },
    { glow: '#EC4980', icon: <i className="fa-solid fa-credit-card tech-icon text-2xl" style={{ color: '#EC4980' }}></i>, title: 'RevenueCat', desc: 'Cross-platform in-app purchases.' },
    { glow: '#1D4AFF', icon: <i className="fa-solid fa-chart-line tech-icon text-2xl" style={{ color: '#1D4AFF' }}></i>, title: 'PostHog', desc: 'Product analytics & session replay.' },
    { glow: '#ffbe0b', icon: <><i className="fa-solid fa-wand-magic-sparkles tech-icon text-xl text-[#ffbe0b]"></i><i className="fa-solid fa-film tech-icon text-xl text-[#00DDB3]"></i></>, title: 'Rive & Lottie', desc: 'Buttery 60fps vector animations.' },
    { glow: '#F24E1E', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="tech-icon w-8 h-8" alt="Figma" />, title: 'Figma & UX', desc: 'End-to-end product design & prototyping.' }
  ]

  const steps = [
    { num: '01', title: 'Discover', subtitle: 'Research & Scope', icon: 'fa-compass', color: 'var(--fire-1)', items: ['Week 1', 'Feature specification', 'Timeline estimation', 'Kickoff call & Notion setup'] },
    { num: '02', title: 'Design', subtitle: 'Prototype & UI', icon: 'fa-pen-ruler', color: 'var(--fire-2)', items: ['Week 2-3', 'Wireframes & user flows', 'High-fidelity Figma UI', 'Interactive prototypes'] },
    { num: '03', title: 'Build', subtitle: 'Develop & Test', icon: 'fa-code', color: 'var(--fire-3)', items: ['Week 4-6', 'Weekly TestFlight builds', 'Slack channel for daily chat', 'QA & performance tuning'] },
    { num: '04', title: 'Launch', subtitle: 'Ship & Scale', icon: 'fa-rocket', color: 'var(--ember)', items: ['Week 7', 'App Store submission', 'Analytics & paywall setup', 'Post-launch bug support'] }
  ]

  const tiers = [
    { name: 'MVP', price: '$4,900', desc: 'One platform · 4 weeks', icon: 'fa-check', color: 'var(--fire-1)', features: ['iOS or Android, your call', 'Up to 6 core screens', 'Auth + basic backend', 'Store submission', '14 days post-launch support'], featured: false, btn: 'Start small' },
    { name: 'Full Build', price: '$12,900', desc: 'iOS + Android · 6–8 weeks', icon: 'fa-fire', color: 'var(--fire-2)', features: ['Both platforms from one codebase', 'Custom design system & animations', 'Full backend (Supabase)', 'Paywalls & Analytics integration', 'Store assets & submission', '60 days post-launch support'], featured: true, btn: 'Hire the studio' },
    { name: 'Custom', price: "Let's talk", desc: 'Complex · Ongoing partnership', icon: 'fa-check', color: 'var(--fire-1)', features: ['Multi-phase product roadmap', 'Hardware / BLE integrations', 'Native modules when needed', 'Dedicated weekly cadence', 'SLA & priority support'], featured: false, btn: 'Book a call' }
  ]

  const faqs = [
    { q: 'How long does it take to build an app from scratch?', a: 'For a standard MVP, our timeline is typically 4 weeks. A full-scale production app with custom animations, backend integrations, and paywalls usually takes 6–8 weeks. We provide a precise, day-by-day timeline during the kickoff phase so you know exactly what to expect.' },
    { q: 'What does the pricing structure look like? Are there hidden costs?', a: 'We operate on a fixed-cost basis. Once we agree on the scope, that\'s the price. No hourly billing surprises. You are responsible for third-party costs (like Apple Developer accounts or server hosting), but we will guide you on exactly what to buy. No hidden fees from our end.' },
    { q: 'Do I own the source code and IP after the project?', a: '100%. Upon final payment, you have full, exclusive ownership of the source code, design files (Figma), and backend configurations. We set everything up in your own GitHub and cloud accounts from day one. Your IP is yours.' },
    { q: 'Can you integrate existing backends or APIs?', a: 'Absolutely. Whether you have an existing Node.js backend, a Firebase instance, or a third-party API you need to connect to, we can handle it. If you don\'t have a backend yet, we\'ll architect one using Supabase or Convex.' },
    { q: 'How do we communicate during the development process?', a: 'We keep it tight. You get a dedicated Slack channel for daily async updates and quick questions. We also have a weekly sync call to review TestFlight builds, discuss feedback, and plan the next sprint. Everything is tracked in a shared Notion workspace.' },
    { q: 'What happens after the app launches?', a: 'We don\'t ghost you after launch. All builds include a 14–60 day support window to squash any initial bugs. After that, we offer monthly maintenance retainers if you need ongoing feature updates, server monitoring, or OS compatibility upgrades.' }
  ]

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="mb-8 reveal text-sm text-[color:var(--muted)] font-light tracking-[0.4em] uppercase">Design · Build · Ship</div>
            <h1 className="hero-title reveal">We build apps<br />that <span className="grad-fire italic">move</span> people.</h1>
            <p className="text-lg text-[color:var(--muted)] max-w-xl mt-8 reveal">movexlabs is a small studio crafting bold, fast, beautiful mobile experiences. From first spark to App Store launch — we ship with intent.</p>
            <div className="flex gap-4 mt-10 reveal">
              <Link to="/#hire" className="btn-fire px-7 py-3.5 rounded-full inline-flex items-center gap-2">Hire the studio <i className="fa-solid fa-fire text-sm"></i></Link>
              <Link to="/apps" className="btn-ghost px-7 py-3.5 rounded-full inline-flex items-center gap-2 text-white">View Our Apps</Link>
            </div>
          </div>

          <div ref={perspectiveRef} className="perspective-container flex justify-center items-center gap-6 md:gap-12 mb-24 reveal">
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
        </div>
      </section>

      {/* FEATURED APP */}
      <section id="work" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Featured App</div>
            <h2 className="text-4xl md:text-6xl font-bold flex items-center gap-4 mb-6">
              <img src="/requit-logo.jpg" alt="Ember Logo" className="w-14 h-14 rounded-2xl object-cover" />
              Requit<span className="grad-fire">.</span>
            </h2>
            <p className="text-[color:var(--muted)] mb-8 max-w-md text-lg">A habit & fitness companion designed to make momentum feel effortless. Powered by smooth Rive & Lottie micro-interactions.</p>
            <div className="space-y-4 mb-10">
              <div className="glass rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-[color:var(--fire-2)] hover:translate-x-2">
                <div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,190,11,0.1)' }}><i className="fa-solid fa-bolt text-[color:var(--fire-1)]"></i></div>
                <div><h3 className="font-semibold mb-1">Adaptive routines</h3><p className="text-sm text-[color:var(--muted)]">Plans that reshape based on your real-world energy and sleep.</p></div>
              </div>
              <div className="glass rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-[color:var(--fire-2)] hover:translate-x-2">
                <div className="mt-1 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(251,86,7,0.1)' }}><i className="fa-solid fa-fire-flame-curved text-[color:var(--fire-2)]"></i></div>
                <div><h3 className="font-semibold mb-1">Streak mechanics</h3><p className="text-sm text-[color:var(--muted)]">Borrowed from game design — momentum you can feel, not just track.</p></div>
              </div>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.movexlabs.rewireapp&pcampaignid=web_share" className="inline-flex items-center gap-3 btn-fire px-6 py-3 rounded-full text-sm">View on App Store <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>
          </div>
          <div className="md:col-span-7 reveal">
            <div className="app-gallery">
              <a href="#" className="app-screen-card" style={{ left: '20%', top: '20px', transform: 'rotateY(10deg) rotateX(2deg) rotate(-5deg)', zIndex: 2 }}><img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=1200&fit=crop" alt="Screen 1" /></a>
              <a href="#" className="app-screen-card" style={{ left: '50%', top: 0, transform: 'translateX(-50%) rotateY(0deg) rotate(0deg)', zIndex: 3 }}><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=1200&fit=crop" alt="Screen 2" /></a>
              <a href="#" className="app-screen-card" style={{ right: '20%', top: '20px', transform: 'rotateY(-10deg) rotateX(2deg) rotate(5deg)', zIndex: 2 }}><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=1200&fit=crop" alt="Screen 3" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D INTERACTIVE CORE SECTION */}
      <section id="core" className="relative py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— The Core</div>
            <h2 className="text-4xl md:text-6xl font-bold">More than just <span className="grad-fire">code</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">We blend design, engineering, and strategy into one cohesive unit. Move your cursor to explore.</p>
          </div>
          <div ref={sceneRef} className="scene-container reveal">
            <div className="scene-layer core-bg-text" data-depth="0.1">CORE</div>
            <div className="scene-layer" data-depth="0.2" style={{ top: '50%', left: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(251,86,7,0.15) 0%, transparent 70%)', transform: 'translate(-50%, -50%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>
            <div className="scene-layer glass core-card" data-depth="1.2" style={{ top: '10%', left: '15%', transform: 'rotate(-8deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,190,11,0.1)' }}><i className="fa-solid fa-palette text-[color:var(--fire-1)]"></i></div>
              <h3 className="font-semibold mb-1">Obsessive UI/UX</h3><p className="text-xs text-[color:var(--muted)]">Every pixel earns its place. Smooth, intuitive, beautiful interfaces.</p>
            </div>
            <div className="scene-layer glass core-card" data-depth="1.5" style={{ top: '15%', right: '15%', transform: 'rotate(6deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(251,86,7,0.1)' }}><i className="fa-solid fa-gauge-high text-[color:var(--fire-2)]"></i></div>
              <h3 className="font-semibold mb-1">60fps Performance</h3><p className="text-xs text-[color:var(--muted)]">Buttery animations and instant load times. No jank, ever.</p>
            </div>
            <div className="scene-layer glass core-card" data-depth="1.8" style={{ bottom: '15%', left: '20%', transform: 'rotate(4deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,77,0,0.1)' }}><i className="fa-solid fa-arrows-split-up-and-left text-[color:var(--fire-3)]"></i></div>
              <h3 className="font-semibold mb-1">Scalable Architecture</h3><p className="text-xs text-[color:var(--muted)]">Built on modern stacks designed to grow from 0 to 1M users.</p>
            </div>
            <div className="scene-layer glass core-card" data-depth="1.3" style={{ bottom: '10%', right: '20%', transform: 'rotate(-5deg)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,140,66,0.1)' }}><i className="fa-solid fa-rocket text-[color:var(--ember)]"></i></div>
              <h3 className="font-semibold mb-1">Launch Strategy</h3><p className="text-xs text-[color:var(--muted)]">From store optimization to analytics, we set you up for success.</p>
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
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— What We Build With</div>
            <h2 className="text-4xl md:text-6xl font-bold">Powered by <span className="grad-fire">modern tools</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">A colorful, battle-tested stack that scales from MVP to millions of users.</p>
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
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-card glass rounded-2xl p-6 reveal">
                <div className="tech-glow" style={{ background: tech.glow }}></div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/5 gap-1">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{tech.title}</h3>
                <p className="text-xs text-[color:var(--muted)]">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Our Process</div>
            <h2 className="text-4xl md:text-6xl font-bold">Simple, <span className="grad-fire">deliberate</span> steps.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">From the first spark to the final launch, we keep things lean, transparent, and collaborative.</p>
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
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Hire movexlabs</div>
            <h2 className="text-4xl md:text-6xl font-bold">Pick a way to <span className="grad-fire">build</span>.</h2>
            <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">Transparent pricing for founders and teams who want an app done right. No retainers unless you want them.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className={`price-card glass rounded-3xl p-8 reveal ${tier.featured ? 'featured' : ''}`} style={tier.featured ? { borderColor: 'var(--fire-2)' } : {}}>
                {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold text-black" style={{ background: 'linear-gradient(120deg,#ffbe0b,#fb5607)' }}>MOST PICKED</div>}
                <div className="text-sm text-[color:var(--muted)] mb-2">{tier.name}</div>
                <div className="display num-font text-4xl font-bold mb-1">{tier.price}</div>
                <div className="text-xs text-[color:var(--muted)] mb-8">{tier.desc}</div>
                <ul className="space-y-3 text-sm mb-8 text-[color:var(--muted)]">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3"><i className={`fa-solid ${tier.icon} mt-1`} style={{ color: tier.color }}></i> {f}</li>
                  ))}
                </ul>
                <a href="mailto:hello@movexlabs.com" className={`${tier.featured ? 'btn-fire' : 'btn-ghost'} w-full py-3 rounded-full text-center block text-white text-sm`}>
                  {tier.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— FAQ</div>
            <h2 className="text-4xl md:text-6xl font-bold">Questions, <span className="grad-fire">answered</span>.</h2>
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
          <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Contact</div>
          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">Got an app idea?<br /><span className="grad-fire">Let's light it up.</span></h2>
          <p className="text-[color:var(--muted)] mb-10 max-w-xl mx-auto">Drop us a line. We reply within 24 hours — usually faster.</p>
          <a href="mailto:hello@movexlabs.com" className="inline-flex items-center gap-3 btn-fire px-8 py-4 rounded-full text-base"><i className="fa-solid fa-envelope"></i> hello@movexlabs.com</a>
        </div>
      </section>
    </div>
  )
}