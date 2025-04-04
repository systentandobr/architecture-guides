import React, { useState, useRef, useEffect } from 'react';
import { ChatbotMessage } from './ChatbotMessage';
import { Message, MessageRole, DataSchema } from './types';

interface ChatbotCollectorProps {
  agentType: 'health' | 'nutrition' | 'finance' | 'productivity';
  flowId: string;
  welcomeMessage: string;
  dataSchema: DataSchema;
  onDataSubmit?: (data: any) => void;
  onMessageSend?: (message: string) => void;
}

export const ChatbotCollector: React.FC<ChatbotCollectorProps> = ({
  agentType,
  flowId,
  welcomeMessage,
  dataSchema,
  onDataSubmit,
  onMessageSend,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Inicializar o chat com a mensagem de boas-vindas
  useEffect(() => {
    const welcomeMsg: Message = {
      id: 'welcome',
      role: MessageRole.ASSISTANT,
      content: welcomeMessage,
      timestamp: new Date(),
    };
    setMessages([welcomeMsg]);
  }, [welcomeMessage]);

  // Rolar para a mensagem mais recente
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: `user-${messages.length}`,
      role: MessageRole.USER,
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Chamar o callback se estiver definido
    if (onMessageSend) {
      onMessageSend(inputValue);
    }

    // Simular resposta do assistente após um pequeno delay
    setTimeout(() => {
      const assistantResponse = generateResponse(inputValue, agentType);
      setMessages(currentMessages => [...currentMessages, assistantResponse]);
    }, 1000);
  };

  const generateResponse = (userInput: string, type: string): Message => {
    // Simular diferentes respostas com base no tipo de agente
    let responseContent = '';
    let suggestedPrompts = undefined;

    switch (type) {
      case 'health':
        responseContent = 'Entendo suas preocupações com a saúde. Poderia me contar mais sobre seus sintomas ou objetivos?';
        suggestedPrompts = ['Tenho dores frequentes', 'Quero melhorar meu condicionamento', 'Preciso de dicas para dormir melhor'];
        break;
      case 'nutrition':
        responseContent = 'Alimentação é fundamental para o bem-estar. Vamos conversar sobre seus hábitos alimentares?';
        suggestedPrompts = ['Como é minha dieta atual', 'Tenho restrições alimentares', 'Quero perder peso'];
        break;
      case 'finance':
        responseContent = 'Finanças pessoais podem ser desafiadoras. Em qual área você gostaria de focar?';
        suggestedPrompts = ['Controle de gastos', 'Investimentos', 'Planejamento para aposentadoria'];
        break;
      case 'productivity':
        responseContent = 'Entendo que você está tendo dificuldades com foco. Vamos identificar os principais fatores que afetam sua produtividade.';
        suggestedPrompts = ['Distrações frequentes', 'Gerenciamento de tempo', 'Ambiente de trabalho'];
        break;
      default:
        responseContent = 'Como posso ajudar você hoje?';
    }

    return {
      id: `assistant-${messages.length}`,
      role: MessageRole.ASSISTANT,
      content: responseContent,
      timestamp: new Date(),
      suggestedPrompts: suggestedPrompts,
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedPromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#121212',
      color: '#ffffff',
    }}>
      {/* Cabeçalho */}
      <div style={{
        padding: '16px',
        borderBottom: '1px solid #333',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '12px',
        }}>
          {agentType.charAt(0).toUpperCase()}
        </div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Assistente {agentType.charAt(0).toUpperCase() + agentType.slice(1)}</div>
          <div style={{ fontSize: '12px', opacity: 0.7 }}>Online agora</div>
        </div>
      </div>

      {/* Área de mensagens */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor: '#121212',
      }}>
        {messages.map((message) => (
          <ChatbotMessage
            key={message.id}
            message={message}
            onSuggestedPromptClick={handleSuggestedPromptClick}
          />
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Área de input */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid #333',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        gap: '8px',
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '24px',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            fontSize: '14px',
          }}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: inputValue.trim() ? '#3b82f6' : '#555',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
          }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ChatbotCollector;
