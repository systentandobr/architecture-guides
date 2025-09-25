// src/stories/backend/components/TechnologyIntegration.tsx
import React from 'react';
import '../styles/theme.css';

interface Integration {
  name: string;
  description: string;
  protocol: string;
  dataFormat: string;
  useCase: string;
}

interface TechnologyIntegrationProps {
  title: string;
  description: string;
  integrations: Integration[];
}

export const TechnologyIntegration: React.FC<TechnologyIntegrationProps> = ({ 
  title, 
  description, 
  integrations 
}) => {
  const getIntegrationClass = (integrationName: string) => {
    const name = integrationName.toLowerCase();
    if (name.includes('node') && name.includes('golang')) return 'backend-integration-node-golang';
    if (name.includes('node') && name.includes('python')) return 'backend-integration-node-python';
    if (name.includes('golang') && name.includes('python')) return 'backend-integration-golang-python';
    if (name.includes('mongodb')) return 'backend-integration-database';
    if (name.includes('redis')) return 'backend-integration-cache';
    return 'backend-integration-card';
  };

  const getIntegrationIcon = (integrationName: string) => {
    const name = integrationName.toLowerCase();
    if (name.includes('node') && name.includes('golang')) return '🟢🔵';
    if (name.includes('node') && name.includes('python')) return '🟢🐍';
    if (name.includes('golang') && name.includes('python')) return '🔵🐍';
    if (name.includes('mongodb')) return '🍃';
    if (name.includes('redis')) return '🔴';
    return '🔗';
  };

  return (
    <div className="backend-container">
      <h2 className="backend-subtitle">{title}</h2>
      <p className="backend-description">{description}</p>
      
      <div className="backend-integrations-grid">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className={`backend-integration-card ${getIntegrationClass(integration.name)}`}
          >
            <div className="backend-integration-header">
              <h3 className="backend-integration-title">
                {getIntegrationIcon(integration.name)} {integration.name}
              </h3>
              <p className="backend-integration-description">{integration.description}</p>
            </div>
            
            <div className="backend-integration-details">
              <div className="backend-integration-detail">
                <h4 className="backend-integration-detail-title">Protocolo:</h4>
                <span className="backend-integration-detail-value">{integration.protocol}</span>
              </div>
              
              <div className="backend-integration-detail">
                <h4 className="backend-integration-detail-title">Formato de Dados:</h4>
                <span className="backend-integration-detail-value">{integration.dataFormat}</span>
              </div>
              
              <div className="backend-integration-detail">
                <h4 className="backend-integration-detail-title">Caso de Uso:</h4>
                <span className="backend-integration-detail-value">{integration.useCase}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="backend-integrations-summary">
        <h3 className="backend-integrations-summary-title">📊 Resumo das Integrações</h3>
        <div className="backend-integrations-metrics">
          <div className="backend-integrations-metric">
            <div className="backend-integrations-metric-value">{integrations.length}</div>
            <div className="backend-integrations-metric-label">Integrações</div>
          </div>
          <div className="backend-integrations-metric">
            <div className="backend-integrations-metric-value">HTTP/REST</div>
            <div className="backend-integrations-metric-label">Protocolo Principal</div>
          </div>
          <div className="backend-integrations-metric">
            <div className="backend-integrations-metric-value">JSON</div>
            <div className="backend-integrations-metric-label">Formato Principal</div>
          </div>
          <div className="backend-integrations-metric">
            <div className="backend-integrations-metric-value">Tempo Real</div>
            <div className="backend-integrations-metric-label">Comunicação</div>
          </div>
        </div>
      </div>
    </div>
  );
};
