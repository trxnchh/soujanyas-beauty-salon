import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Branches() {
  const branches = [
    {
      city: "Dharwad Main Salon ,Branch 1",
      address: "soujanya's beauty salon, S.K.S colony , Haliyal Rd, near sarvamangala meternity hospital, dharwad, Karnataka",
      phone: "+91 9343162030",
      hours: "10:00 AM - 8:30 PM",
    },
    {
      city: "Dharwad Beauty Salon ,Branch 2",
      address: "Soujanya's beauty salon,desai building, 1st floor, near karnataka bank, maratha colony main road, dharwad",
      phone: "+91 9343162030",
      hours: "10:00 AM - 8:30 PM",
    },
  ];

  return (
    <section id="branches" className="py-24 px-6 md:px-12 relative bg-parlourDark border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold font-montserrat">
            Exclusive Locations
          </span>
          <h2 className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-wide">
            Visit Our Branches
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-parlourGold to-transparent mx-auto mt-4"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-5 font-light leading-relaxed font-montserrat">
            Find an oasis of beauty near you. Each of our salons boasts world-class aesthetic tools, a fully loaded academy hub, and a serene, luxurious ambiance.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <div 
              key={idx} 
              className="bg-parlourDark-light/40 backdrop-blur-md p-8 border border-white/5 flex flex-col justify-between hover:border-parlourGold/30 transition-all duration-500 ease-out group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-none bg-parlourGold/5 flex items-center justify-center border border-parlourGold/20 group-hover:bg-parlourGold/10 group-hover:border-parlourGold/40 transition-colors duration-500">
                    <MapPin className="w-4 h-4 text-parlourGold" />
                  </div>
                  <h3 className="font-cormorant font-bold text-xl text-white tracking-wider group-hover:text-parlourGold transition-colors duration-500">
                    {branch.city}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed font-light mb-6 min-h-[36px] font-montserrat">
                  {branch.address}
                </p>
              </div>
              
              <div className="border-t border-white/5 pt-5 space-y-3 font-montserrat">
                <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-parlourGold/60" /> Hours
                  </span>
                  <span className="text-gray-300">{branch.hours}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-parlourGold/60" /> Phone
                  </span>
                  <a href={`tel:${branch.phone}`} className="text-parlourGold hover:text-white transition-colors duration-300 font-semibold">
                    {branch.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
