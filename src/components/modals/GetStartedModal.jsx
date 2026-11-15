import React, { useState } from 'react';
import { X, Shield, CheckCircle, Sparkles, User, Key } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/audio';

const factions = [
  { id: 'titan', name: 'Chrome Titan', perk: 'Heavy Armor & Kinetic Nullification', color: '#F0B71F' },
  { id: 'ghost', name: 'Cyber Ghost', perk: 'Full-Spectrum Stealth & Signal Decryption', color: '#00E5FF' },
  { id: 'viper', name: 'Neon Viper', perk: 'Overclocked Reflexes & Bio-Nanites', color: '#E03609' },
];

export default function GetStartedModal({ isOpen, onClose }) {
  const [handle, setHandle] = useState('');
  const [selectedFaction, setSelectedFaction] = useState('titan');
  const [registered, setRegistered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handle) return;

    sound.playTrigger();
    setRegistered(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F0B71F', '#E03609', '#00E5FF', '#ffffff']
    });
  };

  const handleReset = () => {
    setRegistered(false);
    setHandle('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#09090d] border border-[#F0B71F]/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(240,183,31,0.25)] flex flex-col p-6 md:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          onMouseEnter={() => sound.playHover()}
          className="absolute top-6 right-6 p-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-red-500 hover:text-red-400 text-gray-300 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!registered ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F0B71F] uppercase tracking-widest mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>// OPERATIVE REGISTRATION</span>
            </div>

            <h3 className="font-heading font-black text-2xl md:text-3xl text-white">
              Claim Operative Pass
            </h3>
            
            <p className="text-gray-400 text-sm mt-1">
              Join 76,000+ operatives. Enter your credentials to access the closed syndicate server.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Codename */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Operative Codename
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="e.g. Orion_V8, NeoRonin"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#F0B71F] transition-all"
                  />
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              {/* Faction Choice */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Select Syndicate Faction
                </label>
                <div className="space-y-2">
                  {factions.map((f) => (
                    <div
                      key={f.id}
                      onClick={() => {
                        sound.playClick();
                        setSelectedFaction(f.id);
                      }}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedFaction === f.id
                          ? 'border-[#F0B71F] bg-[#F0B71F]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="font-heading font-bold text-sm text-white">
                          {f.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {f.perk}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedFaction === f.id ? 'border-[#F0B71F] bg-[#F0B71F]' : 'border-gray-500'
                      }`}>
                        {selectedFaction === f.id && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={() => sound.playHover()}
                className="w-full py-3.5 rounded-xl bg-cyber-gradient text-white font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_25px_rgba(224,54,9,0.4)] cursor-pointer"
              >
                Authenticate & Connect
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-cyber-gradient flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(240,183,31,0.5)]">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-heading font-black text-2xl text-white">
              ACCESS GRANTED
            </h3>

            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Welcome to the grid, <span className="text-[#F0B71F] font-bold">[{handle}]</span>. Your cryptographic pass token has been generated.
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-[#F0B71F]/30 font-mono text-xs text-[#F0B71F] text-left space-y-1">
              <div>PASS_ID: CYBER-PASS-9942</div>
              <div>FACTION: {selectedFaction.toUpperCase()}</div>
              <div>CLEARANCE: TIER_1 SYNDICATE</div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
            >
              Enter Grid Arena
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
