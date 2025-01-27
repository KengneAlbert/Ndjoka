import React from 'react';
import { ShieldCheck, Leaf } from 'lucide-react';
import { Product } from '../../types/product';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                <p className="text-yellow-600 font-medium">{product.tagline}</p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Images Section */}
              <div>
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {product.images.slice(1).map((image, idx) => (
                    <img 
                      key={idx}
                      src={image} 
                      alt={`${product.name} ${idx + 2}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div>
                <p className="text-gray-600 mb-6">{product.longDescription}</p>
                
                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Certifications</h4>
                  <div className="flex gap-2">
                    {product.certifications.map((cert, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Ingrédients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        <Leaf className="w-4 h-4 text-green-600" />
                        {ingredient}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutritional Info */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Valeurs Nutritionnelles</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                        <div className="font-bold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sizes and Prices */}
                <div>
                  <h4 className="font-bold mb-3">Formats disponibles</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((size) => (
                      <div 
                        key={size.size}
                        className="bg-yellow-50 p-4 rounded-xl text-center hover:bg-yellow-100 transition-colors cursor-pointer"
                      >
                        <div className="font-bold text-lg">{size.size}</div>
                        <div className="text-yellow-700">{size.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};