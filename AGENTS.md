# Portfolio Site — Codex Guide

## プロジェクト概要

React 19 + Vite + TypeScript 製のポートフォリオサイト。Terminal Noir デザイン。

## 主要ファイル

| ファイル | 役割 |
|---|---|
| `client/src/pages/Home.tsx` | 全セクションの組み立て |
| `client/src/components/Navigation.tsx` | ナビゲーション（navItems 配列） |
| `client/src/components/` | 各セクションコンポーネント |

## レビュー出力規約

- 結果は `docs/review/<テーマ名>.md` に保存する
- レビュー後は必ず `npx tsc --noEmit` を実行してエラーがないか確認する

## デザイン一貫性チェックリスト

セクション追加・修正時に確認する項目:

- [ ] `py-24 bg-[#0d1117]` と `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` を使用している
- [ ] セクションラベルが `// NN. section-name` 形式で連番になっている
- [ ] カードが `bg-[#161b22] border border-[#30363d] rounded-lg` を使用している
- [ ] 装飾用絵文字・アイコンに `aria-hidden="true"` が付いている
- [ ] ページ内遷移リンクは `<button>` でなく `<a href="#id">` を使用している
- [ ] モバイル（sm未満）でレイアウトが崩れない
- [ ] ナビゲーションのスクロール対象 `id` がセクションの `id` と一致している

## セクション番号の現状

`05. services` → `06. articles` → `07. contact` の順。
新規セクションを追加する場合は Contact の直前に挿入し、番号を繰り下げること。
