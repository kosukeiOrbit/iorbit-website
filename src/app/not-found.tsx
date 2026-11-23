import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-primary-600 font-semibold text-sm mb-3">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-4">
          ページが見つかりません
        </h1>
        <p className="text-secondary-500 mb-8 max-w-md mx-auto">
          お探しのページは移動または削除された可能性があります。
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            トップページへ
          </Link>
          <Link href="/contact" className="btn-outline">
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
}
