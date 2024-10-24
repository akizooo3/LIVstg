import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../images/logo.webp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    closeMenu();
    navigate(path);
  };

  const navItemClass = "text-sm font-medium hover:text-[#162C9B] focus:outline-none focus:ring-2 focus:ring-[#37DC94] rounded-md p-2 transition-colors duration-200 w-full text-center md:text-left md:inline-flex md:items-center md:justify-center";

  return (
    <header className={`px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white z-50 transition-shadow duration-300 ${
      scrollY > 0 ? 'shadow-md' : ''
    }`}>
      <Link to="/" className="flex items-center justify-center" onClick={closeMenu}>
        <img src={logo} alt="ロゴ" className="w-10 h-10" />
        <span className="ml-2 text-lg font-bold text-[#37DC94]">株式会社LIVソフト</span>
      </Link>
      <nav className={`ml-auto ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row fixed md:relative top-16 md:top-0 left-0 w-full md:w-[32rem] bg-white md:bg-transparent p-4 md:p-0 gap-4 sm:gap-6 border-t md:border-t-0 transition-all duration-300 ease-in-out z-40`}>
        <button onClick={() => handleNavigation('/business')} className={navItemClass}>
          事業内容
        </button>
        <button onClick={() => window.open('https://en-gage.net/liv-software/', '_blank')} className={navItemClass}>
          採用情報
        </button>
        <button onClick={() => handleNavigation('/company')} className={navItemClass}>
          会社情報
        </button>
        <button onClick={() => window.open('https://forms.gle/Qdjgy9VvgF54sGpG9', '_blank')} className={navItemClass}>
          お問い合わせ
        </button>
      </nav>
      <Button variant="ghost" className="md:hidden ml-auto" onClick={toggleMenu} aria-label="メニューを開く">
        {isMenuOpen ? <X className="h-6 w-6 text-[#37DC94]" /> : <Menu className="h-6 w-6 text-[#37DC94]" />}
      </Button>
    </header>
  );
};

export default Header;
