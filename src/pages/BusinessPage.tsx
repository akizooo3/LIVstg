import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Monitor, Server } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const BusinessPage: React.FC = () => {
  const systemDevelopmentAchievements = {
    '金融': {
      '都市銀行': '勘定系システム（預金・融資・外国為替、債券、デリバティブ）、インターネットバンキングシステム',
      '地方銀行': '勘定系システムパッケージカスタマイズ',
      '信託銀行': '資産運用管理システム、業務システム（経理、原価計算、株管理、報酬計算）',
      '信販・カード会社': 'オーソリシステム、勘定系システム（ショッピングクレジット、クレジットカード、融資、ソリューション）、情報系システム',
      '証券会社': '証券管理システム、T+1（翌日決済）対応システム、証券保管振替対応システム',
      '生命保険': '企業年金システム、共済年金システム、個人保険システム、団体保険システム',
      '損害保険': '自動車保険、火災保険、旅行保険、代理店システム、保険料シミュレーションシステム'
    },
    '流通': {
      '大手コンビニチェーン': '本部系／店舗系システム、仕入管理・在庫管理・売上管理、棚割システム'
    },
    '製造': {
      '自動車メーカー': '販売店管理システム、BtoB Webコマースサイト、モジュール仕掛管理システム',
      'アパレルメーカー': '仕入管理・在庫管理・売上管理、顧客管理システム、フランチャイズ管理システム'
    },
    '通信': {
      '固定網通信事業者': '顧客管理システム、課金管理システム、人事管理システム',
      '移動体網通信事業者': '顧客管理システム、携帯電話アプリケーション開発'
    },
    '公共・自治体': {
      '官庁': '電子申請システム、俸給・人事管理システム'
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <main className="pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#37DC94] to-[#162C9B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-dKWDpSwWHMx2ZSvVUvaRdINWmgF4u6.png')] bg-cover bg-center opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                  事業内容
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl lg:text-2xl drop-shadow-md">
                  LIVソフトは、お客様のビジネスを支えるために、システム開発やインフラ設計を通じて革新的なソリューションを提供しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 lg:text-4xl text-[#37DC94]">主要サービス</h2>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 lg:text-4xl text-[#37DC94]">システム開発実績</h2>
            <div className="space-y-4">
              {Object.entries(systemDevelopmentAchievements).map(([category, subcategories]) => (
                <details key={category} className="bg-white shadow rounded-lg">
                  <summary className="cursor-pointer p-4 font-semibold text-[#37DC94]">{category}</summary>
                  <div className="p-4 bg-gray-50">
                    {Object.entries(subcategories).map(([subcategory, description]) => (
                      <div key={subcategory} className="mb-4">
                        <h4 className="font-semibold text-[#162C9B] mb-2">{subcategory}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-[#37DC94]">お問い合わせ</h2>
            <p className="mb-8 text-gray-600">
              事業内容に関するご質問やお見積もりのご依頼など、お気軽にお問い合わせください。
            </p>
            <Button asChild className="bg-[#37DC94] text-white hover:bg-[#FF5126] focus:ring-2 focus:ring-[#37DC94] focus:ring-offset-2 text-lg px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link to="https://forms.gle/Qdjgy9VvgF54sGpG9">
                お問い合わせはこちら
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BusinessPage;