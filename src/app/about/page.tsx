import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社iOrbitの会社概要。企業情報、代表者情報、会社の理念・ビジョンについてご紹介いたします。',
}

const companyInfo = {
  name: '株式会社iOrbit',
  established: '2022年2月',
  capital: '100万円',
  employees: '2名',
  address: '〒581-0003 大阪府八尾市本町６－１４－１５',
  phone: 'お問い合わせフォームをご利用ください',
  email: 'info@iorbit.co.jp',
  business: 'システム開発・アプリ開発・組み込み開発・IT コンサルティング',
}

const representative = {
  name: '代表取締役 高橋宏輔',
  profile: `
    2009年に大学でコンピュータサイエンスを専攻し卒業後、大手Sierに就職。
    15年以上のソフトウェア開発経験を積み、特にWebアプリケーション開発とスマホアプリ開発を
    得意分野として、React、Next.js、Flutter、React Nativeなどの最新技術に精通。

    照明制御、複合機制御、ETC連携システム、入退場ゲート制御などの組み込みシステム開発から、
    モダンなWebプラットフォーム、モバイルアプリまで、30以上のプロジェクトを成功に導いた
    豊富な経験を活かし、2022年2月に株式会社iOrbitを設立。

    「技術で未来を創造する」という理念のもと、特にWeb・モバイル分野での最新技術を駆使して
    クライアントのビジネス成長と社会課題の解決に貢献することを目指している。
  `,
  expertise: [
    'Web アプリケーション開発',
    'モバイルアプリ開発',
    'React / Next.js',
    'Flutter / React Native',
    'フルスタック開発',
    'プロジェクトマネジメント',
  ],
}

const values = [
  {
    title: '技術への情熱',
    description: '最新技術を追求し、常に学び続ける姿勢を大切にします',
    icon: '🔥',
  },
  {
    title: '顧客第一',
    description: 'お客様の成功が私たちの成功。真のパートナーとしてサポートします',
    icon: '🤝',
  },
  {
    title: '品質重視',
    description: '妥協のない品質で、長期的に価値を提供し続けます',
    icon: '⭐',
  },
  {
    title: '社会貢献',
    description: '技術を通じて社会課題の解決に貢献します',
    icon: '🌍',
  },
]

const milestones = [
  {
    year: '2022年2月',
    event: '株式会社iOrbit設立',
    description: '代表取締役高橋宏輔により大阪府八尾市にて設立',
  },
  {
    year: '2022年4月',
    event: '初回プロジェクト受注',
    description: '組み込み制御システム開発プロジェクト開始',
  },
  {
    year: '2023年2月',
    event: 'モバイルアプリ開発事業拡大',
    description: 'Flutter、React Native等を活用したクロスプラットフォーム開発本格化',
  },
  {
    year: '2023年8月',
    event: 'Webアプリ開発強化',
    description: 'React、Next.js、Angular等を活用したモダンWeb開発体制確立',
  },
  {
    year: '2024年6月',
    event: 'AI技術導入',
    description: 'AIトレードbot研究開発プロジェクト開始',
  },
]

const certifications = [
  'AWS認定ソリューションアーキテクト',
  'Google Cloud Professional',
  'Microsoft Azure Developer',
  'PMP（プロジェクトマネジメント・プロフェッショナル）',
  '情報処理安全確保支援士',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-900 to-secondary-900">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 font-medium text-sm tracking-wide uppercase mb-6">
                About iOrbit
              </span>
            </div>

            <h1 className="heading-display mb-8 animate-slide-up text-white">
              会社概要
            </h1>

            <p className="text-lead mb-12 animate-slide-up text-white/90 max-w-3xl mx-auto" style={{animationDelay: '0.2s'}}>
              技術で未来を創造し、お客様と社会に価値を提供する
              <br className="hidden md:block" />
              次世代システム開発会社として革新を続けています
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  Company Information
                </span>
                <h2 className="heading-2 mb-6">会社情報</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="card-premium">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">🏢</span>
                      </div>
                      <h3 className="font-bold text-secondary-900">会社名</h3>
                    </div>
                    <p className="text-secondary-700 font-medium">{companyInfo.name}</p>
                  </div>

                  <div className="card-premium">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">📅</span>
                      </div>
                      <h3 className="font-bold text-secondary-900">設立年月</h3>
                    </div>
                    <p className="text-secondary-700 font-medium">{companyInfo.established}</p>
                  </div>

                  <div className="card-premium">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">💰</span>
                      </div>
                      <h3 className="font-bold text-secondary-900">資本金</h3>
                    </div>
                    <p className="text-secondary-700 font-medium">{companyInfo.capital}</p>
                  </div>

                  <div className="card-premium">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">👥</span>
                      </div>
                      <h3 className="font-bold text-secondary-900">従業員数</h3>
                    </div>
                    <p className="text-secondary-700 font-medium">{companyInfo.employees}</p>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <h3 className="font-bold text-secondary-900 text-lg">所在地</h3>
                  </div>
                  <p className="text-secondary-700 font-medium text-lg">{companyInfo.address}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="card-premium">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">📞</span>
                      </div>
                      <h3 className="font-bold text-secondary-900">お問い合わせ</h3>
                    </div>
                    <p className="text-secondary-700 font-medium">{companyInfo.phone}</p>
                  </div>

                  <div className="card-premium">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-lg">✉️</span>
                      </div>
                      <h3 className="font-bold text-secondary-900">メールアドレス</h3>
                    </div>
                    <p className="text-secondary-700 font-medium">{companyInfo.email}</p>
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <h3 className="font-bold text-secondary-900 text-lg">事業内容</h3>
                  </div>
                  <p className="text-secondary-700 font-medium text-lg">{companyInfo.business}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                  Representative
                </span>
                <h2 className="heading-2 mb-6">代表者紹介</h2>
              </div>

              <div className="card-premium relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-40 h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-glow">
                        <span className="text-white text-5xl font-bold">高</span>
                      </div>
                      <div className="absolute inset-0 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full mx-auto animate-pulse-glow"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                      {representative.name}
                    </h3>
                  </div>

                  <div className="space-y-6 text-secondary-700 leading-relaxed text-lg">
                    {representative.profile.trim().split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-secondary-900 mb-4 text-xl">専門領域</h4>
                    <div className="flex flex-wrap gap-3">
                      {representative.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-elegant"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-secondary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400"></div>

        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="heading-2 mb-6 text-white">企業理念・価値観</h2>
            <p className="text-lead text-white/90 max-w-3xl mx-auto">
              革新的なテクノロジーで未来を創造し、
              <br className="hidden md:block" />
              持続可能な価値を社会に提供するための指針
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl text-white mb-6 mx-auto shadow-glow group-hover:shadow-glow-lg transition-all duration-500 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-2xl mx-auto animate-pulse-glow"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">会社の歩み</h2>
              <p className="text-lead">これまでの主要な成長マイルストーン</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="bg-secondary-50 p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-bold text-secondary-900">
                          {milestone.event}
                        </h3>
                        <span className="text-primary-600 font-medium">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-secondary-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-8">保有資格・認定</h2>
            <p className="text-lead mb-8">
              チームメンバーが保有する専門資格・認定
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <span className="text-secondary-900 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              一緒にプロジェクトを成功させましょう
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              お客様のビジネス課題解決のパートナーとして、
              技術力と情熱でサポートいたします。
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                サービス一覧
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}