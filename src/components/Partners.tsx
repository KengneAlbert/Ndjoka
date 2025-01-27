import React from "react";
import { Building2 } from "lucide-react";
import logosm from "../assets/images/partners/logosm.png";
import academylogo from "../assets/images/partners/academylogo.jpg";
import cnic_logo from "../assets/images/partners/cnic_logo.jpg";
import akak_hub from "../assets/images/partners/akak_hub.jpg";

export const Partners = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: logosm,
    },
    {
      name: "Partner 2",
      logo: academylogo,
    },
    {
      name: "Partner 3",
      logo: cnic_logo,
    },
    {
      name: "Partner 4",
      logo: akak_hub,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Partenaires</h2>
          <p className="text-gray-600">
            Ils nous font confiance et grandissent avec nous
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-8">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-[120px] h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
