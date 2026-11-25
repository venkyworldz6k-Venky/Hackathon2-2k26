import React from 'react';
import { Trophy, Medal, Award, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C6FF3D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#052928] border border-[#FFD700]/40 text-[#FFD700] text-xs font-mono font-bold mb-4 shadow-sm">
            <Trophy className="w-3.5 h-3.5" />
            <span>TOTAL PRIZE POOL: ₹24,000</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Compete & Win Big
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg">
            Outstanding engineering deserves real rewards. Win directly credited cash prizes, prestigious awards,
            and exclusive career recognition from Proton Solutions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16 p-6 rounded-2xl glass-teal border border-[#C6FF3D]/30 text-center shadow-teal-glow">
          <p className="text-xs uppercase font-mono tracking-widest text-[#C6FF3D] font-bold mb-1">
            VERIFIED PRIZE DISTRIBUTION
          </p>
          <div className="text-4xl sm:text-6xl font-extrabold text-[#F3F0E8] font-mono tracking-tight my-2">
            ₹24,000
          </div>
          <p className="text-sm text-[#F3F0E8]/70">
            Distributed directly to verified bank accounts / UPI of the winning teams following final evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {/* 2nd Place: Runner-Up (Silver) */}
          <div className="order-2 md:order-1 rounded-2xl glass-teal border border-[#D1D5DB]/30 p-8 flex flex-col justify-between hover:border-[#D1D5DB] transition-all duration-300 transform hover:-translate-y-1 shadow-silver-glow relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#052928] border border-[#D1D5DB] text-[#D1D5DB] text-xs font-mono font-bold tracking-wider">
              🥈 SECOND PRIZE
            </div>

            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#D1D5DB]/15 border border-[#D1D5DB]/40 flex items-center justify-center text-[#D1D5DB] mx-auto mt-2 mb-6">
                <Medal className="w-8 h-8 text-[#D1D5DB]" />
              </div>

              <h3 className="text-center text-xl font-bold text-[#F3F0E8] mb-1 font-display">
                SECOND PRIZE
              </h3>
              <p className="text-center text-xs text-[#F3F0E8]/60 font-mono mb-4">Runner-Up Award</p>

              <div className="text-center mb-6">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#D1D5DB]">
                  ₹8,000
                </span>
                <span className="block text-xs text-[#F3F0E8]/60 mt-1">Direct Cash Transfer</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F3F0E8]/10 text-xs sm:text-sm text-[#F3F0E8]/85">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D1D5DB] flex-shrink-0 mt-0.5" />
                  <span>₹8,000 Cash Prize credited directly</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D1D5DB] flex-shrink-0 mt-0.5" />
                  <span>Official Runner-Up Certificate of Excellence</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D1D5DB] flex-shrink-0 mt-0.5" />
                  <span>Direct Mentorship with AI Tech Leads</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D1D5DB] flex-shrink-0 mt-0.5" />
                  <span>Featured spotlight on Proton Community</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F3F0E8]/10 text-center">
              <span className="text-[11px] font-mono text-[#D1D5DB]">SILVER ACCENT DIVISION</span>
            </div>
          </div>

          {/* 1st Place: Champion (Gold) */}
          <div className="order-1 md:order-2 rounded-2xl bg-gradient-to-b from-[#0a3f3e] to-[#052928] border-2 border-[#FFD700] p-8 sm:p-10 flex flex-col justify-between hover:shadow-gold-glow transition-all duration-300 transform md:-translate-y-3 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#FFD700] text-[#073B3A] text-xs font-mono font-extrabold tracking-wider shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>🥇 FIRST PRIZE • GRAND CHAMPION</span>
            </div>

            <div>
              <div className="w-20 h-20 rounded-2xl bg-[#FFD700]/20 border border-[#FFD700] flex items-center justify-center text-[#FFD700] mx-auto mt-2 mb-6 shadow-md">
                <Trophy className="w-10 h-10 text-[#FFD700]" />
              </div>

              <h3 className="text-center text-2xl font-black text-[#F3F0E8] mb-1 font-display">
                FIRST PRIZE
              </h3>
              <p className="text-center text-xs text-[#FFD700] font-mono font-bold mb-4">
                Grand Winner • CodeStorm Champion
              </p>

              <div className="text-center mb-6">
                <span className="text-5xl sm:text-6xl font-mono font-black text-[#FFD700]">
                  ₹10,000
                </span>
                <span className="block text-xs text-[#C6FF3D] font-mono font-semibold mt-1">
                  Direct Cash Award
                </span>
              </div>

              <div className="space-y-3.5 pt-6 border-t border-[#FFD700]/30 text-xs sm:text-sm text-[#F3F0E8]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">₹10,000 Top Cash Prize direct to winner</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span>Official Proton Solutions Winner Trophy & Certificate</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span>Fast-tracked interview for AI Engineering positions</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span>Featured global project showcase & PR release</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#FFD700]/30 text-center">
              <span className="text-xs font-mono font-bold text-[#FFD700]">
                GOLD ACCENT CHAMPION DIVISION
              </span>
            </div>
          </div>

          {/* 3rd Place: Second Runner-Up (Bronze) */}
          <div className="order-3 rounded-2xl glass-teal border border-[#CD7F32]/40 p-8 flex flex-col justify-between hover:border-[#CD7F32] transition-all duration-300 transform hover:-translate-y-1 shadow-bronze-glow relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#052928] border border-[#CD7F32] text-[#CD7F32] text-xs font-mono font-bold tracking-wider">
              🥉 THIRD PRIZE
            </div>

            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#CD7F32]/15 border border-[#CD7F32]/40 flex items-center justify-center text-[#CD7F32] mx-auto mt-2 mb-6">
                <Award className="w-8 h-8 text-[#CD7F32]" />
              </div>

              <h3 className="text-center text-xl font-bold text-[#F3F0E8] mb-1 font-display">
                THIRD PRIZE
              </h3>
              <p className="text-center text-xs text-[#F3F0E8]/60 font-mono mb-4">Second Runner-Up</p>

              <div className="text-center mb-6">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#CD7F32]">
                  ₹6,000
                </span>
                <span className="block text-xs text-[#F3F0E8]/60 mt-1">Direct Cash Transfer</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F3F0E8]/10 text-xs sm:text-sm text-[#F3F0E8]/85">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CD7F32] flex-shrink-0 mt-0.5" />
                  <span>₹6,000 Cash Prize credited directly</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CD7F32] flex-shrink-0 mt-0.5" />
                  <span>Official Certificate of Innovation & Excellence</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CD7F32] flex-shrink-0 mt-0.5" />
                  <span>Technical feedback from Senior AI Evaluators</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CD7F32] flex-shrink-0 mt-0.5" />
                  <span>Proton Solutions Community Developer Badge</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F3F0E8]/10 text-center">
              <span className="text-[11px] font-mono text-[#CD7F32]">BRONZE ACCENT DIVISION</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#052928] border border-[#F3F0E8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-[#C6FF3D] flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-[#F3F0E8]">
                Certificate of Participation for Every Valid Submission
              </p>
              <p className="text-xs text-[#F3F0E8]/70">
                All registered participants who complete the free registration and submit a working project receive an official digital certificate.
              </p>
            </div>
          </div>
          <a
            href="#register"
            className="px-5 py-2.5 rounded-lg bg-[#C6FF3D] text-[#073B3A] font-bold text-xs hover:bg-[#b5f524] transition-colors whitespace-nowrap"
          >
            Register for Free
          </a>
        </div>
      </div>
    </section>
  );
};
