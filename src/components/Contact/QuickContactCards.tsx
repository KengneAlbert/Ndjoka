import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const QuickContactCards = () => {
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 text-black" />,
      title: "Téléphone",
      description: "Disponible 7j/7 de 8h à 20h",
      content: (
        <div className="flex flex-col text-yellow-600">
          <a href="tel:+237670906975" className="hover:text-yellow-700">+237 670 906 975</a>
          <a href="tel:+237657992052" className="hover:text-yellow-700">+237 657 992 052</a>
        </div>
      )
    },
    {
      icon: <Mail className="w-6 h-6 text-black" />,
      title: "Email",
      description: "Réponse sous 24h",
      action: {
        text: "contact@ndjoka237.com",
        href: "mailto:contact@ndjoka237.com"
      }
    },
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: "Adresse",
      description: "Siège social",
      content: (
        <address className="not-italic text-yellow-600">
          Ngousso, Yaoundé, Cameroon
        </address>
      )
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {contactCards.map((card, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
            {card.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-600 mb-4">{card.description}</p>
          {card.action ? (
            <a 
              href={card.action.href}
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              {card.action.text}
            </a>
          ) : card.content}
        </div>
      ))}
    </div>
  );
};