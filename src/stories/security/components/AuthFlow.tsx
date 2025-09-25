// src/stories/security/components/AuthFlow.tsx
import React from 'react';
import { AuthFlowStep } from '../types';
import '../styles/theme.css';

interface AuthFlowProps {
  title: string;
  steps: AuthFlowStep[];
}

export const AuthFlow: React.FC<AuthFlowProps> = ({ title, steps }) => {
  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      {steps.map((step, index) => (
        <div key={index} className="security-card">
          <h3 className="security-high-contrast">{step.step}. {step.title}</h3>
          <p className="security-text">{step.description}</p>
          
          {step.participants && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
              {step.participants.map((participant, partIndex) => (
                <React.Fragment key={partIndex}>
                  <div style={{
                    background: 'var(--security-bg-tertiary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid var(--security-border)',
                    color: 'var(--security-text-primary)'
                  }}>
                    <strong>{participant}</strong>
                  </div>
                  {partIndex < step.participants.length - 1 && <span style={{ color: 'var(--security-text-secondary)' }}>→</span>}
                </React.Fragment>
              ))}
            </div>
          )}
          
          {step.request && (
            <pre className="security-code">
              <code>{step.request}</code>
            </pre>
          )}
          
          {step.response && (
            <pre className="security-code">
              <code>{step.response}</code>
            </pre>
          )}
          
          {step.validations && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <h4 className="security-high-contrast">Validações Realizadas:</h4>
                <ul className="security-list">
                  {step.validations.map((validation, valIndex) => (
                    <li key={valIndex}>{validation}</li>
                  ))}
                </ul>
              </div>
              {step.tokens && (
                <div>
                  <h4 className="security-high-contrast">Tokens Gerados:</h4>
                  <ul className="security-list">
                    {step.tokens.map((token, tokenIndex) => (
                      <li key={tokenIndex}>{token}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
