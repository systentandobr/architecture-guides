// src/components/chatbot-collector/ChatbotMessage.tsx
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChatMessageProps, MessageRole } from './types';

/**
 * Componente que renderiza uma mensagem individual no chat
 */
export const ChatbotMessage: React.FC<ChatMessageProps> = ({
  message,
  onSuggestedPromptClick
}) => {
  const isUser = message.role === MessageRole.USER;
  const formattedTime = formatDistanceToNow(new Date(message.timestamp), {
    addSuffix: true,
    locale: ptBR
  });
  
  return (
    <div 
      className={`chatbot-message ${isUser ? 'user-message' : 'assistant-message'}`}
    >
      <div className="message-avatar">
        {isUser ? (
          <div className="user-avatar">U</div>
        ) : (
          <div className="assistant-avatar">A</div>
        )}
      </div>
      
      <div className="message-content">
        <div className="message-header">
          <span className="message-sender">
            {isUser ? 'Você' : 'Assistente'}
          </span>
          <span className="message-time">{formattedTime}</span>
        </div>
        
        <div className="message-text">
          {/* Converte quebras de linha em <br> */}
          {message.content.split('\n').map((text, i) => (
            <React.Fragment key={i}>
              {text}
              {i !== message.content.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        
        {/* Renderiza os prompts sugeridos, se houver */}
        {!isUser && message.suggestedPrompts && message.suggestedPrompts.length > 0 && (
          <div className="suggested-prompts">
            <div className="prompt-label">Sugestões:</div>
            <div className="prompt-buttons">
              {message.suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="prompt-button"
                  onClick={() => onSuggestedPromptClick && onSuggestedPromptClick(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
