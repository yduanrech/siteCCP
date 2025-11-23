import React from 'react';
import LogoSvg from '../images/Logo-Letra-Preta-Sem-Fundo.svg';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <img src={LogoSvg} alt="Centro de Cópias e Plotagem" className={className} />
  );
};