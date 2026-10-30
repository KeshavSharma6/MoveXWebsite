import { Link } from 'react-router-dom'
import TestimonialsSection from '../components/TestimonialsSection'
import TeamSection from '../components/TeamSection'

export default function Home() {
  const steps = [
    {
      num: '01',
      title: 'Scope',
      subtitle: 'Roadmap & Fixed Quote',
      timing: 'Week 1',
      items: [
        'Feature specifications & deliverables',
        'Fixed price and timeline breakdown',
        'Private Slack channel & Notion setup'
      ]
    },
    {
      num: '02',
      title: 'Design',
      subtitle: 'UI/UX & Clickable Prototype',
      timing: 'Weeks 2–3',
      items: [
        'User flows & mobile ergonomics',
        'High-fidelity Figma component system',
        'Interactive prototype tested on device'
      ]
    },
    {
      num: '03',
      title: 'Build',
      subtitle: 'Weekly TestFlight Sprints',
      timing: 'Weeks 4–6',
      items: [
        'Testable build delivered every Friday',
        'Daily async progress notes in Slack',
        'Production backend, auth & analytics'
      ]
    },
    {
      num: '04',
      title: 'Launch',
      subtitle: 'App Store & Code Handoff',
      timing: 'Week 7+',
      items: [
        'App Store & Google Play publishing',
        'Paywall & in-app purchase verification',
        '100% source code handoff to your GitHub'
      ]
    }
  ]

  const tiers = [
    {
      name: 'Vibe-Code Finish',
      price: '$3,900',
      desc: 'Polish & launch your AI prototype · 2–3 weeks',
      icon: 'fa-wand-magic-sparkles',
      color: 'var(--fire-1)',
      features: [
        'Codebase audit & architectural cleanup',
        'Fix broken state & memory leaks',
        'Production database & auth integration',
        'Mobile UI polish & 60fps tuning',
        'App Store & Google Play submission',
        '14 days of post-launch support'
      ],
      featured: false,
      btn: 'Finish My AI Prototype'
    },
    {
      name: 'MVP Package',
      price: '$6,500',
      desc: 'Single platform · 4 week delivery',
      icon: 'fa-check',
      color: 'var(--fire-1)',
      features: [
        'iOS or Android release',
        'Up to 6 custom designed screens',
        'User authentication & cloud database',
        'App Store or Google Play submission',
        '14 days of post-launch bug support'
      ],
      featured: false,
      btn: 'Start MVP Build'
    },
    {
      name: 'Full Production Build',
      price: '$15,900',
      desc: 'iOS & Android · 6–8 week delivery',
      icon: 'fa-fire',
      color: 'var(--fire-2)',
      features: [
        'Cross-platform release from one codebase',
        'Custom mobile design system & animations',
        'Complete cloud backend (Supabase / Convex)',
        'In-app subscriptions & paywalls',
        'Product analytics & crash tracking',
        '60 days of post-launch support'
      ],
      featured: true,
      btn: 'Start Full Build'
    },
    {
      name: 'Custom & Retainer',
      price: 'Custom Quote',
      desc: 'Complex apps · Ongoing engineering',
      icon: 'fa-check',
      color: 'var(--fire-1)',
      features: [
        'Multi-phase product roadmap',
        'Bluetooth / hardware native modules',
        'Dedicated weekly development sprints',
        'Direct GitHub repo commits',
        'Priority support & SLA guarantee'
      ],
      featured: false,
      btn: 'Schedule Strategy Call'
    }
  ]

  const faqs = [
    {
      q: 'I built a prototype using AI tools like Cursor, Bolt, or v0. Can you finish it?',
      a: 'Yes. AI tools are great for fast prototypes, but they often leave behind brittle state logic, edge-case bugs, and mockup backend data. We audit your vibe-coded project, refactor the code, connect real cloud databases, polish the mobile UI for 60fps speed, and manage the full App Store submission.'
    },
    {
      q: 'How long does it take to build an app from scratch?',
      a: 'Most MVP projects launch in 4 weeks. Full-featured applications with custom UI animations, backend integrations, and paywalls take 6 to 8 weeks. We provide a clear weekly milestone schedule before starting so you know exactly when each build will be ready for testing.'
    },
    {
      q: 'Is the pricing fixed or will there be surprise costs?',
      a: 'Our quotes are strictly fixed-price. You approve the product scope before work begins, and the agreed price is what you pay. Standard third-party services (such as an Apple Developer account or server hosting) are billed directly to you, and we help you set those up.'
    },
    {
      q: 'Who owns the app source code and intellectual property?',
      a: 'You own 100% of the code, Figma designs, and backend infrastructure. We build inside your GitHub repository and cloud accounts from day one, and complete ownership transfers automatically upon project completion.'
    },
    {
      q: 'Can you work with our existing backend or database API?',
      a: 'Yes. We regularly connect mobile frontends to existing Node.js, Python, or Firebase backends. If you do not have a backend yet, we build a scalable modern API using Supabase or Convex.'
    },
    {
      q: 'How do we track progress during development?',
      a: 'We share weekly TestFlight and Android builds so you can test real code on your own phone. We use a private Slack channel for daily async updates and quick questions, plus a shared Notion project board to track every feature.'
    },
    {
      q: 'What happens after the app is published to the App Store?',
      a: 'Every build includes a dedicated support period (14 to 60 days) to resolve any post-launch issues. After that, we offer monthly maintenance packages for feature updates, iOS/Android version compatibility, and ongoing improvements.'
    }
  ]

  const weeklyDeliverables = [
    {
      title: 'Friday TestFlight build',
      desc: 'Test the latest native build on your own iPhone and Android devices before every weekend.'
    },
    {
      title: 'Written progress note',
      desc: 'A clear bulleted summary of everything shipped, edge cases resolved, and what is queued next.'
    },
    {
      title: 'Direct chat access',
      desc: 'Private Slack or Discord channel connecting you directly with the engineers writing your code.'
    },
    {
      title: 'Weekly demo call',
      desc: 'A 30-minute walkthrough to test live features together, evaluate feedback, and align on next priorities.'
    }
  ]

  const vibeCodeSteps = [
    {
      num: '01',
      title: 'Codebase Audit & Refactor',
      desc: 'We untangle messy AI-generated state logic, eliminate memory leaks, and restructure your project into clean, maintainable React Native architecture.'
    },
    {
      num: '02',
      title: 'Production Backend & Auth',
      desc: 'We replace fragile mock data with production-ready Supabase or Convex backends, secure OAuth authentication, and validated cloud APIs.'
    },
    {
      num: '03',
      title: '60fps Mobile Polish',
      desc: 'We optimize touch targets for 48px minimums, fix keyboard and safe-area glitches, and implement smooth 60fps micro-animations that feel truly native.'
    },
    {
      num: '04',
      title: 'App Store & Google Play Launch',
      desc: 'We configure store metadata, Apple privacy manifests, and sandbox in-app purchases, then manage the submission until your app is approved and live.'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-36 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center hero-animate">
            <div className="mb-6 text-xs md:text-sm text-[color:var(--muted)] font-mono tracking-[0.3em] uppercase">
              Mobile App Development Studio
            </div>
            <h1 className="hero-title text-white">
              We build mobile apps<br />that launch on <span className="grad-fire italic">schedule</span>.
            </h1>
            <p className="text-base md:text-xl text-[color:var(--muted)] max-w-2xl mt-6 leading-relaxed">
              We build iOS and Android apps in React Native and finish vibe-coded AI prototypes in 4 to 8 weeks. Fixed pricing, weekly TestFlight builds, and full source code ownership.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center items-center">
              <a
                href="#hire"
                className="btn-fire w-full sm:w-auto px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 text-base font-semibold"
              >
                Get a Fixed Quote <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>
              <Link
                to="/apps"
                className="btn-ghost w-full sm:w-auto px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 text-white text-base font-semibold"
              >
                View Our Work
              </Link>
            </div>

            {/* Slim Trust Badges Strip (folded directly under hero CTAs) */}
            <div className="w-full max-w-4xl mt-10 py-3.5 px-4 md:px-6 rounded-2xl glass border border-[color:var(--line)] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <i className="fa-solid fa-shield-halved text-xs text-[color:var(--fire-1)]"></i> Store Approval
                </span>
                <span className="text-xs text-[color:var(--muted)] mt-0.5">We fix rejections at zero cost</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <i className="fa-solid fa-file-contract text-xs text-[color:var(--fire-2)]"></i> Fixed-Price Scope
                </span>
                <span className="text-xs text-[color:var(--muted)] mt-0.5">Zero hourly billing surprises</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <i className="fa-solid fa-code-commit text-xs text-[color:var(--fire-3)]"></i> 100% Code Ownership
                </span>
                <span className="text-xs text-[color:var(--muted)] mt-0.5">Direct to your GitHub repo</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <i className="fa-solid fa-mobile-screen-button text-xs text-[color:var(--ember)]"></i> Weekly Builds
                </span>
                <span className="text-xs text-[color:var(--muted)] mt-0.5">Test on phone every Friday</span>
              </div>
            </div>

            {/* Hero Visual Slot: Clean Empty Device-Frame Placeholder */}
            {/* TODO: add real app screenshot */}
            <div className="mt-12 md:mt-16 w-full flex justify-center">
              <div className="device-frame">
                <div className="device-island"></div>
                <div className="device-screen-slot">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[color:var(--fire-1)]">
                    <i className="fa-solid fa-mobile-screen-button text-2xl"></i>
                  </div>
                  <p className="text-white font-semibold text-base mb-1">Your app screen here</p>
                  <p className="text-xs text-[color:var(--muted)] max-w-[200px] leading-relaxed">
                    Clean 60fps native interface built for iOS & Android
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[color:var(--muted)]">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--fire-2)]"></span>
                    1170 × 2532 px slot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TESTIMONIALS / TRUSTED BY ROW (Renders ONLY if data exists in clients.json) */}
      <TestimonialsSection />

      {/* 3. VIBE-CODED PROTOTYPE FINISHING (Vertical numbered list with large numerals, no cards) */}
      <section id="vibe-coding" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto">
          {/* Varied headline: left-aligned, plain white, small label dropped */}
          <div className="max-w-3xl mb-12 md:mb-16 text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              You built it in Cursor. We make it pass App Review.
            </h2>
            <p className="text-base md:text-lg text-[color:var(--muted)] mt-4 leading-relaxed">
              AI tools get you to an 80% prototype in days. We step in to audit fragile state logic, connect scalable cloud backends, polish native ergonomics, and guide you through the App Store submission.
            </p>
          </div>

          {/* Vertical numbered list layout - NO CARDS */}
          <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {vibeCodeSteps.map((step) => (
              <div
                key={step.num}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
              >
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="num-font text-3xl md:text-5xl font-bold text-white/30 group-hover:text-[color:var(--fire-1)] transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 text-left">
            <a
              href="#hire"
              className="btn-fire px-8 py-3.5 rounded-full inline-flex items-center gap-3 text-base font-semibold"
            >
              Finish My AI Prototype <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDY (Requit layout with placeholder slot) */}
      <section id="work" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6 text-left">
            <div className="text-xs uppercase tracking-widest text-[color:var(--muted)] font-mono mb-3">
              Featured Case Study
            </div>
            {/* Plain white headline, no orange gradient */}
            <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4 mb-6">
              <img src="/requit-logo.jpg" alt="Requit Logo" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover border border-[color:var(--line)]" />
              Requit.
            </h2>
            <p className="text-[color:var(--muted)] mb-8 text-base md:text-lg leading-relaxed">
              A mobile habit and fitness tracker designed for daily retention. Built with cross-platform React Native and 60fps vector micro-animations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl glass border border-[color:var(--line)]">
                <h3 className="font-semibold text-white text-base mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-bolt text-sm text-[color:var(--fire-1)]"></i>
                  Adaptive daily routines
                </h3>
                <p className="text-sm md:text-base text-[color:var(--muted)]">
                  Adjusts workout targets based on user sleep metrics and logged recovery levels.
                </p>
              </div>
              <div className="p-4 rounded-xl glass border border-[color:var(--line)]">
                <h3 className="font-semibold text-white text-base mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-fire text-sm text-[color:var(--fire-2)]"></i>
                  Streak retention mechanics
                </h3>
                <p className="text-sm md:text-base text-[color:var(--muted)]">
                  Custom micro-interactions that keep users returning without notification spam.
                </p>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.movexlabs.rewireapp&pcampaignid=web_share"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 btn-fire px-7 py-3 rounded-full text-sm font-semibold"
            >
              View on Play Store <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>

          {/* Placeholder slot for real case study screenshots */}
          <div className="md:col-span-6 flex justify-center">
            {/* TODO: add real screenshot */}
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl glass border border-dashed border-white/20 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[color:var(--fire-2)]">
                <i className="fa-solid fa-image text-2xl"></i>
              </div>
              <p className="text-white font-semibold text-base mb-1">Requit App Screens</p>
              <p className="text-sm text-[color:var(--muted)] max-w-xs leading-relaxed">
                Add real production app screenshots and user interface previews here.
              </p>
              <div className="mt-4 text-xs font-mono text-[color:var(--muted)] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Screenshot Placeholder Slot
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TWO-COLUMN WEEKLY DELIVERY ("Engineered for speed" replacement) */}
      <section id="delivery" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column: Plain white headline & short concrete paragraph */}
          <div className="md:col-span-5 text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              A TestFlight build on your phone every Friday.
            </h2>
            <p className="text-base md:text-lg text-[color:var(--muted)] leading-relaxed mb-6">
              No radio silence, vague progress bars, or end-of-quarter surprises. We run focused weekly cycles so you can touch, test, and steer your app on real hardware as each feature gets built.
            </p>
            <div className="p-4 rounded-xl glass border border-[color:var(--line)] text-sm text-[color:var(--muted)]">
              <span className="text-white font-semibold">Your code stays yours. Zero lock-in.</span> Everything is committed directly into your private GitHub repository from day one.
            </div>
          </div>

          {/* Right Column: "What you get every week" clean list */}
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-widest text-[color:var(--muted)] font-mono mb-4">
              Weekly Deliverables
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              What you get every week
            </h3>

            <div className="space-y-4">
              {weeklyDeliverables.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl glass border border-[color:var(--line)] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--fire-2)]/10 text-[color:var(--fire-1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base md:text-lg mb-1">{item.title}</h4>
                    <p className="text-sm md:text-base text-[color:var(--muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECH STACK (Logo strip ONLY + one short line, no duplicate cards) */}
      <section id="tech" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto text-center">
          {/* Plain white headline, dropped small label */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The tools we build with.
          </h2>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-xl mx-auto mb-10">
            A modern, battle-tested toolchain optimized for 60fps performance and long-term code health.
          </p>

          {/* Marquee logo strip */}
          <div className="overflow-hidden py-6 border-y border-[color:var(--line)]">
            <div className="marquee-track gap-12 md:gap-16 items-center">
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-8 md:h-9" alt="React Native" />
                <span className="font-semibold text-white text-base">React Native</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <span className="text-xl font-bold text-white">Expo</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="h-7 md:h-8" alt="Swift" />
                <span className="font-semibold text-white text-base">Swift</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className="h-7 md:h-8" alt="Kotlin" />
                <span className="font-semibold text-white text-base">Kotlin</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" className="h-7 md:h-8" alt="Supabase" />
                <span className="font-semibold text-white text-base">Supabase</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <span className="font-bold text-[#EC4980] text-lg">RevenueCat</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <span className="font-bold text-[#1D4AFF] text-lg">PostHog</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-7 md:h-8" alt="Figma" />
                <span className="font-semibold text-white text-base">Figma</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <span className="font-semibold text-white text-base">Convex</span>
              </div>
              <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition">
                <span className="font-semibold text-[#00DDB3] text-base">Rive</span>
              </div>
            </div>
          </div>

          {/* One short line under the logo strip */}
          <p className="mt-8 text-sm md:text-base text-[color:var(--muted)] font-mono">
            React Native, Expo, Supabase, Swift, Kotlin, and modern analytics tooling.
          </p>
        </div>
      </section>

      {/* 7. TEAM / FOUNDER BLOCK (Renders ONLY if photo & bio exist in team.json) */}
      <TeamSection />

      {/* 8. OUR PROCESS (Horizontal timeline with connecting line) */}
      <section id="process" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto">
          {/* Varied headline: centered, plain white */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Four steps from kickoff to App Store release.
            </h2>
            <p className="text-base md:text-lg text-[color:var(--muted)] max-w-xl mx-auto">
              Fixed price, fixed timeline, no surprises.
            </p>
          </div>

          {/* Horizontal timeline container with connecting line */}
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-white/10 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-start md:items-center text-left md:text-center">
                  {/* Step node */}
                  <div className="w-14 h-14 rounded-full bg-[#120c08] border-2 border-[color:var(--fire-2)] text-white font-mono text-sm font-bold flex items-center justify-center mb-4 shadow-lg shadow-orange-950/40">
                    {step.num}
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[color:var(--fire-1)] font-mono mb-1">
                    {step.timing} · {step.title}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {step.subtitle}
                  </h3>

                  <ul className="space-y-2 text-sm text-[color:var(--muted)] text-left w-full pl-2 md:pl-0">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[color:var(--fire-2)] text-xs mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING SECTION (Cards layout preserved as requested) */}
      <section id="hire" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto">
          {/* Varied headline: centered, plain white */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Fixed-price plans for your project.
            </h2>
            <p className="text-base md:text-lg text-[color:var(--muted)] max-w-xl mx-auto">
              Your code stays yours. Zero lock-in. Set launch dates and no hourly surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`price-card glass rounded-3xl p-6 flex flex-col justify-between ${tier.featured ? 'featured' : ''}`}
                style={tier.featured ? { borderColor: 'var(--fire-2)' } : {}}
              >
                <div>
                  {tier.featured && (
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-black uppercase tracking-wider mb-4" style={{ background: 'linear-gradient(120deg,#ffbe0b,#fb5607)' }}>
                      RECOMMENDED
                    </div>
                  )}
                  <div className="text-base font-semibold text-white mb-1">{tier.name}</div>
                  <div className="display num-font text-3xl md:text-4xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-sm text-[color:var(--muted)] mb-6 min-h-[40px] leading-snug">{tier.desc}</div>

                  {/* Pricing bullets: text size raised to 15-16px, high contrast */}
                  <ul className="space-y-3 text-sm md:text-[15px] mb-8 text-[color:var(--muted)]">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <i className={`fa-solid ${tier.icon} mt-1 text-xs flex-shrink-0`} style={{ color: tier.color }}></i>
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="mailto:mail@movexlabs.com"
                  className={`${tier.featured ? 'btn-fire text-[#160a00]' : 'btn-ghost text-white'} w-full py-3.5 rounded-full text-center block text-sm font-semibold`}
                >
                  {tier.btn}
                </a>
              </div>
            ))}
          </div>

          {/* Risk Reversal & Guarantee Box */}
          <div className="mt-12 glass rounded-3xl p-6 md:p-8 border border-[color:var(--fire-2)]/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-[color:var(--fire-2)]">
              <i className="fa-solid fa-shield-halved text-2xl md:text-3xl"></i>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Our 100% Launch Guarantee</h3>
              <p className="text-sm md:text-base text-[color:var(--muted)] leading-relaxed">
                If Apple or Google rejects your app build during the initial review, our engineering team fixes compliance issues and resubmits at zero additional cost. All source code and IP remain 100% yours in your own GitHub repository from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section id="faq" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)]">
        <div className="max-w-3xl mx-auto">
          {/* Centered headline, dropped small label */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Frequently asked questions.
            </h2>
            <p className="text-base md:text-lg text-[color:var(--muted)]">
              Clear answers before we start.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item glass rounded-2xl p-6 md:p-7 group">
                <summary className="flex justify-between items-center font-semibold text-base md:text-lg cursor-pointer text-white">
                  <span className="pr-4">{faq.q}</span>
                  <i className="fa-solid fa-plus faq-icon text-[color:var(--fire-1)] flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-[color:var(--muted)] text-base leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA (Orange emphasis retained, clipping bug fixed) */}
      <section id="contact" className="relative py-16 md:py-24 px-4 md:px-6 border-t border-[color:var(--line)] overflow-visible">
        <div className="max-w-4xl mx-auto text-center overflow-visible">
          <div className="text-xs uppercase tracking-widest text-[color:var(--muted)] font-mono mb-4">
            Get Started
          </div>
          {/* Headline with orange gradient retained, fixed line-height & padding to prevent clipping */}
          <h2 className="cta-headline text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to turn your app idea<br />
            <span className="grad-fire inline-block pt-1 pb-2">into a live product?</span>
          </h2>
          <p className="text-base md:text-lg text-[color:var(--muted)] mb-10 max-w-xl mx-auto leading-relaxed">
            Send us a brief overview of your project. We reply within 24 hours with concrete feedback, architecture advice, and a fixed quote.
          </p>
          <a
            href="mailto:mail@movexlabs.com"
            className="inline-flex items-center justify-center gap-3 btn-fire px-9 py-4 rounded-full text-base font-semibold min-h-[48px]"
          >
            <i className="fa-solid fa-envelope"></i> Email mail@movexlabs.com
          </a>
        </div>
      </section>
    </div>
  )
}