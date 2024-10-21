import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#37DC94] py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_0000270108-CyYL045jtAullPoGKNMqmzvNL0xPG0.webp')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">会社情報</h3>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-base text-gray-100 hover:text-[#FF5126] transition-colors duration-200">会社概要</Link></li>
              <li><Link to="/company#vision" className="text-base text-gray-100 hover:text-[#FF5126] transition-colors duration-200">ミッション</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">事業内容</h3>
            <ul className="space-y-2">
              <li><Link to="/business" className="text-base text-gray-100 hover:text-[#FF5126] transition-colors duration-200">システムインテグレーション</Link></li>
              <li><Link to="/business" className="text-base text-gray-100 hover:text-[#FF5126] transition-colors duration-200">アプリケーション開発</Link></li>
              <li><Link to="/business" className="text-base text-gray-100 hover:text-[#FF5126] transition-colors duration-200">インフラ設計</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">採用情報</h3>
            <ul className="space-y-2">
              <li><a href="https://en-gage.net/liv-software/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-100 hover:text-[#FF5126] transition-colors duration-200">採用情報</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">お問い合わせ</h3>
            <p className="text-base text-gray-100 mb-4">お気軽にお問い合わせください。</p>
            <Button asChild className="bg-white text-[#37DC94] hover:bg-[#FF5126] hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#37DC94] transition-all duration-300 transform hover:scale-105">
              <Link to="/contact">お問い合わせフォーム</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/privacy-policy" className="text-sm text-gray-100 hover:text-[#FF5126] transition-colors duration-200 mt-2 inline-block">
            プライバシーポリシー
          </Link>
          <p className="text-base text-white mt-4">
            © {new Date().getFullYear()} 株式会社LIVソフト All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;