import React from 'react';
import { Users, Map, TrendingUp, Building } from 'lucide-react';

export const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "150+",
      label: "Distributeurs Actifs"
    },
    {
      icon: <Map className="w-8 h-8" />,
      number: "12",
      label: "Pays Couverts"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "45%",
      label: "Croissance Annuelle"
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: "1000+",
      label: "Points de Vente"
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                {React.cloneElement(stat.icon, { className: "text-yellow-400" })}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};