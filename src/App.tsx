import React from 'react';
import Navigation from './components/shared/Navigation';
import HeroSection from './components/sections/HeroSection';
import TeamSection from './components/sections/TeamSection';
import HowWeWorkSection from './components/sections/HowWeWorkSection';
import SymptomsSection from './components/sections/SymptomsSection';
import ResultsSection from './components/sections/ResultsSection';
import ServicesSection from './components/sections/ServicesSection';
import ExpertsSection from './components/sections/ExpertsSection';
import ConsultationSection from './components/sections/ConsultationSection';
import ClinicHistorySection from './components/sections/ClinicHistorySection';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="font-sans bg-[#F9F6F1] pt-[120px] sm:pt-[140px]" id="app">
      <Navigation />
      <section id="about">
        <TeamSection />
      </section>
      <HeroSection />
      <HowWeWorkSection />
      <SymptomsSection />
      <ResultsSection />
      <section id="services">
        <ServicesSection />
      </section>
      <section id="doctors">
        <ExpertsSection />
      </section>
      <ClinicHistorySection />
      <section id="contact">
        <ConsultationSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;