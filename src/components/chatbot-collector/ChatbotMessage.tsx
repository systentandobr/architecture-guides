import React from 'react';
import { ChatMessageProps, MessageRole } from './types';

export const ChatbotMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  onSuggestedPromptClick 
}) => {
  const isUser = message.role === MessageRole.USER;
  const isError = message.role === MessageRole.ERROR;
  
  // Formatação simples da data para exibição
  const formattedTime = message.timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const handleSuggestedPromptClick = (prompt: string) => {
    if (onSuggestedPromptClick) {
      onSuggestedPromptClick(prompt);
    }
  };

  return (
    <div 
      className={`chat-message ${isUser ? 'user-message' : 'assistant-message'} ${isError ? 'error-message' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '80%',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#3b82f6' : (isError ? '#ef4444' : '#1f2937'),
        color: '#ffffff',
        borderRadius: '12px',
        padding: '12px 16px',
        margin: '8px 0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      }}
    >
      <div 
        className="message-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '4px',
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <span>{isUser ? 'Você' : 'Assistente'}</span>
        <span>{formattedTime}</span>
      </div>
      
      <div 
        className="message-content"
        style={{
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
        }}
      >
        {message.content}
      </div>
      
      {message.suggestedPrompts && message.suggestedPrompts.length > 0 && (
        <div 
          className="suggested-prompts"
          style={{
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {message.suggestedPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleSuggestedPromptClick(prompt)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {prompt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatbotMessage;
