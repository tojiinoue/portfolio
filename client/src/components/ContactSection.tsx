/*
 * ContactSection + Footer - Terminal Noir Design
 * Contact links with terminal-style layout
 */

import { useEffect, useRef, useState } from "react";

const contactLinks = [
  // {
  //   label: "GitHub",
  //   handle: "@tojiinoue",
  //   url: "https://github.com/tojiinoue",
  //   icon: (
  //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  //     </svg>
  //   ),
  //   color: "#e6edf3",
  //   desc: "コード・プロジェクト",
  // },
  {
    label: "Zenn",
    handle: "toji_inoue",
    url: "https://zenn.dev/toji_inoue",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 88 88" fill="currentColor">
        <path d="M9.87 78.44c1.33 1.97 3.53 3.15 5.88 3.15h56.5c3.93 0 7.12-3.19 7.12-7.12V13.53c0-3.93-3.19-7.12-7.12-7.12H15.75c-2.35 0-4.55 1.18-5.88 3.15L1.5 22.94v42.12l8.37 13.38z" />
        <path d="M33.5 25.5h-8L44 62.5h8L33.5 25.5z" fill="#0d1117" />
        <path d="M54.5 25.5h-8L36 62.5h8l10.5-37z" fill="#0d1117" />
      </svg>
    ),
    color: "#3fb950",
    desc: "技術記事・発信",
  },
  {
    label: "幹事くん",
    handle: "https://kanjikun.com/",
    url: "https://www.kanjikun.com/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "#58a6ff",
    desc: "個人開発プロダクト",
  },
  {
    label: "Email",
    handle: "toji0813@gmail.com",
    url: "mailto:toji0813@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#f78166",
    desc: "お問い合わせ・コラボ依頼",
  },
];

export default function ContactSection() {
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
    <>
      <section
        id="contact"
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
              // 06. contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
              Get In Touch
            </h2>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Message */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2128] border-b border-[#30363d]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#f78166]" />
                    <div className="w-3 h-3 rounded-full bg-[#e3b341]" />
                    <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
                  </div>
                  <span className="text-[#8b949e] font-mono text-xs ml-2">
                    contact.sh
                  </span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[#3fb950]">$ </span>
                      <span className="text-[#e6edf3]">echo "お気軽にどうぞ"</span>
                    </div>
                    <div className="text-[#8b949e] pl-4">
                      技術的な話、キャリア相談、コラボレーションなど、
                      <br />
                      何でもお気軽にご連絡ください。
                    </div>
                    <div>
                      <span className="text-[#3fb950]">$ </span>
                      <span className="text-[#e6edf3]">cat interests.txt</span>
                    </div>
                    <div className="text-[#8b949e] pl-4 space-y-1">
                      <div>
                        <span className="text-[#58a6ff]">→</span> AI × 仕様駆動開発の実践
                      </div>
                      <div>
                        <span className="text-[#58a6ff]">→</span> バックエンド開発
                      </div>
                      <div>
                        <span className="text-[#58a6ff]">→</span> 業務効率化・自動化
                      </div>
                      <div>
                        <span className="text-[#58a6ff]">→</span> コミュニティ・イベント企画
                      </div>
                    </div>
                    <div>
                      <span className="text-[#3fb950]">$ </span>
                      <span className="text-[#e6edf3] cursor-blink">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Links */}
            <div
              className={`transition-all duration-700 delay-400 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-opacity-60 transition-all duration-200 group"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = link.color + "60";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${link.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#30363d";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${link.color}15`,
                        color: link.color,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[#e6edf3] font-mono font-bold text-sm">
                          {link.label}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: link.color }}
                        >
                          {link.handle}
                        </span>
                      </div>
                      <p className="text-[#8b949e] text-xs">{link.desc}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-[#8b949e] group-hover:text-[#e6edf3] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-[#21262d] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#3fb950] font-mono text-sm">~/</span>
              <span className="text-[#e6edf3] font-mono font-bold">toji_inoue</span>
            </div>
            <p className="text-[#8b949e] font-mono text-xs text-center">
              © 2026 Toji Inoue. Built with{" "}
              <span className="text-[#58a6ff]">React</span> +{" "}
              <span className="text-[#3fb950]">TypeScript</span>
            </p>
            <div className="flex items-center gap-4">
              {/* <a
                href="https://github.com/tojiinoue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b949e] hover:text-[#e6edf3] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a> */}
              <a
                href="https://zenn.dev/toji_inoue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b949e] hover:text-[#3fb950] transition-colors font-mono text-xs"
              >
                Zenn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
