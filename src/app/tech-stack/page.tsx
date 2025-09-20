import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '技術スタック',
  description: '株式会社iOrbitが使用する技術スタックをご紹介。最新のフレームワークやツールで高品質なシステム開発を行います。',
}

const techCategories = [
  {
    category: 'Webアプリ開発',
    icon: '🌐',
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
    icon: '📱',
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
    icon: '🖥️',
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
    icon: '🔧',
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
    icon: '☁️',
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
    icon: '🗄️',
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

const levelColors = {
  Expert: 'bg-green-100 text-green-800',
  Advanced: 'bg-blue-100 text-blue-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
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

export default function TechStackPage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-900 to-secondary-900">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 font-medium text-sm tracking-wide uppercase mb-6">
                Technology Stack
              </span>
            </div>

            <h1 className="heading-display mb-8 animate-slide-up text-white">
              技術スタック
            </h1>

            <p className="text-lead mb-12 animate-slide-up text-white/90 max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              最先端技術とベストプラクティスを駆使して、
              <br className="hidden md:block" />
              革新的で保守性の高いシステムを構築しています
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-scale-up" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">6</div>
                <div className="text-white/80 text-sm">技術領域</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">40+</div>
                <div className="text-white/80 text-sm">技術スタック</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">12+</div>
                <div className="text-white/80 text-sm">開発ツール</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">3年+</div>
                <div className="text-white/80 text-sm">技術経験</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="section-container">
          <div className="grid gap-20">
            {techCategories.map((category, index) => (
              <div key={index} className="space-y-12">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-4xl text-white shadow-glow mx-auto">
                      {category.icon}
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-2xl mx-auto animate-pulse-glow"></div>
                  </div>
                  <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    {category.category}
                  </span>
                  <h2 className="heading-2 mb-6">{category.category}</h2>
                  <p className="text-lead text-secondary-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="card-premium group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                            {tech.name}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-xl text-xs font-semibold shadow-md ${
                              levelColors[tech.level as keyof typeof levelColors]
                            }`}
                          >
                            {tech.level}
                          </span>
                        </div>
                        <p className="text-secondary-600 leading-relaxed">{tech.description}</p>
                        <div className="mt-4 h-1 bg-secondary-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${
                              tech.level === 'Expert' ? 'from-green-500 to-green-600 w-full' :
                              tech.level === 'Advanced' ? 'from-blue-500 to-blue-600 w-4/5' :
                              'from-yellow-500 to-yellow-600 w-3/5'
                            } transition-all duration-1000 delay-300`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>

        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Development Tools
            </span>
            <h2 className="heading-2 mb-6">開発ツール・環境</h2>
            <p className="text-lead max-w-3xl mx-auto">
              プロフェッショナルな開発を支える
              <br className="hidden md:block" />
              最先端ツールチェーンとワークフロー
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {developmentTools.map((tool, index) => (
              <div key={index} className="card-premium text-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-2xl text-white mb-4 mx-auto shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                    🛠️
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {tool.name}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">技術選択の方針</h2>
              <p className="text-lead">プロジェクトに最適な技術を選択するための基準</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">プロジェクト要件重視</h3>
                    <p className="text-secondary-600">
                      パフォーマンス、スケーラビリティ、保守性など、プロジェクトの要件に最も適した技術を選択
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">継続的な学習</h3>
                    <p className="text-secondary-600">
                      新しい技術トレンドを常にキャッチアップし、プロジェクトに活かせるよう研鑽を積む
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⚖️</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">バランス重視</h3>
                    <p className="text-secondary-600">
                      最新技術と実績のある技術のバランスを取り、リスクを最小化
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🏗️</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">アーキテクチャ設計</h3>
                    <p className="text-secondary-600">
                      将来の拡張性と保守性を考慮したシステムアーキテクチャを設計
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">セキュリティファースト</h3>
                    <p className="text-secondary-600">
                      セキュリティを最優先に考慮し、安全で信頼性の高いシステムを構築
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">データドリブン</h3>
                    <p className="text-secondary-600">
                      メトリクスとデータに基づいた技術選択と継続的な改善
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              技術力でプロジェクトを成功に導きます
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              豊富な技術スタックと経験豊富なチームで、
              お客様のビジネス課題を解決するソリューションを提供いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                技術相談を申し込む
              </Link>
              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                事業内容を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}