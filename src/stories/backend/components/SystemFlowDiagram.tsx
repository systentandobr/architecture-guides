// src/stories/backend/components/SystemFlowDiagram.tsx
import React from 'react';
import '../styles/theme.css';

interface FlowStep {
  name: string;
  steps: string[];
  technologies: string[];
}

interface SystemFlowDiagramProps {
  title: string;
  description: string;
  flows: FlowStep[];
}

export const SystemFlowDiagram: React.FC<SystemFlowDiagramProps> = ({ 
  title, 
  description, 
  flows 
}) => {
  const getFlowClass = (flowName: string) => {
    const name = flowName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return 'backend-flow-auth';
    if (name.includes('financeira') || name.includes('financial')) return 'backend-flow-financial';
    if (name.includes('ia') || name.includes('ml') || name.includes('ai')) return 'backend-flow-ai';
    return 'backend-flow-card';
  };

  const getFlowIcon = (flowName: string) => {
    const name = flowName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return '🔐';
    if (name.includes('financeira') || name.includes('financial')) return '💰';
    if (name.includes('ia') || name.includes('ml') || name.includes('ai')) return '🤖';
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
              
              <div className="backend-flow-technologies">
                <h4 className="backend-flow-technologies-title">Tecnologias:</h4>
                <div className="backend-flow-technologies-grid">
                  {flow.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="backend-flow-technology">
                      <span className="backend-flow-technology-icon">⚙️</span>
                      <span className="backend-flow-technology-name">{tech}</span>
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
              {flows.reduce((acc, flow) => acc + flow.technologies.length, 0)}
            </div>
            <div className="backend-flows-metric-label">Tecnologias</div>
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
