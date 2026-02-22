/*
 * ProjectsSection - Terminal Noir Design
 * Personal projects with terminal-style cards
 */

import { useEffect, useRef, useState } from "react";

const KANJIKUN_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/O90UeRw8L08i0k8dGdipgR/sandbox/04tQmglMxoI640HMZesHPm-img-2_1771729292000_na1fn_cHJvamVjdC1rYW5qaWt1bg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTzkwVWVSdzhMMDhpMGs4ZEdkaXBnUi9zYW5kYm94LzA0dFFtZ2xNeG9JNjQwSE1aZXNIUG0taW1nLTJfMTc3MTcyOTI5MjAwMF9uYTFmbl9jSEp2YW1WamRDMXJZVzVxYVd0MWJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m5ch22q5FCzreNYc6awoKIe~pFocLIV2G9HPl5PiQXpSNclZyG7SJZ6n1THtvmfSTmt2iN6OA~bVIWVHcgDwh~A9oFj2fr4Em-YkCCW6NZfPb6kyzauhLqbt3RVvKZnvlgHaXJYByKpYaVvaSCXS-4K5dGzNJSmrBzhAanTvDzHcIeu8yDHwF5z1Qg2KLc4ShkNRy3x8oPhKqx~8xIybFYAzPPPBVnPswNEFcpePwFSZ0g~~EMDJ~KuDnZU1jH5aG2aUo~czUzY28w-xuLdjG6B6mXmILBG1kfXcQ1kOA2aXGE-uneupyw7loBvrF5lwn4R1KNH9w0gjzDQJBd~V9Q__";

const projects = [
  {
    id: "kanjikun",
    title: "幹事くん",
    subtitle: "飲み会管理Webアプリ",
    description:
      "cc-sdd × OpenAI Codexを活用した仕様駆動開発で爆速リリース。日程調整から出欠管理、会計、支払申請・承認まで一気通貫で管理できる幹事向けサービス。参加者はログイン不要でURLから操作可能。",
    image: KANJIKUN_IMG,
    tags: ["TypeScript", "Next.js", "Prisma", "Vercel", "cc-sdd", "OpenAI Codex"],
    links: {
      demo: "https://kanjikun.vercel.app",
      github: "https://github.com/tojiinoue/kanjikun",
      article: "https://zenn.dev/toji_inoue/articles/3eb730104c86ee",
    },
    highlights: [
      "cc-sdd × OpenAI Codexで仕様から実装まで完全AI駆動",
      "参加者ログイン不要のシェアURL方式",
      "日程調整〜会計まで一気通貫",
    ],
    color: "#58a6ff",
    featured: true,
  },
];

export default function ProjectsSection() {
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
      id="projects"
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
            // 04. projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            Personal Projects
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
        </div>

        {/* Featured Project */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(88,166,255,0.08)]">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[280px] opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161b22]/50 hidden lg:block" />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#58a6ff]/20 border border-[#58a6ff]/40 text-[#58a6ff]">
                      ★ FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <div className="mb-4">
                      <p className="text-[#8b949e] font-mono text-xs mb-1">
                        // personal project
                      </p>
                      <h3 className="text-2xl font-bold font-mono text-[#e6edf3] mb-1">
                        {project.title}
                      </h3>
                      <p className="text-[#58a6ff] font-mono text-sm">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#8b949e] text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5 space-y-2">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <span className="text-[#3fb950] font-mono text-xs mt-0.5">
                            ✓
                          </span>
                          <span className="text-[#e6edf3] text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 bg-[#1c2128] border border-[#30363d] rounded text-[#8b949e]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#58a6ff] text-[#0d1117] font-mono font-bold text-sm rounded hover:bg-[#79b8ff] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[#30363d] text-[#e6edf3] font-mono text-sm rounded hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[#30363d] text-[#e6edf3] font-mono text-sm rounded hover:border-[#3fb950] hover:text-[#3fb950] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Zenn 記事
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
