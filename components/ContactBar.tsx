import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const ContactBar: React.FC = () => {
  return (
    <section id="contato" className="bg-[#193762] text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Contact Info */}
          <div className="flex-1 w-full md:w-auto">
            <h2 className="text-2xl font-bold mb-6 border-b border-[#1e97d1] pb-2 inline-block">Fale Conosco</h2>
            <div className="space-y-4">
              <a href={`https://wa.me/5548996595121`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#1e97d1] transition-colors">
                <div className="bg-white/10 p-2 rounded-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">WhatsApp</p>
                  <p className="font-semibold text-lg">{CONTACT_INFO.whatsapp}</p>
                </div>
              </a>

              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 hover:text-[#1e97d1] transition-colors">
                <div className="bg-white/10 p-2 rounded-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Telefone Fixo</p>
                  <p className="font-semibold text-lg">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-[#1e97d1] transition-colors">
                <div className="bg-white/10 p-2 rounded-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">E-mail</p>
                  <p className="font-semibold text-lg">{CONTACT_INFO.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="flex-1 w-full md:w-auto">
             <h2 className="text-2xl font-bold mb-6 border-b border-[#1e97d1] pb-2 inline-block">Onde Estamos</h2>
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-md mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Endereço</p>
                    <p className="font-medium leading-relaxed max-w-xs">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-md mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Horário de Atendimento</p>
                    <p className="font-medium leading-relaxed max-w-xs">
                      {CONTACT_INFO.hours}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Fechado aos Domingos</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
        
        <div className="text-center text-slate-400 text-sm mt-12 pt-8 border-t border-white/10">
          &copy; {new Date().getFullYear()} Centro de Cópias. Todos os direitos reservados. Braço do Norte - SC.
        </div>
      </div>
    </section>
  );
};