# Formspree設定ガイド

## 概要
iOrbitウェブサイトのお問い合わせフォームは、Formspreeサービスを使用してメール送信機能を実装しています。

## Formspree設定手順

### 1. Formspreeアカウント作成
1. https://formspree.io にアクセス
2. 「Get Started」をクリックして無料アカウント作成
3. メールアドレスとパスワードを設定

### 2. フォーム作成
1. ダッシュボードで「New Form」をクリック
2. フォーム名: `iOrbit Contact Form`
3. 送信先メールアドレス: `info@iorbit.jp`
4. フォーム作成後、Form IDをメモ（例: `xpznvoya`）

### 3. コード設定 ✅ 完了
フォームエンドポイントが設定済み：
```typescript
const response = await fetch('https://formspree.io/f/mpwyaanj', {
```
Form ID: `mpwyaanj` で `info@iorbit.jp` に送信されます。

### 4. Formspree設定オプション
ダッシュボードで以下を設定：
- **Email Settings**: 確認メール自動送信の有効化
- **Spam Protection**: reCAPTCHA無効（ハニーポット使用）
- **Submissions**: 送信データの保存期間設定

## 機能詳細

### 送信データ
- 名前 (name)
- メールアドレス (email)
- 会社名 (company) - 任意
- 電話番号 (phone) - 任意
- プロジェクト種別 (projectType)
- 予算 (budget) - 任意
- 件名 (subject)
- お問い合わせ内容 (message)

### スパム対策
- **ハニーポット**: 非表示フィールド `_gotcha` を使用
- **Formspree標準**: IPベースのスパム検出
- **今後**: 必要に応じてreCAPTCHA v3追加可能

### エラーハンドリング
- ネットワークエラー
- Formspree APIエラー
- バリデーションエラー
- タイムアウト処理

### UI/UX改善
- 送信中のローディングアニメーション
- 成功時の詳細な確認メッセージ
- エラー時の代替連絡手段提示
- レスポンシブデザイン対応

## 料金プラン
- **無料プラン**: 月50件まで
- **有料プラン**: 必要に応じて月1000件以上

## セキュリティ
- HTTPS通信
- フォームデータ暗号化
- スパム防止機能
- IPアドレス制限（必要に応じて）

## トラブルシューティング

### よくある問題
1. **Form IDが正しくない**: Formspreeダッシュボードで確認
2. **CORS エラー**: ドメイン設定を確認
3. **送信制限**: 無料プランの月間制限確認
4. **迷惑メール**: SPFレコード設定推奨

### デバッグ方法
1. ブラウザ開発者ツールでNetwork タブ確認
2. Formspreeダッシュボードで送信ログ確認
3. エラーメッセージの詳細確認

## 連絡先
技術的な問題や設定に関する質問は、開発チームまでお問い合わせください。