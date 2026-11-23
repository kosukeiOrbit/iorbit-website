'use client'

import { useState } from 'react'
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
      console.log('Sending form data:', data);

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
          _replyto: data.email,
          _subject: `iOrbitお問い合わせ: ${data.subject}`,
        }),
      })

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (response.ok) {
        console.log('Form submitted successfully!');
        setIsSubmitted(true)
        reset()
      } else {
        const responseText = await response.text()
        console.error('Response error:', responseText);
        let errorData
        try {
          errorData = JSON.parse(responseText)
        } catch {
          errorData = { error: responseText }
        }
        throw new Error(errorData.error || `送信に失敗しました (Status: ${response.status})`)
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-14 h-14 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-secondary-900 mb-3">送信完了</h1>
          <p className="text-secondary-500 mb-8">
            お問い合わせありがとうございます。<br />
            info@iorbit.jp より2営業日以内にご連絡いたします。
          </p>
          <div className="rounded-xl border border-secondary-200 bg-secondary-50 p-5 mb-8 text-left">
            <ul className="space-y-2.5 text-sm text-secondary-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-secondary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                確認メールが送信されました
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-secondary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                迷惑メール・スパムフォルダもご確認ください
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-secondary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                送信者: noreply@formspree.io
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 text-secondary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                営業時間: 平日 9:00-18:00
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setSubmitError(null)
            }}
            className="btn-primary"
          >
            新しいお問い合わせ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-24 border-b border-secondary-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-medium text-sm mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-6">お問い合わせ</h1>
            <p className="text-lg text-secondary-500">
              プロジェクトのご相談、技術的なご質問など、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form
                action="https://formspree.io/f/mpwyaanj"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-semibold text-red-800 mb-1">送信エラー</h4>
                        <p className="text-sm text-red-700">{submitError}</p>
                        <p className="text-xs text-red-600 mt-2">
                          問題が解決しない場合は、直接 <a href="mailto:info@iorbit.jp" className="underline font-medium">info@iorbit.jp</a> までメールでお問い合わせください。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-secondary-500">
                    <span className="text-red-500">*</span> は必須項目です
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-secondary-200 bg-white">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">お問い合わせ先</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">メール</p>
                      <p className="text-sm text-secondary-500">info@iorbit.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">所在地</p>
                      <p className="text-sm text-secondary-500">〒581-0003<br />大阪府八尾市本町６－１４－１５</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-secondary-200 bg-white overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5!2d135.6009!3d34.6267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000dc4e7b6a1a1d%3A0x0!2z5aSn6Ziq5bqc5YWr5bC-5biC5pys55S677yW4oCS77yR77yU4oCS77yR77yV!5e0!3m2!1sja!2sjp!4v1700000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社iOrbit 所在地"
                ></iframe>
                <div className="px-4 py-3">
                  <p className="text-xs text-secondary-500">大阪府八尾市本町６－１４－１５</p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-secondary-200 bg-white">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">対応時間</h3>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-secondary-600">メール: 24時間受付</p>
                    <p className="text-xs text-secondary-400 mt-2">
                      メールでのお問い合わせは2営業日以内にご返信いたします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-secondary-200 bg-white">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">よくあるご質問</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-secondary-900 mb-1">Q. 見積もりは無料ですか？</p>
                    <p className="text-secondary-500">A. はい、お見積もりは無料で承っております。</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900 mb-1">Q. 開発期間はどのくらいですか？</p>
                    <p className="text-secondary-500">A. プロジェクトの規模により異なりますが、詳細をお聞かせいただければお答えいたします。</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900 mb-1">Q. 保守・サポートはありますか？</p>
                    <p className="text-secondary-500">A. はい、開発完了後の保守・サポートも承っております。</p>
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
