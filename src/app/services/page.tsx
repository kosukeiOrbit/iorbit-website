import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '事業内容',
  description: '株式会社iOrbitの事業内容をご紹介。Windowsアプリ、WEBアプリ、スマホアプリの受託開発サービスの詳細について。',
}

const services = [
  {
    title: 'Windowsアプリ開発',
    description: 'C#・WPF・Windows Formsを使用したデスクトップアプリケーションの設計・開発から保守まで一貫してサポートいたします。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    features: [
      '業務効率化ツール開発',
      'データ管理システム構築',
      'レポート生成ツール作成',
      '既存システム連携機能',
      'Windows Service開発',
    ],
    technologies: ['C#', '.NET Framework', 'WPF', 'Windows Forms', 'Windows Service', 'SQL Server'],
    process: [
      '要件定義・システム設計',
      'UI/UXプロトタイプ作成',
      '開発・実装・単体テスト',
      '統合テスト・デバッグ',
      'デプロイ・運用保守',
    ],
  },
  {
    title: 'WEBアプリ開発',
    description: 'React・Next.js・Angular・Pythonを使用した高性能で使いやすいWebアプリケーションを提供します。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    features: [
      'レスポンシブWebデザイン',
      'SPA（Single Page Application）',
      'REST API・GraphQL開発',
      'セキュリティ対策実装',
      'AWS・Azure クラウド対応',
    ],
    technologies: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'jQuery'],
    process: [
      'UI/UX設計・ワイヤーフレーム',
      'フロントエンド開発',
      'バックエンドAPI開発',
      'データベース設計・構築',
      'テスト・パフォーマンス最適化',
    ],
  },
  {
    title: 'スマホアプリ開発',
    description: 'Flutter・React Native・Swift・Kotlinを使用したiOS・Android対応のネイティブ・クロスプラットフォームアプリ開発。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    features: [
      'iOS・Androidネイティブアプリ',
      'Flutter・React Nativeクロス開発',
      'Cordovaハイブリッドアプリ',
      'プッシュ通知・位置情報機能',
      'オフライン対応・データ同期',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Java', 'Objective-C', 'Cordova'],
    process: [
      'アプリ設計・技術選定',
      'UI/UX開発・画面設計',
      '機能実装・API連携',
      'App Store・Google Play申請',
      '運用・保守・アップデート',
    ],
  },
  {
    title: '組み込み開発',
    description: 'C#を中心とした照明制御・複合機制御・ETC連携・入退場ゲート制御などの組み込みシステム開発。',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l2.83 2.83 5.66-5.66a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-7.07 7.07a1.5 1.5 0 01-2.12 0zM21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    features: [
      '照明制御システム開発',
      '複合機制御・プリンター連携',
      'ETC機器通信システム',
      '入退場ゲート制御システム',
      'IoTデバイス制御・監視',
    ],
    technologies: ['C#', '.NET', 'シリアル通信', 'TCP/IP', 'IoTプロトコル', '組み込みLinux'],
    process: [
      'ハードウェア仕様確認・設計',
      '通信プロトコル設計',
      '制御ソフトウェア開発',
      'ハードウェア連携テスト',
      'システム統合・運用開始',
    ],
  },
]

const advantages = [
  {
    title: '30以上の開発実績',
    description: '照明制御・複合機制御・ETC連携・入退場ゲート制御など多様なプロジェクトで培った豊富な経験',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: '最新技術への対応',
    description: 'Flutter・React・Next.js・C#・Python等の最新技術トレンドを活用した最適な技術選択',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l2.83 2.83 5.66-5.66a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-7.07 7.07a1.5 1.5 0 01-2.12 0z" />
      </svg>
    ),
  },
  {
    title: 'フルスタック対応',
    description: 'Windows・Web・スマホ・組み込みまで幅広い技術領域に対応可能な開発体制',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: '充実したサポート',
    description: 'AWS・Azure等のクラウド環境での運用から保守・機能追加まで継続的にサポート',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">事業内容</h1>
            <p className="text-lg text-secondary-500">
              お客様のビジネス課題を解決するための包括的なシステム開発サービスを提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-start gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">{service.title}</h2>
                  <p className="text-lg text-secondary-500 mb-8">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">主な機能・特徴</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-secondary-700">
                          <svg className="w-4 h-4 text-accent-500 mr-2.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">使用技術</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
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
                    <h3 className="text-lg font-semibold text-secondary-900 mb-5">開発プロセス</h3>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-7 h-7 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3 flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-secondary-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-secondary-50/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Why iOrbit</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">iOrbitの強み</h2>
            <p className="text-lg text-secondary-500">お客様に選ばれる理由</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-base font-semibold text-secondary-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-secondary-500 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              プロジェクトを始めませんか？
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              お客様のアイデアを実現するため、まずはお気軽にご相談ください。
              要件定義から運用まで、一貫してサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/tech-stack"
                className="inline-flex items-center justify-center border border-white/60 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                技術スタックを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
