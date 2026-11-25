import React from 'react';
import { Bot, Zap, HeartHandshake, Terminal, Globe, Trophy, Users } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: <Bot className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Agentic AI Challenges",
      description: "Build autonomous AI agents that can plan, reason, and take action with Gemini."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Multi-Agent Systems",
      description: "Design teams of specialized AI agents that collaborate to solve complex problems."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#F2B544]" />,
      title: "Real Social Impact",
      description: "Solve genuine challenges in village education, water conservation, and healthcare."
    },
    {
      icon: <Terminal className="w-6 h-6 text-[#C6FF3D]" />,
      title: "Expert Mentorship",
      description: "Get technical feedback and architectural guidance from senior AI engineers."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C6FF3D]" />,
      title: "100% Online",
      description: "Participate remotely from anywhere in India with cloud submissions and live online finale."
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#FFD700]" />,
      title: "₹24,000 Cash Prizes",
      description: "Guaranteed cash prizes: 🥇 ₹10,000, 🥈 ₹8,000, 🥉 ₹6,000 plus digital certificates."
    }
  ];

  const participantCategories = [
    {
      title: "Undergraduate Students",
      desc: "College students exploring AI development, coding, and software engineering."
    },
    {
      title: "Postgraduate Students",
      desc: "Grad students and researchers specializing in AI/ML, NLP, and intelligent agents."
    },
    {
      title: "Engineering Students",
      desc: "Aspiring engineers passionate about building scalable, production-ready AI tools."
    },
    {
      title: "Freshers",
      desc: "Recent graduates eager to showcase practical AI engineering projects on their portfolio."
    },
    {
      title: "Experienced Professionals",
      desc: "Developers, data engineers, and AI practitioners building next-gen applications."
    },
    {
      title: "Team Size: 1 - 2 Members",
      desc: "Participate solo or team up with 1 partner to collaborate on code and presentation."
    }
  ];

  return (
    <section className="py-20 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Event Highlights */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE EVENT PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-3">
            Why Participate?
          </h2>
          <p className="text-[#F3F0E8]/80 text-sm sm:text-base max-w-xl mx-auto">
            Combining frontier autonomous AI engineering with verified grassroots problem solving.
          </p>
        </div>

        {/* 6 Clean Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/10 hover:border-[#C6FF3D]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#052928] border border-[#F3F0E8]/15 flex items-center justify-center mb-4 group-hover:border-[#C6FF3D] transition-colors">
                  {h.icon}
                </div>
                <h3 className="text-base font-bold text-[#F3F0E8] mb-1.5 font-display leading-tight">{h.title}</h3>
                <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Who Can Participate */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#073B3A] border border-[#F3F0E8]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#F3F0E8]/10">
            <div>
              <span className="text-xs font-mono text-[#C6FF3D] font-bold uppercase tracking-wider block">ELIGIBILITY</span>
              <h3 className="text-xl font-bold text-[#F3F0E8] font-display">Who Can Participate?</h3>
            </div>
            <span className="text-xs font-mono text-[#F3F0E8]/60">Open to developers & students across India</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {participantCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#052928] border border-[#F3F0E8]/10"
              >
                <div className="text-[10px] font-mono text-[#C6FF3D] font-bold mb-1">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-[#F3F0E8] mb-1 font-display">{item.title}</h4>
                <p className="text-xs text-[#F3F0E8]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
