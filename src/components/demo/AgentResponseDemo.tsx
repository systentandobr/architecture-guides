import React, { useState, useEffect } from 'react';

// Tipos para o componente de demonstração
interface AgentResponseDemoProps {
  agentType: 'health' | 'nutrition' | 'finance' | 'productivity' | 'meta';
  query: string;
  context?: any;
  onFeedback?: (feedback: { rating: number, comment?: string }) => void;
}

export const AgentResponseDemo: React.FC<AgentResponseDemoProps> = ({
  agentType,
  query,
  context = {},
  onFeedback
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Simulação de resposta do agente
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // Simular delay de processamento
    const timer = setTimeout(() => {
      try {
        const mockResponse = generateMockResponse(agentType, query, context);
        setResponse(mockResponse);
        setIsLoading(false);
      } catch (err) {
        setError('Erro ao gerar resposta do agente');
        setIsLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [agentType, query, context]);

  // Função para gerar resposta simulada com base no tipo de agente
  const generateMockResponse = (type: string, userQuery: string, ctx: any): string => {
    switch (type) {
      case 'health':
        return generateHealthResponse(userQuery, ctx);
      case 'nutrition':
        return generateNutritionResponse(userQuery, ctx);
      case 'finance':
        return generateFinanceResponse(userQuery, ctx);
      case 'productivity':
        return generateProductivityResponse(userQuery, ctx);
      case 'meta':
        return generateMetaResponse(userQuery, ctx);
      default:
        return 'Não foi possível gerar uma resposta para este tipo de agente.';
    }
  };

  // Respostas simuladas por tipo de agente
  const generateHealthResponse = (userQuery: string, ctx: any): string => {
    if (userQuery.includes('sono')) {
      const { userProfile } = ctx;
      const recommendations = [];
      
      if (userProfile.sleepHours < 7) {
        recommendations.push('Tente aumentar gradualmente seu tempo de sono para 7-8 horas por noite.');
      }
      
      if (userProfile.screenTimeBeforeBed > 1) {
        recommendations.push('Reduza o tempo de tela antes de dormir para menos de 1 hora.');
      }
      
      if (userProfile.exerciseFrequency === 'rare') {
        recommendations.push('Inclua exercícios regulares em sua rotina, mesmo que sejam apenas caminhadas leves.');
      }
      
      return `
        Com base no seu perfil, aqui estão algumas recomendações para melhorar sua qualidade de sono:
        
        ${recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}
        
        Além disso, considere criar uma rotina consistente para dormir e acordar, mesmo nos fins de semana, e mantenha seu quarto escuro, silencioso e com temperatura agradável.
      `;
    }
    
    return 'Para dar recomendações de saúde mais precisas, precisaria de mais informações sobre sua situação específica.';
  };

  const generateNutritionResponse = (userQuery: string, ctx: any): string => {
    return 'Com base nas informações disponíveis, recomendo equilibrar sua dieta com mais vegetais, proteínas magras e reduzir processados. Considere consultar um nutricionista para um plano personalizado.';
  };

  const generateFinanceResponse = (userQuery: string, ctx: any): string => {
    return 'Para melhorar sua situação financeira, recomendo criar um orçamento detalhado, estabelecer um fundo de emergência e priorizar o pagamento de dívidas de alto juros.';
  };

  const generateProductivityResponse = (userQuery: string, ctx: any): string => {
    return 'Para aumentar sua produtividade, experimente a técnica Pomodoro (25 minutos de foco seguidos de 5 minutos de pausa), organize seu ambiente de trabalho e estabeleça metas claras para cada dia.';
  };

  const generateMetaResponse = (userQuery: string, ctx: any): string => {
    const { relevantProducts = [] } = ctx;
    
    if (userQuery.includes('hábitos alimentares') && userQuery.includes('produtividade')) {
      return `
        Sua alimentação tem um impacto significativo na sua produtividade. Alimentos ricos em nutrientes como frutas, vegetais, proteínas magras e grãos integrais fornecem energia sustentada ao longo do dia.
        
        Recomendações:
        1. Evite refeições pesadas que podem causar sonolência
        2. Mantenha-se hidratado - a desidratação afeta a concentração
        3. Considere pequenas refeições distribuídas ao longo do dia
        4. Reduza açúcares refinados que causam picos de energia seguidos de quedas
        
        ${relevantProducts.includes('zen-launcher') ? 'Você pode usar o ZEN Launcher para definir lembretes de refeição e hidratação.' : ''}
        ${relevantProducts.includes('meu-nutri') ? 'No aplicativo Meu Nutri, você encontrará planos alimentares específicos para melhorar seu foco e energia.' : ''}
      `;
    }
    
    return 'Para fornecer uma resposta mais precisa, por favor especifique sua pergunta relacionando os aspectos de saúde, nutrição, finanças ou produtividade que gostaria de abordar.';
  };

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: '#f7f9fc',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: getAgentColor(agentType),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '16px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          {getAgentInitial(agentType)}
        </div>
        <div>
          <h3 style={{ margin: '0 0 4px 0', color: '#333' }}>
            {getAgentName(agentType)}
          </h3>
          <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
            Demonstração de IA
          </p>
        </div>
      </div>

      <div style={{
        backgroundColor: '#e9f0f8',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <strong style={{ display: 'block', marginBottom: '8px', color: '#444' }}>Consulta:</strong>
        <p style={{ margin: '0', color: '#333' }}>{query}</p>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <strong style={{ display: 'block', marginBottom: '12px', color: '#444' }}>Resposta:</strong>
        
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
            <div style={{ 
              width: '24px', 
              height: '24px', 
              border: '3px solid #f3f3f3',
              borderTop: `3px solid ${getAgentColor(agentType)}`,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
            {response}
          </div>
        )}
      </div>

      {context && Object.keys(context).length > 0 && (
        <div style={{ marginTop: '24px', fontSize: '12px', color: '#666' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Contexto utilizado:</p>
          <pre style={{ 
            backgroundColor: '#f3f3f3', 
            padding: '8px', 
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '150px'
          }}>
            {JSON.stringify(context, null, 2)}
          </pre>
        </div>
      )}

      {/* Botões de feedback */}
      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Essa resposta foi útil?</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[1, 2, 3, 4, 5].map(rating => (
            <button
              key={rating}
              onClick={() => onFeedback && onFeedback({ rating })}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#f0f0f0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Funções auxiliares para estilizar o componente com base no tipo de agente
const getAgentColor = (type: string): string => {
  switch (type) {
    case 'health': return '#4caf50';
    case 'nutrition': return '#ff9800';
    case 'finance': return '#2196f3';
    case 'productivity': return '#9c27b0';
    case 'meta': return '#607d8b';
    default: return '#757575';
  }
};

const getAgentInitial = (type: string): string => {
  switch (type) {
    case 'health': return 'S';
    case 'nutrition': return 'N';
    case 'finance': return 'F';
    case 'productivity': return 'P';
    case 'meta': return 'M';
    default: return 'A';
  }
};

const getAgentName = (type: string): string => {
  switch (type) {
    case 'health': return 'Saúde & Bem-estar';
    case 'nutrition': return 'Nutrição';
    case 'finance': return 'Finanças';
    case 'productivity': return 'Produtividade';
    case 'meta': return 'Meta Agente';
    default: return 'Agente Geral';
  }
};

export default AgentResponseDemo;
