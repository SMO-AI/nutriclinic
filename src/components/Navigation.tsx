import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary-600">
              Клиника
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => handleScroll('about')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">О клинике</button>
            <button onClick={() => handleScroll('services')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Услуги</button>
            <button 
              onClick={() => handleScroll('services')} 
              className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all"
            >
              Цены
            </button>
            <button onClick={() => handleScroll('doctors')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Врачи</button>
            <button onClick={() => handleScroll('blog')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Блог</button>
            <button onClick={() => handleScroll('reviews')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Отзывы</button>
            <button onClick={() => handleScroll('contact')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Контакты</button>
            <button onClick={() => handleScroll('promotions')} className="text-gray-700 hover:text-primary-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 hover:after:w-full after:transition-all">Акции</button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-500 focus:outline-none focus:text-primary-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold text-gray-800">Меню</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <button 
                  onClick={() => handleScroll('about')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                >
                  О клинике
                </button>
                <button 
                  onClick={() => handleScroll('services')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                >
                  Услуги
                </button>
                <button 
                  onClick={() => handleScroll('services')} 
                  className="text-left text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4"
                >
                  Цены
                </button>
                <button 
                  onClick={() => handleScroll('doctors')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                >
                  Врачи
                </button>
                <button 
                  onClick={() => handleScroll('blog')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                >
                  Блог
                </button>
                <button 
                  onClick={() => handleScroll('reviews')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                >
                  Отзывы
                </button>
                <button 
                  onClick={() => handleScroll('contact')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors border-b border-gray-100 pb-4" 
                >
                  Контакты
                </button>
                <button 
                  onClick={() => handleScroll('promotions')} 
                  className="text-xl text-gray-700 hover:text-primary-500 transition-colors" 
                >
                  Акции
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;