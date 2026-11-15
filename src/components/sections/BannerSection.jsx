import React, { useState } from 'react';
import bannerImg from '../../assets/images/banner-cinematic.png';
import { sound } from '../../utils/audio';
import { ArrowUpRight, Play, Terminal } from 'lucide-react';

const bannerItems = [
  {
    id: 1,
    title: 'Join the Revolution',
    desc: 'Mobilize with underground rogue syndicates across the sprawling neon megacity.',
    code: 'SYNC.REV.80'
  },
  {
    id: 2,
    title: 'Art and Design',
    desc: 'Breathtaking holographic concept artwork, UI wireframes, and cyber rigs.',
    code: 'GFX.ARCH.12'
  },
  {
    id: 3,
    title: 'Tech and Gear',
    desc: 'Next-generation tactical exo-suits, neural implants, and electromagnetic weaponry.',
    code: 'RIG.SPEC.99'
  },
  {
    id: 4,
    title: 'Stories and Lore',
    desc: 'Encrypted logs documenting the great corporate data wars of 2088.',
    code: 'DOC.LORE.04'
  }
];

export default function BannerSection({ onOpenTrailer, onOpenGetStarted }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cinematic Card Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-[#F0B71F]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Background Image with Dark Vignette */}
          <div className="absolute inset-0 z-0">
            <img
              src={bannerImg}
              alt="Cybernetic Universe Cinematic Banner"
              className="w-full h-full object-cover object-center filter brightness-60 contrast-125"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent"></div>
          </div>

          {/* Banner Inner Content */}
          <div className="relative z-10 p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Headline & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F0B71F]/40 bg-black/60 backdrop-blur-md text-xs font-mono text-[#F0B71F] uppercase tracking-widest">
                <Terminal className="w-3.5 h-3.5" />
                <span>// GLOBAL_BROADCAST // PRIORITY_ALPHA</span>
              </div>

              <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
                Greetings! Dive into the <span className="text-cyber-gradient">Cybernetic Universe</span>
              </h2>

              <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-xl">
                Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenGetStarted();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="px-8 py-3.5 rounded-xl bg-cyber-gradient text-white font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_25px_rgba(224,54,9,0.4)] cursor-pointer"
                >
                  Initiate Link
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenTrailer();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#F0B71F] bg-black/50 backdrop-blur-md text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>Watch Cinematic</span>
                </button>
              </div>
            </div>

            {/* Right Col: Glass Interactive Selector List */}
            <div className="lg:col-span-5">
              <div className="p-6 md:p-8 rounded-2xl cyber-card border border-white/15 backdrop-blur-2xl space-y-4">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest pb-2 border-b border-white/10 flex justify-between items-center">
                  <span>DIRECTORY PROTOCOLS</span>
                  <span className="text-[#F0B71F]">4 NODES ACTIVE</span>
                </div>

                <div className="space-y-3">
                  {bannerItems.map((item, idx) => {
                    const isSelected = selectedItem === idx;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          sound.playClick();
                          setSelectedItem(idx);
                        }}
                        onMouseEnter={() => sound.playHover()}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-white/10 border-[#F0B71F] shadow-[0_0_20px_rgba(240,183,31,0.2)]'
                            : 'bg-black/30 border-white/5 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {/* Indicator Square from Figma */}
                          <div className={`w-3.5 h-3.5 rounded-xs transition-colors ${
                            isSelected ? 'bg-[#F0B71F] shadow-[0_0_8px_#F0B71F]' : 'border border-gray-500'
                          }`}></div>

                          <div>
                            <h4 className={`font-heading font-bold text-base transition-colors ${
                              isSelected ? 'text-[#F0B71F]' : 'text-white'
                            }`}>
                              {item.title}
                            </h4>
                            {isSelected && (
                              <p className="text-xs text-gray-300 mt-1 max-w-[260px] animate-in fade-in duration-200">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className={`p-2 rounded-lg border transition-all ${
                          isSelected 
                            ? 'border-[#F0B71F]/50 bg-[#F0B71F]/20 text-[#F0B71F]' 
                            : 'border-white/10 text-gray-400 hover:text-white'
                        }`}>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
