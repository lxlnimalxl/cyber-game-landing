import React, { useState } from 'react';
import { sound } from '../../utils/audio';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

const faqData = [
  {
    num: '01.',
    question: 'How do I stay updated on new content and events?',
    answer: 'A realm where advanced technology meets dystopian reality. Join our encrypted Discord syndicate and subscribe to quantum holo-bulletins for real-time raid alerts, patch notes, and dev logs.'
  },
  {
    num: '02.',
    question: 'How can I contact customer cyber punk support?',
    answer: 'Reach our tactical AI support terminal 24/7 via the live uplink portal or email support@cybergame.io. Average neural dispatch response time is under 180 seconds.'
  },
  {
    num: '03.',
    question: 'Can I purchase cyberpunk-themed merchandise?',
    answer: 'Yes! Our underground armory store offers limited-run metallic badges, cybernetic apparel, glowing desk mats, and high-fidelity resin helmets shipped globally.'
  },
  {
    num: '04.',
    question: 'Are there any rules or guidelines for participating in the community?',
    answer: 'Respect fellow operatives, avoid malicious unauthorized data breaching, keep comm channels free of spam, and uphold faction code protocols across all designated sectors.'
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([0, 1]); // Initially expand first two

  const toggleItem = (index) => {
    sound.playClick();
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B71F]/30 bg-[#F0B71F]/5 text-xs font-mono text-[#F0B71F] uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// KNOWLEDGE MATRIX // FAQ</span>
          </div>

          <h2 className="font-heading font-black text-3xl md:text-5xl text-white">
            Frequently Asked <span className="text-cyber-gradient">Questions</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
          </p>
        </div>

        {/* 2x2 Grid from Figma Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={item.num}
                onClick={() => toggleItem(idx)}
                onMouseEnter={() => sound.playHover()}
                className={`p-6 md:p-8 rounded-2xl cyber-card transition-all duration-300 cursor-pointer ${
                  isOpen ? 'border-[#F0B71F] bg-white/[0.06] shadow-[0_0_25px_rgba(240,183,31,0.15)]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number 01., 02., etc. */}
                  <div className="font-heading font-black text-3xl md:text-4xl text-cyber-gradient shrink-0">
                    {item.num}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-heading font-bold text-lg md:text-xl text-white">
                        {item.question}
                      </h3>
                      <div className={`p-1.5 rounded-lg border border-white/10 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F0B71F] border-[#F0B71F]/40' : 'text-gray-400'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {isOpen && (
                      <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed animate-in fade-in duration-200">
                        {item.answer}
                      </p>
                    )}

                    {/* Gradient accent bottom line from Figma */}
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-[#F0B71F]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact help card */}
        <div className="mt-12 p-6 rounded-2xl cyber-card max-w-xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#F0B71F]" />
            <span className="text-sm text-gray-300">Still have questions about the syndicate?</span>
          </div>
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="text-xs font-mono uppercase tracking-wider text-[#F0B71F] hover:underline whitespace-nowrap"
          >
            DISPATCH OPERATOR →
          </a>
        </div>

      </div>
    </section>
  );
}
