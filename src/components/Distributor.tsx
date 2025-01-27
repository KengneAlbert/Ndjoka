import React, { useState } from 'react';
import { MessageSquare, Medal, Store, Users, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const Distributor = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    businessName: '',
    businessType: '',
    experience: '',
    motivation: ''
  });

  const benefits = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Support Marketing Personnalisé",
      description: "Stratégies et matériels marketing adaptés à votre marché"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Formation Gratuite",
      description: "Formation exclusive en techniques de vente"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Groupe ELITE",
      description: "Accès au groupe privé des vendeurs d'ELITE"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Promotion Gratuite",
      description: "Communication gratuite sur votre point de vente"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormStep(4);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center gap-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step === formStep ? 'bg-yellow-400 text-black' : 
              step < formStep ? 'bg-green-500 text-white' : 
              'bg-gray-700 text-gray-400'
            }`}>
              {step < formStep ? '✓' : step}
            </div>
            {step < 3 && (
              <div className={`w-16 h-1 mx-2 ${
                step < formStep ? 'bg-green-500' : 'bg-gray-700'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-8">Devenez Distributeur NDJOKA</h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez notre réseau d'élite et développez votre business
          </p>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg">
            Investissement Initial: 65.000 FCFA
          </div>
        </div>

        {formStep === 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {React.cloneElement(benefit.icon, { className: "text-gray-900" })}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-xl">
          {renderStepIndicator()}
          
          {formStep === 1 && (
            <>
              <h3 className="text-2xl font-bold mb-6 text-center">Informations Personnelles</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="+XXX XXXXXXXX"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    Suivant <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          )}

          {formStep === 2 && (
            <>
              <h3 className="text-2xl font-bold mb-6 text-center">Localisation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Ville</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Votre ville"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Pays</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    >
                      <option value="">Sélectionnez un pays</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="SN">Sénégal</option>
                      <option value="ML">Mali</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="CM">Cameroun</option>
                      <option value="GA">Gabon</option>
                      <option value="CG">Congo</option>
                      <option value="CD">RDC</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Retour
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    Suivant <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          )}

          {formStep === 3 && (
            <>
              <h3 className="text-2xl font-bold mb-6 text-center">Expérience Professionnelle</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nom de l'entreprise (si applicable)
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Type d'activité
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  >
                    <option value="">Sélectionnez votre type d'activité</option>
                    <option value="retail">Commerce de détail</option>
                    <option value="wholesale">Commerce de gros</option>
                    <option value="supermarket">Supermarché</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Expérience en distribution
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  >
                    <option value="">Sélectionnez votre expérience</option>
                    <option value="0-2">0-2 ans</option>
                    <option value="3-5">3-5 ans</option>
                    <option value="5+">Plus de 5 ans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Motivation
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    placeholder="Pourquoi souhaitez-vous devenir distributeur NDJOKA ?"
                  ></textarea>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Retour
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                  </button>
                </div>
              </form>
            </>
          )}

          {formStep === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Candidature Envoyée !</h3>
              <p className="text-gray-400 mb-8">
                Merci pour votre intérêt. Notre équipe examinera votre candidature et vous contactera dans les plus brefs délais.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};