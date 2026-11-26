import React from 'react';
import { ShieldAlert, FileText, X } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-[#052928] border-2 border-[#C6FF3D]/40 shadow-2xl flex flex-col text-[#F3F0E8] overflow-hidden">
        <div className="p-6 bg-[#073B3A] border-b border-[#F3F0E8]/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D]">
              <FileText className="w-5 h-5 text-[#C6FF3D]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[#C6FF3D] font-bold">Proton Solutions</p>
              <h3 className="text-lg font-bold text-[#F3F0E8] font-display">
                Official Terms and Conditions
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#F3F0E8]/60 hover:text-white hover:bg-[#0b4d4c] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="p-4 rounded-xl bg-[#073B3A] border-2 border-[#C6FF3D] shadow-neon text-xs sm:text-sm text-[#F3F0E8] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#C6FF3D] font-mono block text-xs tracking-wide uppercase mb-1">
                OFFICIAL POLICY: TWO-STAGE REGISTRATION & PAYMENT
              </strong>
              <span>
                Participation in {HACKATHON_CONFIG.eventName} requires initial registration on Unstop followed by purchasing the official <strong>₹350 entry ticket exclusively through KonfHub</strong>. Participation is confirmed only after successful ticket purchase.
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed">
            By registering for <strong>{HACKATHON_CONFIG.eventName}</strong> organized by{' '}
            <strong>Proton Solutions</strong>, all participants agree to adhere to the following binding rules and
            conditions:
          </p>

          <div className="space-y-4">
            {HACKATHON_CONFIG.termsAndConditions.map((condition, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-teal border border-[#F3F0E8]/10 flex items-start gap-4 hover:border-[#C6FF3D]/30 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#073B3A] border border-[#C6FF3D]/40 flex items-center justify-center text-xs font-mono font-bold text-[#C6FF3D] flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#F3F0E8]/90 font-medium leading-relaxed pt-0.5">
                  {condition}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#031918] border border-[#F3F0E8]/10 text-xs text-[#F3F0E8]/60 space-y-1 font-mono">
            <p>LAST UPDATED: NOVEMBER 2026</p>
            <p>ORGANIZER: PROTON SOLUTIONS • GOVERNING LAW: INDIA</p>
          </div>
        </div>

        <div className="p-5 bg-[#073B3A] border-t border-[#F3F0E8]/10 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-bold text-xs sm:text-sm hover:bg-[#b5f524] transition-colors shadow-md"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsSection: React.FC = () => {
  return (
    <section id="terms" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Terms and Conditions
          </h2>
          <p className="text-[#F3F0E8]/80 text-base">
            Please read these conditions carefully before completing your Unstop registration and KonfHub ticket purchase.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#073B3A] border-2 border-[#C6FF3D] shadow-neon mb-10 flex items-start gap-4">
          <ShieldAlert className="w-7 h-7 text-[#C6FF3D] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-[#C6FF3D] font-mono uppercase tracking-wide mb-1">
              OFFICIAL POLICY: TWO-STAGE REGISTRATION & PAYMENT
            </h4>
            <p className="text-xs sm:text-sm text-[#F3F0E8]/90 leading-relaxed">
              Unstop is used only for initial registration. All participants must complete the official <strong>₹350 entry ticket</strong> purchase exclusively via KonfHub to confirm their participation. Terms and Conditions Apply.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HACKATHON_CONFIG.termsAndConditions.map((condition, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl glass-teal border border-[#F3F0E8]/10 flex items-start gap-3.5 hover:border-[#C6FF3D]/40 transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-[#073B3A] border border-[#C6FF3D]/30 flex items-center justify-center text-xs font-mono font-bold text-[#C6FF3D] flex-shrink-0">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/90 font-medium leading-relaxed">
                {condition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
