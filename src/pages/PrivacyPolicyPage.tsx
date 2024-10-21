import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <main className="pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#37DC94] to-[#162C9B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-dKWDpSwWHMx2ZSvVUvaRdINWmgF4u6.png')] bg-cover bg-center opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white text-center">
              プライバシーポリシー
            </h1>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <div className="space-y-12">
              <p className="text-gray-700">
                株式会社LIVソフト（以下「当社」）は、当ウェブサイトをご利用いただく際に、ユーザーの個人情報を保護するために以下のプライバシーポリシーを定めています。当社が収集する個人情報の種類、利用目的、管理方法について明示し、個人情報の保護に努めます。
              </p>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">1. 個人情報の収集・利用目的</h2>
                <h3 className="text-xl font-semibold mb-2 text-[#162C9B]">収集する個人情報</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>ユーザーの氏名、メールアドレス、電話番号、その他の連絡先情報</li>
                  <li>サービスに関連するお問い合わせ内容</li>
                  <li>クッキーやアクセスログを通じた利用情報</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-[#162C9B]">利用目的</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>お問い合わせやサービス提供に対する回答および対応</li>
                  <li>サービスの向上やユーザーサポートのための情報収集</li>
                  <li>法令に基づく要求への対応や、ユーザーの同意を得た範囲でのマーケティング活動</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">2. 個人情報の管理方法</h2>
                <p className="text-gray-700">
                  当社は、ユーザーの個人情報の漏洩、紛失、改ざんを防ぐために、適切な技術的・組織的なセキュリティ対策を講じています。ユーザーの個人情報は、アクセス制限のかかったサーバーで安全に管理されます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">3. 第三者への提供に関する方針</h2>
                <p className="text-gray-700 mb-4">
                  当社は、ユーザーの個人情報を第三者に提供することはありません。ただし、以下の場合を除きます。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>ユーザーの同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>サービス提供に必要な範囲で、業務委託先に対して開示する場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">4. クッキーやトラッキング技術の使用</h2>
                <p className="text-gray-700">
                  当社のウェブサイトでは、ユーザーの利便性向上やウェブサイト利用状況の分析のために、クッキーを使用しています。クッキーにより収集された情報は個人を特定するものではなく、設定を変更することでクッキーの利用を無効化することが可能です。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">5. ユーザーの権利</h2>
                <p className="text-gray-700">
                  ユーザーは、当社が保有する自分の個人情報について、いつでもアクセス、訂正、削除を要求する権利を有します。これらの要求については、お問い合わせフォームからご連絡ください。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">6. プライバシーポリシーの変更に関する通知</h2>
                <p className="text-gray-700">
                  当社は、法令や運営方針の変更に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲示されます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">7. お問い合わせ先情報</h2>
                <p className="text-gray-700">
                  個人情報の取り扱いに関するご質問やご意見、アクセス・訂正・削除の要求については、当社のお問い合わせフォームまでご連絡ください。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#37DC94]">8. 法的免責事項</h2>
                <p className="text-gray-700 mb-4">
                  本プライバシーポリシーは、日本の個人情報保護法及び関連法令に準拠しています。本ポリシーは、当社ウェブサイトの利用者全てに適用されます。ただし、以下の場合においては、当社は責任を負いかねますのでご了承ください：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>ユーザーが自主的に個人情報を公開した場合</li>
                  <li>ユーザーの同意のもと、第三者に個人情報が提供された場合</li>
                  <li>法令に基づく開示要請があった場合</li>
                  <li>当社の管理が及ばない事由により個人情報が漏洩した場合</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  本ポリシーに関して疑問や懸念がある場合は、速やかに当社までお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 lg:text-4xl text-[#37DC94]">お問い合わせ</h2>
            <p className="mb-8 text-gray-600">
              プライバシーポリシーに関するご質問やお問い合わせは、以下のリンクからお願いいたします。
            </p>
            <Button asChild className="bg-[#37DC94] text-white hover:bg-[#FF5126] focus:ring-2 focus:ring-[#37DC94] focus:ring-offset-2 text-lg px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link to="/contact">
                お問い合わせはこちら
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;