import React from 'react';
import { Header } from './Header';
import { ContactBar } from './ContactBar';
import { FileText, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const LgpdPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-3xl">

        {/* Badge + Title */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-[#1e97d1]/10 text-[#1e97d1] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Lei nº 13.709/2018 — LGPD
          </span>
          <h1 className="text-3xl font-bold text-[#193762] leading-tight">
            Informações sobre o Uso dos Seus Dados
          </h1>
        </div>

        {/* Intro card */}
        <div className="bg-[#eff8ff] border-l-4 border-[#1e97d1] rounded-lg p-5 mb-8 text-sm leading-relaxed text-slate-700">
          Informamos que seus dados pessoais foram cadastrados pela <strong>Centro de Cópias</strong> no sistema{' '}
          <strong>Orbys — Sistema de Gestão</strong>, plataforma utilizada para emissão de faturas, controle financeiro e comunicações
          administrativas relacionadas aos serviços contratados.
        </div>

        {/* Finalidade */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <h2 className="flex items-center gap-2 text-[#193762] font-bold text-lg mb-3">
            <FileText className="w-5 h-5 text-[#1e97d1]" />
            Finalidade dos Dados
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            Seus dados são armazenados no sistema <strong>Orbys — Sistema de Gestão</strong> e utilizados exclusivamente para a execução
            dos serviços contratados, em conformidade com a{' '}
            <strong>Lei nº 13.709/2018</strong> — Lei Geral de Proteção de Dados Pessoais (LGPD). Não compartilhamos
            suas informações com terceiros para fins comerciais ou publicitários.
          </p>
          <p className="text-xs text-slate-400 italic">
            Art. 6º, I e II da LGPD — princípios da finalidade e da adequação.
          </p>
        </section>

        {/* Tipos de dados */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <h2 className="flex items-center gap-2 text-[#193762] font-bold text-lg mb-4">
            <Users className="w-5 h-5 text-[#1e97d1]" />
            Tipos de Dados Coletados
          </h2>
          <ul className="divide-y divide-slate-100">
            {[
              'Nome completo ou Razão Social',
              'CPF ou CNPJ',
              'Endereço de e-mail',
              'Telefone de contato',
              'Endereço completo',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 py-2.5 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e97d1] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Contato */}
        <section className="bg-[#193762] text-white rounded-xl p-6 mb-4">
          <h2 className="font-bold text-lg mb-4">Dúvidas ou Solicitações?</h2>
          <p className="text-slate-300 text-sm mb-5">
            Para exercer seus direitos ou esclarecer qualquer dúvida sobre o tratamento dos seus dados, entre em contato:
          </p>
          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 hover:text-[#1e97d1] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#1e97d1]" />
              {CONTACT_INFO.email}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-3 hover:text-[#1e97d1] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1e97d1]" />
              {CONTACT_INFO.phone}
            </a>
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-[#1e97d1] mt-0.5 flex-shrink-0" />
              <span>Av. Nereu Ramos, 1558 — Centro — CEP 88750-000 — Braço do Norte, SC<br />CNPJ: 04.555.739/0001-10</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-4 h-4 text-[#1e97d1] flex-shrink-0" />
              {CONTACT_INFO.hours}
            </div>
          </div>
        </section>

        <p className="text-center text-xs text-slate-400 mt-6">
          Este documento atende às exigências da Lei nº 13.709/2018 (LGPD).
        </p>
      </main>

      <ContactBar />
    </div>
  );
};
