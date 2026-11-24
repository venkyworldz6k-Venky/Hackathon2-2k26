import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  UploadCloud, 
  Trophy, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Video,
  Code2
} from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const ImportantDates: React.FC = () => {
  // Active selected phase for desktop inspection (defaults to Phase 01 or 04)
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  // Dynamic registration status: upcoming (before Nov 23), open (Nov 23 - Nov 30), closed (after Nov 30)
  const [regStatus, setRegStatus] = useState<'upcoming' | 'open' | 'closed'>('upcoming');
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    badgeText: 'REGISTRATION LAUNCH COUNTDOWN',
    titleText: 'Registration Opens November 23, 2026',
    subtitleText: 'Opening 12:00 AM Indian Standard Time (IST) • 100% Free Entry on Unstop',
  });

  useEffect(() => {
    const openingDate = new Date('2026-11-23T00:00:00+05:30').getTime();
    const closingDate = new Date('2026-11-30T23:59:59+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();

      if (now < openingDate) {
        setRegStatus('upcoming');
        const diff = openingDate - now;
        setCountdownData({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
          badgeText: 'REGISTRATION LAUNCH COUNTDOWN',
          titleText: 'Registration Opens November 23, 2026',
          subtitleText: 'Opening 12:00 AM Indian Standard Time (IST) • 100% Free Entry on Unstop • 100% Online',
        });
      } else if (now <= closingDate) {
        setRegStatus('open');
        const diff = closingDate - now;
        setCountdownData({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
          badgeText: 'REGISTRATION CLOSING COUNTDOWN',
          titleText: 'Registration Closes November 30, 2026',
          subtitleText: 'Deadline: 11:59 PM Indian Standard Time (IST) • 100% Free Entry on Unstop • Verified Seats',
        });
      } else {
        setRegStatus('closed');
        setCountdownData({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          badgeText: 'REGISTRATION CLOSED',
          titleText: 'Registration Closed on November 30, 2026',
          subtitleText: 'Participant Verification & Problem Release Underway',
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Six-phase iconography & metadata mapped to official specs
  const phasesData = [
    {
      phaseNumber: "01",
      title: "REGISTRATION OPEN",
      shortTitle: "Registration Open",
      date: "November 23, 2026",
      time: "Portal Live • 100% Online",
      statusLabel: regStatus === 'upcoming' ? "OPENS NOV 23" : regStatus === 'open' ? "LIVE REGISTRATION" : "CLOSED",
      icon: <UserPlus className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Registration opens for individuals and teams of up to 4 members.",
      points: [
        "Registration Fee: 100% Free (₹0 Entry Fee)",
        "Registration Mode: 100% Online",
        "Complete free registration & submit Google Form before deadline"
      ],
      isLive: regStatus === 'open',
      isUpcoming: regStatus === 'upcoming',
      is24h: false,
      isWinner: false,
    },
    {
      phaseNumber: "02",
      title: "REGISTRATION CLOSING & VERIFICATION",
      shortTitle: "Closing & Verification",
      date: "November 30 – December 2, 2026",
      time: "Closes Nov 30 at 11:59 PM IST",
      statusLabel: "VERIFICATION",
      icon: <ShieldCheck className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Registration closes on Nov 30 at 11:59 PM IST followed by candidate verification.",
      points: [
        "Verify participant information & registration payments",
        "Review eligible registrations & select participants",
        "Selected participants receive confirmation via registered email"
      ],
      isLive: false,
      is24h: false,
      isWinner: false,
    },
    {
      phaseNumber: "03",
      title: "PROBLEM STATEMENT ANNOUNCEMENT",
      shortTitle: "Problem Statements",
      date: "December 3, 2026",
      time: "10:00 AM IST",
      statusLabel: "CHALLENGE RELEASE",
      icon: <Terminal className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Official problem statements and challenge instructions shared via email.",
      points: [
        "Release of official problem statements & guidelines",
        "Technical guidelines & project requirements",
        "Submission instructions & evaluation criteria"
      ],
      isLive: false,
      is24h: false,
      isWinner: false,
    },
    {
      phaseNumber: "04",
      title: "24-HOUR CODING HACKATHON",
      shortTitle: "24H Coding Hackathon",
      date: "December 4–5, 2026",
      time: "Dec 4, 10:00 AM IST to Dec 5, 10:00 AM IST",
      statusLabel: "24-HOUR SPRINT",
      icon: <Zap className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Non-stop 24-hour sprint to build functional prototypes using Gemini & Agentic AI.",
      points: [
        "Competition Duration: 24 Hours non-stop",
        "Start: Dec 4, 10:00 AM IST • End: Dec 5, 10:00 AM IST",
        "Build innovative AI-powered solutions with Agentic AI",
        "Develop functional prototypes demonstrating real-world impact"
      ],
      isLive: false,
      is24h: true,
      isWinner: false,
    },
    {
      phaseNumber: "05",
      title: "PROJECT SUBMISSION & FINALIST SELECTION",
      shortTitle: "Submissions & Shortlisting",
      date: "December 5–8, 2026",
      time: "Submission via Google Form",
      statusLabel: "EVALUATION",
      icon: <UploadCloud className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Submit complete project through the official Google Form with 6 required materials.",
      points: [
        "1. GitHub Repo Link (Source code) & 2. Project Presentation (PPT)",
        "3. Technical Docs & 4. Project Architecture Workflow",
        "5. Implementation Details & 6. Demo Video",
        "Shortlisted finalists receive invitations for online presentations"
      ],
      isLive: false,
      is24h: false,
      isWinner: false,
    },
    {
      phaseNumber: "06",
      title: "ONLINE PRESENTATION & GRAND FINALE",
      shortTitle: "Grand Finale (Google Meet)",
      date: "December 9, 2026",
      time: "5:00 PM IST via Google Meet",
      statusLabel: "GRAND FINALE",
      icon: <Trophy className="w-6 h-6 text-[#FFD700]" />,
      summary: "Shortlisted finalists present projects online through Google Meet followed by winner declaration.",
      points: [
        "Online project presentations via Google Meet",
        "🥇 First Prize: ₹10,000 | 🥈 Second: ₹8,000 | 🥉 Third: ₹6,000",
        "Total Prize Pool of ₹24,000 distributed post-ceremony",
        "Google Meet joining details shared with shortlisted participants"
      ],
      isLive: false,
      is24h: false,
      isWinner: true,
    },
  ];

  const currentPhase = phasesData[selectedPhase];

  return (
    <section id="timeline" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#C6FF3D]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0b4d4c]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#052928] border border-[#C6FF3D] text-[#C6FF3D] text-xs font-mono font-bold mb-4 shadow-neon">
            <Calendar className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>OFFICIAL SIX-STAGE EVENT JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Official Event Timeline
          </h2>
          <p className="text-[#F3F0E8]/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Follow the six-stage event journey for the <strong className="text-white">Gemini Agentic Coding Hackathon 2026</strong> organized by <strong className="text-[#C6FF3D]">Proton Solutions</strong>.
          </p>
        </div>

        {/* Prominent Registration Deadline Countdown Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#052928] border-2 border-[#C6FF3D] shadow-neon relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-3.5 py-1 rounded-full uppercase mb-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#073B3A] animate-ping" />
                {countdownData.badgeText}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#F3F0E8] font-display">
                {countdownData.titleText}
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/70 mt-1 font-mono">
                {countdownData.subtitleText}
              </p>
            </div>

            {/* Countdown Blocks */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center flex-shrink-0">
              <div className="bg-[#073B3A] p-2 sm:p-3 rounded-2xl border border-[#C6FF3D]/30 min-w-[65px] sm:min-w-[78px]">
                <span className="block text-2xl sm:text-3xl font-mono font-black text-[#C6FF3D]">
                  {String(countdownData.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#F3F0E8]/60 uppercase font-mono">Days</span>
              </div>
              <div className="bg-[#073B3A] p-2 sm:p-3 rounded-2xl border border-[#C6FF3D]/30 min-w-[65px] sm:min-w-[78px]">
                <span className="block text-2xl sm:text-3xl font-mono font-black text-[#C6FF3D]">
                  {String(countdownData.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#F3F0E8]/60 uppercase font-mono">Hours</span>
              </div>
              <div className="bg-[#073B3A] p-2 sm:p-3 rounded-2xl border border-[#C6FF3D]/30 min-w-[65px] sm:min-w-[78px]">
                <span className="block text-2xl sm:text-3xl font-mono font-black text-[#C6FF3D]">
                  {String(countdownData.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#F3F0E8]/60 uppercase font-mono">Mins</span>
              </div>
              <div className="bg-[#073B3A] p-2 sm:p-3 rounded-2xl border border-[#C6FF3D]/30 min-w-[65px] sm:min-w-[78px]">
                <span className="block text-2xl sm:text-3xl font-mono font-black text-[#C6FF3D]">
                  {String(countdownData.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#F3F0E8]/60 uppercase font-mono">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            DESKTOP TIMELINE: 6-STAGE HORIZONTAL PROGRESSION
           ======================================================== */}
        <div className="hidden lg:block mb-16">
          {/* Connecting Progress Track Line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-gradient-to-r from-[#C6FF3D] via-[#155655] to-[#FFD700] rounded-full shadow-neon" />

            {/* Horizontal Nodes */}
            <div className="relative grid grid-cols-6 gap-3 z-10">
              {phasesData.map((phase, idx) => {
                const isSelected = selectedPhase === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPhase(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Glowing Node Button */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                        isSelected
                          ? phase.isWinner
                            ? 'bg-[#073B3A] border-2 border-[#FFD700] ring-4 ring-[#FFD700]/30 shadow-gold-glow scale-110'
                            : 'bg-[#073B3A] border-2 border-[#C6FF3D] ring-4 ring-[#C6FF3D]/35 shadow-neon-lg scale-110'
                          : phase.is24h
                          ? 'bg-[#052928] border-2 border-[#C6FF3D]/70 shadow-neon hover:border-[#C6FF3D] hover:scale-105'
                          : phase.isWinner
                          ? 'bg-[#052928] border-2 border-[#FFD700]/70 shadow-gold-glow hover:border-[#FFD700] hover:scale-105'
                          : 'bg-[#052928] border-2 border-[#F3F0E8]/20 group-hover:border-[#C6FF3D]/70 group-hover:bg-[#073B3A] hover:scale-105'
                      }`}
                    >
                      {phase.icon}
                    </div>

                    {/* Phase Number Badge */}
                    <span
                      className={`mt-3 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full transition-all ${
                        isSelected
                          ? phase.isWinner
                            ? 'bg-[#FFD700] text-[#073B3A] shadow-md'
                            : 'bg-[#C6FF3D] text-[#073B3A] shadow-neon'
                          : 'bg-[#073B3A] text-[#F3F0E8]/70 border border-[#F3F0E8]/10 group-hover:border-[#C6FF3D]/40 group-hover:text-white'
                      }`}
                    >
                      PHASE {phase.phaseNumber}
                    </span>

                    {/* Short Title & Date */}
                    <span
                      className={`text-xs mt-1 text-center font-display leading-tight line-clamp-1 transition-colors ${
                        isSelected ? 'font-extrabold text-[#F3F0E8]' : 'font-bold text-[#F3F0E8]/80 group-hover:text-white'
                      }`}
                    >
                      {phase.shortTitle}
                    </span>
                    <span
                      className={`text-[11px] font-mono mt-0.5 text-center transition-colors ${
                        isSelected
                          ? phase.isWinner
                            ? 'text-[#FFD700] font-bold'
                            : 'text-[#C6FF3D] font-bold'
                          : 'text-[#C6FF3D]/70 group-hover:text-[#C6FF3D]'
                      }`}
                    >
                      {phase.date.split(',')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Deep-Dive Selected Phase Card (Horizontal Details View) */}
          <div
            className={`rounded-3xl p-8 transition-all duration-300 ${
              currentPhase.is24h
                ? 'bg-gradient-to-r from-[#0a3534] via-[#073B3A] to-[#0a3534] border-2 border-[#C6FF3D] shadow-neon-lg'
                : currentPhase.isWinner
                ? 'bg-[#052928] border-2 border-[#FFD700] shadow-gold-glow'
                : 'bg-[#052928] border border-[#F3F0E8]/15 shadow-xl'
            }`}
          >
            <div className="flex items-start justify-between gap-6 pb-6 border-b border-[#F3F0E8]/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D] text-[#C6FF3D] font-mono font-bold text-xs">
                    PHASE {currentPhase.phaseNumber} OF 06
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#C6FF3D] text-[#073B3A] font-mono font-black text-xs">
                    {currentPhase.statusLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F3F0E8] font-display">
                  {currentPhase.title}
                </h3>
              </div>

              <div className="text-right flex-shrink-0 bg-[#073B3A] p-4 rounded-2xl border border-[#F3F0E8]/10 font-mono">
                <span className="text-xs text-[#F3F0E8]/60 block font-semibold">SCHEDULE (IST)</span>
                <span className="text-base font-bold text-white block mt-0.5">{currentPhase.date}</span>
                <span className="text-xs text-[#C6FF3D] font-semibold block">{currentPhase.time}</span>
              </div>
            </div>

            {/* Special Highlight for Phase 04 (24-Hour Coding Hackathon) */}
            {currentPhase.is24h && (
              <div className="my-6 p-5 rounded-2xl bg-[#073B3A] border-2 border-[#C6FF3D] shadow-neon flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C6FF3D] flex items-center justify-center text-[#073B3A]">
                    <Zap className="w-6 h-6 fill-[#073B3A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#F3F0E8] font-display">
                      24-HOUR NON-STOP CODING CHALLENGE
                    </h4>
                    <p className="text-xs text-[#F3F0E8]/80">
                      Starts Dec 4, 10:00 AM IST • Concludes Dec 5, 10:00 AM IST
                    </p>
                  </div>
                </div>

                <div className="px-5 py-2.5 rounded-xl bg-[#052928] border border-[#C6FF3D]/50 font-mono text-xl font-black text-[#C6FF3D]">
                  24:00:00 SPRINT
                </div>
              </div>
            )}

            {/* Details & Key Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-center">
              <div>
                <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed font-medium mb-4">
                  {currentPhase.summary}
                </p>
                <div className="space-y-2.5">
                  {currentPhase.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E8]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Preview Callout */}
              <div className="p-6 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/10 text-center flex flex-col items-center justify-center">
                {currentPhase.isLive ? (
                  <>
                    <p className="text-xs font-mono text-[#C6FF3D] uppercase font-bold mb-1">
                      REGISTRATION IS CURRENTLY LIVE
                    </p>
                    <p className="text-sm text-[#F3F0E8]/80 mb-4">
                      Fee: 100% Free • ₹0 Entry Fee
                    </p>
                    <a
                      href="#register"
                      className="px-6 py-3 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-sm hover:bg-[#b5f524] transition-all shadow-neon"
                    >
                      REGISTER ON UNSTOP (FREE)
                    </a>
                  </>
                ) : currentPhase.isUpcoming ? (
                  <>
                    <p className="text-xs font-mono text-[#C6FF3D] uppercase font-bold mb-1">
                      REGISTRATION OPENS NOV 23, 2026
                    </p>
                    <p className="text-sm text-[#F3F0E8]/80 mb-4">
                      Fee: 100% Free • 100% Online on Unstop
                    </p>
                    <a
                      href="#register"
                      className="px-6 py-3 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-sm hover:bg-[#b5f524] transition-all shadow-neon"
                    >
                      PREVIEW UNSTOP REGISTRATION
                    </a>
                  </>
                ) : currentPhase.isWinner ? (
                  <>
                    <Trophy className="w-10 h-10 text-[#FFD700] mb-2" />
                    <p className="text-xs font-mono text-[#FFD700] uppercase font-bold mb-1">
                      GRAND FINALE & PRIZES
                    </p>
                    <p className="text-xs text-[#F3F0E8]/80 mb-3">
                      Total Prize Pool of ₹24,000 awarded live via Google Meet
                    </p>
                    <a
                      href="#prizes"
                      className="px-5 py-2 rounded-xl border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#073B3A] font-bold text-xs transition-colors"
                    >
                      View Prize Breakdown
                    </a>
                  </>
                ) : (
                  <>
                    <Code2 className="w-10 h-10 text-[#C6FF3D] mb-2" />
                    <p className="text-xs font-mono text-[#C6FF3D] uppercase font-bold mb-1">
                      SCHEDULED PHASE (IST)
                    </p>
                    <p className="text-xs text-[#F3F0E8]/80">
                      Official notifications will be shared with verified participants via email.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE TIMELINE: 6-STAGE VERTICAL PROGRESSION
           ======================================================== */}
        <div className="lg:hidden relative mb-16">
          {/* Continuous Left Vertical Glowing Progress Line */}
          <div className="absolute left-6 top-4 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-[#C6FF3D] via-[#106260] to-[#FFD700] rounded-full shadow-neon" />

          <div className="space-y-8 relative">
            {phasesData.map((phase, idx) => (
              <div key={idx} className="relative pl-14">
                {/* Node on Vertical Track */}
                <div
                  className={`absolute left-6 -translate-x-1/2 top-4 w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold z-20 ${
                    phase.is24h
                      ? 'bg-[#073B3A] border-2 border-[#C6FF3D] text-[#C6FF3D] shadow-neon'
                      : phase.isWinner
                      ? 'bg-[#073B3A] border-2 border-[#FFD700] text-[#FFD700]'
                      : 'bg-[#073B3A] border-2 border-[#C6FF3D] text-[#C6FF3D]'
                  }`}
                >
                  {phase.isLive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D] animate-ping" />
                  ) : (
                    <span>{phase.phaseNumber}</span>
                  )}
                </div>

                {/* Mobile Phase Card */}
                <div
                  className={`rounded-2xl p-6 ${
                    phase.is24h
                      ? 'bg-gradient-to-br from-[#0a3534] to-[#052928] border-2 border-[#C6FF3D] shadow-neon'
                      : phase.isWinner
                      ? 'bg-[#052928] border-2 border-[#FFD700]/70'
                      : 'bg-[#052928] border border-[#F3F0E8]/15'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#C6FF3D]">
                      PHASE {phase.phaseNumber}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        phase.isLive
                          ? 'bg-[#C6FF3D] text-[#073B3A]'
                          : 'bg-[#073B3A] text-[#F3F0E8]/80 border border-[#F3F0E8]/10'
                      }`}
                    >
                      {phase.statusLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#F3F0E8] font-display mb-2">
                    {phase.title}
                  </h3>

                  <div className="p-3 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/10 mb-3 text-xs font-mono space-y-1">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#C6FF3D]" />
                      <span>{phase.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#C6FF3D]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{phase.time}</span>
                    </div>
                  </div>

                  {phase.is24h && (
                    <div className="p-3 rounded-xl bg-[#073B3A] border border-[#C6FF3D] mb-3 text-center">
                      <span className="text-xs font-mono text-[#C6FF3D] font-bold block">
                        ⚡ 24-HOUR NON-STOP CODING CHALLENGE
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-[#F3F0E8]/80 leading-relaxed mb-3">
                    {phase.summary}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#F3F0E8]/10 text-xs text-[#F3F0E8]/70">
                    {phase.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {phase.isLive ? (
                    <div className="mt-4 pt-3 border-t border-[#F3F0E8]/10">
                      <a
                        href="#register"
                        className="w-full py-2.5 rounded-lg bg-[#C6FF3D] text-[#073B3A] font-bold text-xs flex items-center justify-center gap-2"
                      >
                        REGISTER FOR FREE
                      </a>
                    </div>
                  ) : phase.isUpcoming ? (
                    <div className="mt-4 pt-3 border-t border-[#F3F0E8]/10">
                      <a
                        href="#register"
                        className="w-full py-2.5 rounded-lg bg-[#C6FF3D] text-[#073B3A] font-bold text-xs flex items-center justify-center gap-2"
                      >
                        OPENS NOV 23 • PREVIEW
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            IMPORTANT INFORMATION NOTICE & BRANDING TAGLINE
           ======================================================== */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Official Communication Notice */}
          <div className="p-6 rounded-2xl bg-[#052928] border-2 border-[#C6FF3D] shadow-neon flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D] flex items-center justify-center flex-shrink-0 text-[#C6FF3D]">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-[#F3F0E8]/90">
              <p className="font-semibold leading-relaxed">
                All event updates, participant selection results, problem statements, and presentation invitations will be communicated through official email and the Proton Solutions WhatsApp Channel.
              </p>
              <p className="text-[#F3F0E8]/70 text-xs font-mono">
                Registration fee: <strong>100% Free (₹0 Entry Fee)</strong>. Open to all students and developers with zero entry cost. Terms and Conditions Apply.
              </p>
            </div>
          </div>

          {/* Final Branding Tagline Banner */}
          <div className="p-6 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/15 text-center shadow-lg">
            <p className="text-xs sm:text-sm font-mono tracking-widest text-[#C6FF3D] font-bold uppercase mb-1">
              BUILD INTELLIGENT. THINK AUTONOMOUS. CREATE THE FUTURE.
            </p>
            <p className="text-xs text-[#F3F0E8]/60 font-mono">
              PROTON SOLUTIONS | GEMINI AGENTIC CODING HACKATHON 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
