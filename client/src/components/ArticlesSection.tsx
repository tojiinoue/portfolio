/*
 * ArticlesSection - Terminal Noir Design
 * Zenn articles with terminal-style cards
 */

import { useEffect, useRef, useState } from "react";

const articles = [
  {
    title: "Manusでポートフォリオサイトを作ってみた。AIでどこまで実用になるのか検証した話",
    url: "https://zenn.dev/toji_inoue/articles/c3d13d2cc97604",
    emoji: "🛠️",
    type: "TECH",
    date: "2026/03/25",
    likes: 0,
    tags: ["AI", "ポートフォリオ", "Manus", "サイト制作"],
    color: "#58a6ff",
  },
  {
    title: "【個人開発】cc-sdd × OpenAI Codexで仕様駆動開発！飲み会管理アプリ「幹事くん」を爆速リリースした話",
    url: "https://zenn.dev/toji_inoue/articles/3eb730104c86ee",
    emoji: "😎",
    type: "TECH",
    date: "2026/02/15",
    likes: 0,
    tags: ["AI", "個人開発", "cc-sdd", "OpenAI Codex"],
    color: "#58a6ff",
  },
  {
    title: "AI時代の保守で cc-sdd をどう使うか（考え方編）",
    url: "https://zenn.dev/toji_inoue",
    emoji: "😊",
    type: "IDEA",
    date: "2025/01",
    likes: 2,
    tags: ["AI", "cc-sdd", "保守開発"],
    color: "#3fb950",
  },
  {
    title: "AIが正しく判断できる保守案件は、何がどう違うのか（Before / After）",
    url: "https://zenn.dev/toji_inoue",
    emoji: "🐥",
    type: "IDEA",
    date: "2025/01",
    likes: 2,
    tags: ["AI", "保守開発", "実践"],
    color: "#3fb950",
  },
  {
    title: "AIコーディング時代の保守が、なぜこのままでは破綻するのか",
    url: "https://zenn.dev/toji_inoue",
    emoji: "💡",
    type: "IDEA",
    date: "2025/01",
    likes: 1,
    tags: ["AI", "保守開発", "問題提起"],
    color: "#e3b341",
  },
  {
    title: "cc-sdd × GitHub Copilot実運用ガイド",
    url: "https://zenn.dev/toji_inoue",
    emoji: "🔰",
    type: "TECH",
    date: "2025/01",
    likes: 2,
    tags: ["cc-sdd", "GitHub Copilot", "実践"],
    color: "#58a6ff",
  },
  {
    title: "実践：GitHub Copilotで始める仕様駆動開発（cc-sdd導入編）",
    url: "https://zenn.dev/toji_inoue",
    emoji: "🔰",
    type: "TECH",
    date: "2025/01",
    likes: 1,
    tags: ["cc-sdd", "GitHub Copilot", "導入"],
    color: "#58a6ff",
  },
  {
    title: "仕様駆動開発とは何か / なぜ必要か",
    url: "https://zenn.dev/toji_inoue",
    emoji: "🔰",
    type: "IDEA",
    date: "2025/01",
    likes: 0,
    tags: ["cc-sdd", "仕様駆動開発", "概念"],
    color: "#bc8cff",
  },
];

export default function ArticlesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="py-24 bg-[#0d1117]"
      style={{ borderTop: "1px solid #21262d" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#3fb950] font-mono text-sm tracking-widest uppercase mb-2">
            // 05. articles
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            Zenn Articles
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
          <p className="mt-4 text-[#8b949e] text-sm">
            「AI時代の保守」「仕様駆動開発の実践」をテーマに計8本の記事を執筆。
          </p>
        </div>

        {/* Articles grid */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {articles.map((article, i) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff]/40 transition-all duration-200 group hover:shadow-[0_0_20px_rgba(88,166,255,0.06)]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{article.emoji}</span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-mono px-1.5 py-0.5 rounded"
                    style={{
                      color: article.color,
                      backgroundColor: `${article.color}15`,
                      border: `1px solid ${article.color}30`,
                    }}
                  >
                    {article.type}
                  </span>
                  {article.likes > 0 && (
                    <span className="flex items-center gap-1 text-xs text-[#8b949e] font-mono">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {article.likes}
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#e6edf3] text-sm font-medium leading-snug mb-3 group-hover:text-[#58a6ff] transition-colors line-clamp-3">
                {article.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-1.5 py-0.5 bg-[#1c2128] border border-[#30363d] rounded text-[#8b949e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              <p className="text-[#8b949e] font-mono text-xs">{article.date}</p>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://zenn.dev/toji_inoue"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#30363d] text-[#e6edf3] font-mono text-sm rounded hover:border-[#3fb950] hover:text-[#3fb950] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Zennで全記事を見る
          </a>
        </div>
      </div>
    </section>
  );
}
