import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import BannerSection from './components/sections/BannerSection';
import ServicesSection from './components/sections/ServicesSection';
import MediaSection from './components/sections/MediaSection';
import FAQSection from './components/sections/FAQSection';
import Footer from './components/sections/Footer';
import TrailerModal from './components/modals/TrailerModal';
import GetStartedModal from './components/modals/GetStartedModal';

export default function App() {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040406] text-[#dddddd] relative selection:bg-[#E03609] selection:text-white font-sans bg-grid-cyber">
      
      {/* Figma Element & Line (1:4): Framing Vertical Lines & Crosshairs */}
      <div className="fixed inset-0 pointer-events-none z-20 flex justify-center">
        <div className="w-full max-w-[1520px] h-full relative flex justify-between">
          {/* Left Vertical Line */}
          <div className="w-px h-full bg-gradient-to-b from-transparent via-[#F0B71F]/20 to-transparent"></div>

          {/* Right Vertical Line */}
          <div className="w-px h-full bg-gradient-to-b from-transparent via-[#F0B71F]/20 to-transparent"></div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar onOpenGetStarted={() => setGetStartedOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection 
          onOpenTrailer={() => setTrailerOpen(true)} 
          onOpenGetStarted={() => setGetStartedOpen(true)} 
        />
        
        {/* Technical Section Divider with Crosshair */}
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F0B71F]/30 to-transparent relative">
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 text-[10px] font-mono text-[#F0B71F] bg-[#040406] px-2">
              + SEC_01 +
            </span>
          </div>
        </div>

        <AboutSection onOpenGetStarted={() => setGetStartedOpen(true)} />

        <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F0B71F]/30 to-transparent relative">
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 text-[10px] font-mono text-[#F0B71F] bg-[#040406] px-2">
              + SEC_02 +
            </span>
          </div>
        </div>

        <BannerSection 
          onOpenTrailer={() => setTrailerOpen(true)} 
          onOpenGetStarted={() => setGetStartedOpen(true)} 
        />

        <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F0B71F]/30 to-transparent relative">
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 text-[10px] font-mono text-[#F0B71F] bg-[#040406] px-2">
              + SEC_03 +
            </span>
          </div>
        </div>

        <ServicesSection onOpenGetStarted={() => setGetStartedOpen(true)} />

        <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F0B71F]/30 to-transparent relative">
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 text-[10px] font-mono text-[#F0B71F] bg-[#040406] px-2">
              + SEC_04 +
            </span>
          </div>
        </div>

        <MediaSection 
          onOpenTrailer={() => setTrailerOpen(true)} 
          onOpenGetStarted={() => setGetStartedOpen(true)} 
        />

        <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F0B71F]/30 to-transparent relative">
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 text-[10px] font-mono text-[#F0B71F] bg-[#040406] px-2">
              + SEC_05 +
            </span>
          </div>
        </div>

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <TrailerModal 
        isOpen={trailerOpen} 
        onClose={() => setTrailerOpen(false)} 
      />

      <GetStartedModal 
        isOpen={getStartedOpen} 
        onClose={() => setGetStartedOpen(false)} 
      />

    </div>
  );
}
