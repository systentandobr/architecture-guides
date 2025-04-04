# Integração do Google Colab no Ecossistema Systentando

Este guia descreve como utilizar o Google Colab como ambiente de desenvolvimento, experimentação e treinamento de modelos de IA para o ecossistema Systentando.

## Visão Geral

O Google Colab é uma ferramenta baseada em Jupyter Notebook hospedada na nuvem, que permite escrever e executar código Python sem a necessidade de configuração local. No contexto do Systentando, o Colab é utilizado para:

1. **Experimentação de novos agentes especialistas**
2. **Treinamento e ajuste fino de modelos de IA**
3. **Análise exploratória de dados**
4. **Prototipagem rápida de fluxos conversacionais**
5. **Validação de templates de prompts**

## Casos de Uso

### 1. Experimentação de Agentes Especialistas

Antes de implementar um novo agente especialista no código de produção, é recomendado desenvolver um protótipo no Google Colab para:

- Testar diferentes abordagens de prompting
- Experimentar diferentes modelos de LLM
- Comparar técnicas de extração de dados
- Validar a eficácia das respostas para diferentes inputs

Exemplo: [Link para Notebook de Experimentação](https://colab.research.google.com/)

### 2. Treinamento e Fine-tuning

Para agentes que necessitam de conhecimento específico ou comportamento personalizado:

- Fine-tuning de LLMs para domínios específicos
- Treinamento de classificadores para intenções
- Ajuste de modelos para extração de dados
- Criação de embeddings específicos para o contexto

Exemplo: [Link para Notebook de Fine-tuning](https://colab.research.google.com/)

### 3. Análise de Dados

Para entender padrões nas interações e melhorar os agentes:

- Análise de conversas passadas
- Identificação de problemas comuns
- Extração de insights para melhoria de prompts
- Validação da qualidade de dados extraídos

Exemplo: [Link para Notebook de Análise](https://colab.research.google.com/)

## Workflow de Integração

### Fluxo de Desenvolvimento com Colab

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Experimento   │     │  Validação de   │     │  Implementação  │
│   no Colab      │────►│   Resultados    │────►│   em Produção   │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **Experimento no Colab**:
   - Desenvolvimento inicial de novos agentes
   - Teste de diferentes abordagens
   - Iteração rápida com feedback imediato

2. **Validação de Resultados**:
   - Avaliação quantitativa e qualitativa
   - Comparação com baselines
   - Documentação de descobertas

3. **Implementação em Produção**:
   - Transferência do conhecimento para o código de produção
   - Adaptação do modelo para a arquitetura MCP
   - Integração com o sistema de agentes existente

## Configuração de um Notebook para Systentando

### Template Básico

```python
# Systentando AI Agent Experimentation Template
# ----------------------------------------------

# 1. Instalação de dependências
!pip install openai langchain pandas matplotlib seaborn

# 2. Importação de bibliotecas
import os
import json
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from openai import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.llms import OpenAI as LangchainOpenAI

# 3. Configuração de credenciais
from google.colab import userdata
os.environ["OPENAI_API_KEY"] = userdata.get('OPENAI_API_KEY')

# 4. Definição de funções úteis

def analyze_conversation(messages, schema):
    """Analisa uma conversa e extrai dados estruturados."""
    # Implementação da análise
    pass

def generate_agent_response(prompt, messages, context=None):
    """Gera uma resposta do agente usando um LLM."""
    # Implementação da geração
    pass

def evaluate_extraction_quality(extracted_data, ground_truth):
    """Avalia a qualidade da extração de dados."""
    # Implementação da avaliação
    pass

# 5. Definição de prompts

system_prompt_template = """
Você é um agente especialista em {domain}. Seu objetivo é coletar informações
sobre {collection_goal} de forma conversacional e natural.

Esquema de dados a coletar:
{data_schema}

Contexto adicional:
{additional_context}

Instruções:
1. Mantenha um tom {tone} e profissional
2. Faça perguntas naturais, uma de cada vez
3. Adapte-se às respostas do usuário
4. Evite repetir perguntas já respondidas
"""

# 6. Área de experimentação

# Definição de parâmetros do experimento
domain = "saúde"
collection_goal = "informações sobre saúde e bem-estar"
data_schema = {
    "weight": {"type": "number", "description": "Peso em kg", "required": True},
    "height": {"type": "number", "description": "Altura em cm", "required": True},
    "exercise_frequency": {"type": "string", "description": "Frequência de exercícios", "required": True}
}
tone = "amigável"

# Formato do prompt
formatted_prompt = system_prompt_template.format(
    domain=domain,
    collection_goal=collection_goal,
    data_schema=json.dumps(data_schema, indent=2),
    additional_context="O usuário está interessado em melhorar sua saúde geral.",
    tone=tone
)

print("Prompt formatado:")
print(formatted_prompt)

# 7. Testes e validação

# Teste com diferentes entradas de usuário
test_messages = [
    {"role": "user", "content": "Olá, quero melhorar minha saúde."},
    # Adicione mais mensagens de teste aqui
]

# Resposta do agente
response = generate_agent_response(formatted_prompt, test_messages)
print("\nResposta do agente:")
print(response)

# 8. Análise de resultados

# Visualização de resultados
# Código para gráficos e análises
```

### Dicas para Uso Eficiente

1. **Armazenamento de Credenciais**:
   - Utilize `userdata.get()` para acessar chaves de API armazenadas com segurança
   - Nunca exponha chaves diretamente no código

2. **Versionamento**:
   - Faça download regular dos notebooks ou salve-os no GitHub
   - Mantenha um registro de alterações e resultados

3. **Recursos Computacionais**:
   - Utilize GPUs quando necessário para tarefas intensivas
   - Monitore o uso de memória para evitar crashes

4. **Compartilhamento**:
   - Compartilhe notebooks relevantes com a equipe
   - Documente bem os experimentos e resultados

## Migração do Colab para Produção

Para transferir modelos e lógica desenvolvidos no Colab para o código de produção:

### 1. Exportação de Modelos e Artefatos

```python
# Exemplo: Exportação de modelo treinado
model.save("my_model.h5")
from google.colab import files
files.download("my_model.h5")

# Exemplo: Exportação de dados processados
processed_data.to_csv("processed_data.csv")
files.download("processed_data.csv")
```

### 2. Adaptar Código para a Arquitetura MCP

- Separe a lógica do modelo (Model)
- Isole a lógica de controle (Controller)
- Extraia os templates de prompts (Prompt)

### 3. Conversão para TypeScript

Exemplo de conversão de um classificador Python para TypeScript:

```typescript
// Exemplo simplificado
export class IntentClassifier {
  private model: any; // Referência ao modelo carregado

  constructor() {
    // Inicialização
  }

  public async classifyIntent(text: string): Promise<{ 
    intent: string; 
    confidence: number 
  }> {
    // Lógica adaptada do notebook Python
    return { 
      intent: "health_assessment", 
      confidence: 0.95 
    };
  }
}
```

## Exemplo: Notebook de Engenharia de Prompts

Notebook prático para experimentação de diferentes abordagens de prompts para o agente de saúde:

```python
# Health Agent Prompt Engineering
# -------------------------------

# Imports e setup (como mostrado anteriormente)
# ...

# Definição de variantes de prompts
prompt_variants = {
    "directive": """
    Você é um assistente de saúde. Colete as seguintes informações:
    - Peso do usuário
    - Altura do usuário
    - Frequência de exercícios
    """,
    
    "conversational": """
    Você é um coach de saúde amigável que está tendo uma conversa natural
    com o usuário. Durante a conversa, tente entender:
    - O peso do usuário
    - A altura do usuário
    - Com que frequência eles se exercitam
    """,
    
    "expert": """
    Você é um especialista em saúde e bem-estar com anos de experiência.
    Converse com o usuário para entender seu perfil de saúde, incluindo:
    - Dados antropométricos (peso e altura)
    - Rotina de atividades físicas
    """
}

# Cenários de teste
test_scenarios = [
    {
        "name": "usuário cooperativo",
        "messages": [
            {"role": "user", "content": "Olá, quero melhorar minha saúde."}
        ]
    },
    {
        "name": "usuário hesitante",
        "messages": [
            {"role": "user", "content": "Oi, não sei se quero compartilhar meus dados."}
        ]
    },
    {
        "name": "usuário direto",
        "messages": [
            {"role": "user", "content": "Tenho 80kg, 175cm e corro 3x por semana."}
        ]
    }
]

# Execução de testes
results = []

for variant_name, prompt in prompt_variants.items():
    for scenario in test_scenarios:
        response = generate_agent_response(prompt, scenario["messages"])
        extracted = analyze_conversation(scenario["messages"] + [{"role": "assistant", "content": response}], data_schema)
        
        results.append({
            "prompt_variant": variant_name,
            "scenario": scenario["name"],
            "response": response,
            "extraction_success": len(extracted) / len(data_schema),
            "extracted_data": extracted
        })

# Análise de resultados
results_df = pd.DataFrame(results)

# Visualização
plt.figure(figsize=(10, 6))
sns.barplot(x="prompt_variant", y="extraction_success", hue="scenario", data=results_df)
plt.title("Taxa de Sucesso de Extração por Variante de Prompt e Cenário")
plt.xlabel("Variante de Prompt")
plt.ylabel("Taxa de Sucesso (%)")
plt.ylim(0, 1)
plt.show()

# Conclusões e insights
# Baseado nos resultados, podemos selecionar a melhor abordagem para produção
```

## Notebooks Disponíveis

O Systentando mantém uma biblioteca de notebooks Colab para os diversos aspectos do ecossistema:

1. [Análise de Performance de Agentes](https://colab.research.google.com/) - Avaliação comparativa de agentes
2. [Fine-tuning para Domínios Específicos](https://colab.research.google.com/) - Ajuste de modelos LLM
3. [Engenharia de Prompts](https://colab.research.google.com/) - Experimentação com templates
4. [Extração de Dados de Conversas](https://colab.research.google.com/) - Técnicas de extração
5. [Análise de Sentimento de Usuários](https://colab.research.google.com/) - Métricas de satisfação

## Próximos Passos

Para implementar ou expandir o uso do Google Colab no seu desenvolvimento:

1. Solicite acesso aos notebooks compartilhados da equipe
2. Configure suas credenciais no ambiente Colab
3. Explore os notebooks de exemplo
4. Crie novos notebooks para suas experimentações
5. Compartilhe seus insights com a equipe

---

**Nota**: Este guia é um documento vivo e será atualizado conforme novas técnicas e abordagens forem desenvolvidas.
