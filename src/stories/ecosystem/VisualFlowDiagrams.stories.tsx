import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Ecosystem/Visual Flow Diagrams',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Fluxo Principal do Ecossistema
export const MainEcosystemFlow: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-7xl ds-mx-auto">
        <h1 className="ds-text-5xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🌊 Fluxo Principal do Ecossistema
        </h1>

        {/* Fluxo Principal */}
        <div className="ds-relative ds-mb-16">
          {/* Linha conectora */}
          <div className="ds-absolute ds-top-1/2 ds-left-0 ds-right-0 ds-h-1 ds-bg-gradient-to-r ds-from-blue-500 ds-via-purple-500 ds-to-green-500 ds-rounded-full ds-transform ds--translate-y-1/2 ds-z-0"></div>
          
          {/* Cards do fluxo */}
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-8 ds-relative ds-z-10">
            {/* Ideias */}
            <div className="ds-bg-gradient-to-br ds-from-blue-900 ds-to-blue-700 ds-p-8 ds-rounded-2xl ds-border-2 ds-border-blue-400 ds-shadow-2xl ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-20 ds-h-20 ds-bg-blue-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-3xl">💡</span>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-3">Ideias de Negócio</h3>
                <p className="ds-text-blue-200 ds-mb-4">Conceitos inovadores e escaláveis</p>
                <div className="ds-bg-blue-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-sm ds-text-white ds-space-y-1">
                    <li>• SaaS B2B</li>
                    <li>• Marketplaces</li>
                    <li>• IA Aplicada</li>
                    <li>• Fintechs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Processo */}
            <div className="ds-bg-gradient-to-br ds-from-purple-900 ds-to-purple-700 ds-p-8 ds-rounded-2xl ds-border-2 ds-border-purple-400 ds-shadow-2xl ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-20 ds-h-20 ds-bg-purple-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-3xl">⚙️</span>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-3">Processo de Validação</h3>
                <p className="ds-text-purple-200 ds-mb-4">IA analisa e valida ideias</p>
                <div className="ds-bg-purple-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-sm ds-text-white ds-space-y-1">
                    <li>• Análise de Mercado</li>
                    <li>• Validação de Ideia</li>
                    <li>• Matching</li>
                    <li>• Mentoria</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="ds-bg-gradient-to-br ds-from-green-900 ds-to-green-700 ds-p-8 ds-rounded-2xl ds-border-2 ds-border-green-400 ds-shadow-2xl ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-20 ds-h-20 ds-bg-green-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-3xl">🚀</span>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-3">Negócios Escaláveis</h3>
                <p className="ds-text-green-200 ds-mb-4">Empresas em crescimento</p>
                <div className="ds-bg-green-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-sm ds-text-white ds-space-y-1">
                    <li>• Startups</li>
                    <li>• Investimentos</li>
                    <li>• Impacto</li>
                    <li>• Retorno</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholders */}
        <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-4 ds-gap-6 ds-mb-12">
          {/* Empreendedores */}
          <div className="ds-bg-gradient-to-br ds-from-orange-900 ds-to-orange-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-orange-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-orange-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">👨‍💼</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Empreendedores</h3>
              <p className="ds-text-orange-200 ds-text-sm">Ideias inovadoras e execução</p>
            </div>
          </div>

          {/* Investidores */}
          <div className="ds-bg-gradient-to-br ds-from-yellow-900 ds-to-yellow-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-yellow-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-yellow-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">💰</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Investidores</h3>
              <p className="ds-text-yellow-200 ds-text-sm">Capital e experiência</p>
            </div>
          </div>

          {/* Mentores */}
          <div className="ds-bg-gradient-to-br ds-from-red-900 ds-to-red-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-red-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-red-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">🎓</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Mentores</h3>
              <p className="ds-text-red-200 ds-text-sm">Conhecimento e orientação</p>
            </div>
          </div>

          {/* Comunidade */}
          <div className="ds-bg-gradient-to-br ds-from-teal-900 ds-to-teal-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-teal-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-teal-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">👥</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Comunidade</h3>
              <p className="ds-text-teal-200 ds-text-sm">Feedback e suporte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Diagrama de Engajamento
export const EngagementFlow: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🔄 Fluxo de Engajamento e Conscientização
        </h1>

        {/* Fluxo de Engajamento */}
        <div className="ds-relative ds-mb-12">
          {/* Linha conectora horizontal */}
          <div className="ds-absolute ds-top-1/2 ds-left-0 ds-right-0 ds-h-1 ds-bg-gradient-to-r ds-from-indigo-500 ds-via-purple-500 ds-to-pink-500 ds-rounded-full ds-transform ds--translate-y-1/2 ds-z-0"></div>
          
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-8 ds-relative ds-z-10">
            {/* Descoberta */}
            <div className="ds-bg-gradient-to-br ds-from-indigo-900 ds-to-indigo-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-indigo-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-16 ds-h-16 ds-bg-indigo-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-2xl">🔍</span>
                </div>
                <h3 className="ds-text-xl ds-font-bold ds-text-white ds-mb-2">1. Descoberta</h3>
                <p className="ds-text-indigo-200 ds-text-sm ds-mb-3">
                  Pessoas descobrem o ecossistema através de conteúdo educativo, eventos e networking.
                </p>
                <div className="ds-bg-indigo-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-xs ds-text-white ds-space-y-1">
                    <li>• Conteúdo educativo</li>
                    <li>• Eventos e workshops</li>
                    <li>• Networking</li>
                    <li>• Redes sociais</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Engajamento */}
            <div className="ds-bg-gradient-to-br ds-from-purple-900 ds-to-purple-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-16 ds-h-16 ds-bg-purple-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-2xl">🤝</span>
                </div>
                <h3 className="ds-text-xl ds-font-bold ds-text-white ds-mb-2">2. Engajamento</h3>
                <p className="ds-text-purple-200 ds-text-sm ds-mb-3">
                  Participação ativa em programas, mentoria e desenvolvimento de habilidades.
                </p>
                <div className="ds-bg-purple-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-xs ds-text-white ds-space-y-1">
                    <li>• Programas de capacitação</li>
                    <li>• Mentoria especializada</li>
                    <li>• Desenvolvimento de habilidades</li>
                    <li>• Networking ativo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transformação */}
            <div className="ds-bg-gradient-to-br ds-from-pink-900 ds-to-pink-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-pink-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-16 ds-h-16 ds-bg-pink-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-2xl">✨</span>
                </div>
                <h3 className="ds-text-xl ds-font-bold ds-text-white ds-mb-2">3. Transformação</h3>
                <p className="ds-text-pink-200 ds-text-sm ds-mb-3">
                  Alcanço de objetivos pessoais e contribuição para o crescimento do ecossistema.
                </p>
                <div className="ds-bg-pink-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-xs ds-text-white ds-space-y-1">
                    <li>• Objetivos alcançados</li>
                    <li>• Contribuição ativa</li>
                    <li>• Impacto positivo</li>
                    <li>• Crescimento pessoal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas de Impacto */}
        <div className="ds-bg-gradient-to-r ds-from-green-600 ds-to-blue-600 ds-p-8 ds-rounded-xl ds-mb-8">
          <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            📊 Métricas de Impacto Esperadas
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-4 ds-gap-6">
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">👥</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Usuários</h3>
              <p className="ds-text-sm ds-text-gray-200">1M+ usuários ativos</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">💼</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Projetos</h3>
              <p className="ds-text-sm ds-text-gray-200">10K+ projetos validados</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">💰</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Investimentos</h3>
              <p className="ds-text-sm ds-text-gray-200">R$ 100M+ processados</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">🌍</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-1">Países</h3>
              <p className="ds-text-sm ds-text-gray-200">50+ países ativos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Diagrama de Tecnologias
export const TechnologyFlow: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🤖 Fluxo de Tecnologias e IA
        </h1>

        {/* Central Hub */}
        <div className="ds-text-center ds-mb-12">
          <div className="ds-bg-gradient-to-r ds-from-cyan-600 ds-to-blue-600 ds-p-8 ds-rounded-2xl ds-inline-block ds-shadow-2xl">
            <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-2">
              🧠 Central de Inteligência
            </h2>
            <p className="ds-text-xl ds-text-cyan-100">
              Processamento e análise de dados em tempo real
            </p>
          </div>
        </div>

        {/* Agentes de IA */}
        <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-4 ds-gap-6 ds-mb-12">
          {/* Analista de Mercado */}
          <div className="ds-bg-gradient-to-br ds-from-blue-900 ds-to-blue-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-blue-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">📊</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Analista de Mercado</h3>
              <p className="ds-text-blue-200 ds-text-sm ds-mb-3">
                Analisa tendências e oportunidades
              </p>
              <div className="ds-bg-blue-800 ds-p-2 ds-rounded ds-text-xs ds-text-white">
                <div>• Dados de mercado</div>
                <div>• Tendências</div>
                <div>• Oportunidades</div>
              </div>
            </div>
          </div>

          {/* Validador de Ideias */}
          <div className="ds-bg-gradient-to-br ds-from-green-900 ds-to-green-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-green-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-green-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">✅</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Validador de Ideias</h3>
              <p className="ds-text-green-200 ds-text-sm ds-mb-3">
                Testa e valida conceitos
              </p>
              <div className="ds-bg-green-800 ds-p-2 ds-rounded ds-text-xs ds-text-white">
                <div>• Testes A/B</div>
                <div>• Feedback</div>
                <div>• Validação</div>
              </div>
            </div>
          </div>

          {/* Matching Engine */}
          <div className="ds-bg-gradient-to-br ds-from-purple-900 ds-to-purple-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-purple-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">🔗</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Matching Engine</h3>
              <p className="ds-text-purple-200 ds-text-sm ds-mb-3">
                Conecta pessoas e oportunidades
              </p>
              <div className="ds-bg-purple-800 ds-p-2 ds-rounded ds-text-xs ds-text-white">
                <div>• Algoritmos</div>
                <div>• Compatibilidade</div>
                <div>• Conexões</div>
              </div>
            </div>
          </div>

          {/* Mentor Virtual */}
          <div className="ds-bg-gradient-to-br ds-from-orange-900 ds-to-orange-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-orange-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-orange-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-3 ds-shadow-lg">
                <span className="ds-text-2xl">🎓</span>
              </div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Mentor Virtual</h3>
              <p className="ds-text-orange-200 ds-text-sm ds-mb-3">
                Orientação personalizada
              </p>
              <div className="ds-bg-orange-800 ds-p-2 ds-rounded ds-text-xs ds-text-white">
                <div>• IA conversacional</div>
                <div>• Aprendizado</div>
                <div>• Suporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fluxo de Dados */}
        <div className="ds-bg-gradient-to-r ds-from-indigo-600 ds-to-purple-600 ds-p-8 ds-rounded-xl">
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

// Roadmap Visual
export const VisualRoadmap: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🗓️ Roadmap Visual 2025-2027
        </h1>

        {/* Timeline Visual */}
        <div className="ds-relative ds-mb-12">
          {/* Linha do tempo */}
          <div className="ds-absolute ds-top-1/2 ds-left-0 ds-right-0 ds-h-2 ds-bg-gradient-to-r ds-from-green-500 ds-via-blue-500 ds-to-purple-500 ds-rounded-full ds-transform ds--translate-y-1/2 ds-z-0"></div>
          
          {/* Marcos */}
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-8 ds-relative ds-z-10">
            {/* 2025 */}
            <div className="ds-bg-gradient-to-br ds-from-green-900 ds-to-green-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-green-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-16 ds-h-16 ds-bg-green-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-2xl">🏗️</span>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-2">2025</h3>
                <h4 className="ds-text-lg ds-font-semibold ds-text-green-200 ds-mb-3">Construção da Base</h4>
                <div className="ds-bg-green-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-sm ds-text-white ds-space-y-1">
                    <li>• Design System</li>
                    <li>• Arquitetura</li>
                    <li>• Módulos básicos</li>
                    <li>• Integração</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2026 */}
            <div className="ds-bg-gradient-to-br ds-from-blue-900 ds-to-blue-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-16 ds-h-16 ds-bg-blue-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-2xl">🔍</span>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-2">2026</h3>
                <h4 className="ds-text-lg ds-font-semibold ds-text-blue-200 ds-mb-3">Validação de Modelos</h4>
                <div className="ds-bg-blue-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-sm ds-text-white ds-space-y-1">
                    <li>• Testes com usuários</li>
                    <li>• Validação de negócios</li>
                    <li>• Refinamento MVPs</li>
                    <li>• Métricas de sucesso</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2027 */}
            <div className="ds-bg-gradient-to-br ds-from-purple-900 ds-to-purple-700 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-400 ds-shadow-lg ds-transform ds-hover:ds-scale-105 ds-transition-all ds-duration-300">
              <div className="ds-text-center">
                <div className="ds-w-16 ds-h-16 ds-bg-purple-500 ds-rounded-full ds-flex ds-items-center ds-justify-center ds-mx-auto ds-mb-4 ds-shadow-lg">
                  <span className="ds-text-2xl">🌟</span>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-2">2027</h3>
                <h4 className="ds-text-lg ds-font-semibold ds-text-purple-200 ds-mb-3">Lançamento Produção</h4>
                <div className="ds-bg-purple-800 ds-p-3 ds-rounded-lg">
                  <ul className="ds-text-sm ds-text-white ds-space-y-1">
                    <li>• Plataforma estável</li>
                    <li>• Parcerias estratégicas</li>
                    <li>• Investimentos</li>
                    <li>• Escala global</li>
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
                Sistema de recompensas baseado em blockchain
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
