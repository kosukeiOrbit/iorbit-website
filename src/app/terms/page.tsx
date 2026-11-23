import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約',
  description: '株式会社iOrbitのウェブサイト利用規約。当サイトのご利用条件についてご説明いたします。',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">Terms of Service</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">利用規約</h1>
            <p className="text-lg text-secondary-500">
              本規約は、株式会社iOrbit（以下「当社」）が提供するウェブサイト（以下「本サイト」）の利用条件を定めるものです。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <article className="space-y-10">
              <Section title="第1条（適用範囲）">
                <p>
                  本規約は、本サイトを利用するすべての方（以下「利用者」）に適用されます。
                  利用者は、本サイトを利用することにより、本規約に同意したものとみなされます。
                </p>
              </Section>

              <Section title="第2条（サービスの内容）">
                <p>
                  本サイトは、当社の事業内容、技術スタック、将来製品、会社概要等の情報提供、
                  およびお問い合わせの受付を目的としています。
                </p>
              </Section>

              <Section title="第3条（禁止事項）">
                <p>利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。</p>
                <ul>
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当社または第三者の知的財産権、肖像権、プライバシー等の権利を侵害する行為</li>
                  <li>本サイトの運営を妨害する行為、またはそのおそれのある行為</li>
                  <li>不正アクセス、またはこれを試みる行為</li>
                  <li>本サイトのコンテンツを無断で複製、転載、改変、配布する行為</li>
                  <li>虚偽の情報を入力して問い合わせを行う行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </Section>

              <Section title="第4条（知的財産権）">
                <p>
                  本サイトに掲載されるすべてのコンテンツ（テキスト、画像、ロゴ、デザイン、プログラム等）に関する
                  著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。
                  利用者は、当社の書面による事前の承諾なく、これらのコンテンツを複製、転載、改変、
                  配布その他の二次利用をすることはできません。
                </p>
              </Section>

              <Section title="第5条（免責事項）">
                <ul>
                  <li>当社は、本サイトに掲載される情報の正確性、完全性、有用性等について、いかなる保証も行いません。</li>
                  <li>当社は、本サイトの利用に起因して利用者に生じた損害について、故意または重大な過失がある場合を除き、一切の責任を負いません。</li>
                  <li>当社は、本サイトの内容を予告なく変更、追加、削除することがあります。</li>
                  <li>当社は、本サイトの一時的な中断または停止について、利用者に事前に通知することなく行う場合があります。</li>
                </ul>
              </Section>

              <Section title="第6条（リンク）">
                <p>
                  本サイトには、第三者のウェブサイトへのリンクが含まれる場合があります。
                  当社は、リンク先のウェブサイトの内容、利用規約、プライバシーポリシー等について一切の責任を負いません。
                  リンク先のウェブサイトの利用は、利用者ご自身の責任において行ってください。
                </p>
              </Section>

              <Section title="第7条（個人情報の取り扱い）">
                <p>
                  利用者の個人情報の取り扱いについては、当社の
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">プライバシーポリシー</a>
                  に定めるとおりとします。
                </p>
              </Section>

              <Section title="第8条（規約の変更）">
                <p>
                  当社は、必要と判断した場合には、利用者に通知することなく本規約を変更することがあります。
                  変更後の利用規約は、本サイトに掲載した時点から効力を生じるものとします。
                  本規約の変更後に利用者が本サイトを利用した場合、利用者は変更後の規約に同意したものとみなされます。
                </p>
              </Section>

              <Section title="第9条（準拠法・裁判管轄）">
                <p>
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サイトの利用に関して紛争が生じた場合には、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
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
