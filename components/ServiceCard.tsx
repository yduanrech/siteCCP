import React from 'react';
import { ServiceItem, CONTACT_INFO } from '../constants';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleWhatsAppClick = () => {
    // Extract numbers from phone string for the API
    const phoneNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`);
    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full">
      <div className="bg-[#1e97d1]/10 p-3 rounded-full mb-4 text-[#193762]">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-[#193762] mb-2">{service.title}</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
        {service.description}
      </p>
      <button 
        onClick={handleWhatsAppClick}
        className="text-[#1e97d1] font-semibold text-sm hover:underline mt-auto flex items-center group cursor-pointer"
      >
        Saiba mais
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};