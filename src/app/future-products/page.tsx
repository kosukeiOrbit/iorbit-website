import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '将来製品',
  description: '株式会社iOrbitが開発を予定している自社製品をご紹介。スマホアプリ、WEBアプリ、AIトレードbotなど革新的なソリューション。',
}

const futureProducts = [
  {
    title: 'スマートタスクマネージャー',
    category: 'スマホアプリ',
    description: 'AI機能を搭載した次世代タスク管理アプリ。ユーザーの行動パターンを学習し、最適なタスクスケジューリングを提案します。',
    icon: '📱',
    status: '開発予定',
    timeline: '2026年Q2リリース予定',
    features: [
      'AI による優先度自動判定',
      'スマートリマインダー',
      'チームコラボレーション機能',
      'カレンダー統合',
      'ダークモード対応',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'OpenAI API'],
    targetUsers: 'ビジネスパーソン、チームリーダー、プロジェクトマネージャー',
  },
  {
    title: 'オールインワンビジネスダッシュボード',
    category: 'WEBアプリ',
    description: '中小企業向けの包括的ビジネス管理プラットフォーム。売上分析、顧客管理、在庫管理を一元化し、データドリブンな経営をサポート。',
    icon: '🌐',
    status: '企画中',
    timeline: '2026年Q3リリース予定',
    features: [
      'リアルタイムダッシュボード',
      '売上・収益分析',
      '顧客管理（CRM）',
      '在庫管理',
      'レポート自動生成',
      'API 連携',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'AWS'],
    targetUsers: '中小企業経営者、店舗オーナー、フリーランス',
  },
  {
    title: 'インテリジェントトレードBot',
    category: 'AIトレードbot',
    description: '機械学習アルゴリズムを活用した自動取引システム。市場データを分析し、リスク管理機能を備えた安全な自動投資を実現。',
    icon: '🤖',
    status: '研究開発中',
    timeline: '2027年Q1ベータ版予定',
    features: [
      '機械学習による市場分析',
      'リスク管理システム',
      'ポートフォリオ最適化',
      'バックテスト機能',
      'リアルタイム通知',
      'セキュリティ強化',
    ],
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'WebSocket'],
    targetUsers: '個人投資家、機関投資家、ファンドマネージャー',
  },
]

const developmentPhases = [
  {
    phase: '市場調査・企画',
    description: 'ターゲット市場の分析と製品コンセプトの確立',
    icon: '🔍',
  },
  {
    phase: 'プロトタイプ開発',
    description: '核となる機能のプロトタイプ開発と検証',
    icon: '🛠️',
  },
  {
    phase: 'MVP開発',
    description: '最小限の機能を持つ製品の開発',
    icon: '🚀',
  },
  {
    phase: 'ベータテスト',
    description: '限定ユーザーでのテストとフィードバック収集',
    icon: '🧪',
  },
  {
    phase: '正式リリース',
    description: '一般公開とマーケティング展開',
    icon: '🎉',
  },
]

const advantages = [
  {
    title: '受託開発で培った技術力',
    description: '多様なプロジェクトで蓄積したノウハウを自社製品開発に活用',
    icon: '💪',
  },
  {
    title: 'ユーザー中心設計',
    description: '実際のユーザーニーズに基づいた製品設計と継続的な改善',
    icon: '👥',
  },
  {
    title: '最新技術の活用',
    description: 'AI、機械学習などの最新技術を積極的に取り入れた革新的なソリューション',
    icon: '⚡',
  },
]

export default function FutureProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-900 to-secondary-900">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 font-medium text-sm tracking-wide uppercase mb-6">
                Future Products
              </span>
            </div>

            <h1 className="heading-display mb-8 animate-slide-up text-white">
              将来製品
            </h1>

            <p className="text-lead mb-12 animate-slide-up text-white/90 max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              受託開発で培った技術力を活かし、革新的な自社製品の開発を進めています。
              <br className="hidden md:block" />
              未来のデジタル社会に価値を提供するソリューションをお届けします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {futureProducts.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{product.icon}</div>
                    <div>
                      <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-glow">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <h2 className="heading-2 mb-6">{product.title}</h2>
                  <p className="text-lead mb-8">{product.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="card-premium">
                      <h4 className="font-semibold text-secondary-900 mb-2">開発状況</h4>
                      <p className="text-secondary-600">{product.status}</p>
                    </div>
                    <div className="card-premium">
                      <h4 className="font-semibold text-secondary-900 mb-2">リリース予定</h4>
                      <p className="text-secondary-600">{product.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="heading-3 mb-4">ターゲットユーザー</h4>
                    <p className="text-secondary-600">{product.targetUsers}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="heading-3 mb-4">使用予定技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="card-premium">
                    <h3 className="heading-3 mb-6">主な機能</h3>
                    <ul className="space-y-4">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">開発プロセス</h2>
            <p className="text-lead">品質の高い製品をお届けするための段階的開発手法</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {developmentPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="card-premium text-center h-full">
                    <div className="text-4xl mb-4">{phase.icon}</div>
                    <h3 className="text-lg font-bold mb-3 text-secondary-900">
                      {phase.phase}
                    </h3>
                    <p className="text-secondary-600 text-sm">{phase.description}</p>
                  </div>
                  {index < developmentPhases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">→</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">iOrbitの強み</h2>
            <p className="text-lead">自社製品開発における競争優位性</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="card-premium text-center h-full">
                <div className="text-4xl mb-6">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-secondary-900">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              一緒に未来を創造しませんか？
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              自社製品開発にご興味をお持ちの方、パートナーシップをご検討の方は、
              ぜひお気軽にお問い合わせください。革新的なソリューションで
              社会に価値を提供していきましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1"
              >
                パートナーシップ相談
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                会社概要を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}