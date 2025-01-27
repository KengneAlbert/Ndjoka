import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus({
      isSubmitting: false,
      isSubmitted: true,
      error: null
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (formStatus.isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h4 className="text-xl font-bold mb-2">Message envoyé !</h4>
        <p className="text-gray-600">
          Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sujet
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="information">Demande d'information</option>
            <option value="commercial">Contact commercial</option>
            <option value="reclamation">Réclamation</option>
            <option value="presse">Contact presse</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            placeholder="Votre message..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formStatus.isSubmitting}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
            ${formStatus.isSubmitting 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-yellow-400 hover:bg-yellow-500'}`}
        >
          {formStatus.isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Envoyer le message
            </>
          )}
        </button>

        {formStatus.error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
            <AlertCircle className="w-5 h-5" />
            Une erreur est survenue. Veuillez réessayer.
          </div>
        )}
      </form>
    </div>
  );
};