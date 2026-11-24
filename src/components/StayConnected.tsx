import React from 'react';
import { ExternalLink, ShieldAlert, CheckCircle2, MessageCircle } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const StayConnected: React.FC = () => {
  const googleFormUrl = HACKATHON_CONFIG.placeholders.googleFormUrl;
  const whatsappChannelUrl = HACKATHON_CONFIG.placeholders.whatsappChannelUrl;

  return (
    <section id="stay-connected" className="py-24 relative bg-[#073B3A] border-t border-[#F3F0E8]/10 overflow-hidden">
      {/* Background Subtle Ambience with Neon Lime Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C6FF3D]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073B3A] border border-[#C6FF3D] text-[#C6FF3D] text-xs font-mono font-bold mb-4 shadow-neon">
            <MessageCircle className="w-3.5 h-3.5 text-[#C6FF3D]" />
            <span>OFFICIAL COMMUNICATION HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            STAY CONNECTED WITH PROTON SOLUTIONS
          </h2>
          <p className="text-[#F3F0E8]/90 text-base sm:text-lg max-w-2xl mx-auto">
            Get official updates, complete your registration details, and stay connected throughout the hackathon.
          </p>
        </div>

        {/* Two Premium Interactive Cards with Soft Pearl (#F3F0E8) Card Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Card 1: Official Google Form */}
          <div className="rounded-3xl bg-[#F3F0E8] text-[#073B3A] p-8 sm:p-10 shadow-2xl border-2 border-transparent hover:border-[#C6FF3D] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              {/* Top Header & Label */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-black tracking-widest px-3.5 py-1 rounded-full bg-[#073B3A] text-[#C6FF3D] border border-[#073B3A] uppercase">
                  OFFICIAL FORM
                </span>
                <span className="text-xs font-mono text-[#073B3A]/70 font-semibold">
                  ID: GOOGLE_FORM_URL
                </span>
              </div>

              {/* Attractive Google Forms-inspired Icon with Deep Midnight Teal background and Vibrant Neon Lime icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#073B3A] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] shadow-lg mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8 fill-[#C6FF3D]" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#073B3A] mb-3 font-display tracking-tight">
                OFFICIAL PARTICIPANT FORM
              </h3>

              {/* Description */}
              <p className="text-[#073B3A]/85 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Complete the official participant information form to provide the necessary details for the
                Gemini Agentic Coding Hackathon 2026.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8 pt-4 border-t border-[#073B3A]/15 text-xs sm:text-sm text-[#073B3A] font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#073B3A] text-[#C6FF3D] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Submit full team roster & GitHub IDs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#073B3A] text-[#C6FF3D] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Verified against official Unstop registration</span>
                </div>
              </div>
            </div>

            {/* Neon Lime CTA Button with Deep Midnight Teal Border & Text */}
            <div>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-sm sm:text-base border-2 border-[#073B3A] hover:bg-[#b5f524] transition-all duration-200 shadow-md hover:shadow-neon flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>COMPLETE GOOGLE FORM</span>
                <ExternalLink className="w-4 h-4 text-[#073B3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="block text-center text-xs font-mono text-[#073B3A]/70 mt-2 font-medium">
                Opens in a secure new browser tab
              </span>
            </div>
          </div>

          {/* Card 2: Official WhatsApp Channel */}
          <div className="rounded-3xl bg-[#F3F0E8] text-[#073B3A] p-8 sm:p-10 shadow-2xl border-2 border-transparent hover:border-[#C6FF3D] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              {/* Top Header & Label */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-black tracking-widest px-3.5 py-1 rounded-full bg-[#073B3A] text-[#C6FF3D] border border-[#073B3A] uppercase">
                  OFFICIAL COMMUNITY
                </span>
                <span className="text-xs font-mono text-[#073B3A]/70 font-semibold">
                  ID: WHATSAPP_CHANNEL_URL
                </span>
              </div>

              {/* WhatsApp Icon with Deep Midnight Teal background and Vibrant Neon Lime icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#073B3A] border border-[#C6FF3D]/40 flex items-center justify-center text-[#C6FF3D] shadow-lg mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-9 h-9 fill-[#C6FF3D]" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.029-.475-1.637-.678-2.673-2.348-2.753-2.457-.08-.109-.658-.876-.658-1.67 0-.795.414-1.185.561-1.346.147-.162.32-.202.427-.202.107 0 .213.001.306.006.1.005.234-.038.366.279.136.326.467 1.139.508 1.222.041.083.069.181.013.292-.056.111-.083.181-.166.278-.083.097-.174.216-.249.29-.083.082-.17.172-.073.339.097.167.433.714.928 1.155.637.568 1.174.744 1.341.826.167.083.266.069.365-.042.1-.111.425-.494.538-.662.113-.169.227-.141.38-.083.155.057.978.461 1.147.545.168.084.28.125.322.195.042.069.042.404-.102.809zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.308A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.603 0-3.097-.47-4.359-1.277l-.312-.201-2.923.767.78-2.848-.22-.35A8.134 8.134 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#073B3A] mb-3 font-display tracking-tight">
                JOIN OUR OFFICIAL WHATSAPP CHANNEL
              </h3>

              {/* Description */}
              <p className="text-[#073B3A]/85 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Join our official Proton Solutions WhatsApp channel to receive important announcements, event updates,
                registration information, hackathon guidelines, and winner announcements.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-8 pt-4 border-t border-[#073B3A]/15 text-xs sm:text-sm text-[#073B3A] font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#073B3A] text-[#C6FF3D] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Real-time announcements & schedule alerts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#073B3A] text-[#C6FF3D] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Live winner announcements on Dec 9, 2026 (5:00 PM IST)</span>
                </div>
              </div>
            </div>

            {/* Neon Lime CTA Button with Deep Midnight Teal Border & Text */}
            <div>
              <a
                href={whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-extrabold text-sm sm:text-base border-2 border-[#073B3A] hover:bg-[#b5f524] transition-all duration-200 shadow-md hover:shadow-neon flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>JOIN WHATSAPP CHANNEL</span>
                <ExternalLink className="w-4 h-4 text-[#073B3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="block text-center text-xs font-mono text-[#073B3A]/70 mt-2 font-medium">
                Join immediately after completing registration
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Important Notice with exact theme colors */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#073B3A] border-2 border-[#C6FF3D] flex items-start sm:items-center gap-4 shadow-neon">
          <div className="w-10 h-10 rounded-xl bg-[#073B3A] border border-[#C6FF3D] flex items-center justify-center flex-shrink-0 text-[#C6FF3D] shadow-sm">
            <ShieldAlert className="w-6 h-6 text-[#C6FF3D]" />
          </div>
          <p className="text-xs sm:text-sm text-[#F3F0E8] font-medium leading-relaxed">
            Please follow our official communication channels for verified announcements and important event-related
            information. Proton Solutions will communicate official hackathon updates through its designated channels.
          </p>
        </div>
      </div>
    </section>
  );
};
