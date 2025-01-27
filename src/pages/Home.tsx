import React from "react";
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

export default function HomePage() {
  return (
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
  );
}
