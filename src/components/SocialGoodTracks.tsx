import React from 'react';
import { Cpu, Bot, Workflow, Sparkles, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const SocialGoodTracks: React.FC = () => {
  const { socialGoodTracks } = HACKATHON_CONFIG;

  return (
    <section id="tracks" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#C6FF3D]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#176B52]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052928] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Bot className="w-3.5 h-3.5" />
            <span>CHALLENGE DOMAINS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            AI Engineering Domains
          </h2>

          <p className="text-[#F3F0E8]/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Design and build practical software applications across six high-impact domains using LLMs, Generative AI, and autonomous AI agents.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#052928] border border-[#C6FF3D]/40 text-xs font-mono text-[#C6FF3D]">
            <Workflow className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Build for 1 or more domains • Multi-agent & tool-calling solutions encouraged</span>
          </div>
        </div>

        {/* 6 Challenge Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialGoodTracks.map((track) => (
            <div
              key={track.id}
              className="p-7 rounded-3xl bg-[#052928] border border-[#F3F0E8]/15 hover:border-[#C6FF3D] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    THEME {track.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                    <Workflow className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#F3F0E8] font-display mb-3 group-hover:text-[#C6FF3D] transition-colors leading-snug">
                  {track.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-5">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F0E8]/10 space-y-3">
                <div className="p-3 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/10">
                  <span className="text-[10px] font-mono text-[#C6FF3D] uppercase font-bold block mb-1">
                    AGENTIC AI ARCHITECTURE
                  </span>
                  <p className="text-xs text-[#F3F0E8]/80 font-mono">
                    {track.techFocus}
                  </p>
                </div>

                <div className="text-xs font-mono text-[#F2B544] flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>{track.communityImpact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guidance Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#052928] border border-[#F3F0E8]/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#F3F0E8] font-display">
                Technical Focus: Autonomous Agents, Multi-Agent Swarms & Real-World APIs
              </h4>
              <p className="text-xs text-[#F3F0E8]/75 mt-0.5 max-w-2xl">
                Participants can leverage Google Gemini 2.0 / 1.5 Pro, function-calling models, LangChain/LlamaIndex, or lightweight custom agent loops to demonstrate tangible human impact.
              </p>
            </div>
          </div>

          <a
            href="#register"
            className="px-6 py-3 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-xs sm:text-sm hover:bg-[#b5f524] transition-all whitespace-nowrap shadow-neon"
          >
            Register for Free
          </a>
        </div>
      </div>
    </section>
  );
};
