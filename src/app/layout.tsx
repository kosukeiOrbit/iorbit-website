import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: '株式会社iOrbit | システム開発・アプリ開発',
    template: '%s | 株式会社iOrbit'
  },
  description: '株式会社iOrbitは、Windowsアプリ、WEBアプリ、スマホアプリの受託開発を行うシステム開発会社です。モダンな技術スタックで高品質なソリューションを提供いたします。',
  keywords: ['システム開発', 'アプリ開発', 'Webアプリ', 'スマホアプリ', 'Windows', '受託開発', 'AI', 'トレードbot'],
  authors: [{ name: '株式会社iOrbit' }],
  creator: '株式会社iOrbit',
  publisher: '株式会社iOrbit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iorbit.jp'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://iorbit.jp',
    title: '株式会社iOrbit | システム開発・アプリ開発',
    description: '株式会社iOrbitは、Windowsアプリ、WEBアプリ、スマホアプリの受託開発を行うシステム開発会社です。',
    siteName: '株式会社iOrbit',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社iOrbit | システム開発・アプリ開発',
    description: '株式会社iOrbitは、Windowsアプリ、WEBアプリ、スマホアプリの受託開発を行うシステム開発会社です。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}