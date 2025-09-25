import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

// Tema customizado baseado no Systentando
const systentandoTheme = {
  ...themes.dark,
  
  // Cores principais
  colorPrimary: '#004f4f', // Verde principal
  colorSecondary: '#ff7d50', // Laranja accent
  
  // Backgrounds
  appBg: '#121212', // Fundo escuro
  appContentBg: '#1e1e1e', // Fundo dos cards
  appBorderColor: '#333333', // Bordas
  appBorderRadius: 8,
  
  // Textos
  textColor: '#ffffff', // Texto principal
  textInverseColor: '#000000', // Texto inverso
  textMutedColor: '#aaaaaa', // Texto secundário
  
  // Toolbar
  barTextColor: '#ffffff',
  barSelectedColor: '#ff7d50',
  barBg: '#1e1e1e',
  
  // Input
  inputBg: '#1e1e1e',
  inputBorder: '#333333',
  inputTextColor: '#ffffff',
  inputBorderRadius: 6,
  
  // Brand
  brandTitle: 'Systentando Architecture Guides',
  brandUrl: 'https://systentando.com',
  brandImage: undefined, // Pode adicionar logo aqui
  brandTarget: '_self',
  
  // Fonts
  fontBase: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontCode: '"Fira Code", "Monaco", "Consolas", "Ubuntu Mono", monospace',
  
  // Typography
  typography: {
    fontBase: '"Inter", sans-serif',
    fontCode: '"Fira Code", monospace',
    fontSize: '14px',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    fontWeightBlack: 800,
  },
  
  // Layout
  layoutMargin: '16px',
  
  // Sidebar
  sidebarBg: '#1e1e1e',
  sidebarTextColor: '#ffffff',
  sidebarSelectedColor: '#ff7d50',
  sidebarSelectedBg: '#004f4f',
  
  // Grid
  gridCellSize: 12,
};

addons.setConfig({
  theme: systentandoTheme,
  panelPosition: 'bottom',
  selectedPanel: 'controls',
  initialActive: 'sidebar',
  showRoots: true,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});