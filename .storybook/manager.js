import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import systentandoTheme from './systentando-theme';

// Aplica um tema personalizado ao Storybook
addons.setConfig({
  theme: systentandoTheme,
});