import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quelles sont les conditions pour devenir distributeur ?",
      answer: "Pour devenir distributeur, vous devez avoir une entreprise enregistrée, une capacité de stockage adéquate et une présence établie dans votre région. Un investissement initial minimum est requis."
    },
    {
      question: "Quelle est la marge bénéficiaire moyenne ?",
      answer: "Les distributeurs NDJOKA bénéficient d'une marge attractive variant entre 25% et 35% selon les produits et les volumes de commande."
    },
    {
      question: "Quel support est fourni aux distributeurs ?",
      answer: "Nous offrons une formation complète, du matériel marketing, un support logistique et un accompagnement commercial personnalisé."
    },
    {
      question: "Quels sont les territoires disponibles ?",
      answer: "Nous recherchons activement des distributeurs dans toutes les régions d'Afrique, avec des territoires exclusifs disponibles dans plusieurs pays."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Questions Fréquentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};