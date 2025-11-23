import React from 'react';
import { Header } from './components/Header';
import { ContactBar } from './components/ContactBar';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { SERVICES, STATS } from './constants';
import { MessageCircle, ChevronRight, Trophy, Users, Smile } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-white overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="inline-block bg-[#1e97d1]/10 text-[#1e97d1] px-4 py-1 rounded-full text-sm font-bold mb-2">
                  Desde 1999 em Braço do Norte
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-[#193762] leading-tight">
                  Serviços gráficos completos para você e sua empresa
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Soluções de impressão, cópia e acabamento com a qualidade que você confia e a agilidade que você precisa. Do simples ao técnico, estamos prontos para atender.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button 
                    variant="secondary"
                    icon={<MessageCircle className="w-5 h-5" />}
                    onClick={() => window.open('https://wa.me/5548996595121', '_blank')}
                  >
                    Pedir Orçamento no WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Todos os Serviços
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
                <div className="absolute -inset-4 bg-[#1e97d1]/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-slate-200 rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img 
                    /*src="https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=2070" */
                    src="images/imagem-inicio.jpg"
                    alt="Atendimento no Centro de Cópias" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="bg-[#1e97d1] py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STATS.map((stat, index) => {
                const icons = [<Trophy key="1"/>, <Users key="2"/>, <Smile key="3"/>];
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center gap-4 border border-white/20 shadow-sm">
                    <div className="text-white opacity-90 w-10 h-10 flex items-center justify-center">
                       {React.cloneElement(icons[index] as React.ReactElement, { className: "w-8 h-8" })}
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-white">{stat.value}</span>
                      <span className="text-blue-50 font-medium">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="servicos" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#193762] mb-4">Tudo o que você precisa em um só lugar</h2>
              <p className="text-slate-600 text-lg">
                Nossa estrutura conta com equipamentos modernos para garantir fidelidade de cores, precisão e prazos rápidos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Não encontrou o que procurava?</p>
              <Button 
                variant="primary" 
                className="group"
                onClick={() => window.open('https://wa.me/5548996595121', '_blank')}
              >
                Fale com um atendente
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* "About" / Why Choose Us Section - Simple Block */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[#193762]/5 rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-[#193762]">
                  Tradição e Qualidade em Braço do Norte
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Há mais de duas décadas, o Centro de Cópias é referência na região. Começamos pequenos e crescemos junto com nossos clientes, mantendo sempre o compromisso com o atendimento humanizado.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Aqui você não é apenas um número de pedido. Entendemos a urgência daquele projeto da faculdade, a importância da planta para a obra e a necessidade daquele carimbo para sua empresa funcionar.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                    <h4 className="font-bold text-[#1e97d1] text-lg mb-2">Agilidade</h4>
                    <p className="text-sm text-slate-600">Entregas rápidas para não atrasar sua rotina.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                    <h4 className="font-bold text-[#1e97d1] text-lg mb-2">Custo-benefício</h4>
                    <p className="text-sm text-slate-600">Preços justos com alta qualidade de material.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                    <h4 className="font-bold text-[#1e97d1] text-lg mb-2">Tecnologia</h4>
                    <p className="text-sm text-slate-600">Impressoras de última geração.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
                    <h4 className="font-bold text-[#1e97d1] text-lg mb-2">Localização</h4>
                    <p className="text-sm text-slate-600">Fácil acesso no centro da cidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactBar />
    </div>
  );
};

export default App;