import React from 'react';
import { Clock, Building, MessageSquare } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Siège Social</h3>
            <p className="text-gray-600">Ngousso, Yaoundé, Cameroon</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Horaires</h3>
            <p className="text-gray-600">
              Lun - Ven: 8h00 - 18h00<br />
              Sam: 9h00 - 13h00
            </p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold text-xl mb-4">Support Distributeur</h3>
          <div className="flex items-center gap-2 text-yellow-600">
            <MessageSquare className="w-5 h-5" />
            +237 670 906 975
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-6">Questions Fréquentes</h3>
        <div className="space-y-4">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="font-medium">Comment devenir distributeur ?</span>
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-3">
              Visitez notre page "Devenir Distributeur" pour découvrir les conditions et postuler.
            </p>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="font-medium">Où trouver vos produits ?</span>
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-3">
              Consultez notre carte des points de vente pour trouver le distributeur le plus proche.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};