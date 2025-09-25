import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/design-system/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/design-system/Card';

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
