import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/design-system/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/design-system/Card';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Components',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Button Stories
export const SystentandoButton: Story = {
  render: () => (
    <div className="ds-space-y-4">
      <h3 className="ds-text-lg ds-font-semibold ds-text-systentando">Systentando Buttons</h3>
      <div className="ds-flex ds-gap-4 ds-flex-wrap">
        <Button variant="systentando">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="systentando" size="sm">Small</Button>
        <Button variant="systentando" size="lg">Large</Button>
      </div>
    </div>
  ),
};

export const LifeTrackerButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-systentando-primary">Life Tracker Category Buttons</h3>
      <div className="flex gap-4 flex-wrap">
        <Button variant="health">Health</Button>
        <Button variant="sleep">Sleep</Button>
        <Button variant="personal">Personal</Button>
        <Button variant="work">Work</Button>
        <Button variant="finance">Finance</Button>
      </div>
    </div>
  ),
};

export const ViralKidsButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-systentando-primary">Viral Kids Bronze Buttons</h3>
      <div className="flex gap-4 flex-wrap">
        <Button variant="bronze">Bronze</Button>
        <Button variant="copper">Copper</Button>
        <Button variant="gold">Gold</Button>
      </div>
    </div>
  ),
};

export const GamerButtons: Story = {
  render: () => (
    <div className="space-y-4 bg-gray-900 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-neon-blue">Gamer Theme Buttons</h3>
      <div className="flex gap-4 flex-wrap">
        <Button variant="neon">Neon</Button>
        <Button variant="gamer">Gamer</Button>
      </div>
    </div>
  ),
};

export const StandardButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-systentando-primary">Standard Buttons</h3>
      <div className="flex gap-4 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

// Card Stories
export const SystentandoCards: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-systentando-primary">Systentando Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card variant="systentando">
          <CardHeader>
            <CardTitle>Systentando Card</CardTitle>
            <CardDescription>Card with Systentando branding</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses the Systentando color scheme and styling.</p>
          </CardContent>
          <CardFooter>
            <Button variant="systentando">Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="accent">
          <CardHeader>
            <CardTitle>Accent Card</CardTitle>
            <CardDescription>Card with accent colors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses the accent color scheme.</p>
          </CardContent>
          <CardFooter>
            <Button variant="accent">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const LifeTrackerCards: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-systentando-primary">Life Tracker Category Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card variant="health">
          <CardHeader>
            <CardTitle className="text-health">Health</CardTitle>
            <CardDescription>Track your health metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Monitor your physical well-being and health goals.</p>
          </CardContent>
          <CardFooter>
            <Button variant="health">Track Health</Button>
          </CardFooter>
        </Card>
        
        <Card variant="sleep">
          <CardHeader>
            <CardTitle className="text-sleep">Sleep</CardTitle>
            <CardDescription>Monitor your sleep patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Track your sleep quality and duration.</p>
          </CardContent>
          <CardFooter>
            <Button variant="sleep">Track Sleep</Button>
          </CardFooter>
        </Card>
        
        <Card variant="personal">
          <CardHeader>
            <CardTitle className="text-personal">Personal</CardTitle>
            <CardDescription>Personal development goals</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Focus on personal growth and self-improvement.</p>
          </CardContent>
          <CardFooter>
            <Button variant="personal">Track Personal</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const ViralKidsCards: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-systentando-primary">Viral Kids Bronze Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card variant="bronze">
          <CardHeader>
            <CardTitle className="text-bronze">Bronze Card</CardTitle>
            <CardDescription>Elegant bronze styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card features the bronze gradient and styling from Viral Kids.</p>
          </CardContent>
          <CardFooter>
            <Button variant="bronze">Bronze Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="default">
          <CardHeader>
            <CardTitle>Standard Card</CardTitle>
            <CardDescription>Standard card styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a standard card with default styling.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Standard Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const GamerCards: Story = {
  render: () => (
    <div className="space-y-4 bg-gray-900 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-neon-blue">Gamer Theme Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card variant="gamer">
          <CardHeader>
            <CardTitle className="text-neon-blue">Gamer Card</CardTitle>
            <CardDescription>Cyberpunk gaming aesthetic</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card features the gamer theme with neon colors and gradients.</p>
          </CardContent>
          <CardFooter>
            <Button variant="neon">Neon Action</Button>
          </CardFooter>
        </Card>
        
        <Card variant="default" className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-white">Dark Card</CardTitle>
            <CardDescription>Dark theme card</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses dark theme styling.</p>
          </CardContent>
          <CardFooter>
            <Button variant="gamer">Gamer Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

// Color Palette Story
export const ColorPalette: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-systentando-primary">Design System Color Palette</h3>
      
      {/* Systentando Colors */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">Systentando Core Colors</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-systentando-primary rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-gray-500">#004f4f</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-systentando-accent rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Accent</p>
            <p className="text-xs text-gray-500">#ff7d50</p>
          </div>
        </div>
      </div>
      
      {/* Life Tracker Colors */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">Life Tracker Category Colors</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-health rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Health</p>
            <p className="text-xs text-gray-500">#00b894</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sleep rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Sleep</p>
            <p className="text-xs text-gray-500">#9b59b6</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-personal rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Personal</p>
            <p className="text-xs text-gray-500">#e84393</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-work rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Work</p>
            <p className="text-xs text-gray-500">#3498db</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-finance rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Finance</p>
            <p className="text-xs text-gray-500">#f39c12</p>
          </div>
        </div>
      </div>
      
      {/* Viral Kids Colors */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">Viral Kids Bronze Colors</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-bronze rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Bronze</p>
            <p className="text-xs text-gray-500">Gradient</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-copper rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Copper</p>
            <p className="text-xs text-gray-500">#d4af37</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Gold</p>
            <p className="text-xs text-gray-500">#ffd700</p>
          </div>
        </div>
      </div>
      
      {/* Gamer Colors */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">Gamer Neon Colors</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-blue rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Neon Blue</p>
            <p className="text-xs text-gray-500">#00FFFF</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-purple rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Neon Purple</p>
            <p className="text-xs text-gray-500">#A259FF</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Neon Green</p>
            <p className="text-xs text-gray-500">#39FF14</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-pink rounded-lg mx-auto mb-2"></div>
            <p className="text-sm font-medium">Neon Pink</p>
            <p className="text-xs text-gray-500">#FF00C8</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// ===== STORIES BASEADAS NOS PROJETOS REAIS =====

// Systentando Landing Page Components
export const SystentandoNavigation: Story = {
  render: () => (
    <div className="ds-space-y-6">
      <h3 className="ds-text-2xl ds-font-bold ds-text-systentando">Systentando Landing Page</h3>
      
      {/* Navigation Bar */}
      <div className="ds-bg-gray-900 ds-p-6 ds-rounded-lg">
        <div className="ds-flex ds-items-center ds-justify-between">
          <div className="ds-text-gradient-systentando ds-text-xl ds-font-bold">
            SYSTENTANDO
          </div>
          <nav className="ds-flex ds-gap-6">
            <a href="#inicio" className="ds-text-white hover:ds-text-systentando">Início</a>
            <a href="#processo" className="ds-text-white hover:ds-text-systentando">Como Funciona</a>
            <a href="#principios" className="ds-text-white hover:ds-text-systentando">Princípios</a>
            <a href="#ecossistema" className="ds-text-white hover:ds-text-systentando">Projetos</a>
          </nav>
          <div className="ds-flex ds-gap-4">
            <Button variant="systentando" size="sm">Arena</Button>
            <Button variant="accent" size="sm">Participe</Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="ds-bg-gradient-systentando ds-p-8 ds-rounded-lg ds-text-white">
        <h1 className="ds-text-4xl ds-font-bold ds-mb-4">Transforme sua Jornada Empreendedora</h1>
        <p className="ds-text-xl ds-mb-6">Junte-se ao ecossistema que está revolucionando o empreendedorismo no Brasil</p>
        <div className="ds-flex ds-gap-4">
          <Button variant="systentando" size="lg">Começar Agora</Button>
          <Button variant="outline" size="lg" className="ds-text-white ds-border-white hover:ds-bg-white hover:ds-text-systentando">
            Saiba Mais
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Life Tracker Components
export const LifeTrackerDashboard: Story = {
  render: () => (
    <div className="ds-space-y-6">
      <h3 className="ds-text-2xl ds-font-bold ds-text-systentando">Life Tracker Dashboard</h3>
      
      {/* Health Category */}
      <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-3 ds-gap-4">
        <Card variant="health">
          <CardHeader>
            <CardTitle className="ds-text-health">🏥 Saúde</CardTitle>
            <CardDescription>Monitore sua saúde física e mental</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-2">
              <div className="ds-flex ds-justify-between">
                <span>Exercícios hoje:</span>
                <span className="ds-font-semibold">30 min</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>Água consumida:</span>
                <span className="ds-font-semibold">2.5L</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="health" size="sm">Registrar</Button>
          </CardFooter>
        </Card>

        <Card variant="sleep">
          <CardHeader>
            <CardTitle className="ds-text-sleep">😴 Sono</CardTitle>
            <CardDescription>Controle sua qualidade do sono</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-2">
              <div className="ds-flex ds-justify-between">
                <span>Duração:</span>
                <span className="ds-font-semibold">7h 30min</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>Qualidade:</span>
                <span className="ds-font-semibold">85%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="sleep" size="sm">Ajustar</Button>
          </CardFooter>
        </Card>

        <Card variant="personal">
          <CardHeader>
            <CardTitle className="ds-text-personal">📚 Desenvolvimento</CardTitle>
            <CardDescription>Seu crescimento pessoal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-2">
              <div className="ds-flex ds-justify-between">
                <span>Leitura:</span>
                <span className="ds-font-semibold">45 min</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>Estudos:</span>
                <span className="ds-font-semibold">2h</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="personal" size="sm">Continuar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

// Viral Kids E-commerce Components
export const ViralKidsStore: Story = {
  render: () => (
    <div className="ds-space-y-6">
      <h3 className="ds-text-2xl ds-font-bold ds-text-systentando">Viral Kids Store</h3>
      
      {/* Product Cards */}
      <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-lg:grid-cols-3 ds-gap-6">
        <Card variant="bronze">
          <CardHeader>
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-gradient-bronze ds-rounded-lg ds-mx-auto ds-mb-4"></div>
              <CardTitle className="ds-text-bronze">Kit Educativo Premium</CardTitle>
              <CardDescription>Desenvolvimento infantil completo</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="ds-text-center ds-space-y-2">
              <div className="ds-text-2xl ds-font-bold ds-text-bronze">R$ 299,90</div>
              <div className="ds-text-sm ds-text-gray-600">ou 12x de R$ 24,99</div>
              <div className="ds-flex ds-justify-center ds-gap-2">
                <span className="ds-bg-bronze ds-text-white ds-px-2 ds-py-1 ds-rounded ds-text-xs">⭐ 4.9</span>
                <span className="ds-bg-bronze ds-text-white ds-px-2 ds-py-1 ds-rounded ds-text-xs">🔥 Mais Vendido</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="ds-flex ds-gap-2">
            <Button variant="bronze" className="ds-flex-1">Comprar</Button>
            <Button variant="outline" size="icon">❤️</Button>
          </CardFooter>
        </Card>

        <Card variant="default">
          <CardHeader>
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-gold ds-rounded-lg ds-mx-auto ds-mb-4"></div>
              <CardTitle>Coleção Limitada</CardTitle>
              <CardDescription>Edição especial de fim de ano</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="ds-text-center ds-space-y-2">
              <div className="ds-text-2xl ds-font-bold">R$ 199,90</div>
              <div className="ds-text-sm ds-text-gray-600">ou 10x de R$ 19,99</div>
              <div className="ds-flex ds-justify-center ds-gap-2">
                <span className="ds-bg-gold ds-text-black ds-px-2 ds-py-1 ds-rounded ds-text-xs">⭐ 4.8</span>
                <span className="ds-bg-gold ds-text-black ds-px-2 ds-py-1 ds-rounded ds-text-xs">✨ Exclusivo</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="ds-flex ds-gap-2">
            <Button variant="gold" className="ds-flex-1">Comprar</Button>
            <Button variant="outline" size="icon">❤️</Button>
          </CardFooter>
        </Card>

        <Card variant="bronze">
          <CardHeader>
            <div className="ds-text-center">
              <div className="ds-w-16 ds-h-16 ds-bg-copper ds-rounded-lg ds-mx-auto ds-mb-4"></div>
              <CardTitle className="ds-text-bronze">Acessórios Premium</CardTitle>
              <CardDescription>Complementos para o kit</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="ds-text-center ds-space-y-2">
              <div className="ds-text-2xl ds-font-bold ds-text-bronze">R$ 89,90</div>
              <div className="ds-text-sm ds-text-gray-600">ou 6x de R$ 14,99</div>
              <div className="ds-flex ds-justify-center ds-gap-2">
                <span className="ds-bg-copper ds-text-white ds-px-2 ds-py-1 ds-rounded ds-text-xs">⭐ 4.7</span>
                <span className="ds-bg-copper ds-text-white ds-px-2 ds-py-1 ds-rounded ds-text-xs">🎁 Oferta</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="ds-flex ds-gap-2">
            <Button variant="bronze" className="ds-flex-1">Comprar</Button>
            <Button variant="outline" size="icon">❤️</Button>
          </CardFooter>
        </Card>
      </div>

      {/* WhatsApp Integration */}
      <div className="ds-bg-gray-100 ds-p-6 ds-rounded-lg">
        <h4 className="ds-text-lg ds-font-semibold ds-mb-4">Integração WhatsApp</h4>
        <div className="ds-flex ds-gap-4">
          <Button variant="whatsapp" size="lg" className="ds-bg-green-500 hover:ds-bg-green-600">
            💬 Falar no WhatsApp
          </Button>
          <Button variant="bronze" size="lg">
            📞 Ligar Agora
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Gamer Theme Components
export const GamerInterface: Story = {
  render: () => (
    <div className="ds-bg-gray-900 ds-p-8 ds-rounded-lg">
      <h3 className="ds-text-2xl ds-font-bold ds-text-neon-blue ds-mb-6">Gamer Interface</h3>
      
      {/* Gaming Dashboard */}
      <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-6">
        <Card variant="gamer">
          <CardHeader>
            <CardTitle className="ds-text-neon-blue">🎮 Player Stats</CardTitle>
            <CardDescription>Suas estatísticas de jogo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-4">
              <div className="ds-flex ds-justify-between">
                <span>Level:</span>
                <span className="ds-text-neon-green ds-font-bold">42</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>XP:</span>
                <span className="ds-text-neon-purple ds-font-bold">15,420</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>Rank:</span>
                <span className="ds-text-neon-pink ds-font-bold">Gold</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="neon" size="sm">Jogar</Button>
          </CardFooter>
        </Card>

        <Card variant="gamer">
          <CardHeader>
            <CardTitle className="ds-text-neon-blue">🏆 Achievements</CardTitle>
            <CardDescription>Conquistas desbloqueadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-2">
              <div className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-neon-green">✅</span>
                <span>First Steps</span>
              </div>
              <div className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-neon-purple">✅</span>
                <span>Power User</span>
              </div>
              <div className="ds-flex ds-items-center ds-gap-2">
                <span className="ds-text-neon-pink">🔒</span>
                <span>Master Level</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="gamer" size="sm">Ver Todas</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Gaming Controls */}
      <div className="ds-mt-6 ds-flex ds-gap-4 ds-justify-center">
        <Button variant="neon" size="lg">🎯 Start Game</Button>
        <Button variant="gamer" size="lg">⚙️ Settings</Button>
        <Button variant="neon" size="lg">🏆 Leaderboard</Button>
      </div>
    </div>
  ),
};

// Meu Nutri Components
export const MeuNutriApp: Story = {
  render: () => (
    <div className="ds-space-y-6">
      <h3 className="ds-text-2xl ds-font-bold ds-text-systentando">Meu Nutri App</h3>
      
      {/* Nutrition Cards */}
      <div className="ds-grid ds-grid-cols-1 ds-md:grid-cols-2 ds-gap-4">
        <Card variant="health">
          <CardHeader>
            <CardTitle className="ds-text-health">🥗 Refeições Hoje</CardTitle>
            <CardDescription>Seu plano nutricional personalizado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-3">
              <div className="ds-flex ds-justify-between ds-items-center">
                <span>🌅 Café da Manhã</span>
                <span className="ds-text-health ds-font-semibold">✓ Concluído</span>
              </div>
              <div className="ds-flex ds-justify-between ds-items-center">
                <span>🌞 Almoço</span>
                <span className="ds-text-warning">⏰ Em andamento</span>
              </div>
              <div className="ds-flex ds-justify-between ds-items-center">
                <span>🌙 Jantar</span>
                <span className="ds-text-gray-500">⏳ Pendente</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="health" size="sm">Registrar Refeição</Button>
          </CardFooter>
        </Card>

        <Card variant="personal">
          <CardHeader>
            <CardTitle className="ds-text-personal">📊 Metas Nutricionais</CardTitle>
            <CardDescription>Acompanhe seu progresso</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="ds-space-y-3">
              <div className="ds-flex ds-justify-between">
                <span>Calorias:</span>
                <span className="ds-font-semibold">1,200 / 1,800</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>Proteínas:</span>
                <span className="ds-font-semibold">45g / 60g</span>
              </div>
              <div className="ds-flex ds-justify-between">
                <span>Hidratação:</span>
                <span className="ds-font-semibold">1.5L / 2.0L</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="personal" size="sm">Ajustar Metas</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

// Design Patterns Discovery
export const DesignPatterns: Story = {
  render: () => (
    <div className="ds-space-y-6">
      <h3 className="ds-text-2xl ds-font-bold ds-text-systentando">Padrões de Design Descobertos</h3>
      
      {/* Color Usage Patterns */}
      <Card variant="systentando">
        <CardHeader>
          <CardTitle>🎨 Padrões de Cores por Projeto</CardTitle>
          <CardDescription>Como cada projeto usa suas cores específicas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="ds-space-y-4">
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Systentando Landing</h4>
              <p className="ds-text-sm">Usa verde principal (#004f4f) para elementos de destaque e laranja accent (#ff7d50) para CTAs e interações.</p>
            </div>
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Life Tracker</h4>
              <p className="ds-text-sm">Cada categoria tem sua cor: Saúde (verde), Sono (roxo), Pessoal (rosa), Trabalho (azul), Finanças (laranja).</p>
            </div>
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Viral Kids</h4>
              <p className="ds-text-sm">Paleta bronze/elegante com gradientes dourados e tons terrosos para transmitir qualidade premium.</p>
            </div>
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Gamer Theme</h4>
              <p className="ds-text-sm">Cores neon vibrantes (azul, roxo, verde, rosa) com fundos escuros para criar atmosfera cyberpunk.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Patterns */}
      <Card variant="bronze">
        <CardHeader>
          <CardTitle className="ds-text-bronze">🧩 Padrões de Componentes</CardTitle>
          <CardDescription>Estruturas comuns encontradas nos projetos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="ds-space-y-4">
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Navigation Patterns</h4>
              <p className="ds-text-sm">Todos os projetos usam navegação fixa com scroll detection e estados ativos.</p>
            </div>
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Card Patterns</h4>
              <p className="ds-text-sm">Cards com header, content, footer e variantes por categoria/função.</p>
            </div>
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Button Patterns</h4>
              <p className="ds-text-sm">Botões com variantes por função (primary, secondary, accent) e estados (loading, success).</p>
            </div>
            <div>
              <h4 className="ds-font-semibold ds-mb-2">Integration Patterns</h4>
              <p className="ds-text-sm">WhatsApp, gamificação, analytics e tracking são padrões comuns.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};
