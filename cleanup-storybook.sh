#!/bin/bash

# Limpar cache
echo "Limpando caches..."
rm -rf node_modules/.cache
rm -rf .cache
rm -rf .storybook/compile-results
rm -rf storybook-static

echo "Verificando arquivos com JSX..."
find ./src -name "*.js" -not -path "*/node_modules/*" | xargs grep -l "<[A-Za-z]" || echo "Nenhum arquivo .js com JSX encontrado"

echo "Limpeza concluída!"

echo "Executando Storybook..."
echo "Se ocorrerem erros, execute 'pnpm install' para reinstalar as dependências."

# Iniciar storybook
pnpm storybook
