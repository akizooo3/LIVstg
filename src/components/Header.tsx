import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white z-50 transition-shadow duration-300 ${
      scrollY > 0 ? 'shadow-md' : ''
    }`}>
      <Link to="/" className="flex items-center justify-center">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_0000270108-CyYL045jtAullPoGKNMqmzvNL0xPG0.webp" alt="LIVソフトロゴ" className="w-10 h-10" />
        <span className="ml-2 text-lg font-bold text-[#37DC94]">株式会社LIVソフト</span>
      </Link>
      <nav className={`ml-auto ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 gap-4 sm:gap-6 border-t md:border-t-0 transition-all duration-300 ease-in-out`}>
        <Link to="/business" className="text-sm font-medium hover:text-[#162C9B] focus:outline-none focus:ring-2 focus:ring-[#37DC94] rounded-md p-2 transition-colors duration-200">
          事業内容
        </Link>
        <a href="https://en-gage.net/liv-software/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#162C9B] focus:outline-none focus:ring-2 focus:ring-[#37DC94] rounded-md p-2 transition-colors duration-200">
          採用情報
        </a>
        <Link to="/company" className="text-sm font-medium hover:text-[#162C9B] focus:outline-none focus:ring-2 focus:ring-[#37DC94] rounded-md p-2 transition-colors duration-200">
          会社情報
        </Link>
        <Link to="/contact" className="text-sm font-medium hover:text-[#162C9B] focus:outline-none focus:ring-2 focus:ring-[#37DC94] rounded-md p-2 transition-colors duration-200">
          お問い合わせ
        </Link>
      </nav>
      <Button variant="ghost" className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニューを開く">
        {isMenuOpen ? <X className="h-6 w-6 text-[#37DC94]" /> : <Menu className="h-6 w-6 text-[#37DC94]" />}
      </Button>
    </header>
  );
};

export default Header;