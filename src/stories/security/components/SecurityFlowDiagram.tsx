// src/stories/security/components/SecurityFlowDiagram.tsx
import React from 'react';
import '../styles/theme.css';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  participants: string[];
  request?: string;
  response?: string;
  validations?: string[];
  tokens?: string[];
  position: { x: number; y: number };
  color: string;
  backgroundColor: string;
  borderColor: string;
}

interface SecurityFlowDiagramProps {
  title: string;
  steps: FlowStep[];
}

export const SecurityFlowDiagram: React.FC<SecurityFlowDiagramProps> = ({ 
  title, 
  steps 
}) => {
  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      {/* Fluxo Linear Melhorado */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '2rem 0',
        background: 'var(--security-bg-secondary)',
        borderRadius: '12px',
        padding: '2rem',
        border: '2px solid var(--security-border)',
        position: 'relative'
      }}>
        {/* Linha de conexão vertical */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '2rem',
          bottom: '2rem',
          width: '4px',
          background: 'linear-gradient(to bottom, var(--security-accent), var(--security-success))',
          borderRadius: '2px',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />
        
        {/* Steps em layout linear */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Número da etapa */}
            <div style={{
              flexShrink: 0,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: step.backgroundColor,
              border: `4px solid ${step.borderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            >
              {index + 1}
            </div>
            
            {/* Conteúdo da etapa */}
            <div style={{
              flex: 1,
              background: 'var(--security-bg-primary)',
              border: `2px solid ${step.borderColor}`,
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
            >
              {/* Header da etapa */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h3 className="security-high-contrast" style={{ 
                  margin: 0, 
                  fontSize: '1.25rem',
                  color: step.borderColor
                }}>
                  {step.title}
                </h3>
                <div style={{
                  background: step.backgroundColor,
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Etapa {index + 1}
                </div>
              </div>
              
              {/* Objetivo da etapa */}
              <div style={{
                background: 'var(--security-bg-tertiary)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                borderLeft: `4px solid ${step.borderColor}`
              }}>
                <h4 className="security-high-contrast" style={{ 
                  fontSize: '1rem', 
                  marginBottom: '0.5rem',
                  color: step.borderColor
                }}>
                  🎯 Objetivo:
                </h4>
                <p className="security-text" style={{ 
                  margin: 0, 
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {step.description}
                </p>
              </div>
              
              {/* Grid de informações */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem' 
              }}>
                {/* Participantes */}
                {step.participants && (
                  <div>
                    <h4 className="security-high-contrast" style={{ 
                      fontSize: '0.9rem', 
                      marginBottom: '0.5rem',
                      color: step.borderColor
                    }}>
                      👥 Participantes:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {step.participants.map((participant, partIndex) => (
                        <span
                          key={partIndex}
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'var(--security-text-primary)',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            border: `1px solid ${step.borderColor}`
                          }}
                        >
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Validações */}
                {step.validations && (
                  <div>
                    <h4 className="security-high-contrast" style={{ 
                      fontSize: '0.9rem', 
                      marginBottom: '0.5rem',
                      color: step.borderColor
                    }}>
                      ✅ Validações:
                    </h4>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '0.8rem'
                    }}>
                      {step.validations.slice(0, 4).map((validation, valIndex) => (
                        <li key={valIndex} style={{ 
                          color: 'var(--security-text-secondary)',
                          marginBottom: '0.25rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}>
                          <span style={{ 
                            position: 'absolute', 
                            left: 0, 
                            color: '#10b981',
                            fontWeight: 'bold'
                          }}>✓</span>
                          {validation}
                        </li>
                      ))}
                      {step.validations.length > 4 && (
                        <li style={{ 
                          color: 'var(--security-text-muted)',
                          fontSize: '0.75rem',
                          fontStyle: 'italic'
                        }}>
                          +{step.validations.length - 4} mais...
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
                {/* Tokens */}
                {step.tokens && (
                  <div>
                    <h4 className="security-high-contrast" style={{ 
                      fontSize: '0.9rem', 
                      marginBottom: '0.5rem',
                      color: step.borderColor
                    }}>
                      🔑 Tokens:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                      {step.tokens.map((token, tokenIndex) => (
                        <span
                          key={tokenIndex}
                          style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#10b981',
                            padding: '0.2rem 0.4rem',
                            borderRadius: '3px',
                            fontSize: '0.7rem',
                            fontWeight: '500',
                            border: '1px solid #10b981'
                          }}
                        >
                          {token}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Resumo Executivo do Fluxo */}
      <div className="security-card" style={{ marginTop: '2rem' }}>
        <h3 className="security-high-contrast">📋 Resumo Executivo do Fluxo</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          <div style={{
            background: 'var(--security-bg-tertiary)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--security-accent)'
          }}>
            <h4 className="security-high-contrast" style={{ 
              fontSize: '1.1rem', 
              marginBottom: '0.75rem',
              color: 'var(--security-accent)'
            }}>
              🎯 Objetivo Geral
            </h4>
            <p className="security-text" style={{ margin: 0, lineHeight: '1.5' }}>
              Este fluxo garante que apenas usuários autenticados e autorizados tenham acesso aos recursos do sistema, 
              com validações em múltiplas camadas de segurança.
            </p>
          </div>
          
          <div style={{
            background: 'var(--security-bg-tertiary)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--security-success)'
          }}>
            <h4 className="security-high-contrast" style={{ 
              fontSize: '1.1rem', 
              marginBottom: '0.75rem',
              color: 'var(--security-success)'
            }}>
              ⚡ Performance
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              fontSize: '0.9rem'
            }}>
              <li style={{ marginBottom: '0.5rem', color: 'var(--security-text-secondary)' }}>
                ✓ Cache inteligente para validação de tokens
              </li>
              <li style={{ marginBottom: '0.5rem', color: 'var(--security-text-secondary)' }}>
                ✓ Rate limiting para prevenir ataques
              </li>
              <li style={{ marginBottom: '0.5rem', color: 'var(--security-text-secondary)' }}>
                ✓ Validações paralelas quando possível
              </li>
            </ul>
          </div>
          
          <div style={{
            background: 'var(--security-bg-tertiary)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--security-warning)'
          }}>
            <h4 className="security-high-contrast" style={{ 
              fontSize: '1.1rem', 
              marginBottom: '0.75rem',
              color: 'var(--security-warning)'
            }}>
              🛡️ Segurança
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              fontSize: '0.9rem'
            }}>
              <li style={{ marginBottom: '0.5rem', color: 'var(--security-text-secondary)' }}>
                ✓ Múltiplas camadas de validação
              </li>
              <li style={{ marginBottom: '0.5rem', color: 'var(--security-text-secondary)' }}>
                ✓ Controle granular de permissões
              </li>
              <li style={{ marginBottom: '0.5rem', color: 'var(--security-text-secondary)' }}>
                ✓ Monitoramento em tempo real
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="security-card" style={{ marginTop: '2rem' }}>
        <h3 className="security-high-contrast">📊 Métricas de Segurança</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-success)',
              marginBottom: '0.5rem'
            }}>
              99.9%
            </div>
            <div className="security-text">Uptime</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-accent)',
              marginBottom: '0.5rem'
            }}>
              &lt;50ms
            </div>
            <div className="security-text">Latência</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-warning)',
              marginBottom: '0.5rem'
            }}>
              100/min
            </div>
            <div className="security-text">Rate Limit</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-info)',
              marginBottom: '0.5rem'
            }}>
              24/7
            </div>
            <div className="security-text">Monitoramento</div>
          </div>
        </div>
      </div>
    </div>
  );
};
