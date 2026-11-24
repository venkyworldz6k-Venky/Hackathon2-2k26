import React from 'react';
import { X, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[#052928] border-2 border-[#C6FF3D]/40 shadow-2xl flex flex-col text-[#F3F0E8] overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#073B3A] border-b border-[#F3F0E8]/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D]">
              <Lock className="w-5 h-5 text-[#C6FF3D]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[#C6FF3D] font-bold">Proton Solutions</p>
              <h3 className="text-lg font-bold text-[#F3F0E8] font-display">
                Privacy Policy & Data Protection
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#F3F0E8]/85 leading-relaxed">
          <div className="p-4 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/30 text-xs text-[#F3F0E8]">
            <strong className="text-[#C6FF3D] font-mono block mb-1">
              ZERO PAYMENT DATA COLLECTION ON THIS DOMAIN
            </strong>
            <span>
              This website does NOT process, store, or solicit credit card numbers, debit cards, UPI PINs, or banking credentials. All registration transactions are handled exclusively through Unstop's secure PCI-DSS compliant infrastructure.
            </span>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 font-display text-sm">1. Information We Collect</h4>
            <p>
              Participant contact details (full name, email, phone number, college/organization, and team information) are collected strictly through the official Proton Solutions Google Form post-registration on Unstop.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 font-display text-sm">2. Use of Information</h4>
            <p>
              Collected information is used solely for participant identity verification, event logistics, challenge communications, problem statement distribution, and winner prize disbursals. We do not sell or monetize participant data.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 font-display text-sm">3. NGO Partner Collaboration</h4>
            <p>
              Aggregated, anonymized statistics (e.g., total student participation count, state representation) may be shared with {HACKATHON_CONFIG.ngoPartner.name} for official impact reporting. Individual personal information is never shared without explicit consent.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1.5 font-display text-sm">4. Data Retention & Contact</h4>
            <p>
              Participant records are archived securely following the conclusion of the event on December 9, 2026. For data queries, contact: <code className="text-[#C6FF3D]">{HACKATHON_CONFIG.contact.email}</code>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#073B3A] border-t border-[#F3F0E8]/10 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-bold text-xs sm:text-sm hover:bg-[#b5f524] transition-colors shadow-md"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
