import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '株式会社iOrbit - システム開発・アプリ開発'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: 'linear-gradient(135deg, #6366f1, #818cf8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
              fontSize: 32,
              fontWeight: 700,
              color: 'white',
            }}
          >
            i
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: 'white',
                lineHeight: 1,
              }}
            >
              iOrbit
            </span>
            <span
              style={{
                fontSize: 16,
                color: '#94a3b8',
                letterSpacing: 4,
                marginTop: 4,
              }}
            >
              TECHNOLOGY
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#e2e8f0',
            textAlign: 'center',
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          システム開発・アプリ開発
        </div>
        <div
          style={{
            fontSize: 18,
            color: '#64748b',
            marginTop: 16,
          }}
        >
          Windows / Web / Mobile
        </div>
      </div>
    ),
    { ...size }
  )
}
