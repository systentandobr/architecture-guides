

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      "builder": {
        "useSWC": true
      }
    }
  },
  "features": {
    "storyStoreV7": true
  },
  "docs": {
    "autodocs": true
  },
  "viteFinal": async (config) => {
    const path = require('path');
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'sb-original/image-context': path.join(__dirname, '../src/mocks/image-context.js')
    };
    
    // Adicionar suporte explícito para MDX
    if (!config.plugins) {
      config.plugins = [];
    }
    
    return config;
  }
};

export default config;