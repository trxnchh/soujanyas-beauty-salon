import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-parlourDark border-t border-white/5 pt-20 pb-12 px-6 md:px-12 text-xs text-gray-500 font-light tracking-wide">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-16 font-montserrat">
        
        {/* Brand Info */}
        <div className="md:col-span-2 space-y-5">
          <span className="font-cormorant font-bold text-3xl tracking-[0.15em] text-white">
            SOUJANYA'S
          </span>
          <p className="text-gray-400 text-xs sm:text-[13px] max-w-sm leading-relaxed font-light">
            Establishing elite standards in modern beauty, bridal transformations, and professional aesthetic training since inception.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
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

          <div className="text-[10px] tracking-widest uppercase text-gray-500 pt-2">
            <p>© {new Date().getFullYear()} Soujanya's Beauty Salon & Academy. All Rights Reserved.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-cormorant font-bold text-sm text-white tracking-widest uppercase mb-6">
            Quick Navigation
          </h4>
          <ul className="space-y-3.5 text-gray-400 text-[10px] tracking-[0.2em] uppercase font-semibold">
            <li><a href="#home" className="hover:text-parlourGold transition-colors duration-300">Home</a></li>
            <li><a href="#services" className="hover:text-parlourGold transition-colors duration-300">Services</a></li>
            <li><a href="#branches" className="hover:text-parlourGold transition-colors duration-300">Our Branches</a></li>
            <li><a href="#offers" className="hover:text-parlourGold transition-colors duration-300">Special Offers</a></li>
            <li><a href="#testimonials" className="hover:text-parlourGold transition-colors duration-300">Testimonials</a></li>
          </ul>
        </div>

        {/* Hours & Contact */}
        <div>
          <h4 className="font-cormorant font-bold text-sm text-white tracking-widest uppercase mb-6">
            The Sanctuary Hours
          </h4>
          <ul className="space-y-4 text-gray-400 text-xs sm:text-[13px]">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span className="font-medium text-gray-500 uppercase tracking-wider text-[10px]">Mon - Sun</span>
              <span>10:00 AM - 8:30 PM</span>
            </li>
            <li className="pt-2">
              <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Appointment Helpline</span>
              <a href="tel:+919343162030" className="text-parlourGold text-base font-bold hover:text-white transition-colors duration-300">
                +91 9343162030
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
