import React, { useState } from 'react';
import helmet1 from '../../assets/images/about-helmet-1.png';
import helmet2 from '../../assets/images/about-helmet-2.png';
import smallCardImg from '../../assets/images/about-small-card.png';
import { sound } from '../../utils/audio';
import { ShieldCheck, Cpu, Flame, ChevronRight } from 'lucide-react';

export default function AboutSection({ onOpenGetStarted }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      {/* Decorative technical vertical dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1520px] h-full pointer-events-none border-x border-white/5 flex justify-between z-0">
        <div className="w-px h-full bg-gradient-to-b from-[#F0B71F]/20 via-[#E03609]/10 to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-[#F0B71F]/20 via-[#E03609]/10 to-transparent"></div>
      </div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative z-10 space-y-32">
        
        {/* ================= PART 1: NEON DREAMS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F0B71F]/30 bg-[#F0B71F]/10 text-xs font-mono text-[#F0B71F] uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>// CYBER_CHRONICLES // CHAPTER_01</span>
            </div>

            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-5xl text-white leading-tight">
              Where Neon Dreams & <span className="text-cyber-gradient">Digital Nightmares</span> Converge.
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              A realm where advanced technology meets dystopian reality. Our universe is your gateway to neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
            </p>

            {/* 3 Stats Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div 
                onMouseEnter={() => sound.playHover()}
                className="group cursor-default"
              >
                <div className="font-heading font-black text-2xl md:text-4xl text-cyber-gradient">
                  89,2K+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium group-hover:text-white transition-colors">
                  Discover the Future
                </div>
              </div>

              <div 
                onMouseEnter={() => sound.playHover()}
                className="group cursor-default"
              >
                <div className="font-heading font-black text-2xl md:text-4xl text-cyber-gradient">
                  7001+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium group-hover:text-white transition-colors">
                  Stories and Lore
                </div>
              </div>

              <div 
                onMouseEnter={() => sound.playHover()}
                className="group cursor-default"
              >
                <div className="font-heading font-black text-2xl md:text-4xl text-cyber-gradient">
                  3,124+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium group-hover:text-white transition-colors">
                  Art and Design
                </div>
              </div>
            </div>
          </div>

          {/* Right Helmet 1 Image */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative group max-w-[550px] w-full">
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-[#F0B71F]/15 rounded-full blur-[100px] pointer-events-none"></div>

              <img
                src={helmet1}
                alt="Cybernetic Neural Helmet"
                className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700"
              />

              {/* Holographic specification badge */}
              <div className="absolute bottom-6 right-6 z-20 cyber-card p-3 rounded-xl border border-white/10 hidden sm:block">
                <span className="text-[11px] font-mono text-[#F0B71F] block uppercase tracking-widest">
                  MODEL: MK-VII TITAN
                </span>
                <span className="text-xs text-gray-300">
                  Neural Latency &lt; 0.02ms
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= PART 2: SECRETS OF THE UNDERWORLD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Helmet 2 Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center relative">
            <div className="relative group max-w-[550px] w-full">
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-[#E03609]/15 rounded-full blur-[100px] pointer-events-none"></div>

              <img
                src={helmet2}
                alt="Chromium Stealth Operative Helmet"
                className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700"
              />

              <div className="absolute top-8 left-8 z-20 cyber-card p-3 rounded-xl border border-white/10 hidden sm:block">
                <span className="text-[11px] font-mono text-[#E03609] block uppercase tracking-widest">
                  OPTICS: QUANTUM-ARRAY
                </span>
                <span className="text-xs text-gray-300">
                  Full Spectrum Infiltration
                </span>
              </div>
            </div>
          </div>

          {/* Right Text & Revolution Card */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E03609]/30 bg-[#E03609]/10 text-xs font-mono text-[#E03609] uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" />
              <span>// UNDERWORLD_INTEL // SECTOR_07</span>
            </div>

            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-5xl text-white leading-tight">
              Unveil the Secrets of the <span className="text-cyber-gradient">Cybernetic Underworld</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              A realm where advanced technology meets dystopian reality. Our universe is your gateway to a realm of neon lights, gritty streets, and cybernetic enhancements.
            </p>

            {/* Featured Glass Card: Join the Revolution */}
            <div 
              onClick={() => {
                sound.playClick();
                onOpenGetStarted();
              }}
              onMouseEnter={() => sound.playHover()}
              className="cyber-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#F0B71F] transition-all cursor-pointer"
            >
              <div className="relative shrink-0 w-full sm:w-[130px] h-[130px] rounded-xl overflow-hidden border border-white/10 bg-black/60">
                <img
                  src={smallCardImg}
                  alt="Cyber Squad Operatives"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-xl text-white group-hover:text-cyber-gradient transition-colors">
                    Join the Revolution
                  </h4>
                  <ChevronRight className="w-5 h-5 text-[#F0B71F] group-hover:translate-x-1.5 transition-transform" />
                </div>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                </p>
                <span className="inline-block mt-3 text-xs font-mono text-[#F0B71F] underline underline-offset-4">
                  ACCESS OPERATIVE PASS →
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
