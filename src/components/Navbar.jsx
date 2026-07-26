import { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (path) => {
        navigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div onClick={() => handleNav('/')} className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="movexlabs" className="w-10 h-10 rounded-lg object-cover" />
                    <span className="display text-xl font-bold">move<span style={{ color: 'var(--fire-2)' }}>X</span>labs</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm text-[color:var(--muted)]">
                    <span onClick={() => handleNav('/apps')} className={`nav-link hover:text-white cursor-pointer ${currentPage === '/apps' ? 'active' : ''}`}>Apps</span>
                    <span onClick={() => handleNav('/#work')} className="nav-link hover:text-white cursor-pointer">Featured</span>
                    <span onClick={() => handleNav('/about')} className={`nav-link hover:text-white cursor-pointer ${currentPage === '/about' ? 'active' : ''}`}>About</span>
                    <span onClick={() => handleNav('/blog')} className={`nav-link hover:text-white cursor-pointer ${currentPage === '/blog' ? 'active' : ''}`}>Blog</span>
                    <span onClick={() => handleNav('/#hire')} className="nav-link hover:text-white cursor-pointer">Pricing</span>
                </div>

                <div className="hidden md:flex items-center">
                    <span onClick={() => handleNav('/#hire')} className="btn-fire px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer">
                        Start a project <i className="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                    className="md:hidden w-10 h-10 rounded-xl border border-[color:var(--line)] bg-white/5 flex items-center justify-center text-white focus:outline-none active:scale-95 transition"
                >
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-lg' : 'fa-bars text-base'} text-[color:var(--fire-1)]`}></i>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden glass border-b border-[color:var(--line)] px-6 py-6 flex flex-col gap-3 text-base font-medium bg-[#0a0807]/95 backdrop-blur-xl">
                    <span onClick={() => handleNav('/apps')} className={`py-2.5 border-b border-white/5 flex items-center justify-between cursor-pointer ${currentPage === '/apps' ? 'text-[color:var(--fire-1)] font-semibold' : 'text-[color:var(--muted)]'}`}>
                        Apps <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                    </span>
                    <span onClick={() => handleNav('/#work')} className="py-2.5 border-b border-white/5 flex items-center justify-between text-[color:var(--muted)] cursor-pointer">
                        Featured <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                    </span>
                    <span onClick={() => handleNav('/about')} className={`py-2.5 border-b border-white/5 flex items-center justify-between cursor-pointer ${currentPage === '/about' ? 'text-[color:var(--fire-1)] font-semibold' : 'text-[color:var(--muted)]'}`}>
                        About <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                    </span>
                    <span onClick={() => handleNav('/blog')} className={`py-2.5 border-b border-white/5 flex items-center justify-between cursor-pointer ${currentPage === '/blog' ? 'text-[color:var(--fire-1)] font-semibold' : 'text-[color:var(--muted)]'}`}>
                        Blog <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                    </span>
                    <span onClick={() => handleNav('/#vibe-coding')} className="py-2.5 border-b border-white/5 flex items-center justify-between text-[color:var(--muted)] cursor-pointer">
                        AI Prototype Finish <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                    </span>
                    <span onClick={() => handleNav('/#hire')} className="py-2.5 border-b border-white/5 flex items-center justify-between text-[color:var(--muted)] cursor-pointer">
                        Pricing <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                    </span>
                    <div className="pt-3">
                        <span onClick={() => handleNav('/#hire')} className="btn-fire w-full py-3.5 rounded-full text-center block text-sm font-semibold cursor-pointer">
                            Start a Project <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
                        </span>
                    </div>
                </div>
            )}
        </nav>
    );
}