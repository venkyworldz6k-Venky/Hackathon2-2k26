import { useState, useEffect } from 'react';
import { NeuralCanvas } from './components/NeuralCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SocialImpact } from './components/SocialImpact';
import { NgoPartner } from './components/NgoPartner';
import { SocialGoodTracks } from './components/SocialGoodTracks';
import { Highlights } from './components/Highlights';
import { Prizes } from './components/Prizes';
import { ImportantDates } from './components/ImportantDates';
import { TransparencySection } from './components/TransparencySection';
import { Registration } from './components/Registration';
import { TermsSection, TermsModal } from './components/TermsAndConditions';
import { PrivacyModal } from './components/PrivacyModal';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'terms') {
      setIsTermsModalOpen(true);
    } else if (viewParam === 'privacy') {
      setIsPrivacyModalOpen(true);
    }
  }, []);

  const handleNavigateToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#073B3A] text-[#F3F0E8] relative selection:bg-[#C6FF3D] selection:text-[#073B3A]">
      <NeuralCanvas />

      <Navbar
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onNavigateToRegister={handleNavigateToRegister}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onRegisterClick={handleNavigateToRegister}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Collaborative Mission: Proton Solutions x ROOTS & RISE */}
        <About />

        {/* 3. Social Impact Focus Areas */}
        <SocialImpact />

        {/* 4. Official NGO Partner Profile: ROOTS & RISE Foundation */}
        <NgoPartner />

        {/* 5. AI for Social Good Challenge Tracks */}
        <SocialGoodTracks />

        {/* 6. Key Event Pillars & Eligibility */}
        <Highlights />

        {/* 7. Guaranteed Prize Pool (₹24,000) */}
        <Prizes />

        {/* 8. Six-Phase Event Timeline */}
        <ImportantDates />

        {/* 9. Transparent Financial Governance & Contribution */}
        <TransparencySection />

        {/* 10. 5-Step Official Registration via Unstop */}
        <Registration
          onOpenTerms={() => setIsTermsModalOpen(true)}
        />

        {/* 11. Terms & Conditions Summary */}
        <TermsSection />

        {/* 12. Frequently Asked Questions */}
        <FAQ />

        {/* 13. Contact Section */}
        <Contact />
      </main>

      {/* Footer with full partner attribution & navigation */}
      <Footer
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavigateToRegister={handleNavigateToRegister}
      />

      {/* Global Modals */}
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default App;
