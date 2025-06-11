import React from 'react';
import Navigation from './components/Navigation';
import Hero from '../Hero';
import TeamSection from './components/TeamSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import SymptomsSection from './components/SymptomsSection';
import ResultsSection from './components/ResultsSection';
import ServicesSection from './components/ServicesSection';
import ExpertsSection from './components/ExpertsSection';
import ConsultationSection from './components/ConsultationSection';
import ClinicHistorySection from './components/ClinicHistorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-[#F9F6F1] pt-[120px] sm:pt-[140px]" id="app">
      <Navigation />
      <section id="about">
        <TeamSection />
      </section>
      <Hero />
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