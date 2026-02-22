/*
 * SkillsSection - Terminal Noir Design
 * Technical skills with code-editor syntax highlighting aesthetic
 */

import { useEffect, useRef, useState } from "react";

const SKILLS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/O90UeRw8L08i0k8dGdipgR/sandbox/04tQmglMxoI640HMZesHPm-img-3_1771729273000_na1fn_c2tpbGxzLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTzkwVWVSdzhMMDhpMGs4ZEdkaXBnUi9zYW5kYm94LzA0dFFtZ2xNeG9JNjQwSE1aZXNIUG0taW1nLTNfMTc3MTcyOTI3MzAwMF9uYTFmbl9jMnRwYkd4ekxYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cgJRS~1PGXJiiBo-DKgYqZ03thU5KIhh8yIbxHg~mAj3DKb6qMGQUxt6ltDbQO0lNP8Wcb5Q3qbvR8Nd2JS~wcmxAnU5HuBHwo2ys0LXiHjwkCz86QFOk1wjTo5BtHAIDGvk41BRRIyOgsCIbPg9SPlcuIefV87gVG5o~9CGF72bnGeiurlYQl6ZVwRzDopP7YA2JLUxu~PvAivhN2hTJKF9p0kLTJW-NGFjUqgJpVxjVSzgXKtgvI5g~rKGaTTOiu6fGsg1f4a7xxcGl0yys-rHhr5wq3FRCxUjSo-kzWn8pbAROcTqERrFiUMkyzUZVKyP~FR3krPK-teCksvtGQ__";

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

          {/* Visual */}
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden h-full min-h-[300px]">
              <img
                src={SKILLS_IMG}
                alt="Tech Skills Network"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Learning note */}
            <div className="mt-4 bg-[#161b22] border border-[#e3b341]/30 rounded-lg p-4">
              <p className="text-[#e3b341] font-mono text-xs mb-1">
                // currently learning
              </p>
              <p className="text-[#e6edf3] text-sm">
                AWS SAA（Solutions Architect Associate）を学習中。
                クラウドアーキテクチャの設計力を強化しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
