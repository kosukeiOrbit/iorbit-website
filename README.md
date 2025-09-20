# 株式会社iOrbit 公式ウェブサイト

## プロジェクト概要

株式会社iOrbitの公式ウェブサイトプロジェクトです。システム開発会社として現在の受託開発事業と将来の自社製品事業を紹介するコーポレートサイトを構築します。

## 技術スタック

- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォーム管理**: React Hook Form
- **フォント**: Inter (Google Fonts)
- **ホスティング**: Vercel/Netlify
- **ドメイン**: 独自ドメイン取得予定

## プロジェクト構成

```
iorbit-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # トップページ
│   │   ├── services/page.tsx     # 事業内容
│   │   ├── tech-stack/page.tsx   # 技術スタック
│   │   ├── future-products/page.tsx # 将来製品
│   │   ├── about/page.tsx        # 会社概要
│   │   └── contact/page.tsx      # お問い合わせ
│   ├── components/               # 共通コンポーネント
│   └── styles/                   # スタイルファイル
├── public/                       # 静的ファイル
├── docs/                         # プロジェクト文書
│   └── requirements.md           # 詳細要件定義
└── README.md                     # このファイル
```

## 機能

- 📱 レスポンシブデザイン（スマホ対応）
- 🎨 モダンで高級感のあるデザイン（青系コーポレートカラー）
- 🔍 SEO最適化
- 📊 パフォーマンス最適化
- 📝 フォームバリデーション
- 🌐 多ページサイト構成

## ページ構成

1. **トップページ** (`/`) - 会社概要、事業紹介
2. **事業内容** (`/services`) - 受託開発サービス詳細
3. **技術スタック** (`/tech-stack`) - 使用技術・スキル
4. **将来製品** (`/future-products`) - 自社製品計画
5. **会社概要** (`/about`) - 企業情報、代表者情報
6. **お問い合わせ** (`/contact`) - メール問い合わせフォーム

## 開発環境セットアップ

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone <repository-url>
cd iorbit-website

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

### 利用可能なスクリプト
```bash
npm run dev         # 開発サーバー起動
npm run build       # プロダクションビルド
npm run start       # プロダクションサーバー起動
npm run lint        # ESLintチェック
npm run typecheck   # TypeScriptタイプチェック
```

## デプロイ

### Vercel
```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel --prod
```

### Netlify
```bash
# ビルドしてデプロイ
npm run build
# distフォルダをNetlifyにアップロード
```

## 開発ガイドライン

### コーディング規約
- TypeScript strict mode使用
- ESLint + Prettierでコード整形
- Tailwind CSSでスタイリング
- コンポーネントベース設計

### ディレクトリ構成規約
- `src/app/`: Next.js App Routerのページファイル
- `src/components/`: 再利用可能なReactコンポーネント
- `src/styles/`: グローバルスタイルとTailwind設定
- `public/`: 画像、favicon等の静的ファイル

## SEO設定

- 各ページでメタデータ設定済み
- サイトマップ自動生成 (`/sitemap.xml`)
- robots.txt設定済み (`/robots.txt`)
- PWAマニフェスト設定済み

## カスタマイズ

### カラーパレット

Tailwind CSSの設定ファイル (`tailwind.config.js`) でカラーパレットをカスタマイズできます。

### フォント

Google Fontsを使用しています。`src/app/globals.css`でフォントを変更できます。

### レイアウト

共通のレイアウトコンポーネントは `src/components/` に配置されています。

## ライセンス

MIT License

## お問い合わせ

- **メール**: info@iorbit.co.jp
- **電話**: 03-0000-0000
- **住所**: 〒000-0000 東京都○○区○○○○