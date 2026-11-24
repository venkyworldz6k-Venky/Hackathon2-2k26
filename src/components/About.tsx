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
            <span>THE COLLABORATIVE MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            About Gemini Agentic 2026
          </h2>

          <p className="text-[#F3F0E8]/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Organized by <strong className="text-white">Proton Solutions</strong> in official collaboration with <strong className="text-[#F2B544]">{ngoPartner.name}</strong>, uniting autonomous AI innovation with verified grassroots social impact.
          </p>
        </div>

        {/* 2 Clean Focus Cards: Technology & Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Autonomous AI */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#073B3A] border border-[#C6FF3D]/25 shadow-lg flex flex-col justify-between group hover:border-[#C6FF3D] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#052928] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] mb-5">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#C6FF3D] uppercase font-bold tracking-wider block mb-1">
                AUTONOMOUS ENGINEERING
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] mb-3 font-display">
                Beyond Static Prompts
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed font-normal">
                Build proactive multi-agent loops, reasoning pipelines, and Gemini tool-calling swarms that perceive context, plan complex multi-step actions, and execute software autonomously.
              </p>
            </div>
            <div className="pt-4 mt-5 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#C6FF3D]">
              <span>100% ONLINE</span>
              <span>SOLO OR TEAMS (1-4)</span>
            </div>
          </div>

          {/* Card 2: Social Impact */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#073B3A] border border-[#F2B544]/30 shadow-lg flex flex-col justify-between group hover:border-[#F2B544] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#052928] border border-[#F2B544]/40 flex items-center justify-center text-[#F2B544] mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#F2B544] uppercase font-bold tracking-wider block mb-1">
                ROOTS & RISE COLLABORATION
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] mb-3 font-display">
                Technology for Real Purpose
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed font-normal">
                Anchor your technical prototypes in verified rural challenges across 142 Gram Panchayats—from clean water management and vernacular education to primary health tele-triage.
              </p>
            </div>
            <div className="pt-4 mt-5 border-t border-[#F3F0E8]/10 flex items-center justify-between text-xs font-mono text-[#F2B544]">
              <span>GRASSROOTS RELEVANCE</span>
              <span>ETHICAL EVALUATION</span>
            </div>
          </div>
        </div>

        {/* Sleek Dual Organizer Banner */}
        <div className="p-6 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#052928] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#C6FF3D] font-bold block">TECHNOLOGY ORGANISER</span>
              <h4 className="text-base font-bold text-[#F3F0E8]">{technologyOrganizer.name}</h4>
              <p className="text-xs text-[#F3F0E8]/60">Platform infrastructure, engineering challenge design & evaluation.</p>
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
              <p className="text-xs text-[#F3F0E8]/60">Grassroots community problem framing & social relevance advisory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
