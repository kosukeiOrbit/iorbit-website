'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'サービス', href: '/services' },
  { name: '技術スタック', href: '/tech-stack' },
  { name: '将来製品', href: '/future-products' },
  { name: '会社概要', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-secondary-200/60">
      <nav className="section-container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="株式会社iOrbit"
            width={120}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                pathname === item.href
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            お問い合わせ
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-secondary-500 hover:text-secondary-700 rounded-md hover:bg-secondary-50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="メニューを開く"
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-secondary-100 animate-slide-down">
          <div className="section-container py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center btn-primary text-sm py-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
