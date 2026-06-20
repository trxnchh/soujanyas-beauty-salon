import React from 'react';
import { Sparkles, CreditCard } from 'lucide-react';

export default function Offers() {
  return (
    <section id="offers" className="py-24 px-6 md:px-12 bg-parlourDark-light/40 border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-parlourGold/3 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold font-montserrat">
            Salon Membership
          </span>
          <h2 className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-wide">
            Lifetime Pricing Privilege
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-parlourGold to-transparent mx-auto mt-4"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-5 font-light leading-relaxed font-montserrat max-w-lg mx-auto">
            Acquire our official lifetime card in-store to bypass walk-in rates and claim premium member discounts on every single session.
          </p>
        </div>

        {/* Single Luxury Card Container */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#121212] border border-parlourGold/20 p-8 sm:p-12 relative overflow-hidden group gold-glow transition-all duration-500 hover:border-parlourGold/45 flex flex-col justify-between">
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Top Corner Emblem */}
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-col text-left">
                <span className="font-cormorant font-bold text-lg text-white tracking-widest">SOUJANYA'S</span>
                <span className="font-montserrat text-[7px] text-parlourGold tracking-[0.2em] uppercase font-semibold -mt-1">
                  Beauty Salon & Academy
                </span>
              </div>
              <div className="w-10 h-7 bg-gradient-to-br from-parlourGold-light via-parlourGold to-parlourGold-dark rounded-[4px] relative overflow-hidden shadow-md flex items-center justify-center border border-white/10">
                {/* Microchip details */}
                <div className="w-6 h-4 border border-black/10 rounded-[2px] opacity-40"></div>
              </div>
            </div>

            {/* Middle Card Details */}
            <div className="text-left mb-10 font-montserrat">
              <div className="flex items-center gap-2 mb-3 text-parlourGold">
                <Sparkles className="w-4 h-4 text-parlourGold animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase font-semibold">Lifetime Privilege card</span>
              </div>
              <h3 className="font-cormorant font-bold text-3xl sm:text-4xl text-white tracking-wider mb-4">
                ₹500 <span className="text-xs text-gray-500 font-sans tracking-normal uppercase ml-1">One-Time Fee</span>
              </h3>
              
              <div className="space-y-3.5 text-gray-400 text-xs sm:text-[13px] font-light leading-relaxed">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-parlourGold"></div>
                  <p><strong>Lifetime Validity:</strong> Never expires. Purchase once, enjoy privileges forever.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-parlourGold"></div>
                  <p><strong>Exclusive Rates:</strong> Instantly claims the custom <span className="text-parlourGold font-medium">"Mem:"</span> prices detailed in the booklet.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-parlourGold"></div>
                  <p><strong>Universal Hub Access:</strong> Redeem benefits across all salon and academy centers.</p>
                </div>
              </div>
            </div>

            {/* Card Footer Details - Purely Informational */}
            <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-montserrat text-left">
              <div className="flex items-center gap-2 text-gray-500">
                <CreditCard className="w-4 h-4 text-gray-600 animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest font-semibold">Available Exclusively In-Store</span>
              </div>
              <div className="text-[10px] text-parlourGold uppercase tracking-widest font-bold border border-parlourGold/25 px-4 py-2 bg-parlourGold/5">
                Purchase at Counter
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
