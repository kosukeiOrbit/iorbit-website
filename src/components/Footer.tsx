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
    <footer className="bg-secondary-950 text-secondary-400 border-t border-secondary-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="株式会社iOrbit"
              width={120}
              height={34}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              最先端技術とイノベーションで、お客様のビジネス変革を実現するテクノロジーパートナーです。
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-secondary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>〒581-0003 大阪府八尾市本町６－１４－１５</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-secondary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@iorbit.jp</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">会社情報</h3>
            <ul className="space-y-2.5">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">サポート</h3>
            <ul className="space-y-2.5 mb-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors duration-150">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary text-sm py-2 px-5">
              お問い合わせ
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-secondary-800/50 text-xs text-secondary-500">
          © 2025 株式会社iOrbit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
