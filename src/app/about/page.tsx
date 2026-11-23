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
  email: 'info@iorbit.jp',
  website: 'https://iorbit.jp',
  business: 'システム開発・アプリ開発・組み込み開発・IT コンサルティング',
}

const representative = {
  name: '代表取締役 高橋宏輔',
  profile: `
    大学卒業後、大手Sierに就職し、15年以上のソフトウェア開発経験を積み重ねる。
    特にWebアプリケーション開発とスマホアプリ開発を得意分野として、
    React、Next.js、Flutter、React Nativeなどの最新技術に精通。

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
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: '顧客第一',
    description: 'お客様の成功が私たちの成功。真のパートナーとしてサポートします',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: '品質重視',
    description: '妥協のない品質で、長期的に価値を提供し続けます',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: '社会貢献',
    description: '技術を通じて社会課題の解決に貢献します',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
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
  {
    year: '2025年9月',
    event: '企業サイトリニューアル',
    description: 'モダンなデザインと技術スタックでウェブサイトを全面刷新',
  },
]

const certifications = [
  'AWS認定ソリューションアーキテクト',
  'Google Cloud Professional',
  'Microsoft Azure Developer',
  'PMP（プロジェクトマネジメント・プロフェッショナル）',
  '情報処理安全確保支援士',
]

const companyRows = [
  { label: '会社名', value: companyInfo.name },
  { label: '設立', value: companyInfo.established },
  { label: '資本金', value: companyInfo.capital },
  { label: '従業員数', value: companyInfo.employees },
  { label: '所在地', value: companyInfo.address },
  { label: 'メール', value: companyInfo.email },
  { label: 'ウェブサイト', value: companyInfo.website },
  { label: '事業内容', value: companyInfo.business },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">会社概要</h1>
            <p className="text-lg text-secondary-500">
              技術で未来を創造し、お客様と社会に価値を提供する次世代システム開発会社です。
            </p>
          </div>
        </div>
      </section>

      {/* Company Info + Representative */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Company Info */}
            <div>
              <p className="text-primary-600 font-medium text-sm mb-3">Company Information</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-8">会社情報</h2>

              <div className="border border-secondary-200 rounded-xl divide-y divide-secondary-200">
                {companyRows.map((row, index) => (
                  <div key={index} className="flex px-6 py-4">
                    <div className="w-28 flex-shrink-0 text-sm font-medium text-secondary-500">{row.label}</div>
                    <div className="text-secondary-900 text-sm">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Representative */}
            <div>
              <p className="text-primary-600 font-medium text-sm mb-3">Representative</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-8">代表者紹介</h2>

              <div className="p-6 rounded-xl border border-secondary-200 bg-white">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">高</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900">{representative.name}</h3>
                </div>

                <div className="space-y-4 text-sm text-secondary-600 leading-relaxed">
                  {representative.profile.trim().split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-secondary-100">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3">専門領域</h4>
                  <div className="flex flex-wrap gap-2">
                    {representative.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-md text-sm font-medium"
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
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-secondary-50/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-primary-600 font-medium text-sm mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">企業理念・価値観</h2>
            <p className="text-lg text-secondary-500">
              革新的なテクノロジーで未来を創造し、持続可能な価値を社会に提供するための指針
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-secondary-200 bg-white">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-sm text-secondary-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary-600 font-medium text-sm mb-3">History</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">会社の歩み</h2>
              <p className="text-lg text-secondary-500">これまでの主要な成長マイルストーン</p>
            </div>

            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-secondary-200 my-1"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-medium text-primary-600">{milestone.year}</span>
                    <h3 className="text-base font-semibold text-secondary-900 mt-0.5">{milestone.event}</h3>
                    <p className="text-sm text-secondary-500 mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 sm:py-28 bg-secondary-50/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary-600 font-medium text-sm mb-3">Certifications</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-4">保有資格・認定</h2>
              <p className="text-lg text-secondary-500">チームメンバーが保有する専門資格・認定</p>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center px-5 py-3.5 rounded-lg border border-secondary-200 bg-white">
                  <svg className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-secondary-900">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-primary-600">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              一緒にプロジェクトを成功させましょう
            </h2>
            <p className="text-lg text-primary-100 mb-10">
              お客様のビジネス課題解決のパートナーとして、技術力と情熱でサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
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
