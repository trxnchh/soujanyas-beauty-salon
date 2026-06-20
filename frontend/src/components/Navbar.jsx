import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Branches', href: '#branches' },
    { name: 'Offers', href: '#offers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-parlourDark/95 border-b border-parlourGold/20 py-4 shadow-2xl backdrop-blur-md'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      {/* Top Micro-Bar (Fades out when scrolled for minimal look) */}
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-gray-400 border-b border-white/5 pb-2 mb-4 transition-all duration-500 ${
          isScrolled ? 'opacity-0 h-0 overflow-hidden mb-0 pb-0' : 'opacity-100 h-auto'
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-parlourGold" /> Dharwad, Karnataka, India
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-parlourGold animate-pulse" /> Luxury Salon & Academy
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-parlourGold" /> 
            <a href="tel:+919343162030" className="hover:text-parlourGold transition-colors">
              +91 9343162030
            </a>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo / Typography */}
        <a href="#home" className="group flex flex-col items-start focus:outline-none">
          <span className="font-cormorant font-bold text-xl md:text-2xl lg:text-3xl tracking-[0.15em] text-white group-hover:text-parlourGold transition-colors duration-500">
            SOUJANYA'S
          </span>
          <span className="font-montserrat text-[7px] md:text-[8px] lg:text-[9px] tracking-[0.25em] text-parlourGold font-semibold -mt-1 group-hover:text-white transition-colors duration-500">
            BEAUTY SALON & ACADEMY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 font-montserrat text-xs tracking-[0.18em] uppercase font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-gray-300 hover:text-parlourGold transition-colors duration-300 group"
            >
              {link.name}
              {/* Elegant sliding gold underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-parlourGold-dark via-parlourGold to-parlourGold-light transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            className="group relative p-[1px] overflow-hidden rounded-none transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-parlourGold-dark via-parlourGold to-parlourGold-light transition-all duration-500 group-hover:opacity-100"></span>
            <div className="relative px-6 py-2.5 bg-parlourDark text-parlourGold group-hover:bg-transparent group-hover:text-parlourDark transition-all duration-500 font-montserrat uppercase tracking-[0.2em] font-semibold text-[10px]">
              Book Appointment
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-300 hover:text-parlourGold p-2 focus:outline-none transition-colors duration-300"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-parlourDark/98 z-50 lg:hidden flex flex-col justify-between p-8 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Mobile Drawer Header */}
          <div className="flex justify-between items-center border-b border-white/5 pb-6">
            <div className="flex flex-col items-start">
              <span className="font-cormorant font-bold text-2xl tracking-[0.15em] text-white">
                SOUJANYA'S
              </span>
              <span className="font-montserrat text-[8px] tracking-[0.25em] text-parlourGold font-semibold -mt-1">
                BEAUTY SALON & ACADEMY
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-parlourGold p-2 focus:outline-none transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-6 text-center my-auto font-montserrat">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-[0.2em] uppercase text-gray-300 hover:text-parlourGold transition-colors duration-300 py-3 border-b border-white/5 last:border-b-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Drawer Footer */}
          <div className="flex flex-col items-center gap-6 border-t border-white/5 pt-6">
            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-booking'));
              }}
              className="w-full text-center gold-gradient-bg text-parlourDark font-montserrat uppercase tracking-[0.2em] font-bold text-xs py-4 px-8 gold-glow transition-all duration-300 hover:brightness-110 cursor-pointer"
            >
              Book Appointment
            </button>

            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/soujanyaa_beautysalon_dharwad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-parlourGold transition-colors duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-parlourGold transition-colors duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>

            <div className="text-[10px] tracking-[0.15em] uppercase text-gray-400 text-center">
              <p className="mb-1">Call: +91 9343162030</p>
              <p>Dharwad, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
