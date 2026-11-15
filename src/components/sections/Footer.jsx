import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    sound.playTrigger();
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 border-t border-white/10 bg-[#030305] overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[250px] bg-gradient-to-t from-[#E03609]/10 via-[#F0B71F]/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Top Section: Brand + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="inline-block">
              <span className="font-heading font-black text-2xl md:text-3xl tracking-wider text-white">
                <span className="text-cyber-gradient">Cyber.AI</span> - Cyber Punk Website
              </span>
            </a>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              Explore the high-tech, low-life world where the lines between humanity, machinery, and cybernetic synthetic intelligence converge.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter encrypted email uplink..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F0B71F] transition-all"
                />
                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="absolute right-1.5 px-4 py-2 rounded-lg bg-cyber-gradient text-white text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-all cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{subscribed ? 'SENT' : 'LINK'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Column 1: Information */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider">
              Information
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['Press Centre', 'Our Blog', 'Term and Condition', 'Raid Schedules'].map((item) => (
                <li key={item}>
                  <a
                    href="#faq"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="hover:text-[#F0B71F] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Menu */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Media', href: '#media' },
                { label: 'Blog', href: '#services' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="hover:text-[#F0B71F] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F0B71F] shrink-0" />
                <span>Phone : +123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F0B71F] shrink-0" />
                <span>Email : uplink@cybergame.io</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#F0B71F] shrink-0" />
                <span>Address : Sector 07 Neo Grid, Line 01</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Terms, Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          
          {/* Copyright */}
          <div>
            Cyber.Game - Haris-khursheed 2024. All rights reserved.
          </div>

          {/* Terms, Privacy, Cookies */}
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#F0B71F] hover:bg-[#F0B71F]/10 hover:text-[#F0B71F] text-gray-300 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.88a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#F0B71F] hover:bg-[#F0B71F]/10 hover:text-[#F0B71F] text-gray-300 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              aria-label="Twitter / X"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#F0B71F] hover:bg-[#F0B71F]/10 hover:text-[#F0B71F] text-gray-300 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
