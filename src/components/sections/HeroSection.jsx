import React, { useState } from 'react';
import heroWarrior from '../../assets/images/hero-warrior.png';
import heroVisorCard from '../../assets/images/hero-visor-card.png';
import { sound } from '../../utils/audio';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';

export default function HeroSection({ onOpenTrailer, onOpenGetStarted }) {
  const [activeHighlight, setActiveHighlight] = useState(null);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Giant Cyberpunk Watermark */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="font-heading font-black text-[12vw] tracking-wider uppercase text-white/5 whitespace-nowrap leading-none">
          Cyber Punk
        </h1>
      </div>

      {/* Atmospheric Orange Glow behind warrior */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#F0B71F]/15 to-[#E03609]/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Main Grid: Left HUD / Hero Center / Right Feeds */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[620px]">
          
          {/* Left Column: Stories & Lore HUD Callout */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
            <div 
              onMouseEnter={() => {
                sound.playHover();
                setActiveHighlight('stories');
              }}
              onMouseLeave={() => setActiveHighlight(null)}
              className="p-6 rounded-2xl cyber-card relative group hover:border-[#F0B71F] transition-all cursor-pointer"
            >
              {/* Concentric Radar Rings */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex items-center justify-center w-8 h-8">
                  <span className="absolute w-8 h-8 rounded-full border border-[#F0B71F]/30 animate-ping"></span>
                  <span className="absolute w-5 h-5 rounded-full border border-[#E03609]/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0B71F]"></span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F0B71F]">
                  // ARCHIVE_01
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyber-gradient transition-colors">
                Stories & Lore
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                Dive into compelling narratives set in a dystopian future where every choice rewires the city's fate.
              </p>

              {/* Decorative technical line */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono">SYS.VER.4.09</span>
                <span className="text-[#F0B71F] flex items-center gap-1">
                  EXPLORE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono tracking-wider text-gray-300">SERVER STATUS: NEON ONLINE</span>
            </div>
          </div>

          {/* Center Column: Hero Character Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* Glowing halo backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E03609]/20 via-[#F0B71F]/10 to-transparent rounded-full filter blur-3xl transform group-hover:scale-105 transition-transform duration-700"></div>

              {/* Character Image */}
              <img
                src={heroWarrior}
                alt="Cyberpunk Masked Operative"
                className="relative z-10 max-h-[580px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:brightness-105 transition-all duration-500 transform hover:scale-[1.02]"
              />

              {/* Interactive Target Reticle Marker */}
              <div className="absolute top-1/4 right-8 z-20 hidden md:flex items-center gap-2 bg-black/70 backdrop-blur-md border border-[#F0B71F]/40 px-3 py-1.5 rounded-lg">
                <Activity className="w-4 h-4 text-[#F0B71F] animate-pulse" />
                <span className="font-mono text-[11px] text-gray-200 uppercase tracking-widest">
                  CYBERNETIC SYNC: 99.4%
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Events & Updates + Read More */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
            <div 
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-2xl cyber-card relative group hover:border-[#E03609] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E03609]">
                  // TRANSMISSION
                </span>
                <Sparkles className="w-4 h-4 text-[#F0B71F]" />
              </div>

              <h3 className="font-heading font-bold text-2xl text-white">
                Events and Updates
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </p>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenTrailer();
                }}
                onMouseEnter={() => sound.playHover()}
                className="mt-6 w-full py-2.5 rounded-lg bg-cyber-gradient text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(224,54,9,0.3)] cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Art & Design Highlight */}
            <div 
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
            >
              <h4 className="font-heading font-bold text-xl text-white">
                Art and Design
              </h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Feast your eyes on stunning visuals and concept art that bring the cyberpunk universe alive.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Row: Experience the Future Glass Card + 17+ Years Experience */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 76,285K+ Experience the Future Card */}
          <div className="lg:col-span-8 cyber-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group hover:border-[#F0B71F]/60 transition-all">
            <div className="relative shrink-0 overflow-hidden rounded-xl border border-white/10 w-full md:w-[220px] h-[220px] bg-black/50">
              <img
                src={heroVisorCard}
                alt="Cybernetic Visor Operative"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 font-mono text-[11px] text-[#F0B71F] uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded">
                SIMULATION V.2
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center text-left">
              <div className="font-heading font-black text-4xl md:text-5xl text-cyber-gradient">
                76,285K+
              </div>
              <h4 className="font-heading font-semibold text-2xl text-white mt-1">
                Experience the Future
              </h4>
              <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
                Explore the high-tech, low-life world where the lines between humanity and synthesized intelligence converge into ultimate tactical supremacy.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['NEO-TOKYO', 'SYNTH-CHIP', 'TACTICAL HUD'].map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 17+ Years of Experiences Badge */}
          <div className="lg:col-span-4 cyber-card rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center group hover:border-[#E03609]/60 transition-all">
            <div className="font-heading font-black text-6xl md:text-7xl text-cyber-gradient tracking-tight">
              17+
            </div>
            <div className="font-heading font-medium text-xl md:text-2xl text-white mt-2">
              Years of Experiences
            </div>
            <p className="text-gray-400 text-xs md:text-sm mt-3 max-w-xs">
              Pioneering hyper-immersive worldbuilding, AAA interactive design, and dystopian cyber environments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
