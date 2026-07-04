# Shadow — Landing Page

[onigirito.github.io/ShadowHarness](https://onigirito.github.io/ShadowHarness/) — Shadow（デスクトップシェル＋永続コンテキスト基盤）の宣伝ページ。

Astro (static) + GitHub Pages。`main` に push すると GitHub Actions が自動でビルド・デプロイする
（`.github/workflows/deploy.yml`）。

## 開発

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # ./dist に静的ビルド
npm run preview   # ビルド結果をローカルでプレビュー
```

## 構成

```
src/pages/index.astro   — 全ページ（ヒーロー / コンセプト / デモ / 技術詳細）
public/                 — 画像・動画・favicon・robots.txt
astro.config.mjs        — site/base（GitHub Pages 用）＋ sitemap integration
.github/workflows/      — Pages への自動デプロイ
```

ブランドカラー・フォントは `../shadow-video/brand/` の広報素材（X/YouTube バナー）に合わせている。
