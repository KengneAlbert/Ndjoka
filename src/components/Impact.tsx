import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';
import ndjoka_chin_chin from '../assets/images/ndjoka_chin_chin.jpg';

export const Impact = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      number: "500+",
      text: "Agriculteurs Partenaires"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      number: "12",
      text: "Pays Desservis"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      number: "100%",
      text: "Agriculture Durable"
    }
  ];

  return (
    <section id="impact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src= {ndjoka_chin_chin}
          alt="Impact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-yellow-900/95" />
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">Notre Impact</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 backdrop-blur-md bg-white/10 rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
              {React.cloneElement(stat.icon, { className: "w-12 h-12 mx-auto mb-6 text-yellow-400" })}
              <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
              <div className="text-xl text-gray-200">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};