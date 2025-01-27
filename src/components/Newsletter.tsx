import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ndjoka_pub2 from '../assets/images/ndjoka_pub2.jpg';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ndjoka_pub2}
          alt="Newsletter background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Restez informé</h2>
          <p className="text-white/90 text-lg mb-8">
            Recevez nos actualités, offres spéciales et conseils exclusifs
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-full bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-lg"
            >
              <span>S'abonner</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};