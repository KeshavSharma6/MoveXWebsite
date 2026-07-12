import React from 'react'

export default function About() {
    const values = [
        { icon: 'fa-bolt', color: 'var(--fire-1)', title: 'Speed without compromise', desc: 'We ship fast, but never cut corners on quality or performance. Every build must feel native and instant.' },
        { icon: 'fa-eye', color: 'var(--fire-2)', title: 'Radical transparency', desc: 'No black boxes. You see the code, the progress, and the challenges. We communicate constantly.' },
        { icon: 'fa-gem', color: 'var(--fire-3)', title: 'Obsessive craft', desc: 'We sweat the details others ignore. The 1px alignments, the easing curves, the haptic feedback patterns.' }
    ]

    const team = [
        { name: 'Alex Mercer', role: 'Lead Engineer & Founder', desc: 'React Native architect obsessed with 60fps animations and clean state management.', img: 'https://images.unsplash.com/photo-1599566150163-2916d4e2294d?w=200&h=200&fit=crop' },
        { name: 'Sara Jenkins', role: 'Lead Designer & Co-Founder', desc: 'Product designer crafting intuitive flows and beautiful, accessible user interfaces.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' }
    ]

    return (
        <div>
            {/* HERO */}
            <section className="pt-40 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4 reveal">— About Us</div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 reveal">We build apps that <span className="grad-fire italic">move</span> people.</h1>
                    <p className="text-lg text-[color:var(--muted)] max-w-xl mx-auto mt-6 reveal">movexlabs is a small studio crafting bold, fast, beautiful mobile experiences.</p>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <div className="img-mask aspect-[4/5] group">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=800&fit=crop" alt="team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                    <div className="reveal">
                        <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— Our Story</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">A studio of <span className="grad-fire">two</span>, obsessed with the craft.</h2>
                        <p className="text-[color:var(--muted)] mb-4">movexlabs started with a simple belief: most apps are forgettable because they're built to ship, not to be felt. We do it differently.</p>
                        <p className="text-[color:var(--muted)] mb-8">We're a small, focused team — designers and engineers who treat every tap, every transition, every haptic as a chance to make someone's day a little better. No agency overhead. No bloat. Just the work.</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div><div className="display num-font text-3xl font-bold grad-fire">2021</div><div className="text-xs text-[color:var(--muted)] mt-1">Founded</div></div>
                            <div><div className="display num-font text-3xl font-bold grad-fire">02</div><div className="text-xs text-[color:var(--muted)] mt-1">Core team</div></div>
                            <div><div className="display num-font text-3xl font-bold grad-fire">∞</div><div className="text-xs text-[color:var(--muted)] mt-1">Late nights</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="relative py-32 px-6 border-t border-[color:var(--line)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-6xl font-bold">Our <span className="grad-fire">Values</span>.</h2>
                        <p className="text-[color:var(--muted)] mt-4 max-w-xl mx-auto">The principles that guide every line of code and every pixel we push.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <div key={i} className="value-card glass rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <i className={`fa-solid ${val.icon} text-2xl mb-4`} style={{ color: val.color }}></i>
                                <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                                <p className="text-sm text-[color:var(--muted)]">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="relative py-32 px-6 border-t border-[color:var(--line)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-6xl font-bold">The <span className="grad-fire">Team</span>.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="glass rounded-2xl p-8 text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <img src={member.img} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[color:var(--fire-2)]" alt={member.name} />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm text-[color:var(--fire-1)] mb-3">{member.role}</p>
                                <p className="text-sm text-[color:var(--muted)]">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center reveal">
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">Want to work <span className="grad-fire">with us?</span></h2>
                    <p className="text-[color:var(--muted)] mb-10 max-w-xl mx-auto">Drop us a line. We reply within 24 hours — usually faster.</p>
                    <a href="mailto:hello@movexlabs.com" className="inline-flex items-center gap-3 btn-fire px-8 py-4 rounded-full text-base"><i className="fa-solid fa-envelope"></i> hello@movexlabs.com</a>
                </div>
            </section>
        </div>
    )
}