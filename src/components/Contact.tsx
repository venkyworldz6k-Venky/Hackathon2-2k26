import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, HeartHandshake } from 'lucide-react';
import { HACKATHON_CONFIG } from '../config/hackathon';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#052928] border-t border-[#F3F0E8]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#073B3A] border border-[#C6FF3D]/30 text-[#C6FF3D] text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT ASSISTANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] font-display tracking-tight mb-4">
            Contact Organizers
          </h2>
          <p className="text-[#F3F0E8]/80 text-base sm:text-lg">
            Have queries regarding registrations, problem statements, or sponsorship? Reach out to the Proton Solutions team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-teal border border-[#F3F0E8]/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F3F0E8]/60 uppercase">Official Support Email</span>
                <a
                  href={`mailto:${HACKATHON_CONFIG.contact.supportEmail}`}
                  className="block text-base font-bold text-[#F3F0E8] hover:text-[#C6FF3D] transition-colors mt-0.5"
                >
                  {HACKATHON_CONFIG.contact.supportEmail}
                </a>
                <span className="text-xs text-[#F3F0E8]/60 mt-1 block">Replies within 12 business hours</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-teal border border-[#F3F0E8]/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a3534] border border-[#F3F0E8]/20 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F3F0E8]/60 uppercase">Helpline</span>
                <p className="text-base font-bold text-[#F3F0E8] mt-0.5 font-mono">
                  {HACKATHON_CONFIG.contact.phone}
                </p>
                <span className="text-xs text-[#F3F0E8]/60 mt-1 block">
                  {HACKATHON_CONFIG.contact.workingHours}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-teal border border-[#F3F0E8]/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a3534] border border-[#F3F0E8]/20 flex items-center justify-center text-[#C6FF3D] flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F3F0E8]/60 uppercase">Headquarters</span>
                <p className="text-base font-bold text-[#F3F0E8] mt-0.5">
                  Proton Solutions
                </p>
                <span className="text-xs text-[#F3F0E8]/60 mt-1 block">
                  {HACKATHON_CONFIG.contact.headquarters} • Online Global Operations
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-teal border border-[#F2B544]/30 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a3534] border border-[#F2B544]/40 flex items-center justify-center text-[#F2B544] flex-shrink-0">
                <HeartHandshake className="w-6 h-6 text-[#F2B544]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F2B544] uppercase">NGO Partner Desk</span>
                <p className="text-base font-bold text-[#F3F0E8] mt-0.5">
                  {HACKATHON_CONFIG.ngoPartner.name}
                </p>
                <a
                  href={`mailto:${HACKATHON_CONFIG.ngoPartner.contactEmail}`}
                  className="text-xs text-[#C6FF3D] hover:underline mt-0.5 block font-mono"
                >
                  {HACKATHON_CONFIG.ngoPartner.contactEmail}
                </a>
                <span className="text-xs text-[#F3F0E8]/60 mt-1 block">
                  {HACKATHON_CONFIG.ngoPartner.registeredOffice}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 rounded-3xl glass-teal border border-[#F3F0E8]/15 shadow-xl">
            <h3 className="text-2xl font-bold text-[#F3F0E8] font-display mb-2">
              Send us a Message
            </h3>
            <p className="text-xs text-[#F3F0E8]/70 mb-6">
              Fill in your query and our organizing committee will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-[#073B3A] border border-[#C6FF3D] text-[#C6FF3D] space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto" />
                <h4 className="text-lg font-bold text-[#F3F0E8]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#F3F0E8]/80">
                  Thank you for reaching out. A Proton Solutions representative will reply to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F3F0E8]/70 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/15 text-[#F3F0E8] text-sm focus:border-[#C6FF3D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#F3F0E8]/70 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/15 text-[#F3F0E8] text-sm focus:border-[#C6FF3D] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F3F0E8]/70 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Registration / Team Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/15 text-[#F3F0E8] text-sm focus:border-[#C6FF3D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F3F0E8]/70 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you?"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#073B3A] border border-[#F3F0E8]/15 text-[#F3F0E8] text-sm focus:border-[#C6FF3D] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#C6FF3D] text-[#073B3A] font-bold text-sm hover:bg-[#b5f524] transition-all shadow-neon flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
