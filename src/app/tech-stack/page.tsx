import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '技術スタック',
  description: '株式会社iOrbitが使用する技術スタックをご紹介。最新のフレームワークやツールで高品質なシステム開発を行います。',
}

const techCategories = [
  {
    category: 'Webアプリ開発',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    description: 'フロントエンド・バックエンド統合開発',
    technologies: [
      { name: 'React', level: 'Expert', description: 'SPAアプリケーション開発' },
      { name: 'Next.js', level: 'Expert', description: 'SSR/SSG対応のフルスタック開発' },
      { name: 'Angular', level: 'Advanced', description: 'エンタープライズ向けフレームワーク' },
      { name: 'TypeScript', level: 'Expert', description: '型安全なWebアプリ開発' },
      { name: 'JavaScript', level: 'Expert', description: 'ブラウザ・Node.js開発' },
      { name: 'jQuery', level: 'Advanced', description: 'レガシーシステム対応' },
      { name: 'Python', level: 'Advanced', description: 'Webアプリ・API開発' },
    ],
  },
  {
    category: 'スマホアプリ開発',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    description: 'iOS・Android・クロスプラットフォーム',
    technologies: [
      { name: 'Flutter', level: 'Expert', description: 'Dartによるクロスプラットフォーム開発' },
      { name: 'React Native', level: 'Advanced', description: 'JavaScript/TypeScriptクロス開発' },
      { name: 'Cordova', level: 'Advanced', description: 'ハイブリッドアプリ開発' },
      { name: 'Swift', level: 'Advanced', description: 'iOS ネイティブアプリ開発' },
      { name: 'Kotlin', level: 'Advanced', description: 'Android ネイティブアプリ開発' },
      { name: 'Java', level: 'Advanced', description: 'Androidアプリ開発' },
      { name: 'Objective-C', level: 'Intermediate', description: 'iOS レガシーアプリ対応' },
    ],
  },
  {
    category: 'Windowsアプリ開発',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    description: 'デスクトップアプリケーション開発',
    technologies: [
      { name: 'C#', level: 'Expert', description: '.NET Framework/Core開発' },
      { name: 'WPF', level: 'Advanced', description: 'リッチなUIアプリケーション' },
      { name: 'Windows Forms', level: 'Expert', description: 'ビジネスアプリケーション' },
      { name: 'Windows Service', level: 'Advanced', description: 'バックグラウンドサービス' },
      { name: 'C++', level: 'Intermediate', description: 'ネイティブアプリケーション' },
    ],
  },
  {
    category: '組み込み開発',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l2.1 2.1 5.1-5.1a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-7.98 7.98a1.5 1.5 0 01-2.12 0zM21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    description: 'IoT・制御システム開発',
    technologies: [
      { name: 'C#', level: 'Expert', description: '照明制御・複合機制御システム' },
      { name: 'ETC連携', level: 'Advanced', description: 'ETC機器との通信システム' },
      { name: '入退場ゲート制御', level: 'Advanced', description: 'アクセス制御システム' },
      { name: '照明制御', level: 'Expert', description: 'スマート照明システム' },
      { name: '複合機制御', level: 'Advanced', description: 'プリンター・複合機連携' },
      { name: 'IoTプロトコル', level: 'Intermediate', description: 'デバイス間通信' },
    ],
  },
  {
    category: 'クラウド・インフラ',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    description: 'クラウドサービス・インフラ構築',
    technologies: [
      { name: 'AWS', level: 'Advanced', description: 'EC2, S3, Lambda, RDS' },
      { name: 'Azure', level: 'Advanced', description: 'App Service, Functions, SQL Database' },
      { name: 'Docker', level: 'Intermediate', description: 'コンテナ化・デプロイ' },
      { name: 'Linux', level: 'Advanced', description: 'サーバー管理・運用' },
      { name: 'IIS', level: 'Advanced', description: 'Windows Server Web管理' },
    ],
  },
  {
    category: 'データベース・API',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description: 'データベース設計・API開発',
    technologies: [
      { name: 'SQL Server', level: 'Expert', description: 'Microsoftエンタープライズ DB' },
      { name: 'MySQL', level: 'Advanced', description: 'オープンソース RDBMS' },
      { name: 'PostgreSQL', level: 'Advanced', description: '高機能リレーショナル DB' },
      { name: 'Oracle', level: 'Intermediate', description: 'エンタープライズ データベース' },
      { name: 'REST API', level: 'Expert', description: 'RESTful Webサービス設計' },
      { name: 'GraphQL', level: 'Intermediate', description: 'モダンAPI設計' },
    ],
  },
]

const levelColors: Record<string, string> = {
  Expert: 'bg-green-50 text-green-700',
  Advanced: 'bg-blue-50 text-blue-700',
  Intermediate: 'bg-yellow-50 text-yellow-700',
}

const levelBarColors: Record<string, string> = {
  Expert: 'bg-primary-500 w-full',
  Advanced: 'bg-secondary-400 w-4/5',
  Intermediate: 'bg-secondary-300 w-3/5',
}

const developmentTools = [
  { name: 'Visual Studio', description: '.NET開発統合環境' },
  { name: 'Visual Studio Code', description: 'マルチ言語エディタ' },
  { name: 'Git', description: 'バージョン管理システム' },
  { name: 'GitHub', description: 'ソースコード管理' },
  { name: 'Docker', description: 'コンテナ化技術' },
  { name: 'Postman', description: 'API開発・テスト' },
  { name: 'Xamarin', description: 'モバイル開発プラットフォーム' },
  { name: 'Android Studio', description: 'Android開発IDE' },
  { name: 'Xcode', description: 'iOS開発IDE' },
  { name: 'Flutter SDK', description: 'Dart/Flutter開発環境' },
  { name: 'Node.js', description: 'JavaScript実行環境' },
  { name: 'npm/yarn', description: 'パッケージ管理' },
]

const policyItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    title: 'プロジェクト要件重視',
    description: 'パフォーマンス、スケーラビリティ、保守性など、プロジェクトの要件に最も適した技術を選択',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: '継続的な学習',
    description: '新しい技術トレンドを常にキャッチアップし、プロジェクトに活かせるよう研鑽を積む',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: 'バランス重視',
    description: '最新技術と実績のある技術のバランスを取り、リスクを最小化',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
    title: 'アーキテクチャ設計',
    description: '将来の拡張性と保守性を考慮したシステムアーキテクチャを設計',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'セキュリティファースト',
    description: 'セキュリティを最優先に考慮し、安全で信頼性の高いシステムを構築',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'データドリブン',
    description: 'メトリクスとデータに基づいた技術選択と継続的な改善',
  },
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">Technology</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">技術スタック</h1>
            <p className="text-lg text-secondary-500">
              最先端技術とベストプラクティスを駆使して、革新的で保守性の高いシステムを構築しています。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-secondary-100">
            <div>
              <div className="text-2xl font-bold text-secondary-900">6</div>
              <div className="text-sm text-secondary-500 mt-1">技術領域</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-900">40+</div>
              <div className="text-sm text-secondary-500 mt-1">技術スタック</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-900">12+</div>
              <div className="text-sm text-secondary-500 mt-1">開発ツール</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-900">3年+</div>
              <div className="text-sm text-secondary-500 mt-1">技術経験</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="space-y-20">
            {techCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary-900">{category.category}</h2>
                    <p className="text-sm text-secondary-500">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="p-5 rounded-xl border border-secondary-200 bg-white">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-secondary-900">{tech.name}</h3>
                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${levelColors[tech.level]}`}>
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-sm text-secondary-500 mb-3">{tech.description}</p>
                      <div className="h-1 bg-secondary-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${levelBarColors[tech.level]}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Tools */}
      <section className="py-20 sm:py-28 bg-secondary-50/50">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Tools</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">開発ツール・環境</h2>
            <p className="text-lg text-secondary-500">
              プロフェッショナルな開発を支える最先端ツールチェーンとワークフロー。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {developmentTools.map((tool, index) => (
              <div key={index} className="p-5 rounded-xl border border-secondary-200 bg-white">
                <h3 className="font-semibold text-secondary-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-secondary-500">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Policy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">技術選択の方針</h2>
            <p className="text-lg text-secondary-500">
              プロジェクトに最適な技術を選択するための基準。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {policyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-secondary-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              技術力でプロジェクトを成功に導きます
            </h2>
            <p className="text-primary-100 mb-8">
              豊富な技術スタックと経験豊富なチームで、お客様のビジネス課題を解決するソリューションを提供いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-7 rounded-lg transition-colors duration-200">
                技術相談を申し込む
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center border border-white/60 text-white hover:bg-white/10 font-medium py-3 px-7 rounded-lg transition-colors duration-200">
                事業内容を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
