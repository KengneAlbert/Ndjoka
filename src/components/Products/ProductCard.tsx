import React from 'react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 flex gap-2">
          {product.certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 rounded-full font-medium"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-yellow-600 font-medium mb-4">{product.tagline}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature, idx) => (
            <span 
              key={idx}
              className="bg-yellow-50 text-yellow-800 text-sm px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            À partir de {product.sizes[0].price}
          </div>
          <button 
            onClick={() => onSelect(product)}
            className="bg-black text-white px-6 py-2 rounded-full font-medium 
                     hover:bg-yellow-400 hover:text-black transition-all transform 
                     hover:scale-105 active:scale-95"
          >
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
};