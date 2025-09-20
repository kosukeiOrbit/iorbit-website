import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '株式会社iOrbit | システム開発・アプリ開発',
    short_name: 'iOrbit',
    description: '株式会社iOrbitは、Windowsアプリ、WEBアプリ、スマホアプリの受託開発を行うシステム開発会社です。',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}