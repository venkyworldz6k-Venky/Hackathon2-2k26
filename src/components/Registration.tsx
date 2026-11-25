import React from 'react';
import {
  ExternalLink,
  FileText,
  AlertCircle,
  CheckCircle2,
  Users,
  CreditCard,
  FileCheck,
  ShieldCheck,
  MailCheck,
  Sparkles,
  Info
} from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface RegistrationProps {
  onOpenTerms: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onOpenTerms }) => {
  const steps = [
    {
      stepNumber: '01',
      title: 'REGISTER ON UNSTOP',
      subtitle: '100% Free Entry',
      description:
        'Join the hackathon on Unstop with zero registration fee. You can participate solo or as a duo (1 - 2 members).',
      icon: Users,
      badge: 'Step 1 • Free Entry',
    },
    {
      stepNumber: '02',
      title: 'SUBMIT GOOGLE FORM',
      subtitle: 'Team & Contact Info',
      description:
        'Fill out our quick official Google Form with your team roster, contact details, and tech experience.',
      icon: FileText,
      badge: 'Step 2 • Quick Form',
      detailsList: [
        'Full name, email, and phone',
        'College / organization name',
        'Team members (1 - 2 members)',
        'GitHub and technical background',
      ],
    },
    {
      stepNumber: '03',
      title: 'ROUND 1: IDEA SUBMISSION',
      subtitle: 'Jan 02 – Jan 07, 2027',
      description:
        'Submit your proposed AI idea, problem selection, and implementation approach directly via Unstop.',
      icon: ShieldCheck,
      badge: 'Step 3 • Round 1',
    },
    {
      stepNumber: '04',
      title: 'ROUNDS 2 & 3: PROTOTYPE & BUILD',
      subtitle: 'Jan 08 – Jan 25, 2027',
      description:
        'Transform ideas into functional prototypes in Round 2 and develop full production solutions in Round 3.',
      icon: FileCheck,
      badge: 'Step 4 • Dev Phase',
    },
    {
      stepNumber: '05',
      title: 'ROUND 4: GRAND FINALE',
      subtitle: 'Jan 30 – Jan 31, 2027',
      description:
        'Finalists present live demonstrations before judges and compete for ₹24,000 cash prizes!',
      icon: MailCheck,
      badge: 'Step 5 • Grand Finale',
    },
  ];

  return (
    <section id="register" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#C6FF3D]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#052928] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052928] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>HOW TO JOIN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Register in 2 Simple Steps
          </h2>

          <p className="text-[#F3F0E8]/80 text-base sm:text-lg leading-relaxed">
            Participation is <strong className="text-[#C6FF3D]">100% Free</strong>. Register on Unstop first, then complete the Google Form.
          </p>

          {/* Quick Stats Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              Fee: <strong className="text-[#C6FF3D]">100% Free (₹0)</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              Platform: <strong className="text-[#F3F0E8]">Unstop</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              Format: <strong className="text-[#C6FF3D]">100% Online</strong>
            </span>
          </div>
        </div>

        {/* Action Buttons Box (Top Highlight) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#052928] border-2 border-[#C6FF3D]/40 shadow-2xl backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
              Direct Links
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F3F0E8] font-display">
              Ready to Build? Complete Both Steps Below
            </h3>
            <p className="text-xs sm:text-sm text-[#F3F0E8]/70 mt-1">
              Step 1: Register on Unstop. Step 2: Submit your team details in the Google Form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* BUTTON 1: REGISTER ON UNSTOP */}
            <a
              href={HACKATHON_CONFIG.placeholders.unstopEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-base sm:text-lg tracking-wide hover:bg-[#b5f524] transition-all duration-200 shadow-neon hover:shadow-neon-lg transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              <ExternalLink className="w-5 h-5 text-[#073B3A] flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>1. REGISTER ON UNSTOP (FREE)</span>
            </a>

            {/* BUTTON 2: COMPLETE OFFICIAL GOOGLE FORM */}
            <a
              href={HACKATHON_CONFIG.placeholders.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#F3F0E8] text-[#073B3A] font-extrabold text-base sm:text-lg tracking-wide hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              <FileText className="w-5 h-5 text-[#073B3A] flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>2. FILL GOOGLE FORM</span>
            </a>
          </div>

          <p className="text-center text-[11px] font-mono text-[#F3F0E8]/60 mt-4">
            Zero fees • Open to solo developers and teams of 1 - 2 members
          </p>
        </div>

        {/* 5-Step Registration Process Cards */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
              Step-by-Step Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F0E8] font-display">
              5 Simple Steps to Join the Challenge
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Step 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    STEP {steps[0].stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-1 group-hover:text-[#C6FF3D] transition-colors">
                  {steps[0].title}
                </h4>
                <p className="text-xs font-mono text-[#C6FF3D] mb-3">{steps[0].subtitle}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                  {steps[0].description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/60 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D]" />
                <span>Solo or Duo (1 - 2 Members)</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#C6FF3D]/40 hover:border-[#C6FF3D] transition-all flex flex-col justify-between group shadow-teal-glow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    STEP {steps[1].stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                    <CreditCard className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-1 group-hover:text-[#C6FF3D] transition-colors">
                  {steps[1].title}
                </h4>
                <p className="text-xs font-mono text-[#C6FF3D] mb-3">{steps[1].subtitle}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                  {steps[1].description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#C6FF3D] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF3D]" />
                <span>Processed 100% via Unstop</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/50 transition-all flex flex-col justify-between group md:row-span-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    STEP {steps[2].stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-1 group-hover:text-[#C6FF3D] transition-colors">
                  {steps[2].title}
                </h4>
                <p className="text-xs font-mono text-[#C6FF3D] mb-3">{steps[2].subtitle}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-3">
                  {steps[2].description}
                </p>

                <div className="bg-[#073B3A] p-3 rounded-xl border border-[#F3F0E8]/10 text-xs text-[#F3F0E8]/80 space-y-1.5">
                  <p className="font-mono text-[11px] text-[#C6FF3D] uppercase font-bold">Information Collected:</p>
                  <ul className="space-y-1 text-[11px] leading-snug">
                    {steps[2].detailsList?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C6FF3D]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/60 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#C6FF3D]" />
                <span>Fill after registering on Unstop</span>
              </div>
            </div>
          </div>

          {/* Steps 4 and 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    STEP {steps[3].stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-1 group-hover:text-[#C6FF3D] transition-colors">
                  {steps[3].title}
                </h4>
                <p className="text-xs font-mono text-[#C6FF3D] mb-3">{steps[3].subtitle}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                  {steps[3].description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/60 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D]" />
                <span>Cross-verified by organizing team</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#052928] border border-[#F3F0E8]/15 hover:border-[#C6FF3D]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                    STEP {steps[4].stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                    <MailCheck className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-1 group-hover:text-[#C6FF3D] transition-colors">
                  {steps[4].title}
                </h4>
                <p className="text-xs font-mono text-[#C6FF3D] mb-3">{steps[4].subtitle}</p>

                <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                  {steps[4].description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/60 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
                <span>Sent to registered email addresses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Notice Box */}
        <div className="rounded-3xl bg-[#052928] border-2 border-[#C6FF3D] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] flex-shrink-0 mt-1">
              <AlertCircle className="w-6 h-6 text-[#C6FF3D]" />
            </div>

            <div className="space-y-3.5 flex-1 text-sm text-[#F3F0E8]/90 leading-relaxed">
              <div>
                <span className="text-xs font-mono text-[#C6FF3D] uppercase tracking-wider font-bold block mb-1">
                  OFFICIAL GUIDELINES
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#F3F0E8] font-display">
                  Important Registration Notes
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#F3F0E8]/85 pt-1">
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>100% Free Registration:</strong> Zero entry fees, zero hidden costs.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Complete Both Steps:</strong> Register on Unstop first, then fill out the official Google Form so our team can verify your roster.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Email Confirmation:</strong> Verified teams will receive challenge briefs and Google Meet links via registered email.
                  </span>
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F0E8]/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="text-xs font-mono text-[#C6FF3D] underline underline-offset-4 hover:text-[#b5f524] transition-colors flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Review Complete Terms & Conditions</span>
                </button>

                <div className="text-[11px] font-mono text-[#F3F0E8]/50">
                  PROTON SOLUTIONS • OFFICIAL HACKATHON PROTOCOL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
