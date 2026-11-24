import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal, FileText, HeartHandshake } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

interface NavbarProps {
  onOpenTerms: () => void;
  onNavigateToRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerms,
  onNavigateToRegister,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'NGO Partner', href: '#ngo-partner' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#073B3A]/95 backdrop-blur-md border-b border-[#F3F0E8]/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo with Dual Organizer & Partner Indicator */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#0a4c4b] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] shadow-sm group-hover:border-[#C6FF3D] transition-colors">
              <Terminal className="w-5 h-5 text-[#C6FF3D]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#C6FF3D] font-mono font-bold">
                  {HACKATHON_CONFIG.technologyOrganizer.name}
                </span>
                <span className="text-[10px] text-[#F3F0E8]/40 font-mono">✕</span>
                <span className="text-[10px] uppercase tracking-widest text-[#F2B544] font-mono font-bold">
                  {HACKATHON_CONFIG.ngoPartner.shortName}
                </span>
              </div>
              <span className="text-sm sm:text-base font-bold text-[#F3F0E8] tracking-tight group-hover:text-white transition-colors">
                Gemini Agentic 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-semibold text-[#F3F0E8]/80 hover:text-[#C6FF3D] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onNavigateToRegister}
              className="px-4 py-2 text-xs font-black rounded-xl bg-[#C6FF3D] text-[#073B3A] hover:bg-[#b5f524] transition-all duration-200 shadow-neon flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#073B3A]" />
              <span>Register (Free)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onNavigateToRegister}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#C6FF3D] text-[#073B3A]"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F3F0E8] hover:text-[#C6FF3D] hover:bg-[#0a4c4b]/50 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#C6FF3D]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#052928] border-b border-[#F3F0E8]/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-[#F3F0E8]/90 hover:text-[#C6FF3D]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#F3F0E8]/90 hover:text-[#C6FF3D]"
            >
              Transparency
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerms();
              }}
              className="text-left py-1 text-sm font-medium text-[#F3F0E8]/90 hover:text-[#C6FF3D]"
            >
              Terms & Conditions
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#F3F0E8]/90 hover:text-[#C6FF3D]"
            >
              Contact
            </a>
          </div>

          <div className="pt-4 border-t border-[#F3F0E8]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToRegister();
              }}
              className="w-full py-2.5 text-xs font-black rounded-xl bg-[#C6FF3D] text-[#073B3A] flex items-center justify-center gap-2 shadow-neon cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register on Unstop (Free)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
