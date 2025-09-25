import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Ecosystem/Vision',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Visão Geral do Ecossistema
export const EcosystemOverview: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        {/* Header */}
        <div className="ds-text-center ds-mb-12">
          <h1 className="ds-text-5xl ds-font-bold ds-text-white ds-mb-4">
            🚀 Transformando o Empreendedorismo Brasileiro
          </h1>
          <p className="ds-text-xl ds-text-gray-300 ds-mb-8">
            Uma nova forma de empreender, criar e escalar negócios com impacto real
          </p>
          <div className="ds-bg-gradient-to-r ds-from-green-600 ds-to-orange-500 ds-p-6 ds-rounded-xl ds-text-white">
            <h2 className="ds-text-2xl ds-font-bold ds-mb-4">🎯 Nossa Missão</h2>
            <p className="ds-text-lg ds-leading-relaxed">
              Criar um ecossistema integrado que revolucione a maneira como as pessoas 
              empreendem, aprendem e crescem, conectando ideias escaláveis com recursos 
              e oportunidades reais de investimento.
            </p>
          </div>
        </div>

        {/* Mapa Conceitual */}
        <div className="ds-grid ds-grid-cols-1 ds-lg:grid-cols-3 ds-gap-8 ds-mb-12">
          {/* Ideias de Negócio */}
          <div className="ds-bg-blue-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-500">
            <h3 className="ds-text-2xl ds-font-bold ds-text-blue-300 ds-mb-4">💡 Ideias Escaláveis</h3>
            <ul className="ds-space-y-3 ds-text-white">
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Plataformas SaaS B2B</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Marketplaces especializados</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Serviços de IA aplicada</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Fintechs inovadoras</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Edtechs personalizadas</span>
              </li>
            </ul>
          </div>

          {/* Agentes de IA */}
          <div className="ds-bg-purple-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-500">
            <h3 className="ds-text-2xl ds-font-bold ds-text-purple-300 ds-mb-4">🤖 Agentes de IA</h3>
            <ul className="ds-space-y-3 ds-text-white">
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Análise de mercado</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Validação de ideias</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Matching com investidores</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Mentoria personalizada</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Automação de processos</span>
              </li>
            </ul>
          </div>

          {/* Investidores */}
          <div className="ds-bg-green-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-green-500">
            <h3 className="ds-text-2xl ds-font-bold ds-text-green-300 ds-mb-4">💰 Investidores</h3>
            <ul className="ds-space-y-3 ds-text-white">
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>VCs e Angel Investors</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Fundos de investimento</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Corporates</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Crowdfunding</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">✅</span>
                <span>Governo e BNDES</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Engajamento e Conscientização */}
        <div className="ds-bg-gradient-to-r ds-from-orange-600 ds-to-red-600 ds-p-8 ds-rounded-xl ds-mb-8">
          <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            🎯 Engajamento e Conscientização
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-6">
            <div>
              <h3 className="ds-text-xl ds-font-bold ds-text-orange-200 ds-mb-3">👥 Para Empreendedores</h3>
              <ul className="ds-space-y-2 ds-text-white">
                <li>• Desenvolvimento de habilidades empreendedoras</li>
                <li>• Acesso a mentoria especializada</li>
                <li>• Networking com outros empreendedores</li>
                <li>• Ferramentas de gestão e produtividade</li>
                <li>• Acompanhamento de objetivos pessoais</li>
              </ul>
            </div>
            <div>
              <h3 className="ds-text-xl ds-font-bold ds-text-orange-200 ds-mb-3">🌱 Para a Comunidade</h3>
              <ul className="ds-space-y-2 ds-text-white">
                <li>• Educação empreendedora gratuita</li>
                <li>• Programas de capacitação</li>
                <li>• Eventos e workshops</li>
                <li>• Mentoria reversa</li>
                <li>• Impacto social positivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Roadmap Detalhado
export const DetailedRoadmap: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🗓️ Roadmap Detalhado
        </h1>

        {/* Timeline */}
        <div className="ds-space-y-8">
          {/* 2024 - Base */}
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
                </ul>
              </div>
              <div>
                <h3 className="ds-text-lg ds-font-bold ds-text-yellow-300 ds-mb-2">🔄 Em Andamento</h3>
                <ul className="ds-space-y-1 ds-text-gray-300">
                  <li>• Integração entre plataformas</li>
                  <li>• Sistema de gamificação</li>
                  <li>• IA para personalização</li>
                  <li>• Testes de usabilidade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2025 - Desenvolvimento */}
          <div className="ds-bg-gray-800 ds-p-6 ds-rounded-xl ds-border-l-4 ds-border-blue-500">
            <div className="ds-flex ds-items-center ds-gap-4 ds-mb-4">
              <span className="ds-bg-blue-500 ds-text-white ds-px-3 ds-py-1 ds-rounded ds-font-bold">2025</span>
              <h2 className="ds-text-2xl ds-font-bold ds-text-white">🚀 Desenvolvimento e Testes</h2>
            </div>
            <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-6">
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
                  <li>• 90%+ satisfação dos usuários</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Q1 2026 - Produção */}
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
    </div>
  ),
};

// Moeda Digital e Recompensas
export const DigitalCurrency: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          💎 Moeda Digital e Sistema de Recompensas
        </h1>

        <div className="ds-grid ds-grid-cols-1 ds-lg:grid-cols-2 ds-gap-8 ds-mb-8">
          {/* Blockchain Options */}
          <div className="ds-bg-gradient-to-br ds-from-blue-900 ds-to-purple-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-500">
            <h2 className="ds-text-2xl ds-font-bold ds-text-blue-300 ds-mb-4">🔗 Opções de Blockchain</h2>
            <div className="ds-space-y-4">
              <div className="ds-bg-gray-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Ethereum</h3>
                <ul className="ds-space-y-1 ds-text-gray-300">
                  <li>• Rede mais estabelecida</li>
                  <li>• Smart contracts robustos</li>
                  <li>• Ecossistema maduro</li>
                  <li>• Gas fees variáveis</li>
                </ul>
              </div>
              <div className="ds-bg-gray-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Polkadot</h3>
                <ul className="ds-space-y-1 ds-text-gray-300">
                  <li>• Interoperabilidade</li>
                  <li>• Governança avançada</li>
                  <li>• Parachains especializadas</li>
                  <li>• Escalabilidade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sistema de Recompensas */}
          <div className="ds-bg-gradient-to-br ds-from-green-900 ds-to-teal-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-green-500">
            <h2 className="ds-text-2xl ds-font-bold ds-text-green-300 ds-mb-4">🎁 Sistema de Recompensas</h2>
            <div className="ds-space-y-4">
              <div className="ds-bg-gray-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Contribuidores</h3>
                <ul className="ds-space-y-1 ds-text-gray-300">
                  <li>• Desenvolvedores</li>
                  <li>• Mentores</li>
                  <li>• Empreendedores</li>
                  <li>• Investidores</li>
                  <li>• Comunidade</li>
                </ul>
              </div>
              <div className="ds-bg-gray-800 ds-p-4 ds-rounded-lg">
                <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Recompensas</h3>
                <ul className="ds-space-y-1 ds-text-gray-300">
                  <li>• Tokens por contribuição</li>
                  <li>• Acesso a recursos premium</li>
                  <li>• Participação em governança</li>
                  <li>• Benefícios exclusivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Estudos Necessários */}
        <div className="ds-bg-gradient-to-r ds-from-yellow-600 ds-to-orange-600 ds-p-8 ds-rounded-xl">
          <h2 className="ds-text-2xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            📚 Estudos e Desenvolvimento Necessários
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-6">
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg">
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">🔬 Técnico</h3>
              <ul className="ds-space-y-1 ds-text-white">
                <li>• Análise de blockchain</li>
                <li>• Smart contracts</li>
                <li>• Segurança</li>
                <li>• Escalabilidade</li>
              </ul>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg">
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">⚖️ Legal</h3>
              <ul className="ds-space-y-1 ds-text-white">
                <li>• Regulamentação brasileira</li>
                <li>• Compliance internacional</li>
                <li>• KYC/AML</li>
                <li>• Tributação</li>
              </ul>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg">
              <h3 className="ds-text-lg ds-font-bold ds-text-yellow-200 ds-mb-2">💼 Negócio</h3>
              <ul className="ds-space-y-1 ds-text-white">
                <li>• Modelo de tokenomics</li>
                <li>• Governança descentralizada</li>
                <li>• Adoção de usuários</li>
                <li>• Sustentabilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Impacto e Visão de Futuro
export const ImpactAndFuture: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-min-h-screen ds-p-8">
      <div className="ds-max-w-6xl ds-mx-auto">
        <h1 className="ds-text-4xl ds-font-bold ds-text-white ds-mb-8 ds-text-center">
          🌍 Impacto e Visão de Futuro
        </h1>

        {/* Impacto Social */}
        <div className="ds-bg-gradient-to-r ds-from-green-600 ds-to-blue-600 ds-p-8 ds-rounded-xl ds-mb-8">
          <h2 className="ds-text-3xl ds-font-bold ds-text-white ds-mb-6 ds-text-center">
            🌱 Impacto Social Esperado
          </h2>
          <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-4 ds-gap-6">
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">🎓</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Educação</h3>
              <p className="ds-text-sm ds-text-gray-200">Democratização do conhecimento empreendedor</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">💼</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Empregos</h3>
              <p className="ds-text-sm ds-text-gray-200">Criação de oportunidades de trabalho</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">🌱</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Sustentabilidade</h3>
              <p className="ds-text-sm ds-text-gray-200">Práticas ESG integradas</p>
            </div>
            <div className="ds-bg-white ds-bg-opacity-10 ds-p-4 ds-rounded-lg ds-text-center">
              <div className="ds-text-3xl ds-mb-2">🤝</div>
              <h3 className="ds-text-lg ds-font-bold ds-text-white ds-mb-2">Inclusão</h3>
              <p className="ds-text-sm ds-text-gray-200">Acessibilidade para todos os perfis</p>
            </div>
          </div>
        </div>

        {/* Visão de Longo Prazo */}
        <div className="ds-grid ds-grid-cols-1 ds-lg:grid-cols-2 ds-gap-8">
          <div className="ds-bg-gradient-to-br ds-from-purple-900 ds-to-pink-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-purple-500">
            <h2 className="ds-text-2xl ds-font-bold ds-text-purple-300 ds-mb-4">🔮 Visão 2030</h2>
            <ul className="ds-space-y-3 ds-text-white">
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">🎯</span>
                <span>1M+ usuários ativos no ecossistema</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">💰</span>
                <span>R$ 100M+ em transações processadas</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">🌍</span>
                <span>50+ países com presença ativa</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-green-400">🤝</span>
                <span>100+ integrações com parceiros</span>
              </li>
            </ul>
          </div>

          <div className="ds-bg-gradient-to-br ds-from-blue-900 ds-to-cyan-900 ds-p-6 ds-rounded-xl ds-border-2 ds-border-blue-500">
            <h2 className="ds-text-2xl ds-font-bold ds-text-blue-300 ds-mb-4">🚀 Tecnologias Emergentes</h2>
            <ul className="ds-space-y-3 ds-text-white">
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-blue-400">🔗</span>
                <span>Blockchain para transparência</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-blue-400">🌐</span>
                <span>IoT para integração de dispositivos</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-blue-400">🥽</span>
                <span>AR/VR para experiências imersivas</span>
              </li>
              <li className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-blue-400">⚡</span>
                <span>Quantum Computing para processamento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};
