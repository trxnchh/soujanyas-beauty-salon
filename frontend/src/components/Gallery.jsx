import React from 'react';
import { Camera } from 'lucide-react';
import galleryImage1 from '../assets/gallery_1.png';
import galleryImage2 from '../assets/gallery_2.png';
import galleryImage3 from '../assets/gallery_3.png';
import galleryImage4 from '../assets/gallery_4.png';

export default function Gallery() {
  // Configurable gallery images array utilizing imported assets
  const galleryImages = [
    {
      url: galleryImage1,
      category: "Bridal Transformation",
      title: "Couture Wedding Makeover"
    },
    {
      url: galleryImage2,
      category: "Hair Styling",
      title: "Precision Balayage & Shape"
    },
    {
      url: galleryImage3,
      category: "Nail & Skin Care",
      title: "Luminous Glow Treatment"
    },
    {
      url: galleryImage4,
      category: "Academy Training",
      title: "Live Masterclass Demos"
    }
  ];

  const instagramProfile = "https://www.instagram.com/soujanyaa_beautysalon_dharwad";

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-parlourDark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold font-montserrat">
            Visual Inspiration
          </span>
          <h2 className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-wide">
            Our Artistry Gallery
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-parlourGold to-transparent mx-auto mt-4"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-5 font-light leading-relaxed font-montserrat">
            Explore snapshots of bridal creations, hair makeovers, and academy classroom sessions directly from our Dharwad studio.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, idx) => (
            <a 
              key={idx}
              href={instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group border border-white/5 hover:border-parlourGold/30 transition-all duration-500 ease-out flex block h-80"
            >
              {/* Image */}
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-parlourDark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                
                {/* Top Corner Details */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-widest text-parlourGold uppercase font-montserrat">
                    {image.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-parlourGold/10 flex items-center justify-center border border-parlourGold/25">
                    <Camera className="w-3.5 h-3.5 text-parlourGold" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="text-left font-montserrat">
                  <h4 className="text-white text-base font-medium tracking-wide mb-1 font-cormorant font-bold">
                    {image.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-semibold tracking-wider uppercase group-hover:text-parlourGold transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>View on Instagram</span>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
