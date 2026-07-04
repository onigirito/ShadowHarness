## TODO (2026-07-05, レビュー指摘) — プロモ動画を作り直すこと

**現状のトップ動画 `demo-editor-highlight.mp4`（32秒）は品質不足。末尾がぶつ切りで、
単一場面の切り出しに過ぎない。サイトの顔として作り直すこと。**
※この指示は別PC（素材の無い環境）から残したもの。実素材と Shadow アプリ本体は
　この会社環境側にしか無いので、実制作はこの環境で行う前提。

### 制作ブリーフ（Shadow プロモ動画 v3）

- **尺**: 45〜60秒。冒頭3秒で掴む（ロゴ → キーコピー1行）。
- **カット構成**（各3〜5秒、テンポよく複数場面を切り替える）:
  1. デスクトップ全景（Shadow のシェル全体）
  2. 記憶 — セッションをまたいで文脈が続く場面
  3. workspace — 散らからず整理される場面
  4. PREVIEW ペイン — ドキュメント/画像プレビュー＋編集＋AIコード補完
  5. レンダー結果の表示
  6. ロゴ ＋ CTA（サイトURL）で締め
- **音楽**: ブランドに合う BGM を付ける。**必ずライセンスフリー/権利クリアな音源**を使い、
  出典をコミットに記録。カットの切り替えを音のビート/小節に合わせる。
- **末尾**: 黒フェード ＋ ロゴでクリーンに終わる（ぶつ切り厳禁）。音声もフェードアウト。
- **テロップ/字幕**: ブランドフォント・カラーに準拠（`shadow-video/brand/` の広報素材に合わせる）。
- **書き出し**: mp4 (H.264)、`public/` に配置。ポスターフレーム（`demo-poster.jpg` 相当）も更新。
- 差し替え箇所: `src/pages/index.astro` の `<video>`（demo-editor-highlight.mp4）。
  完成まではこのクリップをトップの目立つ位置から下げる判断も可（スクショ＋YouTube 2本で代替）。

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
