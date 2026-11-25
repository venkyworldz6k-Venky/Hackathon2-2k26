import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, ArrowRight, Eye, HandHeart, Coins } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';
import { TransparencyModal } from './TransparencyModal';

export const TransparencySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { transparency, ngoPartner } = HACKATHON_CONFIG;

  return (
    <section id="transparency" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#176B52]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B3A] border border-[#F2B544]/40 text-[#F2B544] text-xs font-mono font-bold mb-4 tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% FREE & TRANSPARENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3F0E8] font-display tracking-tight mb-4">
            {transparency.sectionTitle}
          </h2>

          <p className="text-[#F3F0E8]/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {transparency.summary}
          </p>
        </div>

        {/* 3-Pillar Distinct Classification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar A */}
          <div className="p-7 rounded-3xl bg-[#073B3A] border border-[#C6FF3D]/30 shadow-lg flex flex-col justify-between group hover:border-[#C6FF3D] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF3D]/15 flex items-center justify-center text-[#C6FF3D] mb-5">
                <Coins className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#C6FF3D] uppercase tracking-wider block mb-1">
                CATEGORY A
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] font-display mb-3">
                100% Free Entry
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-4">
                <strong>₹0 registration fee</strong> on Unstop. The ₹24,000 cash prizes and event infrastructure are 100% sponsored by Proton Solutions.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#C6FF3D]">
              • Zero Fees or Hidden Costs
            </div>
          </div>

          {/* Pillar B */}
          <div className="p-7 rounded-3xl bg-[#073B3A] border border-[#F2B544]/40 shadow-lg flex flex-col justify-between group hover:border-[#F2B544] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F2B544]/20 flex items-center justify-center text-[#F2B544] mb-5">
                <HandHeart className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#F2B544] uppercase tracking-wider block mb-1">
                CATEGORY B
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] font-display mb-3">
                Direct NGO Donations
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-4">
                Anyone wishing to donate to {ngoPartner.name} may do so directly through the NGO's official 80G tax-exempt portal.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#F2B544]">
              • This Website Never Collects Donations
            </div>
          </div>

          {/* Pillar C */}
          <div className="p-7 rounded-3xl bg-[#073B3A] border border-[#E98268]/40 shadow-lg flex flex-col justify-between group hover:border-[#E98268] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E98268]/20 flex items-center justify-center text-[#E98268] mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#E98268] uppercase tracking-wider block mb-1">
                CATEGORY C
              </span>
              <h3 className="text-xl font-bold text-[#F3F0E8] font-display mb-3">
                Community Partnership
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E8]/80 leading-relaxed mb-4">
                Proton Solutions works directly with ROOTS & RISE Foundation to turn the best hackathon projects into real community pilots.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F3F0E8]/10 text-[11px] font-mono text-[#E98268]">
              • Grassroots Impact & Pilot Projects
            </div>
          </div>
        </div>

        {/* Framework Breakdown Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#073B3A] border border-[#F3F0E8]/15 p-6 sm:p-10 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F3F0E8]/10 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
                EVENT SPONSORSHIP & FUNDING
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-[#F3F0E8] font-display">
                How This Hackathon Is Funded
              </h4>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-[#F3F0E8] text-[#073B3A] font-extrabold text-xs sm:text-sm hover:bg-white transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#073B3A]" />
              <span>View Impact and Transparency Report</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {transparency.financialBreakdown.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#052928] border border-[#F3F0E8]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#F3F0E8] block mb-1">{row.item}</span>
                  <p className="text-xs text-[#F3F0E8]/70 leading-relaxed">{row.description}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#F3F0E8]/10 text-xs font-mono font-bold text-[#C6FF3D]">
                  {row.share}
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Legal Disclaimer */}
          <div className="mt-6 p-4 rounded-xl bg-[#04201f] border border-[#F2B544]/30 text-xs text-[#F3F0E8]/85 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#F2B544] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Notice on Ethical Reporting:</strong> {transparency.disclaimer}
            </p>
          </div>
        </div>
      </div>

      <TransparencyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
