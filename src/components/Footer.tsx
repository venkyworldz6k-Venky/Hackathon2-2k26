import React from 'react';
import { Terminal, HeartHandshake, ArrowUp, Mail, Globe, ShieldCheck } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onNavigateToRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTerms,
  onOpenPrivacy,
  onNavigateToRegister,
}) => {
  const { technologyOrganizer, ngoPartner } = HACKATHON_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#031918] text-[#F3F0E8] border-t border-[#F3F0E8]/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#176B52]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#F3F0E8]/10">
          {/* Column 1 & 2: Dual Partner Badges & Summary */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D]">
                <Terminal className="w-5 h-5 text-[#C6FF3D]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-mono font-bold block">
                  {HACKATHON_CONFIG.eventName}
                </span>
                <span className="text-sm font-bold text-[#F3F0E8] tracking-tight">
                  Proton Solutions × {ngoPartner.name}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F3F0E8]/70 leading-relaxed max-w-sm">
              &ldquo;{HACKATHON_CONFIG.tagline}&rdquo; An elite, 100% online coding challenge empowering developers to engineer autonomous AI systems while contributing to tangible grassroots social impact.
            </p>

            {/* Leadership Distinction */}
            <div className="p-4 rounded-xl bg-[#052928] border border-[#F3F0E8]/10 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#C6FF3D] font-bold">•</span>
                <div>
                  <strong className="text-white block font-display">Proton Solutions</strong>
                  <span className="text-[#F3F0E8]/60 text-[11px] font-mono">Technology Organiser • Engineering & Execution Lead</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-[#F3F0E8]/10">
                <span className="text-[#F2B544] font-bold">•</span>
                <div>
                  <strong className="text-white block font-display">{ngoPartner.name}</strong>
                  <span className="text-[#F2B544]/80 text-[11px] font-mono">Official Collaboration Partner • Community Advisory</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-[#F3F0E8]/10">
                <span className="text-[#C6FF3D] font-bold">•</span>
                <div>
                  <strong className="text-white block font-display">{HACKATHON_CONFIG.ticketPartner.name}</strong>
                  <span className="text-[#C6FF3D]/80 text-[11px] font-mono">Official Ticket Partner • Paid Entry &amp; Ticketing</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-[#F3F0E8]/60 space-y-1">
              <p>Total Prize Pool: <span className="text-[#FFD700] font-bold">₹24,000</span></p>
              <p>Entry Fee: <span className="text-[#C6FF3D] font-bold">₹350 via KonfHub</span></p>
            </div>
          </div>

          {/* Column 3: Event Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-4">
              Event Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/80 font-medium">
              <li>
                <a href="#about" className="hover:text-[#C6FF3D] transition-colors">
                  About the Hackathon
                </a>
              </li>
              <li>
                <a href="#ngo-partner" className="hover:text-[#F2B544] transition-colors">
                  About the NGO
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-[#C6FF3D] transition-colors">
                  Our Projects & Tracks
                </a>
              </li>
              <li>
                <a href="#social-impact" className="hover:text-[#C6FF3D] transition-colors">
                  Social Impact
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateToRegister}
                  className="hover:text-[#C6FF3D] transition-colors cursor-pointer text-left"
                >
                  Registration
                </button>
              </li>
              <li>
                <a href="#prizes" className="hover:text-[#FFD700] transition-colors">
                  Prizes (₹24,000)
                </a>
              </li>
              <li>
                <a href="#transparency" className="hover:text-[#C6FF3D] transition-colors">
                  Financial Transparency
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#C6FF3D] transition-colors">
                  Event Timeline
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#C6FF3D] transition-colors">
                  FAQs & Help
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C6FF3D] transition-colors">
                  Contact Organisers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Hubs & Governance */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F2B544] font-bold mb-4">
              Governance & Hubs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F3F0E8]/80">
              <li>
                <a
                  href={technologyOrganizer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  Proton Solutions (Website)
                </a>
              </li>
              <li>
                <a
                  href={HACKATHON_CONFIG.placeholders.unstopEventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  Unstop (Initial Registration)
                </a>
              </li>
              <li>
                <a
                  href={HACKATHON_CONFIG.placeholders.konfhubTicketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  KonfHub (Get Entry Ticket)
                </a>
              </li>
              <li>
                <a
                  href={HACKATHON_CONFIG.placeholders.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  Official Google Form
                </a>
              </li>
              <li>
                <a
                  href={HACKATHON_CONFIG.placeholders.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF3D] transition-colors flex items-center gap-1.5"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#C6FF3D] transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#C6FF3D] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Contribution Policy Notice */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C6FF3D] font-bold mb-4">
              Policy & Compliance
            </h4>
            <div className="p-3.5 rounded-xl bg-[#052928] border border-[#F3F0E8]/10 text-xs text-[#F3F0E8]/70 leading-relaxed space-y-2">
              <p>
                Participation in {HACKATHON_CONFIG.eventName} requires initial registration on Unstop and a <strong>₹350 entry ticket via KonfHub</strong>.
              </p>
              <p className="text-[11px] text-[#F3F0E8]/60">
                All payments are processed exclusively through KonfHub. Confirmation and further-round details are sent via official email.
              </p>
              <button
                onClick={onOpenTerms}
                className="text-[#C6FF3D] underline underline-offset-2 text-[11px] font-mono hover:text-[#b5f524] block"
              >
                Read Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3F0E8]/60 font-mono">
          <p>© 2026 Proton Solutions in collaboration with {ngoPartner.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>{HACKATHON_CONFIG.eventName}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#073B3A] text-[#C6FF3D] hover:bg-[#0a4c4b] transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
