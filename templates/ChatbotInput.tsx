// src/components/chatbot-collector/ChatbotInput.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChatInputProps } from './types';

/**
 * Componente para entrada de texto no chatbot
 */
export const ChatbotInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
  loading = false,
  placeholder = 'Digite sua mensagem...'
}) => {
  // Estado para conteúdo do input
  const [content, setContent] = useState('');
  
  // Referência para o textarea
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Ajusta altura do textarea de acordo com o conteúdo
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);
  
  // Handler para submissão de mensagem
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim() || disabled || loading) return;
    
    onSendMessage(content.trim());
    setContent('');
    
    // Reset da altura do textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };
  
  // Handler para tecla Enter (submete formulário)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return (
    <form 
      className={`chatbot-input ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        ref={textareaRef}
        className="input-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || loading}
        rows={1}
      />
      
      <button 
        type="submit" 
        className="send-button"
        disabled={disabled || loading || !content.trim()}
      >
        {loading ? (
          <span className="loading-indicator">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </span>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        )}
      </button>
    </form>
  );
};
