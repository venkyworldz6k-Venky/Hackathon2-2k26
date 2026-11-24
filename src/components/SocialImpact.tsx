import React from 'react';
import { Sprout, BookOpen, HeartPulse, Users, Sparkles, ArrowRight } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const SocialImpact: React.FC = () => {
  const { socialImpact } = HACKATHON_CONFIG;

  const focusIcons = [
    <Sprout className="w-6 h-6 text-[#C6FF3D]" />,
    <BookOpen className="w-6 h-6 text-[#F2B544]" />,
    <HeartPulse className="w-6 h-6 text-[#E98268]" />,
    <Users className="w-6 h-6 text-[#C6FF3D]" />,
  ];

  return (
    <section id="social-impact" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#176B52]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F2B544]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052928] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ETHICAL TECHNOLOGY & HUMAN IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            {socialImpact.sectionTitle}
          </h2>

          <p className="text-[#F3F0E8]/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {socialImpact.description}
          </p>
        </div>

        {/* 4 Focus Areas with Authentic Imagery & Human-Centric Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialImpact.focusAreas.map((area, idx) => (
            <div
              key={area.id}
              className="rounded-3xl bg-[#052928] border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1.5"
            >
              {/* Image Container with Ambient Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052928] via-[#052928]/40 to-transparent" />
                
                <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-lg bg-[#073B3A]/90 border border-[#F3F0E8]/20 text-[11px] font-mono text-[#C6FF3D] font-bold">
                  AREA {area.number}
                </span>

                <div className="absolute bottom-3 left-3.5 w-10 h-10 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/20 flex items-center justify-center shadow-md">
                  {focusIcons[idx]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#F3F0E8] font-display mb-1 group-hover:text-[#C6FF3D] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F2B544] mb-3 font-semibold">
                    {area.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3F0E8]/10 text-xs text-[#C6FF3D] font-mono flex items-start gap-1.5">
                  <span className="font-bold">Goal:</span>
                  <span className="text-[#F3F0E8]/70">{area.impactGoal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Callout Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-[#073B3A] via-[#176B52] to-[#073B3A] border-2 border-[#C6FF3D]/30 p-8 shadow-neon flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
              THE INVENTIVE MANDATE
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#F3F0E8] font-display">
              Autonomous Systems for Grassroots Transformation
            </h4>
            <p className="text-xs sm:text-sm text-[#F3F0E8]/85 mt-1 leading-relaxed">
              We urge participants to construct multi-agent swarms that run on modest hardware, function with multilingual audio, and provide practical assistance to real citizens in Indian villages.
            </p>
          </div>

          <a
            href="#tracks"
            className="px-6 py-3.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-sm hover:bg-[#b5f524] transition-all duration-200 shadow-md whitespace-nowrap flex items-center gap-2 flex-shrink-0"
          >
            <span>Explore Social Impact Tracks</span>
            <ArrowRight className="w-4 h-4 text-[#073B3A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
