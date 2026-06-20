import React from 'react';

const branches = [
  { name: "Main Premium Studio", location: "Gokul Road, Hubli", phone: "+91 98765 43210" },
  { name: "Elite Academy & Salon", location: "Keshwapur, Hubli", phone: "+91 98765 43211" }
];

const offers = [
  { title: "Bridal Package Bliss", deal: "Complimentary premium hair trial & glow facial with every advanced bridal booking.", valid: "Limited Season Offer" },
  { title: "Academy Early Bird", deal: "Enroll in the Permanent Makeup certification course this month and receive an elite microblading starter kit.", valid: "Valid till Sunday" }
];

export default function BranchesOffers() {
  return (
    <section id="branches-offers" className="bg-[#0A0A0A] py-20 px-6 sm:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Our Branches */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-parlourGold tracking-wide mb-2">Our Luxury Branches</h2>
          <p className="font-sans text-sm text-gray-400 mb-8">Visit us at our state-of-the-art facilities designed for premium care and learning.</p>
          <div className="space-y-6">
            {branches.map((branch, idx) => (
              <div key={idx} className="bg-[#121212] border border-white/5 rounded-xl p-6 hover:border-parlourGold/20 transition-all">
                <h3 className="font-serif text-xl text-white mb-2">{branch.name}</h3>
                <p className="text-sm text-gray-400 mb-1">{branch.location}</p>
                <p className="text-xs text-parlourGold font-medium">{branch.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Exclusive Offers */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-parlourGold tracking-wide mb-2">Exclusive Offers</h2>
          <p className="font-sans text-sm text-gray-400 mb-8">Indulge in our limited-time premium experiences curated just for you.</p>
          <div className="space-y-6">
            {offers.map((offer, idx) => (
              <div key={idx} className="relative bg-gradient-to-br from-[#161616] to-[#111111] border border-parlourGold/10 rounded-xl p-6 overflow-hidden">
                <span className="absolute top-0 right-0 bg-parlourGold/10 text-parlourGold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-xl font-medium">
                  {offer.valid}
                </span>
                <h3 className="font-serif text-xl text-white mb-2 pr-24">{offer.title}</h3>
                <p className="text-sm text-gray-400">{offer.deal}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}