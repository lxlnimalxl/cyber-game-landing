import React from 'react';
import pageVideoThumb from '../../assets/images/page-video-thumb.png';
import { sound } from '../../utils/audio';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MediaSection({ onOpenTrailer, onOpenGetStarted }) {
  return (
    <section id="media" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Video Showcase */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => {
                sound.playTrigger();
                onOpenTrailer();
              }}
              onMouseEnter={() => sound.playHover()}
              className="relative rounded-3xl overflow-hidden border border-[#F0B71F]/40 group cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            >
              <img
                src={pageVideoThumb}
                alt="Cyber Portal Showcase"
                className="w-full h-auto max-h-[500px] object-cover group-hover:scale-105 filter brightness-85 contrast-110 transition-transform duration-700"
              />

              {/* Vignette & scanline gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/40"></div>

              {/* Pulsing Central Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-cyber-gradient opacity-80 animate-ping absolute"></div>
                  <div className="w-20 h-20 rounded-full bg-cyber-gradient flex items-center justify-center text-white shadow-[0_0_35px_rgba(240,183,31,0.6)] group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Top Left Status Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-200">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>OFFICIAL GAMEPLAY TRAILER [4K 60FPS]</span>
              </div>

              {/* Bottom Info bar */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-gray-300 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span>RUNTIME: 02:48</span>
                <span className="text-[#F0B71F]">CLICK TO STREAM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content Pitch */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F0B71F]/30 bg-[#F0B71F]/10 text-xs font-mono text-[#F0B71F] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// DIRECTORS CUT // IMMERSIVE ENGINE</span>
            </div>

            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-5xl text-white leading-tight">
              Your Portal to a Gritty, <span className="text-cyber-gradient">Tech-Driven Future</span>.
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              A realm where advanced technology meets dystopian reality. Our universe is your gateway to neon lights, gritty streets, and cybernetic enhancements.
            </p>

            {/* Tactical feature checks */}
            <div className="space-y-3 pt-2">
              {[
                'Next-gen ray tracing with volumetric atmospheric neon smog',
                'Hyper-reactive neural combat responses and kinetic feedback',
                'Persistent multiplayer open-world megacity factions'
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F0B71F] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenTrailer();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-8 py-3.5 rounded-xl bg-cyber-gradient text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(224,54,9,0.35)] cursor-pointer"
              >
                Read More
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onOpenGetStarted();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-8 py-3.5 rounded-xl border border-white/20 hover:border-[#F0B71F] bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
