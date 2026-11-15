import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { sound } from '../../utils/audio';

export default function Navbar({ onOpenGetStarted }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sound.playClick();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050507]/90 backdrop-blur-md border-b border-[#F0B71F]/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent py-6 md:py-8'
    }`}>
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 group"
        >
          <span className="font-heading font-black text-2xl md:text-3xl tracking-wider text-white">
            <span className="text-cyber-gradient">Cyber.</span> Game
          </span>
          <span className="w-2 h-2 rounded-full bg-[#F0B71F] animate-pulse"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Media', href: '#media' },
            { label: 'Support', href: '#faq' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-gradient transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Cyber SFX' : 'Enable Cyber SFX'}
            className="p-2.5 rounded-lg border border-white/10 hover:border-[#F0B71F]/40 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#F0B71F] transition-all"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onOpenGetStarted();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-6 py-2.5 rounded-lg bg-cyber-gradient hover:opacity-90 active:scale-95 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(224,54,9,0.35)] hover:shadow-[0_0_30px_rgba(240,183,31,0.5)] cursor-pointer"
          >
            Get started free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-300"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-b border-[#F0B71F]/20 px-6 py-6 mt-4 flex flex-col gap-4 animate-in fade-in duration-200">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Media', href: '#media' },
            { label: 'Support', href: '#faq' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium text-gray-300 hover:text-white py-1"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
              onOpenGetStarted();
            }}
            className="mt-2 w-full py-3 rounded-lg bg-cyber-gradient text-white font-semibold text-center text-sm shadow-[0_0_20px_rgba(224,54,9,0.4)]"
          >
            Get started free
          </button>
        </div>
      )}
    </header>
  );
}
