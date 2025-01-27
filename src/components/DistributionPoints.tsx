import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Building2, Users, Package } from 'lucide-react';

export const DistributionPoints = () => {
  const navigate = useNavigate();
  const regions = [
    {
      name: "Afrique de l'Ouest",
      countries: ["Côte d'Ivoire", "Sénégal", "Mali", "Burkina Faso"],
      centers: 12,
      distributors: 45,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
    },
    {
      name: "Afrique Centrale",
      countries: ["Cameroun", "Gabon", "Congo", "RDC"],
      centers: 8,
      distributors: 32,
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80"
    },
    {
      name: "Europe",
      countries: ["France", "Belgique", "Allemagne", "Royaume-Uni"],
      centers: 10,
      distributors: 38,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80"
    },
    {
      name: "Amérique du Nord",
      countries: ["Canada"],
      centers: 4,
      distributors: 15,
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80"
    }
  ];

  const handleNavigateToDistributor = () => {
    navigate('/distributors');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Points de Distribution</h2>
          <p className="text-xl text-gray-600">Un réseau international en pleine expansion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={region.image} 
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{region.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Pays desservis:</span>
                </div>
                <ul className="mb-6 pl-7">
                  {region.countries.map((country, idx) => (
                    <li key={idx} className="text-gray-600 mb-1">• {country}</li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <Building2 className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                    <div className="font-bold text-xl">{region.centers}</div>
                    <div className="text-sm text-gray-600">Centres</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                    <div className="font-bold text-xl">{region.distributors}</div>
                    <div className="text-sm text-gray-600">Distributeurs</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-yellow-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Package className="w-12 h-12 text-yellow-500" />
            <div>
              <h4 className="text-xl font-bold">Devenez Distributeur</h4>
              <p className="text-gray-600">Rejoignez notre réseau en pleine croissance</p>
            </div>
          </div>
          <button 
            onClick={handleNavigateToDistributor}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Postuler maintenant
          </button>
        </div>
      </div>
    </section>
  );
};