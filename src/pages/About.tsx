import React from 'react';
import { Navbar } from '../components/Navigation/Navbar';
import { ContactBar } from '../components/Navigation/ContactBar';
import { Impact } from '../components/Impact';
import { Footer } from '../components/Footer';
import { Heart, Leaf, Target, Users, Award, Globe, Import } from 'lucide-react';
import ndjoka_distribution from '../assets/images/ndjoka_dist.jpg';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Notre amour pour la cuisine africaine guide chacune de nos actions"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Durabilité",
      description: "Engagement fort pour une agriculture responsable et durable"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "La qualité premium est notre standard minimum"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Création de NDJOKA",
      description: "Début de l'aventure avec une petite production de chips de plantain"
    },
    {
      year: "2023",
      title: "Expansion Régionale",
      description: "Ouverture des premiers points de distribution en Afrique centrale et de l'Ouest"
    },
    {
      year: "2023",
      title: "Awards de la marque OAPI",
      description: "Prix de la marque régionale de l'année par l'Organisation Africaine de la Propriété Intellectuelle"
    },
    {
      year: "2023",
      title: "Expansion Internationale",
      description: "Début de l'exportation vers l'Europe et l'Amérique du Nord"
    },
    {
      year: "2024",
      title: "Innovation Produit",
      description: "Lancement de la gamme NDJOKA Energy et des Chin-Chin"
    },
    {
      year: "2024",
      title: "Programme Distributeur",
      description: "Lancement du programme de partenariat distributeur NDJOKA"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <img 
            src={ndjoka_distribution}
            alt="About hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Notre Histoire
              </h1>
              <p className="text-xl text-yellow-100">
                Découvrez l'histoire de NDJOKA, une aventure entrepreneuriale née 
                de la passion pour les saveurs authentiques de l'Afrique
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Notre Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chez NDJOKA, notre mission est de faire découvrir au monde la richesse 
              des saveurs africaines à travers nos produits de qualité premium, tout 
              en soutenant le développement durable de l'agriculture locale et en 
              créant des opportunités économiques pour nos communautés.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  {React.cloneElement(value.icon, { className: "text-black" })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Notre Parcours</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-yellow-400 ml-4"
              >
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#128446]" />
                <div className="bg-white p-6 rounded-xl shadow-lg ml-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-yellow-400 font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <Impact />

      <Footer />
    </div>
  );
}