import React from 'react';
import { ThemeProvider } from '../src/contexts/theme-context.jsx';
import { themes } from '../src/styles/themes';
import '../src/styles/globals.css';
import '../src/stories/security/styles/theme.css';
import '../src/styles/design-system-simple.css';

import { fn } from '@storybook/test';

export const parameters = {
  actions: { },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#121212',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
  // Parâmetros para organizar a sidebar
  options: {
    storySort: {
      order: [
        'Home',
        'Introduction',
        'Example',
        'Chatbot',
        'AI',
        'Pages',
      ],
    },
  },
}

// Decorador global para aplicar o tema
export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes.dark}>
      <div 
        style={{ 
          margin: '2rem',
          backgroundColor: 'var(--security-bg-primary)',
          color: 'var(--security-text-primary)',
          minHeight: '100vh',
          padding: '1rem'
        }}
        data-theme="dark"
      >
        <Story />
      </div>
    </ThemeProvider>
  ),
];
