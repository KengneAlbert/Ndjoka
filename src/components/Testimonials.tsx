import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Dr_raoul from '../assets/images/testimonials/Dr_raoul.jpg';
import Maahlox from '../assets/images/testimonials/maahlox.jpg';
import Mimie from '../assets/images/testimonials/mimie.jpg';
import Takam from '../assets/images/testimonials/takam.jpg';
import Stephanie from '../assets/images/testimonials/stephanie.jpg';
import Dr_Geoffroy from '../assets/images/testimonials/Dr Geoffroy.jpg';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Ajuster le nombre de slides en fonction de la largeur d'écran
  const updateSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) { // Mobile
      setSlidesPerView(1);
    } else if (width < 1024) { // Tablet
      setSlidesPerView(2);
    } else { // Desktop
      setSlidesPerView(3);
    }
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

  const testimonials = [
    {
      name: "Dr Raoul",
      role: "Businessman - Conférencier ",
      image: Dr_raoul, 
      quote: "Les chips de banane plantain mûre sont délicieuses, le goût sucré naturel est parfait."
    },
    {
      name: "Maahlox",
      role: "Artiste - Opérateur économique",
      image: Maahlox,
      quote: "Les chips de banane plantain non mûre sont mon en-cas préféré. Croustillantes à souhait!"
    },
    {
      name: "Ulrich Takam", 
      role: "Comédien humoriste",
      image: Takam,
      quote: "J'adore les chips épicées, elles ont juste ce qu'il faut de piment pour réveiller les papilles."
    },
    {
      name: "Stéphanie Mbida",
      role: "Entrepreneur",
      image: Stephanie,
      quote: "Ces chips sont devenus incontournables dans mes voyages. Mes amis adorent!"
    },
    {
      name: "Mimie",
      role: "Artiste - Entrepreneur",
      image: Mimie,
      quote: "La qualité est constante, les chips sont toujours bien croustillantes et jamais grasses."
    },
    
    {
      name: "Dr Geoffroy",
      role: "Médecin - Burkina Faso", 
      image: Dr_Geoffroy,
      quote: "Le chin chin croquette est incomparable, croquant et pas trop sucré. Parfait avec le café!"
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Ils nous font confiance
        </h2>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4 md:gap-6">
                  {testimonials
                    .slice(slideIndex * slidesPerView, slideIndex * slidesPerView + slidesPerView)
                    .map((testimonial, index) => (
                    <div 
                      key={index}
                      className={`${
                        slidesPerView === 1 ? 'w-full' : 
                        slidesPerView === 2 ? 'w-1/2' : 'w-1/3'
                      } px-2 md:px-4 transform transition-all duration-300 hover:-translate-y-2`}
                    >
                      <div className="bg-white rounded-2xl p-4 md:p-8 shadow-xl h-full flex flex-col">
                        <Quote className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 mb-4 md:mb-6" />
                        <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg italic flex-grow">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                          />
                          <div>
                            <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                            <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Masqués sur mobile */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Dots - Style amélioré pour mobile */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-yellow-400 w-6 md:w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};