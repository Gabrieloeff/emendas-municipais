import React, { useState } from 'react';
import { CheckCircle, Package, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import BrazilMap from './components/BrazilMap';
import StateModal from './components/StateModal';
import './App.css';
import { Toaster, toast } from 'react-hot-toast';
import topMunicipalities from './data/topMunicipalities.json';
import ContactForm from './components/ContactForm';

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [municipalities, setMunicipalities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    const munis = topMunicipalities[stateName] || [];
    setMunicipalities(munis);
    setShowModal(true);
  };

  const handleMunicipalityClick = (municipalityName) => {
    toast(`${municipalityName} ainda não contratou o serviço para fazer a gestão das emendas municipais.`, {
      icon: 'ℹ️',
      style: {
        borderRadius: '8px',
        background: '#f9fafb',
        color: '#1f2937',
        fontSize: '14px',
        padding: '12px 16px'
      }
    });
  };

  const features = [
    { icon: CheckCircle, title: 'Transparência Total', description: 'Acompanhe todo o ciclo das emendas parlamentares, desde a indicação até a prestação de contas.' },
    { icon: Package, title: 'Rastreabilidade', description: 'Monitore em tempo real o status de cada emenda, garantindo o uso adequado dos recursos públicos.' },
    { icon: Calendar, title: 'Gestão Eficiente', description: 'Ferramentas modernas para otimizar o acompanhamento e controle das emendas municipais.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Header />

      <main>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-extrabold mb-6">
              Portal de <span style={{ color: '#3dae2b' }}>Emendas Municipais</span>
            </h2>
            <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
              Acompanhe as emendas parlamentares do seu município, desde a indicação no orçamento até a execução e prestação de contas.
            </p>
            <div className="mt-12 pt-12 opacity-70">
              <BrazilMap onStateClick={handleStateClick} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-16">
              Transforme a gestão das emendas municipais
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <section id="contato" className="py-20 px-4 bg-[#3dae2b]/30 text-black">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-1 bg-white/60 text-black rounded-full text-sm uppercase tracking-widest">
              Entre em Contato
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Pronto para transformar a gestão de emendas municipais?
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Fale conosco e descubra como o Portal de Emendas pode revolucionar a transparência em sua administração.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#3dae2b]/10 flex items-center justify-center">
                <Mail className="text-[#3dae2b]" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">contato@portaldeemendas.com.br</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#3dae2b]/10 flex items-center justify-center">
                <Phone className="text-[#3dae2b]" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Telefone</h3>
                <p className="text-gray-600">(48) 98801-9834</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#3dae2b]/10 flex items-center justify-center">
                <MapPin className="text-[#3dae2b]" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Endereço</h3>
                <p className="text-gray-600">Florianópolis, SC - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <a href="#" className="text-sm text-gray-800 hover:text-black transition-colors">
              Desenvolvido por Solon - Portal de Emendas
            </a>
          </div>
        </div>
      </footer>

      {showModal && (
        <StateModal
          stateName={selectedState}
          municipalities={municipalities}
          onClose={() => setShowModal(false)}
          onMunicipalityClick={handleMunicipalityClick}
        />
      )}
    </div>
  );
}

export default App;
