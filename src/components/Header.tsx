'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: '事業内容', href: '/services' },
  { name: '技術スタック', href: '/tech-stack' },
  { name: '将来製品', href: '/future-products' },
  { name: '会社概要', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-elegant sticky top-0 z-50 border-b border-secondary-200/50">
      <nav className="section-container flex items-center justify-between py-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="transition-all duration-300 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="株式会社iOrbit"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                pathname === item.href
                  ? 'text-primary-600 bg-primary-50 shadow-md'
                  : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              {item.name}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                pathname === item.href ? 'w-8' : 'w-0 group-hover:w-6'
              }`}></div>
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm px-6 py-3">
            お問い合わせ
            <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">メニューを開く</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden animate-slide-down">
          <div className="px-6 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-lg border-t border-secondary-200/50">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-accent-50 shadow-md'
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50 hover:shadow-md'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-secondary-200/50">
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
                <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}