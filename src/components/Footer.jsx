import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="relative pt-16 pb-8 px-6 border-t border-[color:var(--line)] mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div onClick={() => navigate('/')} className="flex items-center gap-3 mb-6 cursor-none">
                            <img src={logo} alt="movexlabs" className="w-10 h-10 rounded-lg object-cover" />
                            <span className="display text-xl font-bold">move<span style={{ color: 'var(--fire-2)' }}>X</span>labs</span>
                        </div>
                        <p className="text-[color:var(--muted)] max-w-xs text-sm mb-6">A boutique app studio crafting bold mobile experiences. We design, build, and ship apps that move people.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:border-[color:var(--fire-2)] hover:text-[color:var(--fire-1)] transition"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:border-[color:var(--fire-2)] hover:text-[color:var(--fire-1)] transition"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:border-[color:var(--fire-2)] hover:text-[color:var(--fire-1)] transition"><i className="fa-brands fa-dribbble"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:border-[color:var(--fire-2)] hover:text-[color:var(--fire-1)] transition"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
                        <ul className="space-y-3 text-sm text-[color:var(--muted)]">
                            <li><span onClick={() => navigate('/apps')} className="hover:text-white transition cursor-none">Our Apps</span></li>
                            <li><span onClick={() => navigate('/about')} className="hover:text-white transition cursor-none">About Us</span></li>
                            <li><span onClick={() => navigate('/blog')} className="hover:text-white transition cursor-none">Blog</span></li>
                            <li><span onClick={() => navigate('/')} className="hover:text-white transition cursor-none">Pricing</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Get in touch</h4>
                        <ul className="space-y-3 text-sm text-[color:var(--muted)]">
                            <li><a href="mailto:hello@movexlabs.com" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-envelope text-[color:var(--fire-1)]"></i> hello@movexlabs.com</a></li>
                            <li><a href="#" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-file-shield text-[color:var(--fire-1)]"></i> Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-scale-balanced text-[color:var(--fire-1)]"></i> Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-[color:var(--line)] flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-[color:var(--muted)]">© 2025 movexlabs. All rights reserved. Built with fire & care.</div>
                    <div className="text-xs text-[color:var(--muted)] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[color:var(--fire-2)] pulse-dot"></span> Available for projects</div>
                </div>
            </div>
        </footer>
    )
}