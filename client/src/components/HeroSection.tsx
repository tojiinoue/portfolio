/*
 * HeroSection - Terminal Noir Design
 * Full-viewport hero with typewriter effect and terminal aesthetics
 * Background: generated hero-bg image with dark overlay
 */

import { useState, useEffect } from "react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/O90UeRw8L08i0k8dGdipgR/sandbox/04tQmglMxoI640HMZesHPm-img-1_1771729276000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTzkwVWVSdzhMMDhpMGs4ZEdkaXBnUi9zYW5kYm94LzA0dFFtZ2xNeG9JNjQwSE1aZXNIUG0taW1nLTFfMTc3MTcyOTI3NjAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UbNbX6WGnWAz93dRC9Fu2ojj56VK7RDogOm2eBzx0vH~KcNok-T2XKoWA2aA9AFvT1LPSisMDfUAfGKpqriOdTbmFBKdVTdva1DH9wfEUPx0e2BEYkQxrIFLyu73qFf2Q4xp5WX10o-5UKsl3nge-v0YMLHag4BiuU2Cr8sBCvbmMtjNNmqbk7cqWPJLkUnBIEvZIKj-0DxmqFFKlusLCuc6330WWElLLkRUlU7Qz1jDRDXUmPZukpKOgeo9S9kr8hSxLDvSA4LKTAO9JBpNc45GAKCCXpfBaVBtfk3WyKATAyRYE4EMLJh2zj0zICoSniYv-NasZExC9ysOvvUwMw__";

const typewriterTexts = [
  "Systems Engineer",
  "AI × 仕様駆動開発",
  "cc-sdd Practitioner",
  "Backend Developer",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = typewriterTexts[textIndex];
    const delay = isDeleting ? 60 : charIndex === current.length ? 2000 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % typewriterTexts.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1117]/85" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88, 166, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 166, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Terminal prompt header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#f78166]" />
              <div className="w-3 h-3 rounded-full bg-[#e3b341]" />
              <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
            </div>
            <span className="text-[#8b949e] font-mono text-xs ml-2">
              toji@portfolio:~$
            </span>
          </div>

          {/* Main title */}
          <div className="mb-4">
            <p className="text-[#3fb950] font-mono text-sm mb-2 tracking-widest uppercase">
              # Hello, World
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono text-[#e6edf3] leading-tight">
              Toji{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #58a6ff, #3fb950)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Inoue
              </span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="flex items-center gap-2 mb-8 h-10">
            <span className="text-[#3fb950] font-mono text-xl">&gt;</span>
            <span className="text-[#58a6ff] font-mono text-xl sm:text-2xl font-medium">
              {displayText}
            </span>
            <span className="text-[#58a6ff] font-mono text-xl animate-pulse">
              |
            </span>
          </div>

          {/* Description */}
          <div className="max-w-2xl mb-10">
            <p className="text-[#8b949e] text-base sm:text-lg leading-relaxed font-sans">
              「技術 × AI × ビジネス」を横断し、実戦的な価値を生む新卒1年目のエンジニア。
              <br />
              <span className="text-[#e6edf3]">仕様駆動開発</span>を武器に、
              AIと共創しながら保守性の高いシステムを高速で構築します。
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { label: "Zenn Articles", value: "8", color: "#3fb950" },
              { label: "Certifications", value: "4", color: "#58a6ff" },
              { label: "Projects", value: "5+", color: "#bc8cff" },
              { label: "Languages", value: "3", color: "#e3b341" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold font-mono"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[#8b949e] text-xs font-mono mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[#58a6ff] text-[#0d1117] font-mono font-bold rounded text-sm hover:bg-[#79b8ff] transition-all duration-200 hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]"
            >
              $ view projects
            </button>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-[#30363d] text-[#e6edf3] font-mono text-sm rounded hover:border-[#58a6ff] hover:text-[#58a6ff] transition-all duration-200"
            >
              $ contact me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#8b949e] font-mono text-xs">scroll</span>
        <svg
          className="w-4 h-4 text-[#8b949e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
