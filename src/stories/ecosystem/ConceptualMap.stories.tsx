import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Ecosystem/Conceptual Map',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Mapa Conceitual Principal
export const MainConceptualMap: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-7xl ds-mx-auto">
        <h1 className="ds-text-5xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🗺️ Mapa Conceitual do Ecossistema Systentando
        </h1>

        {/* Central Hub */}
        <div className="ds-text-center ds-mb-12">
          <div className="ds-bg-gradient-to-r ds-from-green-600 ds-to-orange-500 ds-p-8 ds-rounded-2xl ds-inline-block">
            <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-2">
              🎯 Hub Central Systentando
            </h2>
            <p className="ds-text-xl ds-text-white ds-opacity-90">
              Conectando ideias, pessoas e oportunidades
            </p>
          </div>
        </div>

        {/* Fluxo Principal */}
        <div className="ds-grid ds-grid-cols-1 ds-lg:grid-cols-3 ds-gap-8 ds-mb-12">
          {/* Ideias */}
          <div className="ds-bg-blue-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-500 ds-text-center">
            <div className="ds-text-4xl ds-mb-4">💡</div>
            <h3 className="ds-text-2xl ds-font-bold ds-text-blue-300 ds-mb-4">Ideias de Negócio</h3>
            <div className="ds-space-y-3 ds-text-white">
              <div className="ds-bg-blue-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>SaaS B2B</strong><br/>
                Plataformas de gestão empresarial
              </div>
              <div className="ds-bg-blue-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Marketplaces</strong><br/>
                E-commerce especializado
              </div>
              <div className="ds-bg-blue-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>IA Aplicada</strong><br/>
                Soluções inteligentes
              </div>
              <div className="ds-bg-blue-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Fintechs</strong><br/>
                Serviços financeiros inovadores
              </div>
            </div>
          </div>

          {/* Processo */}
          <div className="ds-bg-purple-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-500 ds-text-center">
            <div className="ds-text-4xl ds-mb-4">⚙️</div>
            <h3 className="ds-text-2xl ds-font-bold ds-text-purple-300 ds-mb-4">Processo de Validação</h3>
            <div className="ds-space-y-3 ds-text-white">
              <div className="ds-bg-purple-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Análise de Mercado</strong><br/>
                IA analisa viabilidade
              </div>
              <div className="ds-bg-purple-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Validação de Ideia</strong><br/>
                Testes com usuários reais
              </div>
              <div className="ds-bg-purple-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Matching</strong><br/>
                Conexão com investidores
              </div>
              <div className="ds-bg-purple-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Mentoria</strong><br/>
                Acompanhamento especializado
              </div>
            </div>
          </div>

          {/* Resultado */}
          <div className="ds-bg-green-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-green-500 ds-text-center">
            <div className="ds-text-4xl ds-mb-4">🚀</div>
            <h3 className="ds-text-2xl ds-font-bold ds-text-green-300 ds-mb-4">Negócios Escaláveis</h3>
            <div className="ds-space-y-3 ds-text-white">
              <div className="ds-bg-green-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Startups</strong><br/>
                Empresas em crescimento
              </div>
              <div className="ds-bg-green-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Investimentos</strong><br/>
                Capital para expansão
              </div>
              <div className="ds-bg-green-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Impacto</strong><br/>
                Mudança social positiva
              </div>
              <div className="ds-bg-green-800 ds-p-3 ds-rounded ds-text-sm">
                <strong>Retorno</strong><br/>
                Benefícios para todos
              </div>
            </div>
          </div>
        </div>

        {/* Agentes e Stakeholders */}
        <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-4 ds-gap-6 ds-mb-12">
          {/* Empreendedores */}
          <div className="ds-bg-orange-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-orange-500">
            <div className="ds-text-3xl ds-mb-3 ds-text-center">👨‍💼</div>
            <h3 className="ds-text-xl ds-font-bold ds-text-orange-300 ds-mb-3 ds-text-center">Empreendedores</h3>
            <ul className="ds-space-y-2 ds-text-white ds-text-sm">
              <li>• Ideias inovadoras</li>
              <li>• Visão de mercado</li>
              <li>• Execução</li>
              <li>• Liderança</li>
            </ul>
          </div>

          {/* Investidores */}
          <div className="ds-bg-yellow-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-yellow-500">
            <div className="ds-text-3xl ds-mb-3 ds-text-center">💰</div>
            <h3 className="ds-text-xl ds-font-bold ds-text-yellow-300 ds-mb-3 ds-text-center">Investidores</h3>
            <ul className="ds-space-y-2 ds-text-white ds-text-sm">
              <li>• Capital disponível</li>
              <li>• Experiência</li>
              <li>• Network</li>
              <li>• Mentoria</li>
            </ul>
          </div>

          {/* Mentores */}
          <div className="ds-bg-red-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-red-500">
            <div className="ds-text-3xl ds-mb-3 ds-text-center">🎓</div>
            <h3 className="ds-text-xl ds-font-bold ds-text-red-300 ds-mb-3 ds-text-center">Mentores</h3>
            <ul className="ds-space-y-2 ds-text-white ds-text-sm">
              <li>• Conhecimento</li>
              <li>• Experiência</li>
              <li>• Orientação</li>
              <li>• Suporte</li>
            </ul>
          </div>

          {/* Comunidade */}
          <div className="ds-bg-teal-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-teal-500">
            <div className="ds-text-3xl ds-mb-3 ds-text-center">👥</div>
            <h3 className="ds-text-xl ds-font-bold ds-text-teal-300 ds-mb-3 ds-text-center">Comunidade</h3>
            <ul className="ds-space-y-2 ds-text-white ds-text-sm">
              <li>• Feedback</li>
              <li>• Testes</li>
              <li>• Divulgação</li>
              <li>• Suporte</li>
            </ul>
          </div>
        </div>

        {/* Fluxo de Engajamento */}
        <div className="ds-bg-gradient-to-r ds-from-indigo-600 ds-to-purple-600 ds-p-8 ds-rounded-xl ds-mb-8">
          <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            🔄 Fluxo de Engajamento e Conscientização
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-6">
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg">
              <h3 className="ds-text-lg ds-font-bold ds-text-indigo-200 ds-mb-2">1. Descoberta</h3>
              <p className="ds-text-white ds-text-sm">
                Pessoas descobrem o ecossistema através de conteúdo educativo, eventos e networking.
              </p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg">
              <h3 className="ds-text-lg ds-font-bold ds-text-indigo-200 ds-mb-2">2. Engajamento</h3>
              <p className="ds-text-white ds-text-sm">
                Participação ativa em programas, mentoria e desenvolvimento de habilidades.
              </p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg">
              <h3 className="ds-text-lg ds-font-bold ds-text-indigo-200 ds-mb-2">3. Transformação</h3>
              <p className="ds-text-white ds-text-sm">
                Alcanço de objetivos pessoais e contribuição para o crescimento do ecossistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Tecnologias e IA
export const TechnologiesAndAI: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🤖 Agentes de IA e Tecnologias
        </h1>

        {/* Agentes de IA */}
        <div className="ds-grid ds-grid-cols-1 ds-lg:grid-cols-2 ds-gap-8 ds-mb-12">
          <div className="ds-bg-gradient-to-br ds-from-blue-900 ds-to-cyan-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-500">
            <h2 className="ds-text-2xl ds-font-bold ds-text-blue-300 ds-mb-4">🧠 Agentes de IA</h2>
            <div className="ds-space-y-4">
              <div className="ds-bg-blue-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Analista de Mercado</h3>
                <p className="ds-text-blue-200 ds-text-sm">
                  Analisa tendências, oportunidades e viabilidade de negócios em tempo real.
                </p>
              </div>
              <div className="ds-bg-blue-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Validador de Ideias</h3>
                <p className="ds-text-blue-200 ds-text-sm">
                  Testa e valida ideias de negócio usando dados e feedback de usuários.
                </p>
              </div>
              <div className="ds-bg-blue-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Matching Engine</h3>
                <p className="ds-text-blue-200 ds-text-sm">
                  Conecta empreendedores com investidores e mentores ideais.
                </p>
              </div>
              <div className="ds-bg-blue-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Mentor Virtual</h3>
                <p className="ds-text-blue-200 ds-text-sm">
                  Fornece orientação personalizada e acompanhamento contínuo.
                </p>
              </div>
            </div>
          </div>

          <div className="ds-bg-gradient-to-br ds-from-purple-900 ds-to-pink-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-500">
            <h2 className="ds-text-2xl ds-font-bold ds-text-purple-300 ds-mb-4">⚡ Tecnologias Emergentes</h2>
            <div className="ds-space-y-4">
              <div className="ds-bg-purple-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Machine Learning</h3>
                <p className="ds-text-purple-200 ds-text-sm">
                  Algoritmos que aprendem e melhoram continuamente o matching e validação.
                </p>
              </div>
              <div className="ds-bg-purple-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Blockchain</h3>
                <p className="ds-text-purple-200 ds-text-sm">
                  Transparência, segurança e sistema de recompensas descentralizado.
                </p>
              </div>
              <div className="ds-bg-purple-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">IoT</h3>
                <p className="ds-text-purple-200 ds-text-sm">
                  Integração com dispositivos para coleta de dados e automação.
                </p>
              </div>
              <div className="ds-bg-purple-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">AR/VR</h3>
                <p className="ds-text-purple-200 ds-text-sm">
                  Experiências imersivas para apresentação de projetos e mentoria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fluxo de Dados */}
        <div className="ds-bg-gradient-to-r ds-from-green-600 ds-to-blue-600 ds-p-8 ds-rounded-xl">
          <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            📊 Fluxo de Dados e Inteligência
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-4 ds-gap-4">
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-2xl ds-mb-2">📥</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Coleta</h3>
              <p className="ds-text-sm ds-text-gray-200">Dados de usuários e mercado</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-2xl ds-mb-2">🔄</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Processamento</h3>
              <p className="ds-text-sm ds-text-gray-200">IA analisa e processa</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-2xl ds-mb-2">💡</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Insights</h3>
              <p className="ds-text-sm ds-text-gray-200">Geração de insights</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-2xl ds-mb-2">🎯</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Ação</h3>
              <p className="ds-text-sm ds-text-gray-200">Recomendações e matches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Roadmap Detalhado com Marcos
export const DetailedRoadmap: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🗓️ Roadmap Detalhado 2024-2026
        </h1>

        {/* Timeline */}
        <div className="ds-relative">
          {/* Linha do tempo */}
          <div className="ds-absolute ds-left-8 ds-top-0 ds-bottom-0 ds-w-1 ds-bg-gradient-to-b ds-from-green-500 ds-to-blue-500 ds-rounded"></div>

          {/* 2024 - Base */}
          <div className="ds-relative ds-mb-12 ds-pl-20">
            <div className="ds-absolute ds-left-6 ds-top-4 ds-w-4 ds-h-4 ds-bg-green-500 ds-rounded-full ds-border-2 ds-border-white"></div>
            <div className="ds-bg-gray-800 ds-p-6 ds-rounded-xl ds-border-l-4 ds-border-green-500">
              <div className="ds-flex ds-items-center ds-gap-4 ds-mb-4">
                <span className="ds-bg-green-500 ds-text-white ds-px-3 ds-py-1 ds-rounded ds-font-bold">2024</span>
                <h2 className="ds-text-2xl ds-font-bold ds-text-white">🏗️ Construção da Base</h2>
              </div>
              <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-6">
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-green-300 ds-mb-2">✅ Concluído</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• Design System unificado</li>
                    <li>• Arquitetura de microserviços</li>
                    <li>• Landing page principal</li>
                    <li>• Módulos básicos funcionando</li>
                    <li>• Documentação técnica</li>
                  </ul>
                </div>
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-yellow-300 ds-mb-2">🔄 Em Andamento</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• Integração entre plataformas</li>
                    <li>• Sistema de gamificação</li>
                    <li>• IA para personalização</li>
                    <li>• Testes de usabilidade</li>
                    <li>• Preparação para produção</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2025 - Desenvolvimento */}
          <div className="ds-relative ds-mb-12 ds-pl-20">
            <div className="ds-absolute ds-left-6 ds-top-4 ds-w-4 ds-h-4 ds-bg-blue-500 ds-rounded-full ds-border-2 ds-border-white"></div>
            <div className="ds-bg-gray-800 ds-p-6 ds-rounded-xl ds-border-l-4 ds-border-blue-500">
              <div className="ds-flex ds-items-center ds-gap-4 ds-mb-4">
                <span className="ds-bg-blue-500 ds-text-white ds-px-3 ds-py-1 ds-rounded ds-font-bold">2025</span>
                <h2 className="ds-text-2xl ds-font-bold ds-text-white">🚀 Desenvolvimento e Testes</h2>
              </div>
              <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-6">
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-blue-300 ds-mb-2">🎯 Objetivos</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• Alcançar resultados esperados</li>
                    <li>• Refinamento dos MVPs</li>
                    <li>• Testes com usuários reais</li>
                    <li>• Preparação para produção</li>
                  </ul>
                </div>
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-blue-300 ds-mb-2">📊 Métricas</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• 10K+ usuários ativos</li>
                    <li>• 100+ projetos validados</li>
                    <li>• 50+ mentores cadastrados</li>
                    <li>• 90%+ satisfação</li>
                  </ul>
                </div>
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-blue-300 ds-mb-2">🔧 Desenvolvimento</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• IA avançada</li>
                    <li>• Blockchain research</li>
                    <li>• Mobile apps</li>
                    <li>• Parcerias iniciais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Q1 2026 - Produção */}
          <div className="ds-relative ds-mb-12 ds-pl-20">
            <div className="ds-absolute ds-left-6 ds-top-4 ds-w-4 ds-h-4 ds-bg-purple-500 ds-rounded-full ds-border-2 ds-border-white"></div>
            <div className="ds-bg-gray-800 ds-p-6 ds-rounded-xl ds-border-l-4 ds-border-purple-500">
              <div className="ds-flex ds-items-center ds-gap-4 ds-mb-4">
                <span className="ds-bg-purple-500 ds-text-white ds-px-3 ds-py-1 ds-rounded ds-font-bold">Q1 2026</span>
                <h2 className="ds-text-2xl ds-font-bold ds-text-white">🌟 Lançamento em Produção</h2>
              </div>
              <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-6">
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-purple-300 ds-mb-2">🚀 Produção</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• Plataforma estável</li>
                    <li>• Monitoramento 24/7</li>
                    <li>• Suporte técnico</li>
                    <li>• Backup e segurança</li>
                  </ul>
                </div>
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-purple-300 ds-mb-2">🤝 Parcerias</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• VCs e investidores</li>
                    <li>• Universidades</li>
                    <li>• Corporates</li>
                    <li>• Governo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="ds-text-lg ds-font-bold ds-text-purple-300 ds-mb-2">💰 Investimentos</h3>
                  <ul className="ds-space-y-1 ds-text-gray-300">
                    <li>• MVPs financiados</li>
                    <li>• Testes de modelos</li>
                    <li>• Recursos disponibilizados</li>
                    <li>• Experiências diferenciadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marcos Importantes */}
        <div className="ds-bg-gradient-to-r ds-from-yellow-600 ds-to-orange-600 ds-p-8 ds-rounded-xl">
          <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            🏆 Marcos Importantes
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-4 ds-gap-6">
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">💎</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">Moeda Digital</h3>
              <p className="ds-text-sm ds-text-white">
                Sistema de recompensas baseado em blockchain (Ethereum/Polkadot)
              </p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">🤖</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">IA Avançada</h3>
              <p className="ds-text-sm ds-text-white">
                Agentes inteligentes para matching e mentoria
              </p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">🌍</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">Escala Global</h3>
              <p className="ds-text-sm ds-text-white">
                Expansão internacional e parcerias estratégicas
              </p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">📱</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">Mobile First</h3>
              <p className="ds-text-sm ds-text-white">
                Aplicativos nativos e PWA avançada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
