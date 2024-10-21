import React from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage';
import CookieConsent from '../components/CookieConsent';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>株式会社LIVソフト | システム開発・インフラ設計のプロフェッショナル</title>
        <meta name="description" content="LIVソフトは、システム開発、アプリケーション開発、インフラ設計・構築を通じて、お客様のビジネスを支援します。人が輝けるモノ作りを目指し、革新的なソリューションを提供しています。" />
        <meta name="keywords" content="LIVソフト, システム開発, アプリケーション開発, インフラ設計, IT企業, 東京" />
        <link rel="canonical" href="https://www.livsoft.co.jp" />
        <meta property="og:title" content="株式会社LIVソフト | システム開発・インフラ設計のプロフェッショナル" />
        <meta property="og:description" content="LIVソフトは、システム開発、アプリケーション開発、インフラ設計・構築を通じて、お客様のビジネスを支援します。人が輝けるモノ作りを目指し、革新的なソリューションを提供しています。" />
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_0000270108-CyYL045jtAullPoGKNMqmzvNL0xPG0.webp" />
        <meta property="og:url" content="https://www.livsoft.co.jp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HomePage />
      <CookieConsent />
    </>
  );
};

export default Home;