/*
 * Home Page - Terminal Noir Design
 * Toji Inoue Portfolio - All sections assembled
 * Design: Dark #0d1117 base, Electric Blue #58a6ff, Terminal Green #3fb950
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}
