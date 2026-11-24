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
      subtitle: 'Free Event Registration',
      description:
        'Participants must visit our official Unstop event page and register for the Gemini Agentic Coding Hackathon 2026 for free. You can participate individually (solo) or as a team of up to 4 members.',
      icon: Users,
      badge: 'Step 1 • 100% Free',
    },
    {
      stepNumber: '02',
      title: 'ZERO REGISTRATION FEE',
      subtitle: '100% Free for All Participants',
      description:
        'Registration is completely free of charge. There are no registration fees, platform charges, or hidden payments required on Unstop or any other portal.',
      icon: ShieldCheck,
      badge: 'Step 2 • ₹0 Entry Fee',
    },
    {
      stepNumber: '03',
      title: 'COMPLETE THE OFFICIAL GOOGLE FORM',
      subtitle: 'Mandatory Information Submission',
      description:
        'After successfully registering on Unstop, participants must fill out the official Proton Solutions Google Form.',
      icon: FileText,
      badge: 'Step 3 • Required Details',
      detailsList: [
        'Participant details (Name, Email, Phone)',
        'College and university information',
        'Team details & team size (1 to 4 members)',
        'Technical background & experience level',
        'Unstop registration confirmation details',
      ],
    },
    {
      stepNumber: '04',
      title: 'REGISTRATION VERIFICATION',
      subtitle: 'Proton Solutions Review',
      description:
        'The Proton Solutions organizing team will verify Unstop registration and Google Form submissions to ensure all participant details and team rosters are authenticated.',
      icon: ShieldCheck,
      badge: 'Step 4 • Official Review',
    },
    {
      stepNumber: '05',
      title: 'EMAIL CONFIRMATION',
      subtitle: 'Official Hackathon Pass',
      description:
        'Eligible and selected participants will receive official confirmation, challenge briefing access, and further event instructions through their registered email addresses.',
      icon: MailCheck,
      badge: 'Step 5 • Final Onboarding',
    },
  ];

  return (
    <section id="register" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#C6FF3D]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#052928] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052928] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>OFFICIAL REGISTRATION SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            How to Register for Gemini Hackathon 2026
          </h2>

          <p className="text-[#F3F0E8]/80 text-base sm:text-lg leading-relaxed">
            All official event registrations and payments are processed exclusively through{' '}
            <strong className="text-[#C6FF3D]">UNSTOP</strong>. Follow the 5-step registration journey below to secure your spot.
          </p>

          {/* Quick Stats Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              Fee: <strong className="text-[#C6FF3D]">₹250 per participant</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              Platform: <strong className="text-[#F3F0E8]">Unstop Official Portal</strong>
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
              Direct Access Links
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F3F0E8] font-display">
              Ready to Participate? Complete Both Steps Below
            </h3>
            <p className="text-xs sm:text-sm text-[#F3F0E8]/70 mt-1">
              Register & pay on Unstop first, then submit your details in the official Proton Solutions Google Form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* BUTTON 1: REGISTER & PAY ON UNSTOP */}
            <a
              href={HACKATHON_CONFIG.placeholders.unstopEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-base sm:text-lg tracking-wide hover:bg-[#b5f524] transition-all duration-200 shadow-neon hover:shadow-neon-lg transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              <ExternalLink className="w-5 h-5 text-[#073B3A] flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>REGISTER & PAY ON UNSTOP</span>
            </a>

            {/* BUTTON 2: COMPLETE OFFICIAL GOOGLE FORM */}
            <a
              href={HACKATHON_CONFIG.placeholders.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#F3F0E8] text-[#073B3A] font-extrabold text-base sm:text-lg tracking-wide hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              <FileText className="w-5 h-5 text-[#073B3A] flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>COMPLETE OFFICIAL GOOGLE FORM</span>
            </a>
          </div>

          <p className="text-center text-[11px] font-mono text-[#F3F0E8]/60 mt-4">
            Both links open in a new browser tab • ₹250 registration fee is strictly non-refundable
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
                <span>Solo or Teams of up to 4</span>
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
                <span>Fill after Unstop payment</span>
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
                  MANDATORY REGISTRATION NOTICE
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#F3F0E8] font-display">
                  IMPORTANT REGISTRATION INSTRUCTIONS
                </h4>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/85 pt-1">
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>All official registrations and payments must be completed through Unstop.</strong> This website does not process payments directly.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    After successfully registering and paying on Unstop, participants must complete the official Google Form to provide additional information required by Proton Solutions.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span className="text-[#C6FF3D] font-semibold">
                    Completing only the Google Form does not constitute successful event registration.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Registration Fee: ₹250 per participant.</strong>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Registration fees are non-refundable</strong>, subject to applicable law. Terms and Conditions Apply.
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
