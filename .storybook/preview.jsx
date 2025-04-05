import React from 'react';
import { ThemeProvider } from '../src/contexts/theme-context.jsx';
import { themes } from '../src/styles/themes';
import '../src/styles/globals.css';

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
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
