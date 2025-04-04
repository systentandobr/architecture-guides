#!/bin/bash

# Limpar cache
rm -rf node_modules/.cache
rm -rf .cache
rm -rf .storybook/compile-results
rm -rf storybook-static

# Remover node_modules (opcional)
# rm -rf node_modules

# Reinstalar dependências (use seu gerenciador de pacotes)
# Para npm
# npm install

# Para pnpm
pnpm install

# Para yarn
# yarn install

# Iniciar storybook
pnpm storybook
