/*
 * SkillsSection - Terminal Noir Design
 * Technical skills with code-editor syntax highlighting aesthetic
 */

import { useEffect, useRef, useState } from "react";



const skillCategories = [
  {
    category: "Backend",
    color: "#58a6ff",
    icon: "⚙️",
    skills: [
      { name: "PHP (Laravel)", level: 75 },
      { name: "Python (FastAPI, Django)", level: 70 },
      { name: "Ruby (Rails)", level: 65 },
    ],
  },
  {
    category: "Data Analysis",
    color: "#3fb950",
    icon: "📊",
    skills: [
      { name: "pandas", level: 70 },
      { name: "GA4 Data API", level: 65 },
    ],
  },
  {
    category: "Infrastructure",
    color: "#e3b341",
    icon: "☁️",
    skills: [
      { name: "AWS (CloudFront, S3, EC2)", level: 60 },
      { name: "Vercel", level: 75 },
    ],
  },
  {
    category: "AI / Methodology",
    color: "#bc8cff",
    icon: "🤖",
    skills: [
      { name: "仕様駆動開発 (cc-sdd)", level: 85 },
      { name: "Prompt Engineering", level: 80 },
      { name: "NotebookLM", level: 75 },
      { name: "GitHub Copilot", level: 80 },
    ],
  },
];

const techTags = [
  "PHP", "Laravel", "Python", "FastAPI", "Django", "Ruby", "Rails",
  "pandas", "GA4", "AWS", "S3", "EC2", "CloudFront", "Vercel",
  "cc-sdd", "GitHub Copilot", "NotebookLM", "OpenAI Codex",
  "Next.js", "TypeScript", "Prisma",
];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[#e6edf3] text-sm font-mono">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#30363d] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}60`,
            transitionDuration: "1.5s",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 bg-[#0d1117]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#3fb950] font-mono text-sm tracking-widest uppercase mb-2">
            // 02. skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            Technical Skills
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skill bars */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{cat.icon}</span>
                    <h3
                      className="font-mono font-bold text-sm"
                      style={{ color: cat.color }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      visible={visible}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="mt-6 bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="text-[#8b949e] font-mono text-xs mb-4 tracking-widest">
                // tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#1c2128] border border-[#30363d] rounded text-xs font-mono text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff]/40 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Code snippet card */}
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Code snippet */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2128] border-b border-[#30363d]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#f78166]" />
                  <div className="w-3 h-3 rounded-full bg-[#e3b341]" />
                  <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
                </div>
                <span className="text-[#8b949e] font-mono text-xs ml-2">recommend.py</span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed">
                <div><span className="text-[#bc8cff]">from</span> <span className="text-[#a5d6ff]">fastapi</span> <span className="text-[#bc8cff]">import</span> <span className="text-[#e6edf3]">FastAPI</span></div>
                <div><span className="text-[#bc8cff]">import</span> <span className="text-[#a5d6ff]">pandas</span> <span className="text-[#bc8cff]">as</span> <span className="text-[#e6edf3]">pd</span></div>
                <div className="mt-3"><span className="text-[#8b949e]"># GA4ログを取得・集計</span></div>
                <div><span className="text-[#bc8cff]">def</span> <span className="text-[#3fb950]">get_recommendations</span><span className="text-[#e6edf3]">(</span><span className="text-[#e3b341]">user_id</span><span className="text-[#e6edf3]">: str):</span></div>
                <div className="pl-4"><span className="text-[#e6edf3]">df = </span><span className="text-[#a5d6ff]">ga4_client</span><span className="text-[#e6edf3]">.fetch_logs(</span></div>
                <div className="pl-8"><span className="text-[#e6edf3]">user_id=user_id</span></div>
                <div className="pl-4"><span className="text-[#e6edf3]">)</span></div>
                <div className="pl-4"><span className="text-[#8b949e]"># pandasで前処理</span></div>
                <div className="pl-4"><span className="text-[#e6edf3]">result = df</span></div>
                <div className="pl-6"><span className="text-[#e6edf3]">.groupby(</span><span className="text-[#a5d6ff]">'item_id'</span><span className="text-[#e6edf3]">)</span></div>
                <div className="pl-6"><span className="text-[#e6edf3]">.agg(</span><span className="text-[#a5d6ff]">'count'</span><span className="text-[#e6edf3]">)</span></div>
                <div className="pl-6"><span className="text-[#e6edf3]">.sort_values(ascending=</span><span className="text-[#3fb950]">False</span><span className="text-[#e6edf3]">)</span></div>
                <div className="pl-4"><span className="text-[#bc8cff]">return</span> <span className="text-[#e6edf3]">result.head(</span><span className="text-[#3fb950]">10</span><span className="text-[#e6edf3]">)</span></div>
              </div>
            </div>

            {/* Learning note */}
            <div className="mt-4 bg-[#161b22] border border-[#e3b341]/30 rounded-lg p-4">
              <p className="text-[#e3b341] font-mono text-xs mb-1">
                // currently learning
              </p>
              <p className="text-[#e6edf3] text-sm">
                AWS SAA（Solutions Architect Associate）に合格。
                現在は DVA と SAP の合格に向けて学習を進めています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
