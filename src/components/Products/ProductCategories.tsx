import React from 'react';
import { Banana, Cookie, Sparkles, Star } from 'lucide-react';

export const categories = [
  {
    id: 'all',
    name: 'Tous les produits',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 'plantain',
    name: 'Chips de Plantain',
    icon: <Banana className="w-5 h-5" />
  },
  {
    id: 'chinchin',
    name: 'Chin-Chin',
    icon: <Cookie className="w-5 h-5" />
  },
  {
    id: 'energy',
    name: 'NDJOKA Drink',
    icon: <Sparkles className="w-5 h-5" />
  }
];

interface ProductCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-30">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-all
                ${activeCategory === category.id 
                  ? 'bg-yellow-400 text-black font-bold shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {React.cloneElement(category.icon, { 
                className: `w-5 h-5 ${activeCategory === category.id ? 'mr-2' : 'mr-2 text-gray-500'}` 
              })}
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};