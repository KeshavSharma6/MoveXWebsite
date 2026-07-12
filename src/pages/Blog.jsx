import React from 'react'

export default function Blog() {
    const posts = [
        { img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', tag: 'FEATURED', date: 'Oct 24, 2024', read: '8 min read', title: 'Why we chose Expo EAS for all our React Native builds', desc: 'A deep dive into how Expo EAS simplifies CI/CD, OTA updates, and native module configuration, allowing us to ship faster without sacrificing native capabilities.', featured: true },
        { img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80', cat: 'Design', date: 'Oct 20, 2024', title: 'Micro-interactions that make apps feel alive', desc: 'How to use Reanimated and Lottie to create delightful user experiences without dropping frames.' },
        { img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', cat: 'Tech', date: 'Oct 15, 2024', title: 'Supabase vs Convex: A realtime backend showdown', desc: 'We compare the two hottest backend-as-a-service platforms for React Native developers in 2024.' },
        { img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80', cat: 'Business', date: 'Oct 10, 2024', title: 'Setting up RevenueCat for your first paywall', desc: 'A step-by-step guide to implementing subscriptions in your mobile app without the headache.' }
    ]

    return (
        <section className="pt-40 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 reveal">
                    <div className="text-xs tracking-widest text-[color:var(--fire-1)] uppercase mb-4">— The Blog</div>
                    <h1 className="text-4xl md:text-7xl font-bold">Insights & <span className="grad-fire">writings</span>.</h1>
                    <p className="text-lg text-[color:var(--muted)] max-w-xl mx-auto mt-6">Thoughts on mobile design, React Native architecture, and building a studio.</p>
                </div>

                {/* Featured Post */}
                <a href="#" className="blog-card glass rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 mb-16 reveal block">
                    <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                        <img src={posts[0].img} alt="Featured Post" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4 text-xs text-[color:var(--muted)]">
                            <span className="px-3 py-1 rounded-full bg-[color:var(--fire-2)] text-black font-bold">{posts[0].tag}</span>
                            <span>{posts[0].date}</span>
                            <span>{posts[0].read}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-[color:var(--fire-1)] transition">{posts[0].title}</h2>
                        <p className="text-[color:var(--muted)] mb-6">{posts[0].desc}</p>
                        <div className="flex items-center gap-3">
                            <img src="https://z-cdn-media.chatglm.cn/files/9bfe01ca-5930-450b-8362-58800250a14b.jpeg?auth_key=1883790895-c3450f0d8f3f492c8eb243342b8b7978-0-8dcbfab481090539746a6bb29b2473cb" className="w-8 h-8 rounded-full" alt="Team" />
                            <span className="text-sm font-medium">movexlabs Team</span>
                        </div>
                    </div>
                </a>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.slice(1).map((post, i) => (
                        <a href="#" key={i} className="blog-card glass rounded-2xl overflow-hidden block reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="aspect-video overflow-hidden"><img src={post.img} alt={post.title} className="w-full h-full object-cover" /></div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3 text-xs text-[color:var(--muted)]">
                                    <span>{post.cat}</span><span>•</span><span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 hover:text-[color:var(--fire-1)] transition">{post.title}</h3>
                                <p className="text-sm text-[color:var(--muted)]">{post.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}