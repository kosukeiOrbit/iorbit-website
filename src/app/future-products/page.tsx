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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    phase: 'プロトタイプ開発',
    description: '核となる機能のプロトタイプ開発と検証',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3 12.75m3.32-2.68L9 12.75m2.42 2.42l5.1 5.1m0 0L19.5 17.25m-2.68 3.32L14.25 18m7.08-13.5a3 3 0 00-4.24-4.24L3.75 13.5V20.25h6.75L23.83 6.92z" />
      </svg>
    ),
  },
  {
    phase: 'MVP開発',
    description: '最小限の機能を持つ製品の開発',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    phase: 'ベータテスト',
    description: '限定ユーザーでのテストとフィードバック収集',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    phase: '正式リリース',
    description: '一般公開とマーケティング展開',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

const advantages = [
  {
    title: '受託開発で培った技術力',
    description: '多様なプロジェクトで蓄積したノウハウを自社製品開発に活用',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'ユーザー中心設計',
    description: '実際のユーザーニーズに基づいた製品設計と継続的な改善',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: '最新技術の活用',
    description: 'AI、機械学習などの最新技術を積極的に取り入れた革新的なソリューション',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

export default function FutureProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">Future Products</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">将来製品</h1>
            <p className="text-lg text-secondary-500">
              受託開発で培った技術力を活かし、革新的な自社製品の開発を進めています。
              未来のデジタル社会に価値を提供するソリューションをお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="space-y-20">
            {futureProducts.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-start gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                      {product.icon}
                    </div>
                    <span className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-md text-sm font-medium">
                      {product.category}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">{product.title}</h2>
                  <p className="text-lg text-secondary-500 mb-8">{product.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl border border-secondary-200 bg-white">
                      <p className="text-sm text-secondary-500 mb-1">開発状況</p>
                      <p className="font-medium text-secondary-900">{product.status}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-secondary-200 bg-white">
                      <p className="text-sm text-secondary-500 mb-1">リリース予定</p>
                      <p className="font-medium text-secondary-900">{product.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm font-medium text-secondary-900 mb-2">ターゲットユーザー</p>
                    <p className="text-sm text-secondary-500">{product.targetUsers}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-secondary-900 mb-2">使用予定技術</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-secondary-100 text-secondary-700 px-2.5 py-0.5 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="p-6 rounded-xl border border-secondary-200 bg-white">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-5">主な機能</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="text-sm text-secondary-700">{feature}</span>
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

      {/* Development Phases */}
      <section className="py-20 sm:py-28 bg-secondary-50/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">開発プロセス</h2>
            <p className="text-lg text-secondary-500">品質の高い製品をお届けするための段階的開発手法</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {developmentPhases.map((phase, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                    {phase.icon}
                  </div>
                  <div className="absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-px bg-secondary-200 hidden md:block last:hidden" style={index === developmentPhases.length - 1 ? { display: 'none' } : {}}></div>
                  <p className="text-sm font-semibold text-secondary-900 mb-1">{phase.phase}</p>
                  <p className="text-xs text-secondary-500 leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Strengths</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">iOrbitの強み</h2>
            <p className="text-lg text-secondary-500">自社製品開発における競争優位性</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{advantage.title}</h3>
                <p className="text-sm text-secondary-500 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-primary-600 text-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              一緒に未来を創造しませんか？
            </h2>
            <p className="text-primary-100 text-lg mb-10">
              自社製品開発にご興味をお持ちの方、パートナーシップをご検討の方は、
              ぜひお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                パートナーシップ相談
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-white/60 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
