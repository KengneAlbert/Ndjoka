import React, { useState, useEffect } from "react";
import { Banana, ChevronDown, Link } from "lucide-react";
import ndjoka_pub1 from "../assets/images/ndjoka_pub1.jpg";
import ndjoka_pub2 from "../assets/images/ndjoka_pub2.jpg";
import ndjoka_pub3 from "../assets/images/ndjoka_pub3.jpg";
import ndjoka_drink from "../assets/images/ndjoka_jus.jpg";
import ndjoka_preparation from "../assets/images/ndjoka_preparations.jpg";
import ndjoka_chin_chin from "../assets/images/ndjoka_chin_chin.jpg";
import Ndjoka_claudel from "../assets/images/ndjoka_claudel.jpg";

const heroImages = [
  Ndjoka_claudel,
  ndjoka_pub2,
  ndjoka_drink,
  ndjoka_preparation,
  ndjoka_chin_chin,
  ndjoka_pub3,
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* <div className="inline-block animate-float">
          <img className="w-96 h-48" src={Ndjoka_logo} alt="ndjoka logo" />
        </div> */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          {" "}
          NDJOKA
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
          L'Afrique, le Grénier du Monde
        </p>
        <button
          onClick={scrollToProducts}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
        >
          Explorer nos produits
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-300 rounded-full ${
                currentImage === index
                  ? "w-8 h-2 bg-yellow-400"
                  : "w-2 h-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 animate-bounce text-white" />
      </div>
    </div>
  );
};
