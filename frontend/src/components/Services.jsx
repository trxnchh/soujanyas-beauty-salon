import React, { useState } from 'react';
import { Scissors, Sparkles, GraduationCap, Eye, ArrowRight, Heart } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All Services' },
    { id: 'skin', name: 'Skin & Aesthetics' },
    { id: 'facials', name: 'Luxury Facials' },
    { id: 'hair', name: 'Hair & Colors' },
    { id: 'bridal', name: 'Permanent & Bridal' }
  ];

  const serviceCategories = [
    {
      id: 'skin',
      title: "Flavored / Premium Waxing",
      icon: Sparkles,
      tag: "Waxing Aesthetics",
      items: [
        { name: "Full Hands", regular: "₹300 / ₹500", member: "₹250 / ₹450" },
        { name: "Full Legs", regular: "₹800 / ₹1,200", member: "₹750 / ₹1,150" },
        { name: "Half Legs", regular: "₹400 / ₹600", member: "₹350 / ₹750" },
        { name: "Under arms", regular: "₹100 / ₹150", member: "₹80 / ₹120" },
        { name: "Full Body", regular: "₹2,400", member: "₹2,300" },
        { name: "Full Back", regular: "₹300 / ₹400", member: "₹250 / ₹350" },
        { name: "Midriff", regular: "₹300 / ₹400", member: "₹250 / ₹350" },
        { name: "Bikini", regular: "₹1,600", member: "₹1,500" },
        { name: "Face Wax", regular: "₹400", member: "₹350" }
      ]
    },
    {
      id: 'skin',
      title: "Detan / Bleach",
      icon: Eye,
      tag: "De-Pigmentation",
      items: [
        { name: "Face, Neck & Back", regular: "₹600", member: "₹550" },
        { name: "Hands", regular: "₹600", member: "₹550" },
        { name: "Feet", regular: "₹200", member: "₹150" },
        { name: "Under arms", regular: "₹150", member: "₹130" },
        { name: "Full Legs", regular: "₹1,200", member: "₹1,100" },
        { name: "Midriff", regular: "₹350", member: "₹300" },
        { name: "Full Body", regular: "₹2,400", member: "₹2,400" },
        { name: "Back", regular: "₹600", member: "₹550" }
      ]
    },
    {
      id: 'skin',
      title: "Manicure - Pedicure",
      icon: Heart,
      tag: "Nail Care",
      items: [
        { name: "Manicure", regular: "₹600", member: "₹550" },
        { name: "Pedicure", regular: "₹1,000", member: "₹900" }
      ]
    },
    {
      id: 'facials',
      title: "Indulgent & Luxury Facials",
      icon: Eye,
      tag: "Skin Enrichment",
      items: [
        { name: "Clean-Up", regular: "₹400", member: "₹350" },
        { name: "Pearl Clean-Up", regular: "₹600", member: "₹550" },
        { name: "Wine Clean-Up", regular: "₹700", member: "₹650" },
        { name: "Gold Clean-Up", regular: "₹1,000", member: "₹900" },
        { name: "Diamond Clean-Up", regular: "₹1,200", member: "₹1,100" },
        { name: "Fruits Facial", regular: "₹1,000", member: "₹900" },
        { name: "Pearl Facial", regular: "₹1,200", member: "₹1,100" },
        { name: "Wine Facial", regular: "₹1,400", member: "₹1,350" },
        { name: "Bridal Glow", regular: "₹1,800", member: "₹1,700" },
        { name: "Instant Bright", regular: "₹2,000", member: "₹1,900" },
        { name: "Naturally Age Reversal", regular: "₹1,800", member: "₹1,700" },
        { name: "Skin Pigmentation", regular: "₹2,000", member: "₹1,900" },
        { name: "Gold Glow", regular: "₹2,000", member: "₹1,900" },
        { name: "Diamond Rich", regular: "₹2,500", member: "₹2,300" },
        { name: "O3", regular: "₹2,000", member: "₹1,900" },
        { name: "Vitamin Enrich", regular: "₹3,500", member: "₹3,300" },
        { name: "Hydra Facial (Normal)", regular: "₹2,500", member: "₹2,400" },
        { name: "Hydra Luxury", regular: "₹4,500", member: "₹4,300" },
        { name: "Body Polishing", regular: "₹3,000", member: "₹2,800" }
      ]
    },
    {
      id: 'hair',
      title: "Hair Styling & Texture",
      icon: Scissors,
      tag: "Styling & Shaping",
      items: [
        { name: "Hair Wash & Deep Conditioning", regular: "₹250", member: "₹200" },
        { name: "Blow Dry", regular: "₹400", member: "₹350" },
        { name: "Straight / U / Straight Out Cut", regular: "₹200 / ₹250 / ₹200", member: "₹150 / ₹200 / ₹150" },
        { name: "Layer Cut / Forward Graduation", regular: "₹600", member: "₹500" },
        { name: "Uniform Layer / Step Cut / Bangs", regular: "₹600 / ₹500 / ₹150", member: "₹500 / ₹500 / ₹100" },
        { name: "U With Feather", regular: "₹350", member: "₹300" },
        { name: "Smoothening (Short/Medium/Long)", regular: "₹4,000 / ₹6,000 / ₹8,000", member: "₹3,500 / ₹5,500 / ₹7,500" },
        { name: "Permanent Straighten (S/M/L)", regular: "₹4,000 / ₹6,000 / ₹8,000", member: "₹3,500 / ₹5,500 / ₹7,500" },
        { name: "Keratin (Short/Medium/Long)", regular: "₹5,000 / ₹7,000 / ₹9,000", member: "₹4,500 / ₹6,500 / ₹8,500" },
        { name: "Botox (Short/Medium/Long)", regular: "₹6,000 / ₹8,000 / ₹10,000", member: "₹5,500 / ₹7,500 / ₹9,500" },
        { name: "Nano-Plastia (Short/Medium/Long)", regular: "₹6,000 / ₹8,000 / ₹10,000", member: "₹5,500 / ₹7,500 / ₹9,500" }
      ]
    },
    {
      id: 'hair',
      title: "Coloring and Highlights",
      icon: Scissors,
      tag: "Hair Coloring",
      items: [
        { name: "Root Touchup", regular: "₹1,200", member: "₹1,100" },
        { name: "Global Coloring (S/M/L)", regular: "₹2,000 / ₹2,500 / ₹3,000", member: "₹1,800 / ₹2,300 / ₹2,800" },
        { name: "Global Ammonia Free (S/M/L)", regular: "₹2,500 / ₹2,800 / ₹3,200", member: "₹2,000 / ₹2,500 / ₹3,000" },
        { name: "Global Highlights", regular: "₹3,000", member: "₹2,800" },
        { name: "Balayage Technique", regular: "₹350", member: "₹300" },
        { name: "Highlights Per Streak", regular: "₹350", member: "₹300" },
        { name: "Global Fashion Color", regular: "₹3,500", member: "₹3,000" }
      ]
    },
    {
      id: 'hair',
      title: "Hair Spa & Body Care",
      icon: Heart,
      tag: "Sanctuary Spa",
      items: [
        { name: "Ironing / Tongs", regular: "₹600 / ₹1,000", member: "₹550 / ₹950" },
        { name: "Head Massage / Moisturizing Spa", regular: "₹600 / ₹1,000", member: "₹550 / ₹950" },
        { name: "Total Nourishment / Dandruff Spa", regular: "₹1,200 / ₹1,500", member: "₹1,100 / ₹1,450" },
        { name: "Hair Fall Control Spa", regular: "₹1,500", member: "₹1,450" },
        { name: "Brows / Upper Lip / Chin", regular: "₹50 / ₹20 / ₹20", member: "Free for gold tier" },
        { name: "Head (10m) / Full Face Threading", regular: "₹10 / ₹200", member: "₹10 / ₹150" }
      ]
    },
    {
      id: 'bridal',
      title: "Permanent Make Up & Bridal",
      icon: GraduationCap,
      tag: "Elite Services",
      items: [
        { name: "Permanent Make Up", note: "Microblading, Lip Blush, BB Glow, Skin Tag Removal, Scalp Microblading, Chemical Peeling" },
        { name: "Professional Bridal Make-Up Mastery", note: "HD Airbrush, Traditional Luxury, Custom Draping & Styling" },
        { name: "Couture Hair Styling", note: "Bridal Drapes, Floral Layouts & Accessories" },
        { name: "Sari Box Folding & Draping", note: "Traditional, Modern & Fusion Draping Styles" }
      ]
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === activeTab);

  return (
    <section 
      id="services" 
      className="py-28 px-6 md:px-12 bg-parlourDark relative border-t border-white/5"
    >
      {/* Decorative gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-parlourGold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold font-montserrat">
            Aesthetic Price Booklet
          </span>
          <h2 className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-wide">
            Our Menu & Pricing
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-parlourGold to-transparent mx-auto mt-5"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-5 font-light leading-relaxed font-montserrat max-w-lg mx-auto">
            Review our official pricing options. Both Walk-In (Regular) and Membership rewards are presented below.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-16 border-b border-white/5 pb-6 font-montserrat">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[10px] tracking-widest uppercase py-2 px-4 border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-parlourGold text-parlourGold bg-parlourGold/5'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* 2-Column Luxury Grid Booklet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#161616]/40 backdrop-blur-sm border border-white/5 p-6 sm:p-10 flex flex-col justify-between transition-all duration-500 ease-out hover:border-parlourGold/30 gold-glow hover:bg-[#1c1c1c]/50"
              >
                {/* Top Corner Badge */}
                <div className="absolute top-4 right-6 text-[8px] font-semibold tracking-[0.2em] uppercase text-gray-500 font-montserrat">
                  {category.tag}
                </div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-8 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-none bg-parlourGold/5 flex items-center justify-center border border-parlourGold/15 group-hover:bg-parlourGold/10 group-hover:border-parlourGold/35 transition-all duration-500">
                      <IconComponent className="w-4.5 h-4.5 text-parlourGold" />
                    </div>
                    <h3 className="font-cormorant font-bold text-2xl text-white tracking-wider group-hover:text-parlourGold transition-colors duration-500">
                      {category.title}
                    </h3>
                  </div>

                  {/* Menu Items List */}
                  <div className="space-y-4 mb-8">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        {item.regular ? (
                          /* Pricing Item row */
                          <div className="flex justify-between items-end py-1 font-montserrat">
                            <span className="text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
                              {item.name}
                            </span>
                            {/* Dot leader */}
                            <div className="flex-grow border-b border-dashed border-white/10 mx-3 mb-1.5"></div>
                            {/* Price block */}
                            <div className="flex items-center gap-3 text-right">
                              <span className="text-[10px] text-gray-300 font-medium tracking-wide">
                                Reg: {item.regular}
                              </span>
                              <span className="text-xs text-parlourGold font-semibold tracking-wide">
                                Mem: {item.member}
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* Advanced Tech Item row */
                          <div className="py-1 font-montserrat text-left flex flex-col">
                            <div className="flex justify-between items-center">
                              <span className="text-white/90 text-xs sm:text-[13px] font-medium tracking-wide">
                                {item.name}
                              </span>
                              <span className="text-[9px] text-parlourGold uppercase tracking-[0.15em] font-semibold border border-parlourGold/25 px-1.5 py-0.5 bg-parlourGold/5">
                                Consultation
                              </span>
                            </div>
                            {item.note && (
                              <span className="text-[10px] text-gray-500 block mt-1 leading-relaxed font-light tracking-wide">
                                {item.note}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="border-t border-white/5 pt-5 mt-auto flex justify-between items-center">
                  <span className="text-[9px] text-gray-500 tracking-[0.15em] uppercase font-montserrat font-medium">
                    Priority Booking
                  </span>
                  <button 
                    onClick={() => {
                      // Trigger global booking modal
                      window.dispatchEvent(new CustomEvent('open-booking', { detail: { service: category.title } }));
                    }}
                    className="text-white hover:text-parlourGold flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-semibold font-montserrat transition-all duration-300 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
