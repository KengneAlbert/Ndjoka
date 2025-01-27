import React from 'react';
import { Leaf, Star, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "100% Naturel",
    description: "Ingrédients soigneusement sélectionnés"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Qualité Premium",
    description: "Processus de fabrication artisanal"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Certifié Bio",
    description: "Respect des normes internationales"
  }
];

export const Features = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 group-hover:bg-yellow-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};