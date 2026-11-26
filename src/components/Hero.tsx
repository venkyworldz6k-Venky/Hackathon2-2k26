import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy, Sparkles, Globe, ShieldAlert, Cpu, HeartHandshake, Users, Sparkle, ExternalLink, Ticket } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreClick }) => {
  // Target: Registration Deadline December 31, 2026 12:00 AM IST
  // Opening: November 25, 2026 12:00 AM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    label: 'REGISTRATION CLOSES DEC 31, 2026 (12:00 AM IST)',
  });

  useEffect(() => {
    const openingDate = new Date('2026-11-25T00:00:00+05:30').getTime();
    const deadlineDate = new Date('2026-12-31T00:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();

      let target = deadlineDate;
      let label = 'REGISTRATION CLOSES DEC 31, 2026 (12:00 AM IST)';

      if (now < openingDate) {
        target = openingDate;
        label = 'REGISTRATION OPENS NOV 25, 2026 (12:00 AM IST)';
      }

      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          label,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          label: 'REGISTRATIONS CLOSED',
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-radial-gradient">
      {/* Background glow ambients with Forest Green and Warm Gold accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#C6FF3D]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#176B52]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#F2B544]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Innovation Pill Left */}
      <div className="hidden xl:block absolute left-10 top-1/3 p-3.5 rounded-2xl glass-teal border border-[#C6FF3D]/25 animate-float shadow-teal-glow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C6FF3D]/15 flex items-center justify-center text-[#C6FF3D]">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#C6FF3D] uppercase tracking-wider">AGENTIC_AI_LOOP</p>
            <p className="text-xs text-[#F3F0E8] font-bold">Autonomous Intelligence</p>
          </div>
        </div>
      </div>

      {/* Floating Social Impact Pill Right */}
      <div className="hidden xl:block absolute right-10 top-1/2 p-3.5 rounded-2xl glass-teal border border-[#F2B544]/30 animate-float [animation-delay:2s] shadow-warm-glow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F2B544]/20 flex items-center justify-center text-[#F2B544]">
            <HeartHandshake className="w-5 h-5 text-[#F2B544]" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#F2B544] uppercase tracking-wider">SOCIAL_IMPACT_PARTNER</p>
            <p className="text-xs text-[#F3F0E8] font-bold">{HACKATHON_CONFIG.ngoPartner.name}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Label: Technology Meets Social Impact */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a3534]/90 border border-[#C6FF3D]/40 mb-6 backdrop-blur-sm shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D] animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-widest font-bold text-[#C6FF3D] uppercase">
            {HACKATHON_CONFIG.badgeLabel}
          </span>
        </div>

        {/* Organizer & Partner Header Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="px-3.5 py-1 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/20 flex items-center gap-2 text-xs font-mono text-[#F3F0E8]">
            <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
            <span>Tech Organiser: <strong className="text-white">Proton Solutions</strong></span>
          </div>
          <span className="text-[#C6FF3D] text-xs font-mono font-bold">✕</span>
          <div className="px-3.5 py-1 rounded-xl bg-[#073B3A] border border-[#F2B544]/30 flex items-center gap-2 text-xs font-mono text-[#F3F0E8]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F2B544]" />
            <span>NGO Partner: <strong className="text-[#F2B544]">{HACKATHON_CONFIG.ngoPartner.name}</strong></span>
          </div>
          <span className="text-[#C6FF3D] text-xs font-mono font-bold">✕</span>
          <div className="px-3.5 py-1 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/35 flex items-center gap-2 text-xs font-mono text-[#F3F0E8]">
            <Ticket className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>Ticket Partner: <strong className="text-[#C6FF3D]">{HACKATHON_CONFIG.ticketPartner.name}</strong></span>
          </div>
        </div>

        {/* Event Title */}
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-2">
          {HACKATHON_CONFIG.eventName}
        </p>

        {/* Main Heading: "Build Intelligent. Create Impact. Change Tomorrow." */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F3F0E8] mb-6 leading-[1.08] font-display">
          Build Intelligent. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F0E8] via-[#C6FF3D] to-[#F2B544]">
            Create Impact.
          </span>{' '}
          <br className="hidden sm:inline" />
          <span className="text-[#F3F0E8]">Change Tomorrow.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-[#F3F0E8]/85 font-medium max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          {HACKATHON_CONFIG.heroSupportingText}
        </p>

        {/* Four Core Fact Badges: Format, Team Size, Category, Prize Pool */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          {/* Format Badge */}
          <div className="p-3.5 rounded-xl glass-teal border border-[#F3F0E8]/10 flex items-center justify-center gap-2.5 group hover:border-[#C6FF3D]/40 transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#C6FF3D]/10 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
              <Globe className="w-4 h-4 text-[#C6FF3D]" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-[#F3F0E8]/60 block leading-tight">Format</span>
              <span className="text-xs sm:text-sm font-bold text-[#F3F0E8]">100% Online</span>
            </div>
          </div>

          {/* Team Size */}
          <div className="p-3.5 rounded-xl glass-teal border border-[#C6FF3D]/30 flex items-center justify-center gap-2.5 group hover:border-[#C6FF3D] transition-all bg-[#0a3534]/60">
            <div className="w-8 h-8 rounded-lg bg-[#C6FF3D]/20 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
              <Users className="w-4 h-4 text-[#C6FF3D]" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-[#C6FF3D] block leading-tight font-semibold">Team Size</span>
              <span className="text-xs sm:text-sm font-bold text-[#F3F0E8] font-mono">1 - 2 Members</span>
            </div>
          </div>

          {/* Category */}
          <div className="p-3.5 rounded-xl glass-teal border border-[#F2B544]/30 flex items-center justify-center gap-2.5 group hover:border-[#F2B544] transition-all bg-[#0a3534]/60">
            <div className="w-8 h-8 rounded-lg bg-[#F2B544]/20 flex items-center justify-center text-[#F2B544] flex-shrink-0">
              <Cpu className="w-4 h-4 text-[#F2B544]" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-[#F2B544] block leading-tight font-semibold">Category</span>
              <span className="text-xs sm:text-sm font-bold text-[#F3F0E8]">AI Engineering</span>
            </div>
          </div>

          {/* Prize Pool */}
          <div className="p-3.5 rounded-xl glass-teal border border-[#FFD700]/30 flex items-center justify-center gap-2.5 group hover:border-[#FFD700]/70 transition-all bg-[#FFD700]/5">
            <div className="w-8 h-8 rounded-lg bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] flex-shrink-0">
              <Trophy className="w-4 h-4 text-[#FFD700]" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-[#FFD700] block leading-tight font-semibold">Prize Pool</span>
              <span className="text-xs sm:text-sm font-bold text-[#F3F0E8] font-mono">₹24,000</span>
            </div>
          </div>
        </div>

        {/* Primary & Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          {/* Primary Button: "Register on Unstop" */}
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              onRegisterClick();
            }}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-extrabold rounded-xl bg-[#C6FF3D] text-[#073B3A] hover:bg-[#b5f524] transition-all duration-200 shadow-neon hover:shadow-neon-lg flex items-center justify-center gap-3 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#073B3A]" />
            <span>Register on Unstop</span>
            <ArrowRight className="w-5 h-5 text-[#073B3A]" />
          </a>

          {/* Secondary Button: "Explore the Challenge" */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold rounded-xl text-[#F3F0E8] border border-[#F3F0E8]/30 hover:border-[#C6FF3D] hover:text-[#C6FF3D] hover:bg-[#073B3A]/80 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Rounds & Timeline</span>
            <ArrowRight className="w-4 h-4 text-[#C6FF3D]" />
          </button>
        </div>

        {/* Official Event Countdown Timer */}
        <div className="max-w-xl mx-auto p-5 rounded-2xl glass-teal border border-[#C6FF3D]/40 shadow-neon">
          <p className="text-xs font-mono tracking-widest text-[#C6FF3D] uppercase mb-3 font-bold flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
            {timeLeft.label}
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Days</span>
            </div>
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Hours</span>
            </div>
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Mins</span>
            </div>
            <div className="bg-[#052928] p-2 sm:p-3 rounded-lg border border-[#F3F0E8]/10">
              <span className="block text-xl sm:text-3xl font-mono font-bold text-[#C6FF3D]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#F3F0E8]/60 uppercase font-mono">Secs</span>
            </div>
          </div>
        </div>

        {/* Notice line */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs text-[#F3F0E8]/70 font-mono">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C6FF3D]" />
          <span>Registrations Open: Nov 25 – Dec 31, 2026 • Entry Fee: ₹350 (KonfHub) • Team Size: 1 - 2 Members</span>
        </div>
      </div>
    </section>
  );
};
