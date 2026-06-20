import React from 'react';
import { Sparkles, Star, MapPin, ArrowRight } from 'lucide-react';
import salonInterior from '../assets/salon_interior.png';

export default function Hero() {
  const specialties = [
    "Professional Bridal Makeover",
    "Premium Artistry",
    "Permanent Makeup Studio",
    "Training Centre"
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 md:px-12 bg-parlourDark overflow-hidden"
    >
      {/* Decorative luxury radial glow backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-parlourGold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-parlourGold/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Side: Brand Introduction Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Accent Gold Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-parlourGold/10 border border-parlourGold/25 rounded-none mb-6">
            <Sparkles className="w-3.5 h-3.5 text-parlourGold animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold">
              Welcome to Soujanya's
            </span>
          </div>
          
          {/* Main Luxury Header */}
          <h1 className="font-cormorant font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6 tracking-wide">
            Where Luxury Meets <br />
            <span className="gold-text-gradient italic">Pure Artistry & Grace</span>
          </h1>
          
          {/* Brand Introduction Text */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light font-montserrat">
            Experience world-class hair, skin, and bridal aesthetics customized to elevate your natural charm. Step into a sanctuary designed for the modern connoisseur.
          </p>

          {/* Specialties Display */}
          <div className="mb-8 w-full">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold mb-4 border-b border-white/5 pb-2">
              Our Exclusive Masteries
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 font-montserrat text-xs tracking-wider text-gray-300">
              {specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="h-1.5 w-1.5 bg-parlourGold rounded-none group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-parlourGold transition-colors duration-300">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Actions (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 font-montserrat">
            {/* High-Contrast Glowing Gold Button */}
            <a
              href="#services"
              className="gold-gradient-bg hover:gold-gradient-hover-bg text-parlourDark uppercase tracking-[0.2em] font-bold text-xs py-4 px-8 text-center gold-glow-strong transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Services
            </a>
            {/* Outlined Minimalist Button */}
            <a
              href="#branches"
              className="border border-parlourGold/60 hover:border-parlourGold text-parlourGold hover:bg-parlourGold hover:text-parlourDark uppercase tracking-[0.2em] font-bold text-xs py-4 px-8 text-center transition-all duration-500 hover:scale-[1.02]"
            >
              Our Branches
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-12 border-t border-white/5 pt-8 w-full font-montserrat">
            <div>
              <p className="font-cormorant text-2xl sm:text-3xl text-white font-bold tracking-wider">15k+</p>
              <p className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-gray-500 mt-1">Guests Pampered</p>
            </div>
            <div>
              <p className="font-cormorant text-2xl sm:text-3xl text-white font-bold tracking-wider">100%</p>
              <p className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-gray-500 mt-1">Premium Quality</p>
            </div>
            <div>
              <p className="font-cormorant text-2xl sm:text-3xl text-white font-bold tracking-wider">5 ★</p>
              <p className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-gray-500 mt-1">Rated Sanctuary</p>
            </div>
          </div>
        </div>

        {/* Right Side: Flexible Visual Placeholder Framework */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[4/5] p-2.5 border border-parlourGold/30 gold-glow group transition-all duration-500 hover:border-parlourGold/50">
            {/* Inner Border Accent */}
            <div className="absolute inset-0 border border-white/10 m-3.5 pointer-events-none z-20"></div>
            
            {/* Visual Canvas Area */}
            <div className="w-full h-full bg-parlourDark-light relative overflow-hidden flex items-center justify-center">
              {/* Loaded Salon Graphic */}
              <img 
                src={salonInterior} 
                alt="Soujanya's Luxury Salon Interior" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
              />
              
              {/* Subtle Dark Radial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-parlourDark via-transparent to-transparent opacity-60"></div>
              
              {/* Subtle Bottom Accent Label inside container */}
              <div className="absolute bottom-6 left-6 right-6 z-30 flex justify-between items-end border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-left">
                  <span className="font-cormorant text-lg text-white font-bold tracking-widest block">THE SANCTUARY</span>
                  <span className="font-montserrat text-[8px] text-parlourGold tracking-[0.2em] uppercase font-semibold">Premium Interior View</span>
                </div>
                <div className="flex items-center gap-0.5 text-parlourGold">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
