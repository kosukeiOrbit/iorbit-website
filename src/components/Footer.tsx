import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  company: [
    { name: '会社概要', href: '/about' },
    { name: '事業内容', href: '/services' },
    { name: '技術スタック', href: '/tech-stack' },
    { name: '将来製品', href: '/future-products' },
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '/privacy' },
    { name: '利用規約', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary-950 via-primary-950 to-secondary-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400"></div>

      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="株式会社iOrbit"
                width={160}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-secondary-300 mb-8 max-w-lg text-lg leading-relaxed">
              最先端技術とイノベーションで、お客様のビジネス変革を実現する
              <br className="hidden sm:block" />
              プレミアムテクノロジーパートナーです。
            </p>
            <div className="space-y-3 text-secondary-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>〒581-0003 大阪府八尾市本町６－１４－１５</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>代表取締役 高橋宏輔</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@iorbit.co.jp</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">会社情報</h3>
            <ul className="space-y-4">
              {navigation.company.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center text-secondary-300 hover:text-primary-300 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-accent-400 transition-colors duration-300"></div>
                    {item.name}
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">サポート</h3>
            <ul className="space-y-4 mb-8">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center text-secondary-300 hover:text-primary-300 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-accent-400 transition-colors duration-300"></div>
                    {item.name}
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1"
            >
              お問い合わせ
              <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-800/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <p className="text-secondary-400 text-sm">
                © 2024 株式会社iOrbit. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-secondary-500">
                <span className="text-xs">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded"></div>
                  <span className="text-xs font-medium">Next.js & Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-secondary-400">System Status: All Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}