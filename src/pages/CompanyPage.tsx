import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import yamauchi from '../images/yamauchi.jpg';

const CompanyPage: React.FC = () => {
  const visionRef = useRef<HTMLElement>(null);

  const scrollToVision = () => {
    visionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <main className="pt-16">
        <section id="hero" className="w-full py-24 md:py-32 lg:py-48 bg-gradient-to-br from-[#37DC94] to-[#162C9B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-dKWDpSwWHMx2ZSvVUvaRdINWmgF4u6.png')] bg-cover bg-center opacity-50 animate-pulse"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-lg animate-fade-in-up">
                  人が輝けるモノ作りを目指して
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl lg:text-2xl drop-shadow-md animate-fade-in-up animation-delay-300">
                  LIVソフトは、お客様のビジネスを支えるために、システム開発やインフラ設計を通じて革新的なソリューションを提供してい���す。私たちの目標は、技術でお客様の課題を解決し、成功に導くことです。
                </p>
              </div>
              <Button onClick={scrollToVision} className="mt-8 bg-white text-[#37DC94] hover:bg-[#FF5126] hover:text-white transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
                詳しく見る
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="vision" ref={visionRef} className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 lg:text-4xl text-[#37DC94] animate-fade-in">ビジョン・ミッション</h2>
            <div className="space-y-12 text-center">
              {[
                { title: 'ビジョン', content: '技術の力で社会に貢献し、持続可能な未来を創造します。' },
                { title: 'ミッション', content: 'お客様の成長をサポートし、最高の技術ソリューションを提供することが私たちの使命です。' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in animation-delay-300">
                  <h3 className="text-2xl font-semibold mb-4 text-[#162C9B]">{item.title}</h3>
                  <p className="text-lg text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ceo-message" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 lg:text-4xl text-[#37DC94] animate-fade-in">代表挨拶</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-fade-in animation-delay-300">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
                <img src={yamauchi}
                    alt="山内直樹 代表取締役"
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-6">
                <Card className="border border-[#37DC94]">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      お客様への貢献を会社の喜びとし、お客様にご満足いただけるエンジニアを育成してまいります。 お客様とビジネスパートナー様との関係を会社の最も大切な財産とし発展向上を目指してまいります。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-[#162C9B]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#162C9B]">転職を考えている皆様へ</h3>
                    <p className="mb-4 text-gray-700">
                      あなたの市場価値、正しく把握できていますか。
                      あなたの持つ技術、宝の持ち腐れ状態になっていませんか。
                    </p>
                    <p className="mb-4 text-gray-700">
                      前職の接客業界で培った人間観察力を活かし、あなたの魅力を最大限引き出します。
                      全国売上一位まで上り詰めた人間の観察力、あなた自身で感じてみませんか。
                      きっと自分でも気づかなかった魅力が見つかります。いえ、見つけます！
                    </p>
                    <p className="mb-4 text-gray-700">
                      こんな悩みを抱えている人は、ぜひお話だけでも聞いてみてください。
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                      <li>自身の持つ技術があと何年活きるのか不安がある</li>
                      <li>技術力を向上させたいが、何から着手すれば良いかわからない</li>
                      <li>正直、今の自分に何ができるかわからない</li>
                    </ul>
                    <p className="mb-4 text-gray-700">
                      あなたの市場価値、私なら最大限まで引き出せる自信があります。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 lg:text-4xl text-[#37DC94] animate-fade-in">会社概要</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in animation-delay-300">
              {[
                { label: '会社名', value: '株式会社LIVソフト' },
                { label: '設立', value: '2015年4月1日' },
                { label: '資本金', value: '1,000万円' },
                { label: '所在地', value: '東京都葛飾区小菅4-7-1 綾瀬プラザ1F' },
                { label: '代表者', value: '代表取締役 山内直樹' },
                { label: '事業内容', value: 'システム開発、アプリケーション開発、インフラ設計・構築' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
                  <dt className="font-semibold text-[#162C9B] mb-2">{item.label}</dt>
                  <dd className="text-gray-700">{item.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 lg:text-4xl text-[#37DC94] animate-fade-in">お問い合わせ</h2>
            <div className="text-center space-y-6 animate-fade-in animation-delay-300">
              <p className="text-lg text-gray-700">
                お客様のニーズに合わせた最適なソリューションをご提案いたします。
              </p>
              <Button asChild className="bg-[#37DC94] text-white hover:bg-[#FF5126] transition-all duration-300 transform hover:scale-105">
                <Link to="https://forms.gle/Qdjgy9VvgF54sGpG9">お問い合わせフォームへ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompanyPage;
