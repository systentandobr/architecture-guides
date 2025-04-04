# Systentando Architecture Guides

Este repositório contém a documentação e diagramas da arquitetura do ecossistema Systentando.

## Executando o Storybook

Para iniciar o Storybook em ambiente de desenvolvimento:

```bash
# Limpar cache e reinstalar dependências (em caso de problemas)
chmod +x cleanup.sh
./cleanup.sh

# Ou apenas iniciar normalmente
pnpm storybook
```

## Solução de Problemas Comuns

### Erro no MDX

Se você encontrar erros relacionados a arquivos MDX:

1. Verifique se está usando o formato correto de importação:
   ```jsx
   import { Meta, Story, Canvas, Description } from '@storybook/blocks';
   ```

2. Certifique-se de que os componentes referenciados existem e estão no caminho correto
   
3. Use a nova sintaxe CSF (Component Story Format) para stories:
   ```jsx
   export default {
     title: 'Example/Component',
     component: YourComponent,
     tags: ['autodocs'],
   };
   
   export const Default = {
     args: {
       label: 'Default',
     },
   };
   ```

### Erro de compilação JSX

Se encontrar erros relacionados a JSX:

1. Verifique se os arquivos que contêm sintaxe JSX terminam com `.jsx` e não `.js`
2. Verifique se as tags estão corretamente fechadas e balanceadas

### Outros problemas

Execute o script de limpeza (cleanup.sh) para remover caches e reinstalar as dependências.
