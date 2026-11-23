import Link from 'next/link'

const services = [
  {
    title: 'Windowsアプリ開発',
    description: 'デスクトップアプリケーションの設計・開発から保守まで一貫してサポート',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: 'WEBアプリ開発',
    description: 'モダンなフレームワークを使用した高性能なWebアプリケーション',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'スマホアプリ開発',
    description: 'iOS・Android対応のネイティブ・クロスプラットフォームアプリ',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
]

const strengths = [
  {
    title: '高い技術力',
    description: '最新の技術スタックと豊富な開発経験で、高品質なプロダクトを実現します。',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: '迅速な対応',
    description: 'お客様のニーズに合わせた柔軟な開発体制で、スピーディーに対応します。',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: '品質保証',
    description: '徹底したテストと品質管理で、信頼性の高いシステムをお届けします。',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

const futureProducts = [
  { label: '次世代スマートフォンアプリケーション' },
  { label: 'AI駆動型Webプラットフォーム' },
  { label: 'インテリジェント・トレーディングボット' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-950/40 via-secondary-950 to-secondary-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-500/8 rounded-full blur-[120px]"></div>

        <div className="section-container relative z-10 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-6">
              System Development & App Development
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              技術で未来を
              <span className="text-primary-400">創造</span>する
            </h1>

            <p className="text-lg text-secondary-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Windowsアプリ、WEBアプリ、スマホアプリの受託開発を通じて、お客様のビジネス変革と成長を実現します。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary py-3 px-8">
                無料相談を始める
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center text-secondary-300 hover:text-white border border-secondary-700 hover:border-secondary-500 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                サービス詳細
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">30+</div>
              <div className="text-xs sm:text-sm text-secondary-500 mt-1">プロジェクト実績</div>
            </div>
            <div className="text-center border-x border-secondary-800">
              <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
              <div className="text-xs sm:text-sm text-secondary-500 mt-1">顧客満足度</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-xs sm:text-sm text-secondary-500 mt-1">サポート体制</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">事業内容</h2>
            <p className="text-lg text-secondary-500">
              最先端技術と豊富な経験を活かして、お客様のビジネス変革を支援する包括的なソリューションを提供します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group p-6 rounded-xl border border-secondary-200 hover:border-primary-200 bg-white hover:bg-primary-50/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{service.title}</h3>
                <p className="text-sm text-secondary-500 leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                  詳しく見る
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 sm:py-28 bg-secondary-50/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Why iOrbit</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">選ばれる理由</h2>
            <p className="text-lg text-secondary-500">
              業界をリードする技術力と顧客満足度で、お客様のビジネス成功をサポートします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary-600 font-medium text-sm mb-3">Future Vision</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-6">次世代への挑戦</h2>
                <p className="text-secondary-600 leading-relaxed mb-8">
                  現在の受託開発事業で培った技術力とノウハウを基盤に、自社製品の開発に挑戦しています。
                  スマホアプリ、WEBアプリ、AIトレードbotなど、革新的なソリューションを通じて
                  社会により大きな価値を提供していきます。
                </p>
                <ul className="space-y-3 mb-8">
                  {futureProducts.map((item, index) => (
                    <li key={index} className="flex items-center text-secondary-700">
                      <svg className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item.label}
                    </li>
                  ))}
                </ul>
                <Link href="/future-products" className="btn-outline">
                  将来製品について詳しく
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  ), title: 'スマホアプリ', desc: '次世代モバイル体験' },
                  { icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ), title: 'WEBアプリ', desc: 'クラウドソリューション' },
                  { icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  ), title: 'AIボット', desc: '自動取引システム' },
                  { icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ), title: '革新技術', desc: '最先端ソリューション' },
                ].map((card, index) => (
                  <div key={index} className={`p-5 rounded-xl border border-secondary-200 bg-white ${index % 2 === 1 ? 'mt-6' : ''}`}>
                    <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                      {card.icon}
                    </div>
                    <h4 className="font-semibold text-secondary-900 text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-secondary-500">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-secondary-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-950/30 via-transparent to-transparent"></div>

        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              プロジェクトのご相談はお気軽に
            </h2>
            <p className="text-secondary-400 text-lg mb-10">
              システム開発やアプリ開発に関するご質問、ご相談は無料で承っております。最適なソリューションをご提案します。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link href="/contact" className="btn-primary py-3 px-8">
                無料コンサルテーション
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center text-secondary-300 hover:text-white border border-secondary-700 hover:border-secondary-500 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                サービス一覧を見る
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), label: '24時間以内回答' },
                { icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ), label: '高品質保証' },
                { icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                ), label: '完全カスタマイズ' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary-800 text-secondary-400 flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-secondary-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
