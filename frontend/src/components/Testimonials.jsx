import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Vaishnavi",
      text: "I had a great experience at Soujanya Beauty Salon! The makeup artist was really nice and listened to what I wanted. They used good products that made my skin look great without feeling heavy. The salon was cozy, and I felt relaxed while getting my makeup done. I definitely recommend Soujanya Beauty Salon for anyone who wants beautiful makeup",
      rating: 5
    },
    {
      name: "Jayanti belur",
      text: "For the past decade, visiting my favorite beauty parlour has been nothing short of a delightful ritual. The parlour, a haven of beauty and tranquility, has been my go-to place for a decade now. What makes it truly special is the exceptional parlor person (akku) who has been a constant presence throughout these years. Their expertise is matched only by their warmth and friendliness, creating an atmosphere that feels like catching up with an old friend. The ease of communication and the genuine care they extend make every visit a pleasure. Over the years, this parlour has not just been a place for beauty treatments but a sanctuary where I find comfort and leave feeling rejuvenated. It's a testament to the wonderful combination of skill, warmth, and familiarity that has made this beauty parlour an integral part of my life for the past decade.",
      rating: 5
    },
    {
      name: "Roshni",
      text: "I completed my training at Soujanya Beauty Academy, and it was a wonderful learning experience. The trainers are highly skilled, supportive, and explain every technique with patience and clarity. I gained both practical knowledge and confidence through the hands-on training provided. The academy maintains a professional and friendly environment that makes learning enjoyable. I’m truly grateful to the entire team for their guidance and encouragement throughout my training journey. I highly recommend Soujanya Beauty Academy to anyone looking to build a successful career in the beauty industry.",
      rating: 5
    },
    {
      name: "Amulya",
      text: "Today I got a keratin treatment done at Soujanya Beauty Salon, and I had a wonderful experience. The results are amazing, and I'm really happy with the service. A big thank you to the entire team for their professionalism, care, and excellent work. I truly appreciate the effort you put in to make customers feel comfortable and satisfied. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-parlourDark relative border-t border-white/5">
      {/* Background glow backdrops */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-parlourGold/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-parlourGold font-montserrat">
            Whispers of Elegance
          </span>
          <h2 className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 tracking-wide">
            What Our Customers Say
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-parlourGold to-transparent mx-auto mt-4"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-5 font-light leading-relaxed font-montserrat max-w-lg mx-auto">
            Read stories of customized transformations and career successes from our wonderful salon guests and academy alumni.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-parlourDark-light/40 backdrop-blur-sm border border-white/5 p-8 flex flex-col justify-between hover:border-parlourGold/30 transition-all duration-500 ease-out group hover:-translate-y-1.5 gold-glow relative"
            >
              {/* Luxury Quote Icon Backdrop */}
              <div className="absolute top-6 right-6 opacity-5 text-white group-hover:opacity-10 group-hover:text-parlourGold transition-all duration-500">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* Category Badge */}
                <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-parlourGold/80 bg-parlourGold/5 border border-parlourGold/10 px-2.5 py-1 mb-6 inline-block font-montserrat">
                  {t.category}
                </span>

                {/* Testimonial Quote Text */}
                <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed font-light italic mb-6 font-montserrat">
                  "{t.text}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="border-t border-white/5 pt-5 mt-auto flex items-center justify-between font-montserrat">
                <div>
                  <h4 className="font-cormorant font-bold text-lg text-white group-hover:text-parlourGold transition-colors duration-500 tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
                
                {/* Gold Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3 h-3 text-parlourGold fill-current group-hover:scale-110 transition-transform duration-500" 
                      style={{ transitionDelay: `${i * 75}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
