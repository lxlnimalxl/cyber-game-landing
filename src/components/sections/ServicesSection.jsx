import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Compass, Crosshair, Zap, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Discover the Future',
    desc: 'Explore the high-tech, low-life world where the lines between humanity and augmented hardware merge seamlessly.',
    icon: Compass,
    badge: 'STAGE_01',
    stats: '2.4ms Sync'
  },
  {
    id: 2,
    title: 'Explore Features',
    desc: 'Immerse into synthetic neural overlays, tactical HUD combat, and dynamic decentralized black market auctions.',
    icon: Crosshair,
    badge: 'STAGE_02',
    stats: '100% Real-Time'
  },
  {
    id: 3,
    title: 'Stay Connected',
    desc: 'Maintain constant quantum encrypted uplink with alliance networks, squad fleets, and underground operatives.',
    icon: Zap,
    badge: 'STAGE_03',
    stats: 'End-to-End Encrypted'
  }
];

export default function ServicesSection({ onOpenGetStarted }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F0B71F]/10 via-[#E03609]/10 to-transparent blur-[130px] pointer-events-none"></div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B71F]/30 bg-[#F0B71F]/5 text-xs font-mono text-[#F0B71F] uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>// ARCHITECTURE & MODULES</span>
          </div>

          <h2 className="font-heading font-black text-3xl md:text-5xl text-white">
            Dive into the <span className="text-cyber-gradient">Cybernetic Universe</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            A realm where advanced technology meets dystopian reality. Our universe is your gateway to neon lights, gritty streets, and cybernetic enhancements.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={srv.id}
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => {
                  sound.playClick();
                  onOpenGetStarted();
                }}
                className={`p-8 rounded-2xl cyber-card flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                  isHovered ? 'scale-[1.02] border-[#F0B71F]' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-8">
                    {/* 81x81 Icon Box from Figma */}
                    <div className="w-16 h-16 rounded-2xl border border-[#F0B71F]/40 bg-gradient-to-br from-[#F0B71F]/20 to-[#E03609]/10 flex items-center justify-center text-[#F0B71F] group-hover:scale-110 group-hover:text-white group-hover:bg-cyber-gradient transition-all duration-300 shadow-[0_0_15px_rgba(240,183,31,0.2)]">
                      <Icon className="w-8 h-8" />
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-mono text-[#E03609] block uppercase tracking-widest">
                        {srv.badge}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {srv.stats}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyber-gradient transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#F0B71F]">
                  <span>INITIALIZE PROTOCOL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
