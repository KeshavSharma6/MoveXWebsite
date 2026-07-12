import React, { useEffect } from 'react'

export default function Apps() {
    useEffect(() => {
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

    const apps = [
        { name: 'Ember', desc: 'A habit & fitness companion designed to make momentum feel effortless.', tags: ['React Native', 'iOS'], img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', logo: 'https://z-cdn-media.chatglm.cn/files/9bfe01ca-5930-450b-8362-58800250a14b.jpeg?auth_key=1883790895-c3450f0d8f3f492c8eb243342b8b7978-0-8dcbfab481090539746a6bb29b2473cb', logoBg: 'transparent' },
        { name: 'FinTrack', desc: 'Personal finance and budgeting app with realtime bank integrations.', tags: ['Expo', 'Android'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', logo: null, icon: 'fa-chart-line', color: '#3ECF8E' },
        { name: 'TaskFlow', desc: 'Collaborative project management for remote teams, built for speed.', tags: ['React Native', 'Supabase'], img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80', logo: null, icon: 'fa-list-check', color: '#6C47FF' },
        { name: 'Pulse', desc: 'Meditation and sleep tracking with custom soundscapes.', tags: ['Swift', 'Kotlin'], img: 'https://images.unsplash.com/photo-1532104164778-71f902bac67b?w=600&q=80', logo: null, icon: 'fa-heart-pulse', color: '#EC4980' },
        { name: 'DeskPro', desc: 'A modern helpdesk ticketing system for customer support teams.', tags: ['React Native', 'Convex'], img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80', logo: null, icon: 'fa-briefcase', color: '#1D4AFF' },
        { name: 'CodeCards', desc: 'Learn programming concepts through spaced repetition flashcards.', tags: ['Expo', 'iOS'], img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', logo: null, icon: 'fa-code', color: '#ffbe0b' }
    ]

    return (
        <section className="pt-40 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 reveal">
                    <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Our Portfolio</div>
                    <h1 className="text-4xl md:text-7xl font-bold">Apps we've <span className="grad-fire">shipped</span>.</h1>
                    <p className="text-lg text-[color:var(--muted)] max-w-xl mx-auto mt-6">From habit trackers to complex SaaS dashboards. Here are some of the products we've brought to life.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apps.map((app, i) => (
                        <a href="#" key={i} className="app-card glass rounded-3xl overflow-hidden block reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="aspect-video overflow-hidden">
                                <img src={app.img} alt={app.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    {app.logo ? (
                                        <img src={app.logo} className="w-10 h-10 rounded-xl" alt={`${app.name} logo`} />
                                    ) : (
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: app.color }}>
                                            <i className={`fa-solid ${app.icon} text-white`}></i>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold">{app.name}</h3>
                                </div>
                                <p className="text-sm text-[color:var(--muted)] mb-4">{app.desc}</p>
                                <div className="flex gap-2 text-xs">
                                    {app.tags.map(tag => <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-[color:var(--line)]">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}