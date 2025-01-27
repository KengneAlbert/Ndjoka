import React from 'react';

export const ContactMap = () => {
  return (
    <div id="map" className="bg-white rounded-2xl shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold mb-8">Nous Trouver</h2>
      <div className="aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15922.04778724136!2d11.533145696889645!3d3.8963198973917584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a2d002aef%3A0xb89282e0ec45fc62!2sNgousso%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2s!4v1693842144472!5m2!1sfr!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};