'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  projectType: string
  budget: string
}

const projectTypes = [
  { value: 'windows-app', label: 'Windowsアプリ開発' },
  { value: 'web-app', label: 'WEBアプリ開発' },
  { value: 'mobile-app', label: 'スマホアプリ開発' },
  { value: 'ai-bot', label: 'AIトレードbot' },
  { value: 'consultation', label: '技術コンサルティング' },
  { value: 'other', label: 'その他' },
]

const budgetRanges = [
  { value: 'under-50', label: '50万円未満' },
  { value: '50-100', label: '50万円〜100万円' },
  { value: '100-300', label: '100万円〜300万円' },
  { value: '300-500', label: '300万円〜500万円' },
  { value: 'over-500', label: '500万円以上' },
  { value: 'consultation', label: '相談したい' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Formspreeエンドポイントに送信
      const response = await fetch('https://formspree.io/f/mpwyaanj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || '',
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
          projectType: data.projectType,
          budget: data.budget || '',
          _replyto: data.email, // Formspree用の返信先設定
          _subject: `iOrbitお問い合わせ: ${data.subject}`, // メール件名
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || '送信に失敗しました')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'お問い合わせの送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-primary-900 to-secondary-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="max-w-2xl mx-auto text-center p-8 relative z-10">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="heading-2 mb-6 text-green-400">送信完了</h1>
          <p className="text-lead mb-8 text-white/90">
            お問い合わせありがとうございます。<br />
            info@iorbit.jp より2営業日以内にご連絡いたします。
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
            <p className="text-white/80 text-sm">
              📧 確認メールが送信されました<br />
              💡 迷惑メールフォルダもご確認ください<br />
              ⏰ 営業時間: 平日 9:00-18:00
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setSubmitError(null)
            }}
            className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1"
          >
            新しいお問い合わせ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-primary-900 to-secondary-900">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 font-medium text-sm tracking-wide uppercase mb-6">
                Contact Us
              </span>
            </div>

            <h1 className="heading-display mb-8 animate-slide-up text-white">
              お問い合わせ
            </h1>

            <p className="text-lead mb-12 animate-slide-up text-white/90 max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
              プロジェクトのご相談、技術的なご質問など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'お名前は必須です' })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'メールアドレスは必須です',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: '正しいメールアドレスを入力してください',
                        },
                      })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="example@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-900 mb-2">
                      会社名・組織名
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="株式会社サンプル"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-secondary-900 mb-2">
                      プロジェクト種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      {...register('projectType', { required: 'プロジェクト種別を選択してください' })}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">選択してください</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-secondary-900 mb-2">
                      ご予算
                    </label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">選択してください</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-900 mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: '件名は必須です' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Webアプリ開発のご相談"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-900 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'お問い合わせ内容は必須です' })}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-vertical"
                    placeholder="プロジェクトの詳細、ご要望、ご質問などを自由にご記入ください。"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* ハニーポット（スパム対策） - 非表示 */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="honeypot">このフィールドは空のままにしてください</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <div className="text-red-400 text-xl mr-3">❌</div>
                      <div>
                        <h4 className="text-red-800 font-semibold mb-1">送信エラー</h4>
                        <p className="text-red-700 text-sm">{submitError}</p>
                        <p className="text-red-600 text-xs mt-2">
                          問題が解決しない場合は、直接 <a href="mailto:info@iorbit.jp" className="underline font-medium">info@iorbit.jp</a> までメールでお問い合わせください。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-6">
                  <p className="text-sm text-secondary-600">
                    <span className="text-red-500">*</span> は必須項目です
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1 disabled:bg-secondary-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none min-w-[160px] flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        送信中...
                      </>
                    ) : (
                      '送信する'
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="heading-3 mb-6">お問い合わせ先</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-600 text-xl">📧</span>
                    <div>
                      <p className="font-medium text-secondary-900">メール</p>
                      <p className="text-secondary-600">info@iorbit.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-600 text-xl">📍</span>
                    <div>
                      <p className="font-medium text-secondary-900">所在地</p>
                      <p className="text-secondary-600">〒581-0003<br />大阪府八尾市本町６－１４－１５</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold mb-4 text-secondary-900">対応時間</h3>
                <div className="space-y-2 text-secondary-600">
                  <p>📧 メール: 24時間受付</p>
                  <p className="text-sm text-secondary-500 mt-4">
                    メールでのお問い合わせは2営業日以内にご返信いたします。
                  </p>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold mb-4 text-secondary-900">よくあるご質問</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-secondary-900 mb-1">Q. 見積もりは無料ですか？</p>
                    <p className="text-secondary-600">A. はい、お見積もりは無料で承っております。</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900 mb-1">Q. 開発期間はどのくらいですか？</p>
                    <p className="text-secondary-600">A. プロジェクトの規模により異なりますが、詳細をお聞かせいただければお答えいたします。</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900 mb-1">Q. 保守・サポートはありますか？</p>
                    <p className="text-secondary-600">A. はい、開発完了後の保守・サポートも承っております。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}