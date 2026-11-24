import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Participation', 'Submissions'];

  const filteredFaqs = HACKATHON_CONFIG.faqs.filter(faq => {
    return activeCategory === 'All' || faq.category === activeCategory;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#052928] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & HELP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg">
            Find answers to common inquiries regarding registration, eligibility, format, and prizes.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-[#C6FF3D] text-[#073B3A] font-bold shadow-neon'
                  : 'bg-[#052928] text-[#F3F0E8]/70 hover:text-white border border-[#F3F0E8]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'border-[#C6FF3D] bg-[#0a3534] shadow-teal-glow'
                    : 'border-[#F3F0E8]/10 bg-[#052928]/80 hover:border-[#F3F0E8]/30'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#F3F0E8] font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#C6FF3D] text-[#073B3A] rotate-180'
                        : 'bg-[#073B3A] text-[#F3F0E8]/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#F3F0E8]/80 leading-relaxed border-t border-[#F3F0E8]/10 pt-4 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] font-mono text-[#C6FF3D]">
                      CATEGORY: {faq.category.toUpperCase()}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
