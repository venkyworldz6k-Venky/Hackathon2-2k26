import React from 'react';
import { 
  HeartHandshake, 
  ExternalLink, 
  Compass, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const NgoPartner: React.FC = () => {
  const { ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="ngo-partner" className="py-20 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#176B52]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#F2B544]/50 text-[#F2B544] text-xs font-mono font-bold mb-4 tracking-wider uppercase shadow-warm-glow">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F2B544]" />
            <span>OFFICIAL SOCIAL IMPACT PARTNER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            {ngoPartner.name}
          </h2>

          <p className="text-[#F3F0E8]/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Empowering rural India through community-controlled water systems, women self-help collectives, vernacular education, and healthcare access.
          </p>
        </div>

        {/* Main Dossier Card */}
        <div className="rounded-3xl bg-[#073B3A] border-2 border-[#F2B544]/40 shadow-2xl p-6 sm:p-8 mb-8 relative overflow-hidden">
          {/* Header Row: Partner Identity & Website CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F3F0E8]/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#052928] border-2 border-[#F2B544] flex items-center justify-center text-[#F2B544] shadow-warm-glow flex-shrink-0">
                <HeartHandshake className="w-7 h-7 text-[#F2B544]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#F3F0E8] font-display">
                    {ngoPartner.name}
                  </h3>
                  <span className="text-[10px] font-mono text-[#C6FF3D] bg-[#052928] border border-[#C6FF3D]/40 px-2 py-0.5 rounded-full hidden sm:inline">
                    CIN: {ngoPartner.cin}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#F2B544] font-medium mt-0.5">
                  "{ngoPartner.tagline}"
                </p>
              </div>
            </div>

            <a
              href={ngoPartner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#F2B544] text-[#073B3A] font-bold text-xs flex items-center gap-1.5 hover:bg-[#e0a435] transition-all shadow-md group whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>Visit NGO Website</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            <div className="p-3.5 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl font-mono font-black text-[#C6FF3D]">142+</span>
              <span className="text-[10px] font-mono text-[#F3F0E8]/70 uppercase">Gram Panchayats</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl font-mono font-black text-[#F2B544]">Section 80G</span>
              <span className="text-[10px] font-mono text-[#F3F0E8]/70 uppercase">Tax Certified 12A</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl font-mono font-black text-[#C6FF3D]">4 States</span>
              <span className="text-[10px] font-mono text-[#F3F0E8]/70 uppercase">RJ • MP • OD • WB</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 text-center">
              <span className="block text-xl font-mono font-black text-[#F2B544]">Section 8</span>
              <span className="text-[10px] font-mono text-[#F3F0E8]/70 uppercase">Non-Profit Company</span>
            </div>
          </div>

          {/* 4 Flagship Programmes (Concise) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
            {ngoPartner.initiatives.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#052928] border border-[#F3F0E8]/10 flex items-start gap-3 hover:border-[#F2B544]/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F2B544] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h5 className="text-xs font-bold text-[#F3F0E8]">{item.title}</h5>
                    {item.stat && (
                      <span className="text-[10px] font-mono text-[#C6FF3D] font-bold">
                        • {item.stat}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#F3F0E8]/70 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Contact Strip */}
          <div className="p-4 rounded-xl bg-[#04201f] border border-[#F2B544]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#F3F0E8]/75">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F2B544]" />
                <span>{ngoPartner.registeredOffice}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C6FF3D]" />
                <span>{ngoPartner.contactEmail}</span>
              </span>
            </div>
            <a
              href={ngoPartner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6FF3D] hover:underline flex items-center gap-1 font-bold text-[11px]"
            >
              <span>roots-and-rise-l27a.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
