import React from "react";
import { Leaf, Clock, Award, Truck } from "lucide-react";
import ndjoka_selections from "../assets/images/ndjoka_selections.jpg";
import ndjoka_preparations from "../assets/images/ndjoka_preparations.jpg";
import ndjoka_qualite from "../assets/images/ndjoka_qualite.jpg";
import ndjoka_distribution from "../assets/images/ndjoka_distribution.jpg";

export const Process = () => {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sélection",
      description:
        "Plantains soigneusement choisis auprès de producteurs locaux",
      image: ndjoka_selections,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Préparation",
      description: "Processus artisanal respectant les traditions",
      image: ndjoka_preparations,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualité",
      description: "Contrôle rigoureux à chaque étape",
      image: ndjoka_qualite,
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Distribution",
      description: "Livraison rapide dans toute l'Afrique",
      image: ndjoka_distribution,
    },
  ];

  return (
    <section
      id="process"
      className="bg-gradient-to-br from-white to-yellow-50 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Notre Processus</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De la sélection à la livraison, découvrez comment nous garantissons
            l'excellence de nos produits
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:translate-x-8" : "md:-translate-x-8"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white hidden md:block" />

                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-[#128446] rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-6" />
                      <div className="relative bg-white p-8 rounded-3xl shadow-xl transform transition-transform group-hover:-translate-y-2">
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform">
                          {React.cloneElement(step.icon, {
                            className: "text-gray-900",
                          })}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 mix-blend-multiply" />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-[300px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
