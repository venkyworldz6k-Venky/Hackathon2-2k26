import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Cpu, 
  Rocket, 
  Trophy, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Video,
  Code2,
  ExternalLink,
  Percent
} from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const ImportantDates: React.FC = () => {
  // Active selected phase for desktop inspection (defaults to Round 1: index 0)
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  // Dynamic registration status based on Nov 25, 2026 to Dec 31, 2026
  const [regStatus, setRegStatus] = useState<'upcoming' | 'open' | 'closed'>('open');
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    badgeText: 'REGISTRATION CLOSING COUNTDOWN',
    titleText: 'Registration Closes December 31, 2026',
    subtitleText: 'Deadline: 12:00 AM Indian Standard Time (IST) • Unstop Initial Reg + ₹350 KonfHub Ticket',
  });

  useEffect(() => {
    const openingDate = new Date('2026-11-25T00:00:00+05:30').getTime();
    const closingDate = new Date('2026-12-31T00:00:00+05:30').getTime();

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
          titleText: 'Registration Opens November 25, 2026',
          subtitleText: 'Opening 12:00 AM Indian Standard Time (IST) • Unstop Initial Reg + ₹350 KonfHub Ticket',
        });
      } else if (now <= closingDate) {
        setRegStatus('open');
        const diff = closingDate - now;
        setCountdownData({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
          badgeText: 'REGISTRATION IS CURRENTLY LIVE',
          titleText: 'Registration Closes December 31, 2026',
          subtitleText: 'Deadline: 12:00 AM Indian Standard Time (IST) • Unstop Initial Reg + ₹350 KonfHub Ticket',
        });
      } else {
        setRegStatus('closed');
        setCountdownData({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          badgeText: 'REGISTRATIONS CLOSED',
          titleText: 'Registrations Closed on December 31, 2026',
          subtitleText: 'Round 1 (Idea & Innovation Submission) Starts Jan 02, 2027',
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // 4 Official Rounds mapped to Unstop specs
  const phasesData = [
    {
      phaseNumber: "01",
      roundNumber: 1,
      title: "Round 1 – Idea & Innovation Submission",
      shortTitle: "Idea & Innovation",
      dateRange: "02 Jan 27 – 07 Jan 27",
      fullDate: "02 Jan 27, 12:00 AM IST → 07 Jan 27, 12:00 AM IST",
      statusLabel: "ROUND 1 • UNSTOP",
      icon: <Lightbulb className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Submission round through Unstop platform. Propose creative ideas and concepts addressing real-world problems using modern AI.",
      points: [
        "Idea & Innovation submission through the Unstop platform",
        "Problem statement definition and target domain selection",
        "Proposed AI architecture (LLMs, GenAI, or autonomous AI agents)",
        "Innovation approach, feasibility, and expected impact",
        "The strongest teams will qualify for Round 2"
      ],
      submissionReqs: [
        "Proposal document / slide deck on Unstop",
        "Target challenge domain & problem analysis",
        "Proposed technical approach & architecture diagram"
      ],
      evaluationCriteria: [
        { label: "Innovation & Originality", weight: "35%" },
        { label: "Relevance & Problem Framing", weight: "35%" },
        { label: "Technical Feasibility of AI", weight: "30%" }
      ],
      isLive: false,
      isWinner: false,
    },
    {
      phaseNumber: "02",
      roundNumber: 2,
      title: "Round 2 – AI Development & Prototype",
      shortTitle: "AI Prototype & MVP",
      dateRange: "08 Jan 27 – 18 Jan 27",
      fullDate: "08 Jan 27, 12:00 AM IST → 18 Jan 27, 12:00 AM IST",
      statusLabel: "ROUND 2 • PROTOTYPE",
      icon: <Cpu className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Participants selected in Round 1 transform proposed ideas into functional AI-powered prototypes demonstrating practical implementation.",
      points: [
        "Transform your proposed idea into a working functional prototype",
        "Leverage LLMs, Generative AI, AI agents, and ML models",
        "Provide evidence of practical implementation and user experience",
        "The strongest teams will qualify for Round 3"
      ],
      submissionReqs: [
        "1. Working prototype or MVP",
        "2. GitHub repository link with clean source code",
        "3. Short demonstration video (3–5 minutes)",
        "4. Technical explanation of technologies used",
        "5. Screenshots demonstrating the application"
      ],
      evaluationCriteria: [
        { label: "Implementation and functionality", weight: "30%" },
        { label: "Effective use of AI technologies", weight: "25%" },
        { label: "Technical execution", weight: "20%" },
        { label: "User experience and usability", weight: "15%" },
        { label: "Innovation", weight: "10%" }
      ],
      isLive: false,
      isWinner: false,
    },
    {
      phaseNumber: "03",
      roundNumber: 3,
      title: "Round 3 – Final Project Development & Submission",
      shortTitle: "Final App Submission",
      dateRange: "19 Jan 27 – 25 Jan 27",
      fullDate: "19 Jan 27, 12:00 AM IST → 25 Jan 27, 12:01 AM IST",
      statusLabel: "ROUND 3 • FINAL APP",
      icon: <Rocket className="w-6 h-6 text-[#C6FF3D]" />,
      summary: "Enhance prototypes into complete, functional AI applications focusing on performance, reliability, usability, and real-world applicability.",
      points: [
        "Enhance prototype into a complete, robust AI software application",
        "Optimize application performance, reliability, and security",
        "Integrate live deployment link and comprehensive project documentation",
        "Top qualifying teams will be shortlisted for the Grand Finale"
      ],
      submissionReqs: [
        "1. Complete working application or software solution",
        "2. Final GitHub repository with source code",
        "3. Live deployment link, where applicable",
        "4. Final project documentation (PDF)",
        "5. Demonstration video (5–7 minutes)",
        "6. Explanation of AI architecture and implementation",
        "7. Key features, limitations, and future improvements"
      ],
      evaluationCriteria: [
        { label: "Completeness and functionality", weight: "25%" },
        { label: "AI implementation and technical depth", weight: "25%" },
        { label: "Innovation and originality", weight: "20%" },
        { label: "Practical applicability and impact", weight: "15%" },
        { label: "Documentation and presentation", weight: "15%" }
      ],
      isLive: false,
      isWinner: false,
    },
    {
      phaseNumber: "04",
      roundNumber: 4,
      title: "Round 4 – Final Presentation & Project Demonstration",
      shortTitle: "Grand Finale (Live Pitch)",
      dateRange: "30 Jan 27 – 31 Jan 27",
      fullDate: "30 Jan 27, 12:00 AM IST → 31 Jan 27, 12:01 AM IST",
      statusLabel: "GRAND FINALE",
      icon: <Trophy className="w-6 h-6 text-[#FFD700]" />,
      summary: "Welcome to the Grand Finale! Shortlisted finalists present completed AI-powered applications live before the judging panel on Google Meet.",
      points: [
        "Live project demonstration and technical architecture overview",
        "Presentation explaining problem, solution, and unique AI features",
        "Judges' live question-and-answer session",
        "Winner announcement and direct transfer of ₹24,000 cash prizes"
      ],
      submissionReqs: [
        "1. Live project demonstration",
        "2. Presentation explaining the problem and solution",
        "3. Technical architecture and AI implementation overview",
        "4. Explanation of the project's unique features",
        "5. Future development roadmap",
        "6. Judges' question-and-answer session"
      ],
      evaluationCriteria: [
        { label: "Innovation and originality", weight: "25%" },
        { label: "Technical implementation", weight: "25%" },
        { label: "Working demonstration", weight: "20%" },
        { label: "Real-world impact", weight: "15%" },
        { label: "Presentation & Q&A session", weight: "15%" }
      ],
      isLive: false,
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
            <span>STAGES & TIMELINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Official Hackathon Stages
          </h2>
          <p className="text-[#F3F0E8]/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Follow the 4 official rounds of <strong className="text-white">{HACKATHON_CONFIG.eventName}</strong> organized by <strong className="text-[#C6FF3D]">{HACKATHON_CONFIG.technologyOrganizer.name}</strong> on Unstop.
          </p>
        </div>

        {/* Registration Timeline Countdown Banner */}
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
              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 mt-1 font-mono">
                Registrations open: <span className="text-[#C6FF3D] font-bold">25 Nov 26, 12:00 AM</span> to <span className="text-[#C6FF3D] font-bold">31 Dec 26, 12:00 AM IST</span>
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
            DESKTOP TIMELINE: 4-STAGE HORIZONTAL PROGRESSION
           ======================================================== */}
        <div className="hidden lg:block mb-16">
          {/* Connecting Progress Track Line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-12 right-12 h-1 -translate-y-1/2 bg-gradient-to-r from-[#C6FF3D] via-[#106260] to-[#FFD700] rounded-full shadow-neon" />

            {/* Horizontal Nodes */}
            <div className="relative grid grid-cols-4 gap-6 z-10">
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
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                        isSelected
                          ? phase.isWinner
                            ? 'bg-[#073B3A] border-2 border-[#FFD700] ring-4 ring-[#FFD700]/30 shadow-gold-glow scale-110'
                            : 'bg-[#073B3A] border-2 border-[#C6FF3D] ring-4 ring-[#C6FF3D]/35 shadow-neon-lg scale-110'
                          : phase.isWinner
                          ? 'bg-[#052928] border-2 border-[#FFD700]/70 shadow-gold-glow hover:border-[#FFD700] hover:scale-105'
                          : 'bg-[#052928] border-2 border-[#F3F0E8]/20 group-hover:border-[#C6FF3D]/70 group-hover:bg-[#073B3A] hover:scale-105'
                      }`}
                    >
                      {phase.icon}
                    </div>

                    {/* Phase Number Badge */}
                    <span
                      className={`mt-3 text-xs font-mono font-bold px-3 py-0.5 rounded-full transition-all ${
                        isSelected
                          ? phase.isWinner
                            ? 'bg-[#FFD700] text-[#073B3A] shadow-md'
                            : 'bg-[#C6FF3D] text-[#073B3A] shadow-neon'
                          : 'bg-[#073B3A] text-[#F3F0E8]/70 border border-[#F3F0E8]/10 group-hover:border-[#C6FF3D]/40 group-hover:text-white'
                      }`}
                    >
                      ROUND 0{phase.roundNumber}
                    </span>

                    {/* Short Title & Date */}
                    <span
                      className={`text-sm mt-1 text-center font-display leading-tight line-clamp-1 transition-colors ${
                        isSelected ? 'font-extrabold text-[#F3F0E8]' : 'font-bold text-[#F3F0E8]/80 group-hover:text-white'
                      }`}
                    >
                      {phase.shortTitle}
                    </span>
                    <span
                      className={`text-xs font-mono mt-0.5 text-center transition-colors ${
                        isSelected
                          ? phase.isWinner
                            ? 'text-[#FFD700] font-bold'
                            : 'text-[#C6FF3D] font-bold'
                          : 'text-[#C6FF3D]/70 group-hover:text-[#C6FF3D]'
                      }`}
                    >
                      {phase.dateRange}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deep-Dive Selected Round Card */}
          <div
            className={`rounded-3xl p-8 transition-all duration-300 ${
              currentPhase.isWinner
                ? 'bg-[#052928] border-2 border-[#FFD700] shadow-gold-glow'
                : 'bg-[#052928] border-2 border-[#C6FF3D]/50 shadow-neon'
            }`}
          >
            <div className="flex items-start justify-between gap-6 pb-6 border-b border-[#F3F0E8]/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D] text-[#C6FF3D] font-mono font-bold text-xs">
                    ROUND {currentPhase.roundNumber} OF 04
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
                <span className="text-xs text-[#F3F0E8]/60 block font-semibold">STAGE DATES (IST)</span>
                <span className="text-sm font-bold text-white block mt-0.5">{currentPhase.fullDate}</span>
                <span className="text-xs text-[#C6FF3D] font-semibold block mt-0.5">Online via Unstop</span>
              </div>
            </div>

            {/* Overview & Points */}
            <div className="my-6">
              <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed font-medium mb-4">
                {currentPhase.summary}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentPhase.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F0E8]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submissions & Evaluation Criteria 2-Column Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F3F0E8]/10">
              {/* Submission Requirements */}
              <div className="p-5 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C6FF3D] font-bold uppercase tracking-wider mb-3">
                  <FileText className="w-4 h-4 text-[#C6FF3D]" />
                  <span>Submission Requirements</span>
                </div>
                <ul className="space-y-2 text-xs text-[#F3F0E8]/85">
                  {currentPhase.submissionReqs.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#C6FF3D] font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evaluation Criteria */}
              <div className="p-5 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F2B544] font-bold uppercase tracking-wider mb-3">
                  <Percent className="w-4 h-4 text-[#F2B544]" />
                  <span>Evaluation Weightage</span>
                </div>
                <div className="space-y-2.5">
                  {currentPhase.evaluationCriteria.map((crit, cIdx) => (
                    <div key={cIdx} className="flex items-center justify-between gap-3 text-xs">
                      <span className="text-[#F3F0E8]/80">{crit.label}</span>
                      <span className="font-mono font-bold text-[#F2B544] px-2 py-0.5 rounded bg-[#052928] border border-[#F2B544]/30">
                        {crit.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-6 border-t border-[#F3F0E8]/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#F3F0E8]/60">
                Team Size: <strong className="text-[#C6FF3D]">1 - 2 Members</strong> • Category: <strong className="text-white">AI Engineering</strong>
              </span>

              <a
                href={HACKATHON_CONFIG.placeholders.unstopEventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-xs sm:text-sm hover:bg-[#b5f524] transition-all flex items-center gap-2 shadow-neon cursor-pointer"
              >
                <span>Go to Unstop Event Page</span>
                <ExternalLink className="w-4 h-4 text-[#073B3A]" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE TIMELINE: 4-STAGE VERTICAL PROGRESSION
           ======================================================== */}
        <div className="lg:hidden relative mb-16">
          <div className="space-y-6">
            {phasesData.map((phase, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${
                  phase.isWinner
                    ? 'bg-[#052928] border-[#FFD700] shadow-gold-glow'
                    : 'bg-[#052928] border-[#F3F0E8]/15'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-[#C6FF3D] bg-[#073B3A] px-2.5 py-1 rounded-md">
                    ROUND 0{phase.roundNumber}
                  </span>
                  <span className="text-xs font-mono text-[#F2B544] font-semibold">
                    {phase.dateRange}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-2">
                  {phase.title}
                </h4>

                <p className="text-xs text-[#F3F0E8]/80 leading-relaxed mb-4">
                  {phase.summary}
                </p>

                <div className="p-3.5 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/10 mb-4">
                  <span className="text-[11px] font-mono text-[#C6FF3D] font-bold block mb-1.5 uppercase">
                    Key Requirements:
                  </span>
                  <ul className="space-y-1 text-xs text-[#F3F0E8]/75">
                    {phase.submissionReqs.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-[#C6FF3D]">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={HACKATHON_CONFIG.placeholders.unstopEventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>View Details on Unstop</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Important Info Notice Box */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-[#052928] border-2 border-[#C6FF3D] shadow-neon flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D] flex items-center justify-center flex-shrink-0 text-[#C6FF3D]">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-[#F3F0E8]/90">
              <p className="font-semibold leading-relaxed">
                All rounds, submissions, and shortlist announcements will be processed on the Unstop platform and communicated via official email and the Proton Solutions WhatsApp Channel.
              </p>
              <p className="text-[#F3F0E8]/70 text-xs font-mono">
                Entry Fee: <strong>₹350 via KonfHub</strong> (after Unstop registration) • Team Size: <strong>1 - 2 Members</strong> • Category: <strong>AI Engineering</strong>.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#073B3A] border border-[#F3F0E8]/15 text-center shadow-lg">
            <p className="text-xs sm:text-sm font-mono tracking-widest text-[#C6FF3D] font-bold uppercase mb-1">
              THE FUTURE OF CODING IS POWERED BY AI — IT'S TIME TO BUILD IT!
            </p>
            <p className="text-xs text-[#F3F0E8]/60 font-mono">
              PROTON SOLUTIONS | AI CODESTORM 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
