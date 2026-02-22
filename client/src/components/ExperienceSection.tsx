/*
 * ExperienceSection - Terminal Noir Design
 * Work experience with terminal-style timeline
 */

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "2025.04 〜 現在",
    company: "株式会社パソナ",
    role: "システムエンジニア（新卒1年目）",
    type: "FULL-TIME",
    color: "#58a6ff",
    items: [
      {
        title: "保守開発・運用（3案件同時並行）",
        desc: "既存システムの追加開発、AWS保守を担当。複数案件を同時進行で管理。",
        tags: ["AWS", "保守開発", "追加開発"],
      },
      {
        title: "レコメンド機能の新規開発",
        desc: "GA4 Data APIから取得したユーザー行動ログをpandasで前処理・集計し、パーソナライズされたレコメンドロジックを実装。FastAPIを用いた高パフォーマンスなAPI基盤を構築。",
        tags: ["Python", "FastAPI", "pandas", "GA4"],
      },
      {
        title: "AI駆動による業務プロセス改善",
        desc: "既存コードから仕様書を自動生成するプロンプト開発、NotebookLMを活用した案件専用QAチャットの構築により、チームの生産性を向上。",
        tags: ["AI", "NotebookLM", "Prompt Engineering", "cc-sdd"],
      },
    ],
  },
];

const businessExperiences = [
  {
    title: "コミュニティ運営",
    period: "大学時代",
    desc: "千葉県でイベントサークルをゼロから立ち上げ、1年で400名規模に成長。代表として企画・運営・広報を一人で担当。",
    icon: "👥",
    color: "#bc8cff",
  },
  {
    title: "SNSマーケティング・動画編集",
    period: "大学〜現在",
    desc: "企業のSNSコンサルティング、YouTube/TikTokの動画編集スクールで習得したスキルを活かしたチームの組織化・ディレクションを経験。",
    icon: "🎬",
    color: "#e3b341",
  },
  {
    title: "インサイドセールス",
    period: "大学時代",
    desc: "顧客獲得のフロント業務に従事。エンジニアになる前のビジネス経験として、顧客視点を養った。",
    icon: "📞",
    color: "#3fb950",
  },
  {
    title: "飲食・小売アルバイト",
    period: "高校〜大学",
    desc: "ガスト、かっぱ寿司、スーパー品出し、イタリアン、焼肉屋など多様な現場でサービス業の基礎を習得。",
    icon: "🍽️",
    color: "#58a6ff",
  },
];

export default function ExperienceSection() {
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
      id="experience"
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
            // 03. experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            Work Experience
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
        </div>

        {/* Professional Experience */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {experiences.map((exp) => (
            <div key={exp.company} className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#30363d] ml-4 hidden sm:block" />

              <div className="sm:pl-12">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold absolute left-0 hidden sm:flex"
                    style={{
                      backgroundColor: `${exp.color}20`,
                      border: `2px solid ${exp.color}`,
                      color: exp.color,
                    }}
                  >
                    01
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold font-mono text-[#e6edf3]">
                        {exp.company}
                      </h3>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          color: exp.color,
                          backgroundColor: `${exp.color}15`,
                          border: `1px solid ${exp.color}40`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-[#8b949e] font-mono text-sm">
                      {exp.role} | {exp.period}
                    </p>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  {exp.items.map((item, i) => (
                    <div
                      key={item.title}
                      className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff]/30 transition-all duration-200"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-[#3fb950] font-mono text-sm mt-0.5 shrink-0">
                          ▶
                        </span>
                        <div>
                          <h4 className="text-[#e6edf3] font-mono font-bold text-sm mb-2">
                            {item.title}
                          </h4>
                          <p className="text-[#8b949e] text-sm leading-relaxed mb-3">
                            {item.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-mono px-2 py-0.5 bg-[#1c2128] border border-[#30363d] rounded text-[#8b949e]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business & Creative Experience */}
        <div
          className={`transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-bold font-mono text-[#e6edf3] mb-6">
            <span className="text-[#bc8cff]">//</span> Business & Creative Experience
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {businessExperiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-opacity-60 transition-all duration-200"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = exp.color + "50";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#30363d";
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <div>
                    <h4
                      className="font-mono font-bold text-sm mb-1"
                      style={{ color: exp.color }}
                    >
                      {exp.title}
                    </h4>
                    <p className="text-[#8b949e] text-xs font-mono mb-2">
                      {exp.period}
                    </p>
                    <p className="text-[#8b949e] text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
