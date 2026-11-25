import React from 'react';
import { Sparkles, Brain, HeartHandshake, Terminal, ExternalLink } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const About: React.FC = () => {
  const { technologyOrganizer, ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="about" className="py-20 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#176B52]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 bg-[#C6FF3D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>ALL THAT YOU NEED TO KNOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            About {HACKATHON_CONFIG.eventName}
          </h2>

          <p className="text-[#F3F0E8]/85 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {HACKATHON_CONFIG.heroSupportingText}
          </p>
        </div>

        {/* 2 Clean Focus Cards: What to Expect & Why Participate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: What to Expect? */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#073B3A] border border-[#C6FF3D]/25 shadow-lg flex flex-col justify-between group hover:border-[#C6FF3D] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#052928] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] mb-5">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#C6FF3D] uppercase font-bold tracking-wider block mb-1">
                INNOVATION SPRINT
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] mb-4 font-display">
                What to Expect?
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/85">
                {HACKATHON_CONFIG.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#C6FF3D]">
              <span>100% ONLINE</span>
              <span>TEAM: 1 - 2 MEMBERS</span>
            </div>
          </div>

          {/* Card 2: Why Participate? */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#073B3A] border border-[#F2B544]/30 shadow-lg flex flex-col justify-between group hover:border-[#F2B544] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#052928] border border-[#F2B544]/40 flex items-center justify-center text-[#F2B544] mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#F2B544] uppercase font-bold tracking-wider block mb-1">
                OPPORTUNITY & REWARDS
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] mb-4 font-display">
                Why Participate?
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/85">
                {HACKATHON_CONFIG.whyParticipate.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#F2B544] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#F2B544]">
              <span>PRIZE POOL: ₹24,000</span>
              <span>CERTIFICATES & MENTORSHIP</span>
            </div>
          </div>
        </div>

        {/* Sleek Organizer & Eligibility Banner */}
        <div className="p-6 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#052928] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#C6FF3D] font-bold block">ORGANIZER</span>
              <h4 className="text-base font-bold text-[#F3F0E8]">{technologyOrganizer.name}</h4>
              <p className="text-xs text-[#F3F0E8]/60">AI Engineering challenge design, platform infrastructure, and evaluation.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l md:border-[#F3F0E8]/10 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#052928] border border-[#F2B544]/40 flex items-center justify-center text-[#F2B544] flex-shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#F2B544] font-bold block">COLLABORATION PARTNER</span>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-[#F3F0E8]">{ngoPartner.name}</h4>
                <a
                  href={ngoPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2B544] hover:text-white"
                  title="Visit Website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs text-[#F3F0E8]/60">Social impact and real-world community problem statements advisory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
