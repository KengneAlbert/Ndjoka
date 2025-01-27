import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const ContactBar = () => {
  return (
    <div className="hidden md:block bg-black/90 backdrop-blur-md text-white/90">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+123456789" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +237 670 906 975 / +237 657 992 052
            </a>
            <a href="mailto:contact@ndjoka.com" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              contact@ndjoka237.com
            </a>
          </div>
            <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/ndjokasarl" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/ndjokacameroun" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4" />
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};