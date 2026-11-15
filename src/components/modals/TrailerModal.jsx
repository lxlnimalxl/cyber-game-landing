import React from 'react';
import { X, Play, Volume2, Maximize2, Shield } from 'lucide-react';
import { sound } from '../../utils/audio';

export default function TrailerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#09090d] border border-[#F0B71F]/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(240,183,31,0.25)] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E03609] animate-pulse"></span>
            <span className="font-heading font-bold text-sm tracking-widest text-white uppercase">
              // CINEMATIC STREAM // CYBER_ENGINE_4K
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-red-500 hover:text-red-400 text-gray-300 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          {/* Animated Neon Grid in video canvas */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black"></div>

          {/* Ambient Video Graphic */}
          <div className="relative z-10 text-center space-y-4 p-8">
            <div className="inline-flex p-4 rounded-full bg-cyber-gradient text-white shadow-[0_0_40px_rgba(240,183,31,0.6)] animate-pulse">
              <Play className="w-10 h-10 fill-white ml-1" />
            </div>
            
            <h3 className="font-heading font-black text-2xl md:text-4xl text-white">
              PROJECT CYBER.GAME // WORLD PREMIERE
            </h3>
            
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Synthesized Real-Time Ray Tracing Demo • Unreal Engine 5.5 Simulation • Neural Uplink Active
            </p>

            <div className="pt-2 flex items-center justify-center gap-3 text-xs font-mono text-[#F0B71F]">
              <span className="px-2.5 py-1 rounded bg-black/60 border border-[#F0B71F]/30">4K UHD</span>
              <span className="px-2.5 py-1 rounded bg-black/60 border border-[#F0B71F]/30">60 FPS</span>
              <span className="px-2.5 py-1 rounded bg-black/60 border border-[#F0B71F]/30">DOLBY ATMOS</span>
            </div>
          </div>

          {/* Overlay scanlines */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-4">
            <span className="text-[#F0B71F]">BITRATE: 48,000 KBPS</span>
            <span>CODEC: AV1 HEVC</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Close Feed
          </button>
        </div>

      </div>
    </div>
  );
}
