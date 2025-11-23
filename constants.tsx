import React from 'react';
import { 
  Printer, 
  Map, 
  Stamp, 
  IdCard, 
  Ticket, 
  Layers, 
  Book, 
  Scan, 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Statistic {
  value: string;
  label: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'plotagem',
    title: 'Plotagem de Engenharia',
    description: 'Impressão de projetos, plantas e mapas com precisão técnica e alta definição.',
    icon: <Map className="w-8 h-8" />
  },
  {
    id: 'impressoes',
    title: 'Impressões A4 e A3',
    description: 'Impressões coloridas e preto e branco para documentos, trabalhos e apresentações.',
    icon: <Printer className="w-8 h-8" />
  },
  {
    id: 'carimbos',
    title: 'Carimbos Personalizados',
    description: 'Produção rápida de carimbos automáticos, em aço, bronze e madeira para empresas e profissionais.',
    icon: <Stamp className="w-8 h-8" />
  },
  {
    id: 'crachas',
    title: 'Crachás e Identificação',
    description: 'Crachás em PVC durável com cordões para sua equipe.',
    icon: <IdCard className="w-8 h-8" />
  },
  {
    id: 'pulseiras',
    title: 'Pulseiras de Eventos',
    description: 'Pulseiras de segurança e identificação para festas e eventos corporativos.',
    icon: <Ticket className="w-8 h-8" />
  },
  {
    id: 'plastificacao',
    title: 'Plastificação',
    description: 'Proteção de documentos importantes contra umidade e desgaste do tempo.',
    icon: <Layers className="w-8 h-8" />
  },
  {
    id: 'encadernacao',
    title: 'Encadernação',
    description: 'Acabamento profissional espiral para apostilas, TCCs e livros.',
    icon: <Book className="w-8 h-8" />
  },
  {
    id: 'digitalizacao',
    title: 'Digitalização até A0',
    description: 'Digitalização de grandes formatos para arquivamento digital seguro.',
    icon: <Scan className="w-8 h-8" />
  }
];

export const STATS: Statistic[] = [
  { value: '20+', label: 'Anos de História' },
  { value: '300+', label: 'Clientes Mensais' },
  { value: '98%', label: 'Satisfação' },
];

export const CONTACT_INFO = {
  phone: '(48) 3658-4053',
  whatsapp: '(48) 99989-7021',
  email: 'ccp@centrodecopias.com.br',
  address: 'Av. Nereu Ramos, 1558 - Centro, Braço do Norte - SC',
  hours: 'Seg a Sex: 08h às 12h / 13h30 às 18h | Sáb: 08h às 12h'
};

export const COLORS = {
  primary: '#1e97d1', // Azul claro
  secondary: '#193762', // Azul escuro
};