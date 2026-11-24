import React from 'react';
import { Terminal, HeartHandshake, ShieldCheck, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const PartnershipBanner: React.FC = () => {
  const { technologyOrganizer, ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="partnership" className="py-20 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background radial warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#176B52]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#F2B544]/40 text-[#F2B544] text-xs font-mono font-bold mb-4 tracking-wider uppercase shadow-warm-glow">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F2B544]" />
            <span>OFFICIAL STRATEGIC COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            Together, Building Technology for Social Good.
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A collaborative initiative uniting engineering excellence from <strong className="text-white">Proton Solutions</strong> with verified grassroots impact from <strong className="text-[#F2B544]">{ngoPartner.name}</strong>.
          </p>
        </div>

        {/* 3-Column Partnership Presentation: Organizer (Left) | Connecting Graphic (Center) | NGO (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch max-w-6xl mx-auto">
          {/* Left Card: Proton Solutions */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#073B3A] border border-[#C6FF3D]/30 shadow-xl flex flex-col justify-between group hover:border-[#C6FF3D] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#052928] border border-[#C6FF3D]/40 text-xs font-mono font-bold text-[#C6FF3D] uppercase">
                  {technologyOrganizer.role}
                </span>
                <span className="text-[11px] font-mono text-[#F3F0E8]/50">ENGINEERING LEAD</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0a4c4b] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] shadow-sm">
                  <Terminal className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#F3F0E8] font-display tracking-tight">
                    {technologyOrganizer.name}
                  </h3>
                  <p className="text-xs font-mono text-[#C6FF3D] font-semibold">{technologyOrganizer.tagline}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-6 font-medium">
                {technologyOrganizer.description}
              </p>

              {/* Responsibilities */}
              <div className="pt-4 border-t border-[#F3F0E8]/10 space-y-2">
                <p className="text-xs font-mono text-[#C6FF3D] uppercase font-bold tracking-wider mb-2">
                  Key Responsibilities:
                </p>
                {technologyOrganizer.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#F3F0E8]/80">
                    <span className="text-[#C6FF3D] mt-0.5">•</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#F3F0E8]/60">
              <span>{technologyOrganizer.contactEmail}</span>
              <span className="text-[#C6FF3D]">Tech Partner</span>
            </div>
          </div>

          {/* Center Column: Connecting Graphic / Collaboration Symbol */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="w-14 h-14 rounded-full bg-[#176B52] border-2 border-[#C6FF3D] shadow-neon flex items-center justify-center text-[#C6FF3D] z-10">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div className="h-full w-0.5 bg-gradient-to-b from-[#C6FF3D] via-[#F2B544] to-[#C6FF3D] my-2 hidden lg:block opacity-40" />
            <span className="text-[11px] font-mono text-[#C6FF3D] uppercase tracking-widest mt-2 hidden lg:block text-center font-bold">
              AI + IMPACT
            </span>
          </div>

          {/* Right Card: NGO Partner */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#073B3A] border border-[#F2B544]/40 shadow-xl flex flex-col justify-between group hover:border-[#F2B544] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#052928] border border-[#F2B544]/50 text-xs font-mono font-bold text-[#F2B544] uppercase">
                  {ngoPartner.role}
                </span>
                <span className="text-[11px] font-mono text-[#F2B544]/70">COMMUNITY ADVISORY</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#052928] border border-[#F2B544]/50 flex items-center justify-center text-[#F2B544] shadow-sm">
                  <HeartHandshake className="w-7 h-7 text-[#F2B544]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#F3F0E8] font-display tracking-tight">
                    {ngoPartner.name}
                  </h3>
                  <p className="text-xs font-mono text-[#F2B544] font-semibold">"{ngoPartner.tagline}"</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-6 font-medium">
                {ngoPartner.description}
              </p>

              {/* Responsibilities */}
              <div className="pt-4 border-t border-[#F3F0E8]/10 space-y-2">
                <p className="text-xs font-mono text-[#F2B544] uppercase font-bold tracking-wider mb-2">
                  Key Responsibilities:
                </p>
                {ngoPartner.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#F3F0E8]/80">
                    <span className="text-[#F2B544] mt-0.5">•</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono">
              <a 
                href={ngoPartner.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#F2B544] hover:underline flex items-center gap-1 font-bold"
              >
                <span>roots-and-rise-l27a.vercel.app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#F2B544]">Social Partner</span>
            </div>
          </div>
        </div>

        {/* Partnership Assurance Note */}
        <div className="mt-8 text-center text-xs font-mono text-[#F3F0E8]/70 max-w-2xl mx-auto">
          <span>Official collaboration between Proton Solutions (Technology Host) and ROOTS & RISE Foundation (Section 8 Non-Profit • CIN: U85300DL2021NPL389012).</span>
        </div>
      </div>
    </section>
  );
};
