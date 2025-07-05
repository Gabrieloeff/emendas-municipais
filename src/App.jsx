import React from 'react'
import { CheckCircle, Package, Calendar } from 'lucide-react'
import Header from './components/Header'
import BrazilMap from './components/BrazilMap'
import FeatureCard from './components/FeatureCard'
import './App.css'

function App() {
  const features = [
    {
      icon: CheckCircle,
      title: "Transparência Total",
      description: "Acompanhe todo o ciclo das emendas parlamentares, desde a indicação até a prestação de contas."
    },
    {
      icon: Package,
      title: "Rastreabilidade",
      description: "Monitore em tempo real o status de cada emenda, garantindo o uso adequado dos recursos públicos."
    },
    {
      icon: Calendar,
      title: "Gestão Eficiente",
      description: "Ferramentas modernas para otimizar o acompanhamento e controle das emendas municipais."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bem-vindo ao Portal de Emendas Municipais
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Acompanhe as emendas parlamentares do seu município, desde a indicação no orçamento até a execução e prestação de contas.
            </p>
            <p className="text-lg text-gray-500 mb-12">
              Clique no seu estado no mapa para ver os municípios
            </p>
            
            <BrazilMap />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
              Transforme a Gestão de Emendas Parlamentares
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Made with Manus Create my website
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

