import { create } from '@storybook/theming';
import logo from '../src/stories/assets/systentando-logo.png';

export default create({
  base: 'dark',
  
  // Cores da marca
  colorPrimary: '#004f4f',
  colorSecondary: '#ff7d50',

  // UI
  appBg: '#121212',
  appContentBg: '#1e1e1e',
  appBorderColor: '#333333',
  appBorderRadius: 8,

  // Tipografia
  fontBase: '"Inter", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Branding
  brandTitle: 'Systentando UI',
  brandUrl: 'https://systentando.com',
  brandImage: logo,
  brandTarget: '_blank',
});