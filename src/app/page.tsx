import Link from 'next/link'

const services = [
  {
    title: 'Windowsアプリ開発',
    description: 'デスクトップアプリケーションの設計・開発から保守まで一貫してサポート',
    icon: '🖥️',
  },
  {
    title: 'WEBアプリ開発',
    description: 'モダンなフレームワークを使用した高性能なWebアプリケーション',
    icon: '🌐',
  },
  {
    title: 'スマホアプリ開発',
    description: 'iOS・Android対応のネイティブ・クロスプラットフォームアプリ',
    icon: '📱',
  },
]

const features = [
  {
    title: '高い技術力',
    description: '最新の技術スタックと豊富な開発経験',
    icon: '⚡',
  },
  {
    title: '迅速な対応',
    description: 'お客様のニーズに合わせた柔軟な開発体制',
    icon: '🚀',
  },
  {
    title: '品質保証',
    description: '徹底したテストと品質管理で安心をお届け',
    icon: '✅',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-900 to-secondary-900">
        <div className="absolute inset-0 gradient-mesh opacity-40"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <img
                src="/logo.svg"
                alt="iOrbit Logo"
                className="mx-auto mb-8 w-32 h-auto"
              />
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 font-medium text-sm tracking-wide uppercase mb-6">
                Next Generation Technology
              </span>
            </div>

            <h1 className="heading-display mb-8 animate-slide-up text-white">
              技術で未来を
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-300 to-primary-400 animate-gradient-shift">創造</span>
              する
            </h1>

            <p className="text-lead mb-12 animate-slide-up text-white/90 max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              株式会社iOrbitは、最先端技術を駆使したWindowsアプリ、WEBアプリ、スマホアプリの受託開発を通じて、
              <br className="hidden md:block" />
              お客様のビジネス変革と成長を実現するプレミアムシステム開発会社です。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-up" style={{animationDelay: '0.4s'}}>
              <Link href="/contact" className="btn-primary text-lg px-10">
                無料相談を始める
                <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold py-4 px-10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5 cursor-pointer select-none text-lg relative z-20"
                style={{pointerEvents: 'auto'}}
              >
                サービス詳細
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">30+</div>
                <div className="text-white/80">プロジェクト実績</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
                <div className="text-white/80">顧客満足度</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-white/80">サポート体制</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="section-container">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="heading-2 mb-6">プレミアム事業内容</h2>
            <p className="text-lead max-w-3xl mx-auto">
              最先端技術と豊富な経験を活かして、お客様のビジネス変革を支援する
              <br className="hidden md:block" />
              包括的なデジタルソリューションを提供いたします
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium text-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-3xl text-white mb-6 mx-auto shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                    {service.icon}
                  </div>
                  <h3 className="heading-3 mb-6 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-premium">{service.description}</p>
                  <Link href="/services" className="mt-6 inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 cursor-pointer hover:underline">
                    詳細を見る
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-secondary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400"></div>

        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-2 mb-6 text-white">iOrbitが選ばれる理由</h2>
            <p className="text-lead text-white/90 max-w-3xl mx-auto">
              業界をリードする技術力と顧客満足度で、
              <br className="hidden md:block" />
              お客様のビジネス成功を確実にサポートいたします
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-4xl text-white mb-8 mx-auto shadow-glow group-hover:shadow-glow-lg transition-all duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full mx-auto animate-pulse-glow"></div>
                </div>
                <h3 className="heading-3 mb-6 text-white group-hover:text-primary-300 transition-colors duration-300">{feature.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                  Future Vision
                </span>
                <h2 className="heading-2 mb-8">次世代への挑戦</h2>
                <p className="text-premium mb-8">
                  現在の受託開発事業で培った技術力とノウハウを基盤に、自社製品の開発に挑戦しています。
                  スマホアプリ、WEBアプリ、AIトレードbotなど、革新的なソリューションを通じて
                  社会により大きな価値を提供していきます。
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-secondary-700">次世代スマートフォンアプリケーション</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-4"></div>
                    <span className="text-secondary-700">AI駆動型Webプラットフォーム</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-secondary-700">インテリジェント・トレーディングボット</span>
                  </div>
                </div>
                <Link href="/future-products" className="btn-outline">
                  将来製品について詳しく
                  <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="card text-center floating-element">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-xl text-white mb-4 mx-auto">
                      📱
                    </div>
                    <h4 className="font-bold text-secondary-900 mb-2">スマホアプリ</h4>
                    <p className="text-sm text-secondary-600">次世代モバイル体験</p>
                  </div>
                  <div className="card text-center floating-element mt-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-xl text-white mb-4 mx-auto">
                      🌐
                    </div>
                    <h4 className="font-bold text-secondary-900 mb-2">WEBアプリ</h4>
                    <p className="text-sm text-secondary-600">クラウドソリューション</p>
                  </div>
                  <div className="card text-center floating-element">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-xl text-white mb-4 mx-auto">
                      🤖
                    </div>
                    <h4 className="font-bold text-secondary-900 mb-2">AIボット</h4>
                    <p className="text-sm text-secondary-600">自動取引システム</p>
                  </div>
                  <div className="card text-center floating-element mt-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center text-xl text-white mb-4 mx-auto">
                      ⚡
                    </div>
                    <h4 className="font-bold text-secondary-900 mb-2">革新技術</h4>
                    <p className="text-sm text-secondary-600">最先端ソリューション</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-secondary-900 via-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 font-medium text-sm tracking-wide uppercase mb-8">
              Get Started Today
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              あなたの<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">ビジネス変革</span>を
              <br className="hidden sm:block" />
              今すぐ始めませんか？
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              システム開発やアプリ開発に関するご質問、ご相談は完全無料で承っております。
              <br className="hidden md:block" />
              お客様のビジネス課題解決に向けて、最適なプレミアムソリューションをご提案いたします。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/contact" className="btn-primary text-lg px-12 py-5">
                無料コンサルテーション予約
                <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4.6L3 21l2.6-3.8C5.058 15.838 5.036 14.35 5.028 13.8 5.017 12.776 5 11.724 5 10.5 5 6.082 8.582 2.5 13 2.5s8 3.582 8 8.5z" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold py-5 px-12 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5 cursor-pointer select-none text-lg relative z-20"
                style={{pointerEvents: 'auto'}}
              >
                サービス一覧を見る
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass-effect rounded-2xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-white font-semibold mb-2">24時間以内回答</div>
                <div className="text-white/70 text-sm">迅速なレスポンスをお約束</div>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <div className="text-3xl mb-3">💎</div>
                <div className="text-white font-semibold mb-2">プレミアム品質</div>
                <div className="text-white/70 text-sm">業界最高水準のクオリティ</div>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <div className="text-white font-semibold mb-2">完全カスタマイズ</div>
                <div className="text-white/70 text-sm">お客様専用ソリューション</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}