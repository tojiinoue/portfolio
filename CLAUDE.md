# Portfolio Site — Claude Code Guide

## Stack

- React 19 + Vite 7 + TypeScript
- Tailwind CSS v4 (設定は `client/src/index.css`)
- Dev: `npm run dev` → http://localhost:3000
- 型チェック: `npx tsc --noEmit`
- フォーマット: `npm run format`

## ディレクトリ構成

```
client/src/
  components/      # セクションコンポーネント
  pages/Home.tsx   # 全セクションの組み立て
  index.css        # Tailwind + グローバルスタイル
client/public/     # 静的ファイル（画像等）
docs/review/       # Codexレビュー出力先
```

## デザインシステム: Terminal Noir

### カラー
| 用途 | 値 |
|---|---|
| 背景 | `#0d1117` |
| カード背景 | `#161b22` |
| ボーダー | `#30363d` |
| テキスト（主） | `#e6edf3` |
| テキスト（薄） | `#8b949e` |
| Electric Blue | `#58a6ff` |
| Terminal Green | `#3fb950` |
| Purple | `#bc8cff` |
| Yellow | `#e3b341` |
| Red | `#f78166` |

### 共通パターン
- セクション外枠: `py-24 bg-[#0d1117]`
- コンテナ: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- カード: `bg-[#161b22] border border-[#30363d] rounded-lg`
- セクションラベル: `text-[#3fb950] font-mono text-sm tracking-widest uppercase`
- 見出し: `text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]`
- アクセントライン: `h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent`
- 出現アニメーション: `IntersectionObserver` + `opacity/translate-y` transition

## セクション構成

現在の表示順と番号（変更時は必ず連番を維持する）:

| # | id | コンポーネント |
|---|---|---|
| 01 | about | AboutSection |
| 02 | skills | SkillsSection |
| 03 | experience | ExperienceSection |
| 04 | projects | ProjectsSection |
| 05 | services | ServicesSection |
| 06 | articles | ArticlesSection |
| 07 | contact | ContactSection |

## セクション追加手順

1. `client/src/components/XxxSection.tsx` を既存パターンに倣って作成
2. `client/src/pages/Home.tsx` に import して `<ContactSection />` の直前に追加
3. `client/src/components/Navigation.tsx` の `navItems` に追加
4. セクション番号を連番に更新（後続セクションも繰り下げ）
5. `npx tsc --noEmit` でエラーがないか確認

## プロフィール写真

- ファイル: `client/public/profile-icon.png`
- 参照: `AboutSection.tsx` の `PROFILE_PHOTO = "/profile-icon.png"`

## ブランチ・PR 運用

- 作業ブランチ: `fix-text` などのトピックブランチ
- マージ先: `main`
- Vercel が `main` を自動デプロイ
