// src/stories/backend/components/IntegrationFlow.tsx
import React from 'react';
import '../styles/theme.css';

interface IntegrationStep {
  name: string;
  steps: string[];
  integrations: string[];
}

interface IntegrationFlowProps {
  title: string;
  description: string;
  flows: IntegrationStep[];
}

export const IntegrationFlow: React.FC<IntegrationFlowProps> = ({ 
  title, 
  description, 
  flows 
}) => {
  const getFlowClass = (flowName: string) => {
    const name = flowName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return 'backend-flow-auth';
    if (name.includes('pagamento') || name.includes('payment')) return 'backend-flow-payment';
    if (name.includes('analytics') || name.includes('dados')) return 'backend-flow-analytics';
    return 'backend-flow-card';
  };

  const getFlowIcon = (flowName: string) => {
    const name = flowName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return '🔐';
    if (name.includes('pagamento') || name.includes('payment')) return '💳';
    if (name.includes('analytics') || name.includes('dados')) return '📊';
    return '🔄';
  };

  return (
    <div className="backend-container">
      <h2 className="backend-subtitle">{title}</h2>
      <p className="backend-description">{description}</p>
      
      <div className="backend-flows-grid">
        {flows.map((flow, index) => (
          <div
            key={index}
            className={`backend-flow-card ${getFlowClass(flow.name)}`}
          >
            <div className="backend-flow-header">
              <h3 className="backend-flow-title">
                {getFlowIcon(flow.name)} {flow.name}
              </h3>
            </div>
            
            <div className="backend-flow-content">
              <div className="backend-flow-steps">
                <h4 className="backend-flow-steps-title">Passos do Fluxo:</h4>
                <ol className="backend-flow-steps-list">
                  {flow.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="backend-flow-step-item">
                      <span className="backend-flow-step-number">{stepIndex + 1}</span>
                      <span className="backend-flow-step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="backend-flow-integrations">
                <h4 className="backend-flow-integrations-title">Integrações:</h4>
                <div className="backend-flow-integrations-grid">
                  {flow.integrations.map((integration, intIndex) => (
                    <div key={intIndex} className="backend-flow-integration">
                      <span className="backend-flow-integration-icon">🔗</span>
                      <span className="backend-flow-integration-name">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="backend-flows-summary">
        <h3 className="backend-flows-summary-title">📊 Resumo dos Fluxos</h3>
        <div className="backend-flows-metrics">
          <div className="backend-flows-metric">
            <div className="backend-flows-metric-value">{flows.length}</div>
            <div className="backend-flows-metric-label">Fluxos</div>
          </div>
          <div className="backend-flows-metric">
            <div className="backend-flows-metric-value">
              {flows.reduce((acc, flow) => acc + flow.steps.length, 0)}
            </div>
            <div className="backend-flows-metric-label">Passos</div>
          </div>
          <div className="backend-flows-metric">
            <div className="backend-flows-metric-value">
              {flows.reduce((acc, flow) => acc + flow.integrations.length, 0)}
            </div>
            <div className="backend-flows-metric-label">Integrações</div>
          </div>
          <div className="backend-flows-metric">
            <div className="backend-flows-metric-value">Tempo Real</div>
            <div className="backend-flows-metric-label">Processamento</div>
          </div>
        </div>
      </div>
    </div>
  );
};
