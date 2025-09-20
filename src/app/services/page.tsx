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
    icon: '🖥️',
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
    icon: '🌐',
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
    icon: '📱',
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
    icon: '🔧',
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
    icon: '📊',
  },
  {
    title: '最新技術への対応',
    description: 'Flutter・React・Next.js・C#・Python等の最新技術トレンドを活用した最適な技術選択',
    icon: '🔧',
  },
  {
    title: 'フルスタック対応',
    description: 'Windows・Web・スマホ・組み込みまで幅広い技術領域に対応可能な開発体制',
    icon: '⚡',
  },
  {
    title: '充実したサポート',
    description: 'AWS・Azure等のクラウド環境での運用から保守・機能追加まで継続的にサポート',
    icon: '🛠️',
  },
]

export default function ServicesPage() {
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
                Our Services
              </span>
            </div>

            <h1 className="heading-display mb-8 animate-slide-up text-white">
              事業内容
            </h1>

            <p className="text-lead mb-12 animate-slide-up text-white/90 max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              お客様のビジネス課題を解決するための
              <br className="hidden md:block" />
              包括的なプレミアムシステム開発サービスを提供しています
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="heading-2 mb-6">{service.title}</h2>
                  <p className="text-lead mb-8">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="heading-3 mb-4">主な機能・特徴</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-primary-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="heading-3 mb-4">使用技術</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="card">
                    <h3 className="heading-3 mb-6">開発プロセス</h3>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                            {idx + 1}
                          </div>
                          <span className="text-secondary-700">{step}</span>
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

      <section className="py-20 bg-secondary-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">iOrbitの強み</h2>
            <p className="text-lead">お客様に選ばれる理由</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              プロジェクトを始めませんか？
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              お客様のアイデアを実現するため、まずはお気軽にご相談ください。
              要件定義から運用まで、一貫してサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/tech-stack"
                className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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