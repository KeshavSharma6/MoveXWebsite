import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    return (
        <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-none">
                    <img src={logo} alt="movexlabs" className="w-10 h-10 rounded-lg object-cover" />
                    <span className="display text-xl font-bold">move<span style={{ color: 'var(--fire-2)' }}>X</span>labs</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-[color:var(--muted)]">
                    <span onClick={() => navigate('/apps')} className={`nav-link hover:text-white ${currentPage === '/apps' ? 'active' : ''}`}>Apps</span>
                    <span onClick={() => navigate('/')} className={`nav-link hover:text-white ${currentPage === '/' ? 'active' : ''}`}>Featured</span>
                    <span onClick={() => navigate('/about')} className={`nav-link hover:text-white ${currentPage === '/about' ? 'active' : ''}`}>About</span>
                    <span onClick={() => navigate('/blog')} className={`nav-link hover:text-white ${currentPage === '/blog' ? 'active' : ''}`}>Blog</span>
                    <span onClick={() => navigate('/')} className="nav-link hover:text-white">Hire Us</span>
                </div>
                <span onClick={() => navigate('/')} className="btn-fire px-5 py-2.5 rounded-full text-sm hidden sm:inline-flex items-center gap-2">
                    Start a project <i className="fa-solid fa-arrow-right text-xs"></i>
                </span>
            </div>
        </nav>
    )
}