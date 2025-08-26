import React, { useState } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'فريق الأطباء', href: '#dentists' },
    { name: 'المدونة', href: '#blog' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-sky-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>السبت - الخميس: 9:00 صباحاً - 9:00 مساءً</span>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-sky-600 px-4 py-1 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              احجز موعدك الآن
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-sky-500 text-white p-3 rounded-full ml-3">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">عيادة الابتسامة</h1>
                <p className="text-sm text-gray-600">للأسنان والتجميل</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-sky-600 font-medium transition-colors py-2 px-3 rounded hover:bg-sky-50"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-right text-gray-700 hover:text-sky-600 font-medium py-2 px-4 hover:bg-sky-50 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;