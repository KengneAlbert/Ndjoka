import React from 'react';
import ndjoka_pub1 from "../../assets/images/ndjoka_pub1.jpg";

export const ProductHero = () => {
  return (
    <div className="relative h-[50vh] bg-black">
      <div className="absolute inset-0">
        <img 
          src={ndjoka_pub1}
          alt="Products hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Nos Produits
            </h1>
            <p className="text-xl text-yellow-100">
              Découvrez notre gamme de produit premium, 
              élaborés avec passion et savoir-faire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};