import React from 'react';
import { Banana, Leaf, Flame, Sparkles, Droplets, Cookie } from 'lucide-react';
import ndjoka_mure from '../assets/images/ndjoka_mure.jpg';
import ndjoka_non_mure from '../assets/images/ndjoka_non_mur.jpg';
import ndjoka_epice from '../assets/images/ndjoka_epice1.jpg';
import ndjoka_energy from '../assets/images/ndjoka_energy.jpg';
import ndjoka_chin_chin from '../assets/images/ndjoka_chin_chin.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Products = () => {
  const navigate = useNavigate();

  const navigateToProducts = (category: string) => {
    navigate('/products', { state: { category } });
  };

  const plantainProducts = [
    {
      name: "Plantain Mûr",
      description: "Une douceur naturelle irrésistible",
      icon: <Banana className="w-6 h-6" />,
      color: "bg-yellow-400",
      image: ndjoka_mure
    },
    {
      name: "Plantain Non Mûr",
      description: "Le croquant traditionnel",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-400",
      image: ndjoka_non_mure
    },
    {
      name: "Plantain Épicé",
      description: "Une explosion de saveurs",
      icon: <Flame className="w-6 h-6" />,
      color: "bg-red-400",
      image: ndjoka_epice
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="products" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nos Produits
        </motion.h2>
        
        <motion.div 
          className="mb-32"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {plantainProducts.map((product, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="group relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                  <div className={`${product.color} p-4 rounded-full inline-block mb-4 shadow-lg`}>
                    {product.icon}
                  </div>
                  <h4 className="text-3xl font-bold mb-3">{product.name}</h4>
                  <p className="text-gray-200 text-lg">{product.description}</p>
                  <button 
                    onClick={() => navigateToProducts('plantain')}
                    className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full transition-colors"
                  >
                    En savoir plus
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img 
                src={ndjoka_energy}
                alt="Energy Drink" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-900/50 to-purple-900" />
            </div>
            <div className="relative z-10 p-16">
              <div className="max-w-xl">
                <div className="flex items-center mb-8">
                  <Sparkles className="w-10 h-10 text-yellow-400 mr-4" />
                  <Droplets className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-5xl font-bold mb-8 text-white">NDJOKA Energy</h3>
                <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                  Libérez votre énergie naturelle avec notre boisson énergisante unique
                </p>
                <button 
                  onClick={() => navigateToProducts('energy')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                >
                  Découvrir
                </button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-800 via-yellow-800 to-amber-800">
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img 
                src={ndjoka_chin_chin}
                alt="Chin-Chin" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-800/50 to-amber-800" />
            </div>
            <div className="relative z-10 p-16">
              <div className="max-w-xl">
                <div className="flex items-center mb-8">
                  <Cookie className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-5xl font-bold mb-8 text-white">NDJOKA Chin-Chin</h3>
                <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                  Savourez l'authenticité de nos chin-chin croustillants et délicieux
                </p>
                <button 
                  onClick={() => navigateToProducts('chinchin')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                >
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};