# /new-section — Terminal Noir セクション追加

新しいセクションを Terminal Noir デザインパターンに従って追加します。

## 使い方

```
/new-section <セクション名> <セクションタイトル>
```

例: `/new-section timeline 職歴タイムライン`

## 実行手順

以下をすべて実施してください。

### 1. セクション番号を決定する

`client/src/pages/Home.tsx` の現在のセクション順を確認し、
Contact（`// 07. contact`）の直前に挿入する番号を決める。
Contact 以降の番号は繰り下げる。

### 2. コンポーネントファイルを作成する

`client/src/components/<PascalCase>Section.tsx` を以下のテンプレートで作成:

```tsx
import { useEffect, useRef, useState } from "react";

export default function <Name>Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="<id>"
      ref={sectionRef}
      className="py-24 bg-[#0d1117]"
      style={{ borderTop: "1px solid #21262d" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#3fb950] font-mono text-sm tracking-widest uppercase mb-2">
            // NN. <id>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            <Title>
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
        </div>

        {/* Content */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* ここにコンテンツを追加 */}
        </div>
      </div>
    </section>
  );
}
```

### 3. Home.tsx に追加する

`<ContactSection />` の直前に挿入:

```tsx
import <Name>Section from "@/components/<Name>Section";
// ...
<ServicesSection />
<<Name>Section />   {/* ← 追加 */}
<ArticlesSection />
<ContactSection />
```

### 4. Navigation.tsx に追加する

`navItems` 配列の `articles` の前に挿入:

```tsx
{ label: "<id>", href: "#<id>" },
```

### 5. 型チェック

```bash
npx tsc --noEmit
```

エラーがなければ完了。
