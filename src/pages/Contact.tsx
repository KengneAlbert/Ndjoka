import React from 'react';
import { Navbar } from '../components/Navigation/Navbar';
import { ContactBar } from '../components/Navigation/ContactBar';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/Contact/ContactHero';
import { QuickContactCards } from '../components/Contact/QuickContactCards';
import { ContactForm } from '../components/Contact/ContactForm';
import { ContactInfo } from '../components/Contact/ContactInfo';
import { ContactMap } from '../components/Contact/ContactMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactBar />
      <ContactHero />

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <QuickContactCards />
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>

        <ContactMap />
      </div>

      <Footer />
    </div>
  );
}