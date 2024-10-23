import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Monitor, Server } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import bgImage from '../images/bg.png';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans" style={{ backgroundImage: `url(${bgImage})` }}>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#37DC94] to-[#162C9B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-dKWDpSwWHMx2ZSvVUvaRdINWmgF4u6.png')] bg-cover bg-center opacity-50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                人が輝けるモノ作りを目指して
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl lg:text-2xl drop-shadow-md">
                LIVソフトは、お客様のビジネスを支えるために、システム開発やインフラ設計を通じて革新的なソリューションを提供しています。
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-white text-[#37DC94] hover:bg-[#FF5126] hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#37DC94] text-lg px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link to="https://forms.gle/Qdjgy9VvgF54sGpG9">
                  お問い合わせはこちら
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16 bg-white relative" id="about">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold text-center mb-8 lg:text-4xl text-[#37DC94] relative inline-block animate-fade-in-up">
              LIVソフトとは
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF5126] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <div className="max-w-[800px] mx-auto space-y-6 animate-fade-in-up">
              <p className="text-center text-lg leading-relaxed text-gray-600">
                人を引き立てる、人を楽しませられる、人をサポートできる、そんなモノ作りをするために立ち上げた企業です。
                現在はエンジニアリングサービスを中心にモノ作りをサポートしている当社ですが、ゆくゆくは自社コンテンツとして人が輝けるモノ作りをすることを目標としています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16 bg-gray-100" id="services">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 lg:text-4xl text-[#37DC94]">事業内容</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="flex flex-col items-center p-6 bg-white h-full group-hover:bg-gradient-to-br from-[#37DC94] to-[#162C9B]">
                <Settings className="h-16 w-16 text-[#37DC94] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                <h3 className="text-xl font-semibold mb-2 text-[#37DC94] group-hover:text-white">システムインテグレーション</h3>
                <p className="text-center text-base text-gray-600 group-hover:text-white">
                  企業向けにカスタムシステムを構築し、効率化を支援します。最新技術を活用し、柔軟かつスケーラブルなソリューションを提供します。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="flex flex-col items-center p-6 bg-white h-full group-hover:bg-gradient-to-br from-[#37DC94] to-[#162C9B]">
                <Monitor className="h-16 w-16 text-[#37DC94] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                <h3 className="text-xl font-semibold mb-2 text-[#37DC94] group-hover:text-white">業務アプリケーション開発</h3>
                <p className="text-center text-base text-gray-600 group-hover:text-white">
                  効率的な業務プロセスを実現するアプリケーションを開発します。ユーザビリティを重視し、使いやすさと機能性を両立させたソフトウェアを提供します。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="flex flex-col items-center p-6 bg-white h-full group-hover:bg-gradient-to-br from-[#37DC94] to-[#162C9B]">
                <Server className="h-16 w-16 text-[#37DC94] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                <h3 className="text-xl font-semibold mb-2 text-[#37DC94] group-hover:text-white">インフラ設計、構築</h3>
                <p className="text-center text-base text-gray-600 group-hover:text-white">
                  安定性と拡張性を考慮したインフラを設計します。クラウドテクノロジーを活用し、高可用性とセキュリティを確保したシステム基盤を構築します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#37DC94] to-[#162C9B] scroll-mt-16 relative overflow-hidden" id="recruitment">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold lg:text-4xl text-white">エンジニア採用情報</h2>
            <p className="max-w-[700px] text-gray-100 md:text-lg lg:text-xl mb-8">
              LIVソフトでは、共に成長し、革新的なソリューションを生み出す仲間を募集しています。
            </p>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group bg-white max-w-md w-full">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <h3 className="font-semibold text-lg mb-4 text-[#37DC94]">あなたも仲間になりませんか？</h3>
                <p className="text-base text-gray-600 mb-6">
                  技術力を活かし、共に成長できる環境で働きませんか？私たちは常に新しいチャレンジを求めています。
                </p>
                <Button asChild className="bg-[#37DC94] text-white hover:bg-[#FF5126] focus:ring-2 focus:ring-[#37DC94] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                  <a href="https://en-gage.net/liv-software/" target="_blank" rel="noopener noreferrer">
                    採用情報はこちら
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
