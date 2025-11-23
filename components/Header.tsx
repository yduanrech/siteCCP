import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full shadow-sm relative z-50">
      {/* Top Contact Bar - Desktop */}
      <div className="bg-[#193762] text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#1e97d1]" />
              {CONTACT_INFO.phone}
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#1e97d1]" />
              {CONTACT_INFO.whatsapp}
            </span>
          </div>
          <div>
            {CONTACT_INFO.hours}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <div className="flex flex-col leading-tight">
              <span className="text-[#193762] font-bold text-lg tracking-tight">Centro de Cópias e Plotagem</span>
              <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Gráfica Rápida</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-slate-600 font-medium">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-[#1e97d1] transition-colors">Início</a>
            <a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="hover:text-[#1e97d1] transition-colors">Serviços</a>
            <a href="#sobre" onClick={(e) => handleScrollTo(e, '#sobre')} className="hover:text-[#1e97d1] transition-colors">A Empresa</a>
            <a href="#contato" onClick={(e) => handleScrollTo(e, '#contato')} className="hover:text-[#1e97d1] transition-colors">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[#193762]">
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <nav className="flex flex-col p-4 space-y-4 text-center">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="text-slate-700 hover:text-[#1e97d1] py-2">Início</a>
            <a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="text-slate-700 hover:text-[#1e97d1] py-2">Serviços</a>
            <a href="#sobre" onClick={(e) => handleScrollTo(e, '#sobre')} className="text-slate-700 hover:text-[#1e97d1] py-2">A Empresa</a>
            <a href="#contato" onClick={(e) => handleScrollTo(e, '#contato')} className="text-slate-700 hover:text-[#1e97d1] py-2">Contato</a>
          </nav>
          <div className="bg-slate-50 p-4 text-center text-sm text-slate-600 border-t border-slate-100">
            <p className="mb-2">{CONTACT_INFO.hours}</p>
            <p className="font-semibold text-[#193762]">{CONTACT_INFO.phone}</p>
          </div>
        </div>
      )}
    </header>
  );
};