import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Portal({ navigateTo }) {
  return (
    <div className="min-h-screen bg-parlourDark text-gray-300 flex flex-col justify-center items-center px-6 relative font-montserrat overflow-hidden select-none">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-parlourGold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-parlourGold/3 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-4xl w-full text-center relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-parlourGold/80 block">
            Welcome to the Gateway
          </span>
          <h1 className="font-cormorant font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-tight">
            SOUJANYA'S 
          </h1>
          <div className="h-[1px] w-36 bg-gradient-to-r from-transparent via-parlourGold to-transparent mx-auto mt-6"></div>
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.4em] uppercase text-parlourGold/80 mt-4 block">
            SINCE 2008
          </p>
        </div>

        {/* Two Card Layout Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          
          {/* Card 1: CUSTOMER HUB */}
          <div 
            onClick={() => navigateTo('/home')}
            className="group bg-[#111111] border border-white/5 hover:border-parlourGold/40 p-8 sm:p-10 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between hover:bg-parlourGold/5 min-h-[280px] relative gold-glow"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-full bg-parlourGold/10 flex items-center justify-center border border-parlourGold/25 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-5 h-5 text-parlourGold" />
              </div>
              <div className="space-y-2">
                <h3 className="font-cormorant font-bold text-2xl text-white tracking-wide group-hover:text-parlourGold transition-colors">
                  CUSTOMER HUB
                </h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed">
                  Explore our premium services, view our personalized artistic gallery, and browse exclusive membership cards.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-parlourGold/85 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300">
              <span>Enter Salon Site</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Card 2: MANAGEMENT SUITE */}
          <div 
            onClick={() => navigateTo('/admin-dashboard')}
            className="group bg-[#111111] border border-white/5 hover:border-parlourGold/40 p-8 sm:p-10 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between hover:bg-parlourGold/5 min-h-[280px] relative gold-glow"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-full bg-parlourGold/10 flex items-center justify-center border border-parlourGold/25 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-5 h-5 text-parlourGold" />
              </div>
              <div className="space-y-2">
                <h3 className="font-cormorant font-bold text-2xl text-white tracking-wide group-hover:text-parlourGold transition-colors">
                  MANAGEMENT SUITE
                </h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed">
                  staff only
                </p>
              </div>
            </div>

            <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-parlourGold/85 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300">
              <span>Open Admin Panel</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
