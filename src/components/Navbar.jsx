import { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (path) => {
        setMobileMenuOpen(false);
        if (path.startsWith('/#')) {
            const targetId = path.replace('/#', '');
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
            } else {
                const el = document.getElementById(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
                    className="md:hidden w-11 h-11 rounded-xl border border-[color:var(--line)] bg-white/5 flex items-center justify-center text-white focus:outline-none active:scale-95 transition"
                >
                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars text-lg'} text-[color:var(--fire-1)]`}></i>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className="md:hidden"
                style={{
                    position: 'fixed',
                    inset: '73px 0 0 0',
                    zIndex: 50,
                    pointerEvents: mobileMenuOpen ? 'auto' : 'none',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-12px)',
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                    background: 'rgba(10, 8, 7, 0.98)',
                    backdropFilter: 'blur(24px)',
                    borderBottom: '1px solid rgba(255,140,66,0.14)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.5rem 1.5rem 2rem',
                    overflowY: 'auto',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {[
                        { label: 'Apps', path: '/apps' },
                        { label: 'Featured Work', path: '/#work' },
                        { label: 'About Us', path: '/about' },
                        { label: 'Blog & Insights', path: '/blog' },
                        { label: 'Plans & Pricing', path: '/#hire' },
                    ].map(({ label, path }) => {
                        const isActive = path.startsWith('/') && !path.startsWith('/#') && currentPage === path;
                        return (
                            <span
                                key={label}
                                onClick={() => handleNav(path)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1rem 0',
                                    borderBottom: '1px solid rgba(255,140,66,0.1)',
                                    fontSize: '1.125rem',
                                    fontWeight: isActive ? '700' : '500',
                                    color: isActive ? 'var(--fire-1)' : '#e8ddd5',
                                    cursor: 'pointer',
                                    letterSpacing: '-0.01em',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {label}
                                <i
                                    className="fa-solid fa-chevron-right"
                                    style={{
                                        fontSize: '0.7rem',
                                        color: isActive ? 'var(--fire-1)' : 'rgba(255,140,66,0.5)',
                                    }}
                                ></i>
                            </span>
                        );
                    })}
                </div>
                <div style={{ paddingTop: '1.5rem' }}>
                    <span
                        onClick={() => handleNav('/#hire')}
                        className="btn-fire"
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '9999px',
                            textAlign: 'center',
                            fontSize: '1rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                        }}
                    >
                        Start a Project <i className="fa-solid fa-arrow-right" style={{ marginLeft: '0.5rem', fontSize: '0.85rem' }}></i>
                    </span>
                </div>
            </div>
        </nav>
    );
}