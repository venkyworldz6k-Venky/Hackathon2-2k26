import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface TransparencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransparencyModal: React.FC<TransparencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { transparency, ngoPartner } = HACKATHON_CONFIG;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-[#052928] border-2 border-[#C6FF3D]/40 shadow-2xl flex flex-col text-[#F3F0E8] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-[#073B3A] border-b border-[#F3F0E8]/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D]">
              <FileText className="w-5 h-5 text-[#C6FF3D]" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[#C6FF3D] font-bold">Proton Solutions & {ngoPartner.shortName}</p>
              <h3 className="text-lg font-bold text-[#F3F0E8] font-display">
                Hackathon Impact & Financial Transparency Framework
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Important Legal Classification Notice */}
          <div className="p-4 rounded-xl bg-[#073B3A] border-2 border-[#F2B544] text-xs sm:text-sm text-[#F3F0E8] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#F2B544] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F2B544] font-mono block text-xs tracking-wide uppercase mb-1">
                LEGAL DISTINCTION: REGISTRATION FEE VS CHARITABLE DONATION
              </strong>
              <span>
                {transparency.disclaimer}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#C6FF3D] font-mono uppercase tracking-wider mb-2">
              Three Distinct Financial Categories
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F3F0E8]/90">
              <div className="p-4 rounded-xl bg-[#04201f] border border-[#F3F0E8]/10">
                <strong className="text-white block font-display text-sm mb-1">
                  Category A: Hackathon Entry Ticket (₹350 via KonfHub)
                </strong>
                <p className="text-[#F3F0E8]/75 leading-relaxed">
                  Unstop is used only for initial registration. All participants must purchase their official <strong>₹350 entry ticket</strong> exclusively through KonfHub to confirm participation. The ₹24,000 prize pool is guaranteed by Proton Solutions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#04201f] border border-[#F3F0E8]/10">
                <strong className="text-white block font-display text-sm mb-1">
                  Category B: Direct NGO Donations (Optional & Independent)
                </strong>
                <p className="text-[#F3F0E8]/75 leading-relaxed">
                  Participants or supporters wishing to make direct charitable donations may do so only through the NGO partner's verified and legally authorized 80G tax-exempt donation channels. This hackathon website does NOT collect direct donations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#04201f] border border-[#F3F0E8]/10">
                <strong className="text-white block font-display text-sm mb-1">
                  Category C: Hackathon Operational Contribution to NGO
                </strong>
                <p className="text-[#F3F0E8]/75 leading-relaxed">
                  Any agreed contribution from hackathon operational surplus will be formally transferred to {ngoPartner.name} following the conclusion of the event, complete with public bank transfer receipts and an audited social impact report.
                </p>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          <div>
            <h4 className="text-sm font-bold text-[#F3F0E8] font-display mb-3">
              Standardized Financial Framework
            </h4>
            <div className="space-y-2">
              {transparency.financialBreakdown.map((row, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs"
                >
                  <div>
                    <span className="font-bold text-[#F3F0E8]">{row.item}</span>
                    <p className="text-[11px] text-[#F3F0E8]/60 mt-0.5">{row.description}</p>
                  </div>
                  <span className="font-mono font-bold text-[#C6FF3D] sm:text-right whitespace-nowrap">
                    {row.share}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#031918] border border-[#F3F0E8]/10 text-xs text-[#F3F0E8]/60 space-y-1 font-mono">
            <p>GOVERNANCE POLICY: 100% ETHICAL DISCLOSURE</p>
            <p>AUDITED POST-EVENT REPORT WILL BE PUBLISHED AFTER GRAND FINALE (DECEMBER 9, 2026)</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#073B3A] border-t border-[#F3F0E8]/10 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-bold text-xs sm:text-sm hover:bg-[#b5f524] transition-colors shadow-md"
          >
            I Understand the Framework
          </button>
        </div>
      </div>
    </div>
  );
};
