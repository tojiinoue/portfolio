/*
 * AboutSection - Terminal Noir Design
 * Professional summary with profile photo, terminal-style card layout
 */

import { motion, type Variants } from "framer-motion";

const PROFILE_PHOTO = "/profile-icon.png";

const certifications = [
  { name: "応用情報技術者試験", abbr: "AP", color: "#58a6ff" },
  { name: "基本情報技術者試験", abbr: "FE", color: "#3fb950" },
  { name: "AWS Certified Cloud Practitioner", abbr: "CLF", color: "#e3b341" },
  {
    name: "AWS Certified Solutions Architect - Associate",
    abbr: "SAA",
    color: "#f78166",
  },
];

const highlights = [
  {
    icon: "🤖",
    title: "AI × 仕様駆動開発",
    desc: "仕様駆動開発を武器にAIと共創。仕様から実装までを高速化し、保守性の高いシステムを構築。",
    color: "#58a6ff",
  },
  {
    icon: "📊",
    title: "データ分析 × GA4",
    desc: "GA4 Data APIとpandasを組み合わせ、ユーザー行動ログからパーソナライズドレコメンドを実装。",
    color: "#3fb950",
  },
  {
    icon: "👥",
    title: "コミュニティ運営",
    desc: "ゼロから1年で400名規模のイベントサークルを立ち上げ、代表として運営した行動力。",
    color: "#bc8cff",
  },
  {
    icon: "🎬",
    title: "SNS × 動画編集",
    desc: "企業SNSコンサル、YouTube/TikTok動画編集チームの組織化・ディレクション経験。",
    color: "#e3b341",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const viewport = { once: true, margin: "-80px" };

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p className="text-[#3fb950] font-mono text-sm tracking-widest uppercase mb-2">
            // 01. about
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            About Me
          </h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#58a6ff] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Profile photo + card */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeLeft}
          >
            {/* Profile Photo */}
            <div className="mb-6 flex flex-col items-center sm:items-start">
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute -inset-1 rounded-xl opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #58a6ff, #3fb950)",
                    filter: "blur(6px)",
                  }}
                />
                <div className="relative w-48 h-56 sm:w-52 sm:h-60 rounded-xl overflow-hidden border-2 border-[#30363d]">
                  <img
                    src={PROFILE_PHOTO}
                    alt="Toji Inoue"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay for terminal aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 to-transparent" />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded-full px-3 py-1">
                  <div className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
                  <span className="text-[#3fb950] font-mono text-xs">
                    Available
                  </span>
                </div>
              </div>
              <div className="mt-5 text-center sm:text-left">
                <p className="text-[#e6edf3] font-mono font-bold text-lg">
                  Toji Inoue
                </p>
                <p className="text-[#8b949e] font-mono text-sm mt-0.5">
                  井上 登司
                </p>
              </div>
            </div>

            {/* Terminal card */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2128] border-b border-[#30363d]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#f78166]" />
                  <div className="w-3 h-3 rounded-full bg-[#e3b341]" />
                  <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
                </div>
                <span className="text-[#8b949e] font-mono text-xs ml-2">
                  profile.json
                </span>
              </div>

              {/* Content */}
              <div className="p-5 font-mono text-sm">
                <div className="text-[#e3b341]">{"{"}</div>
                <div className="pl-4 space-y-1.5 mt-1">
                  <div>
                    <span className="text-[#bc8cff]">"role"</span>
                    <span className="text-[#e6edf3]">: </span>
                    <span className="text-[#a5d6ff]">"Backend Engineer"</span>
                    <span className="text-[#e6edf3]">,</span>
                  </div>
                  <div>
                    <span className="text-[#bc8cff]">"company"</span>
                    <span className="text-[#e6edf3]">: </span>
                    <span className="text-[#a5d6ff]">"Pasona Inc."</span>
                    <span className="text-[#e6edf3]">,</span>
                  </div>
                  <div>
                    <span className="text-[#bc8cff]">"joined"</span>
                    <span className="text-[#e6edf3]">: </span>
                    <span className="text-[#3fb950]">2025</span>
                    <span className="text-[#e6edf3]">,</span>
                  </div>
                  <div>
                    <span className="text-[#bc8cff]">"location"</span>
                    <span className="text-[#e6edf3]">: </span>
                    <span className="text-[#a5d6ff]">"Saitama, Japan"</span>
                    <span className="text-[#e6edf3]">,</span>
                  </div>
                  <div>
                    <span className="text-[#bc8cff]">"education"</span>
                    <span className="text-[#e6edf3]">: </span>
                    <span className="text-[#a5d6ff]">"千葉工業大学"</span>
                    <span className="text-[#e6edf3]">,</span>
                  </div>
                  <div>
                    <span className="text-[#bc8cff]">"interests"</span>
                    <span className="text-[#e6edf3]">: [</span>
                    <div className="pl-4">
                      <span className="text-[#a5d6ff]">"AI Engineering"</span>
                      <span className="text-[#e6edf3]">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#a5d6ff]">"Spec-Driven Dev"</span>
                      <span className="text-[#e6edf3]">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#a5d6ff]">
                        "Community Building"
                      </span>
                    </div>
                    <span className="text-[#e6edf3]">]</span>
                  </div>
                </div>
                <div className="text-[#e3b341] mt-1">{"}"}</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <p className="text-[#8b949e] font-mono text-xs mb-3 tracking-widest">
                // certifications
              </p>
              <div className="space-y-2">
                {certifications.map(cert => (
                  <div
                    key={cert.abbr}
                    className="flex items-center gap-3 bg-[#161b22] border border-[#30363d] rounded px-4 py-2.5"
                  >
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                      style={{
                        color: cert.color,
                        backgroundColor: `${cert.color}15`,
                        border: `1px solid ${cert.color}40`,
                      }}
                    >
                      {cert.abbr}
                    </span>
                    <span className="text-[#e6edf3] text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeRight}
          >
            <div className="mb-8">
              <p className="text-[#e6edf3] text-base leading-relaxed">
                2025年新卒入社のシステムエンジニア。
                <span className="text-[#58a6ff]">「仕様駆動開発」</span>
                を武器に、AIと共創しながら保守性の高いシステムを高速で構築することを得意としています。
              </p>
              <p className="text-[#8b949e] text-base leading-relaxed mt-4">
                技術だけでなく、400名規模のコミュニティ運営やSNSコンサルの経験から、
                「ビジネス上の課題を技術でどう解決するか」という視点を常に持ち、
                AIによる業務効率化を推進しています。
              </p>
            </div>

            {/* Highlight cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={stagger}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-opacity-60 transition-all duration-200 group"
                  variants={fadeUp}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      item.color + "60";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 20px ${item.color}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#30363d";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3
                    className="font-mono font-bold text-sm mb-2"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8b949e] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
