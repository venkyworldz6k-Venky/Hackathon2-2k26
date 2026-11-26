import React from 'react';
import {
  ExternalLink,
  FileText,
  AlertCircle,
  CheckCircle2,
  Users,
  Ticket,
  ShieldCheck,
  MailCheck,
  Sparkles,
  Info,
  User
} from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface RegistrationProps {
  onOpenTerms: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onOpenTerms }) => {
  const { placeholders, payment } = HACKATHON_CONFIG;

  const entrySteps = [
    {
      stepNumber: '01',
      title: 'Register for the Hackathon through Unstop',
      badge: 'Stage 1 • Initial Registration',
      roleSummary: 'Unstop = Initial Registration',
      description:
        'Start by completing your initial registration on Unstop. Unstop is used only for initial registration and team profile setup (1 - 2 members).',
      icon: Users,
      footerText: 'Initial Registration Only',
    },
    {
      stepNumber: '02',
      title: 'Purchase the Official Entry Ticket through KonfHub',
      badge: 'Stage 2 • Official Paid Ticket',
      roleSummary: 'KonfHub = Official Paid Ticket Registration',
      description:
        'After Unstop registration, purchase your official ₹350 entry ticket exclusively through KonfHub, our official ticketing and payment partner.',
      icon: Ticket,
      footerText: 'All Payments via KonfHub Only',
      highlighted: true,
    },
    {
      stepNumber: '03',
      title: 'Receive Ticket Confirmation Email & Instructions',
      badge: 'Stage 3 • Email Confirmation',
      roleSummary: 'Email = Ticket Confirmation & Further Rounds',
      description:
        'Once payment succeeds on KonfHub, you receive an official ticket confirmation email. Further-round instructions will be communicated via official email.',
      icon: MailCheck,
      footerText: 'Confirmed Only After Ticket Purchase',
    },
  ];

  return (
    <section id="register" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#C6FF3D]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#052928] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052928] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>TWO-STAGE REGISTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            How to Secure Your Entry
          </h2>

          <p className="text-[#F3F0E8]/80 text-base sm:text-lg leading-relaxed">
            Follow our two-stage registration and payment workflow: register on{' '}
            <strong className="text-[#C6FF3D]">Unstop</strong> first, then purchase your{' '}
            <strong className="text-[#C6FF3D]">{payment.feeText}</strong> official entry ticket on{' '}
            <strong className="text-[#C6FF3D]">KonfHub</strong>.
          </p>

          {/* Quick Workflow Summary Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              <strong className="text-[#C6FF3D]">Unstop</strong> = Initial Registration
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              <strong className="text-[#C6FF3D]">KonfHub</strong> = Official Paid Ticket ({payment.feeText})
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#052928] border border-[#F3F0E8]/15 text-[#F3F0E8]">
              <strong className="text-[#C6FF3D]">Email</strong> = Confirmation &amp; Further Rounds
            </span>
          </div>
        </div>

        {/* Important Registration Notice (Required Exact Message) */}
        <div className="mb-12 rounded-2xl bg-[#052928] border-2 border-[#F2B544] p-6 sm:p-7 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F2B544]/15 border border-[#F2B544]/40 flex items-center justify-center text-[#F2B544] flex-shrink-0 mt-0.5">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F2B544] font-bold block mb-1">
                Important Registration Notice
              </span>
              <p className="text-sm sm:text-base text-[#F3F0E8] font-medium leading-relaxed">
                Important: Unstop registration is only the initial registration stage. To confirm your participation, you must complete the official paid entry ticket registration through KonfHub. Your participation will be considered confirmed only after successful ticket purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Box: Unstop + KonfHub */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#052928] border-2 border-[#C6FF3D]/40 shadow-2xl backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
              Official Registration &amp; Ticketing
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F3F0E8] font-display">
              Complete Both Stages to Confirm Entry
            </h3>
            <p className="text-xs sm:text-sm text-[#F3F0E8]/70 mt-1">
              Stage 1: Initial registration on Unstop. Stage 2: Pay {payment.feeText} entry fee exclusively on KonfHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-6">
            {/* BUTTON 1: REGISTER ON UNSTOP */}
            <a
              href={placeholders.unstopEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-1.5 px-7 py-5 rounded-2xl bg-[#F3F0E8] text-[#073B3A] font-extrabold hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              <span className="flex items-center gap-2.5 text-base sm:text-lg tracking-wide">
                <ExternalLink className="w-5 h-5 text-[#073B3A] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Register on Unstop</span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-[#073B3A]/75">
                Stage 1 • Initial Registration Only
              </span>
            </a>

            {/* BUTTON 2: GET YOUR ENTRY TICKET (KONFHUB) */}
            <a
              href={placeholders.konfhubTicketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-1.5 px-7 py-5 rounded-2xl bg-[#C6FF3D] text-[#073B3A] font-extrabold hover:bg-[#b5f524] transition-all duration-200 shadow-neon hover:shadow-neon-lg transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              <span className="flex items-center gap-2.5 text-base sm:text-lg tracking-wide">
                <Ticket className="w-5 h-5 text-[#073B3A] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Get Your Entry Ticket</span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-[#073B3A]/85">
                Stage 2 • Official KonfHub Ticket ({payment.feeText})
              </span>
            </a>
          </div>

          {/* Separate Ticket Options for Individual & Team Participants */}
          <div className="max-w-4xl mx-auto pt-6 border-t border-[#F3F0E8]/10">
            <p className="text-center text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-4">
              Available KonfHub Ticket Options
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {payment.tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-5 rounded-2xl bg-[#073B3A] border border-[#C6FF3D]/30 hover:border-[#C6FF3D] transition-all flex flex-col justify-between gap-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#052928] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
                        {ticket.id === 'individual' ? <User className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#F3F0E8] font-display">{ticket.title}</h4>
                        <span className="text-xs font-mono text-[#C6FF3D]">{ticket.subtitle}</span>
                      </div>
                    </div>
                    <span className="text-xl font-mono font-black text-[#C6FF3D] flex-shrink-0">
                      {ticket.priceText}
                    </span>
                  </div>
                  <p className="text-xs text-[#F3F0E8]/75 leading-relaxed">{ticket.description}</p>
                  <a
                    href={placeholders.konfhubTicketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#052928] border border-[#C6FF3D]/40 text-[#C6FF3D] text-xs font-bold hover:bg-[#C6FF3D] hover:text-[#073B3A] transition-colors"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Get Your Entry Ticket ({ticket.priceText})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Secondary Google Form & Official Ticket Partner Banner */}
          <div className="mt-6 pt-5 border-t border-[#F3F0E8]/10 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto text-xs text-[#F3F0E8]/70">
            <div className="flex items-center gap-2 font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#C6FF3D]/15 border border-[#C6FF3D]/30 text-[#C6FF3D] font-bold uppercase text-[10px]">
                Official Ticket Partner
              </span>
              <span>
                <strong className="text-white">{HACKATHON_CONFIG.ticketPartner.name}</strong> — All payments processed exclusively via KonfHub.
              </span>
            </div>
            <a
              href={placeholders.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#C6FF3D] hover:underline font-mono font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Optional: Submit Team Info Form</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3-Step Registration Workflow Cards ("How to Secure Your Entry") */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
              Step-by-Step Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F0E8] font-display">
              3 Steps to Confirm Your Participation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entrySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className={`p-6 sm:p-7 rounded-2xl bg-[#052928] border transition-all flex flex-col justify-between group ${
                    step.highlighted
                      ? 'border-[#C6FF3D]/50 hover:border-[#C6FF3D] shadow-teal-glow'
                      : 'border-[#F3F0E8]/15 hover:border-[#C6FF3D]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#073B3A] bg-[#C6FF3D] px-2.5 py-1 rounded-md">
                        STEP {step.stepNumber}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-[11px] font-mono text-[#C6FF3D] uppercase font-bold mb-1">
                      {step.roleSummary}
                    </p>
                    <h4 className="text-lg font-bold text-[#F3F0E8] font-display mb-2 group-hover:text-[#C6FF3D] transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F3F0E8]/70 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D] flex-shrink-0" />
                    <span>{step.footerText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Confirmation & Payment Policy Box */}
        <div className="rounded-3xl bg-[#052928] border-2 border-[#C6FF3D] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] flex-shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6 text-[#C6FF3D]" />
            </div>

            <div className="space-y-3.5 flex-1 text-sm text-[#F3F0E8]/90 leading-relaxed">
              <div>
                <span className="text-xs font-mono text-[#C6FF3D] uppercase tracking-wider font-bold block mb-1">
                  CONFIRMATION &amp; PAYMENT PROTOCOL
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#F3F0E8] font-display">
                  Important Confirmation Rules
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#F3F0E8]/85 pt-1">
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>KonfHub Ticket Confirmation:</strong> Participants receive official ticket confirmation from KonfHub only after successful payment of {payment.feeText}.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Verification Required:</strong> Participation is never marked as confirmed without verified ticket purchase on KonfHub.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#C6FF3D] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Further-Round Instructions:</strong> Challenge guidelines, Round 1–4 schedules, and Google Meet links are sent via official email to confirmed participants.
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
                  <span>Review Complete Terms &amp; Conditions</span>
                </button>

                <div className="text-[11px] font-mono text-[#F3F0E8]/50">
                  PROTON SOLUTIONS • UNSTOP + KONFHUB VERIFIED FLOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
