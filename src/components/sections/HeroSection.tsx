import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hero Section
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Placeholder for Hero Section content
        </p>
      </div>
    </section>
  );
};

export default HeroSection;