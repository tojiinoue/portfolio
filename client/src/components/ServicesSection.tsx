/*
 * ServicesSection - Terminal Noir Design
 * Freelance services with terminal-style cards
 */

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "AI駆動開発プロセス改善",
    subtitle: "仕様駆動開発の導入支援",
    description:
      "AIコーディングで手戻りが頻発しているチームへ。cc-sdd / Kiro IDEを活用した仕様駆動開発を導入し、手戻りゼロの開発現場を構築します。",
    price: "30,000円〜",
    tags: ["cc-sdd", "Kiro IDE", "GitHub Copilot"],
    color: "#58a6ff",
    icon: "🤖",
  },
  {
    title: "仕様書・ナレッジ基盤整備",
    subtitle: "属人化解消・ドキュメント自動化",
    description:
      "形骸化した仕様書をAIで自動生成・自動更新の仕組みに転換。NotebookLMでナレッジを集約し、誰でも即時参照できる環境を構築します。",
    price: "30,000円〜",
    tags: ["NotebookLM", "AI自動化", "Markdown"],
    color: "#3fb950",
    icon: "📄",
  },
  {
    title: "Webシステム追加開発・保守",
    subtitle: "バックエンド開発全般",
    description:
      "既存システムへの機能追加・改修・保守運用を担当。要件整理から実装・仕様書納品まで一貫対応。AIを活用した高速開発で短納期に対応します。",
    price: "3,500円〜/時間",
    tags: ["PHP/Laravel", "Python/FastAPI", "AWS"],
    color: "#bc8cff",
    icon: "⚙️",
  },
  {
    title: "AWSコスト最適化調査",
    subtitle: "不要リソース特定・削減提案",
    description:
      "KiroCLIを活用したAWSリソース横断調査で、不要コストを特定・削減します。年間720ドル削減の実績あり。調査レポートから実施まで対応。",
    price: "30,000円〜",
    tags: ["AWS", "KiroCLI", "SAA保有"],
    color: "#e3b341",
    icon: "☁️",
  },
];

export default function ServicesSection() {
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
      id="services"
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
            // 05. services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            副業サービス
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
          <p className="mt-4 text-[#8b949e] text-sm">
            AI駆動開発の知見を活かし、チームの開発効率向上を支援します。
          </p>
        </div>

        {/* Service cards */}
        <div
          className={`grid sm:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 transition-all duration-200"
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  service.color + "60";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${service.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#30363d";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="min-w-0">
                  <div className="text-2xl mb-2" aria-hidden="true">{service.icon}</div>
                  <h3
                    className="font-mono font-bold text-base"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#8b949e] font-mono text-xs mt-0.5">
                    {service.subtitle}
                  </p>
                </div>
                <span
                  className="self-start mt-3 sm:mt-0 sm:ml-4 font-mono font-bold text-sm px-3 py-1.5 rounded whitespace-nowrap"
                  style={{
                    color: "#3fb950",
                    backgroundColor: "#3fb95015",
                    border: "1px solid #3fb95040",
                  }}
                >
                  {service.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#8b949e] text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-1.5 py-0.5 bg-[#1c2128] border border-[#30363d] rounded text-[#8b949e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#3fb950] text-[#0d1117] font-mono font-bold rounded text-sm hover:bg-[#56d364] transition-all duration-200 hover:shadow-[0_0_20px_rgba(63,185,80,0.4)]"
          >
            $ contact me →
          </a>
        </div>
      </div>
    </section>
  );
}
