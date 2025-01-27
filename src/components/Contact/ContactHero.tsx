import React from 'react';

export const ContactHero = () => {
  return (
    <div className="relative h-[50vh] bg-black">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
          alt="Contact hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-yellow-100">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};