import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社iOrbitのプライバシーポリシー。個人情報の取り扱いについてご説明いたします。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">Privacy Policy</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">プライバシーポリシー</h1>
            <p className="text-lg text-secondary-500">
              株式会社iOrbit（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose-custom">
            <article className="space-y-10">
              <Section title="1. 個人情報の定義">
                <p>
                  本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、
                  氏名、メールアドレス、電話番号、会社名その他の記述等により特定の個人を識別できる情報をいいます。
                </p>
              </Section>

              <Section title="2. 個人情報の収集">
                <p>当社は、以下の場合に個人情報を収集することがあります。</p>
                <ul>
                  <li>お問い合わせフォームからのご連絡時</li>
                  <li>お見積もり・ご相談のお申し込み時</li>
                  <li>業務委託契約の締結時</li>
                  <li>その他、当社サービスのご利用に際して必要な場合</li>
                </ul>
              </Section>

              <Section title="3. 個人情報の利用目的">
                <p>当社は、収集した個人情報を以下の目的で利用いたします。</p>
                <ul>
                  <li>お問い合わせへの回答およびご連絡</li>
                  <li>お見積もりの作成および提案書の送付</li>
                  <li>業務委託契約に関する連絡・管理</li>
                  <li>当社サービスの改善および新サービスの開発</li>
                  <li>当社からのお知らせ・情報提供（ご同意いただいた場合）</li>
                </ul>
              </Section>

              <Section title="4. 個人情報の第三者提供">
                <p>
                  当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
                </p>
                <ul>
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </Section>

              <Section title="5. 個人情報の管理">
                <p>
                  当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、
                  紛失、破損、改ざん、漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備など、
                  必要かつ適切な措置を講じ、安全対策を実施いたします。
                </p>
              </Section>

              <Section title="6. Cookie（クッキー）の使用">
                <p>
                  当社ウェブサイトでは、サービスの利便性向上やアクセス解析のためにCookieを使用する場合があります。
                  Cookieの使用により個人を特定する情報は収集しておりません。
                  ブラウザの設定によりCookieの受け入れを拒否することも可能ですが、一部のサービスがご利用いただけない場合があります。
                </p>
              </Section>

              <Section title="7. 個人情報の開示・訂正・削除">
                <p>
                  お客様ご自身の個人情報の開示、訂正、追加、削除、利用停止をご希望の場合は、
                  お問い合わせフォームまたはメール（info@iorbit.jp）にてご連絡ください。
                  本人確認の上、合理的な期間内に対応いたします。
                </p>
              </Section>

              <Section title="8. プライバシーポリシーの変更">
                <p>
                  当社は、必要に応じて本プライバシーポリシーの内容を変更することがあります。
                  変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
                </p>
              </Section>

              <Section title="9. お問い合わせ窓口">
                <p>本プライバシーポリシーに関するお問い合わせは、下記までご連絡ください。</p>
                <div className="rounded-lg border border-secondary-200 bg-secondary-50 p-4 not-prose">
                  <p className="text-sm text-secondary-700">株式会社iOrbit</p>
                  <p className="text-sm text-secondary-500 mt-1">〒581-0003 大阪府八尾市本町６－１４－１５</p>
                  <p className="text-sm text-secondary-500">メール: info@iorbit.jp</p>
                </div>
              </Section>

              <div className="pt-6 border-t border-secondary-200">
                <p className="text-sm text-secondary-400">制定日: 2025年9月1日</p>
                <p className="text-sm text-secondary-400">最終更新日: 2025年9月1日</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary-900 mb-4">{title}</h2>
      <div className="text-secondary-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-secondary-600">
        {children}
      </div>
    </div>
  )
}
