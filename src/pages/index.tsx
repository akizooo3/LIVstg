import React from 'react';
import HomePage from '../components/HomePage';
import CookieConsent from '../components/CookieConsent';

const Home: React.FC = () => {
  return (
    <>
      <HomePage />
      <CookieConsent />
    </>
  );
};

export default Home;
