import React from "react";
import { useTranslation } from 'react-i18next';
import { Navbar } from "../components/Navigation/Navbar";
import { ContactBar } from "../components/Navigation/ContactBar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Products } from "../components/Products";
import { Process } from "../components/Process";
import { Stats } from "../components/Stats";
import { DistributionPoints } from "../components/DistributionPoints";
import { Testimonials } from "../components/Testimonials";
import { Partners } from "../components/Partners";
import { Newsletter } from "../components/Newsletter";
import { FAQ } from "../components/FAQ";
import { Impact } from "../components/Impact";
import { Footer } from "../components/Footer";
import { Layout } from '../components/Layout';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout 
      titleKey="seo.home.title"
      descriptionKey="seo.home.description"
      image="/og-image.jpg"
    >
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ContactBar />
        <Hero />
        <Features />
        <Products />
        <Process />
        <Stats />
        <DistributionPoints />
        <Testimonials />
        <Partners />
        <Newsletter />
        <FAQ />
        <Impact />
        <Footer />
      </div>
    </Layout>
  );
}
