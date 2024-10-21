import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-700 mb-4 sm:mb-0">
          当サイトではCookieを使用してユーザー体験を向上させています。サイトを利用することで、Cookieの使用に同意したことになります。
        </p>
        <Button onClick={handleAccept} className="bg-[#37DC94] text-white hover:bg-[#FF5126]">
          同意する
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;