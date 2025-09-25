// src/stories/backend/components/APIDocumentation.tsx
import React from 'react';
import '../styles/theme.css';

interface Endpoint {
  method: string;
  path: string;
  description: string;
  parameters: string[];
  response: string;
}

interface APIDocumentationProps {
  title: string;
  description: string;
  endpoints: Endpoint[];
  businessRules: string[];
  integrations: string[];
}

export const APIDocumentation: React.FC<APIDocumentationProps> = ({ 
  title, 
  description, 
  endpoints, 
  businessRules, 
  integrations 
}) => {
  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET': return '#48bb78';
      case 'POST': return '#4299e1';
      case 'PUT': return '#ed8936';
      case 'DELETE': return '#f56565';
      default: return '#a0aec0';
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET': return '📥';
      case 'POST': return '📤';
      case 'PUT': return '🔄';
      case 'DELETE': return '🗑️';
      default: return '⚙️';
    }
  };

  return (
    <div className="backend-container">
      <h2 className="backend-subtitle">{title}</h2>
      <p className="backend-description">{description}</p>
      
      <div className="backend-api-sections">
        <div className="backend-api-section">
          <h3 className="backend-api-section-title">🔗 Endpoints</h3>
          <div className="backend-endpoints-grid">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="backend-endpoint-card">
                <div className="backend-endpoint-header">
                  <span 
                    className="backend-endpoint-method"
                    style={{ backgroundColor: getMethodColor(endpoint.method) }}
                  >
                    {getMethodIcon(endpoint.method)} {endpoint.method}
                  </span>
                  <span className="backend-endpoint-path">{endpoint.path}</span>
                </div>
                <p className="backend-endpoint-description">{endpoint.description}</p>
                
                <div className="backend-endpoint-details">
                  <div className="backend-endpoint-parameters">
                    <h4 className="backend-endpoint-detail-title">Parâmetros:</h4>
                    <div className="backend-endpoint-params-list">
                      {endpoint.parameters.map((param, paramIndex) => (
                        <span key={paramIndex} className="backend-endpoint-param">
                          {param}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="backend-endpoint-response">
                    <h4 className="backend-endpoint-detail-title">Resposta:</h4>
                    <span className="backend-endpoint-response-type">{endpoint.response}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="backend-api-section">
          <h3 className="backend-api-section-title">📋 Regras de Negócio</h3>
          <ul className="backend-api-rules-list">
            {businessRules.map((rule, index) => (
              <li key={index} className="backend-api-rule-item">
                <span className="backend-api-rule-icon">✅</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="backend-api-section">
          <h3 className="backend-api-section-title">🔗 Integrações</h3>
          <div className="backend-api-integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="backend-api-integration-card">
                <span className="backend-api-integration-icon">🔗</span>
                <span className="backend-api-integration-name">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="backend-api-summary">
        <h3 className="backend-api-summary-title">📊 Resumo da API</h3>
        <div className="backend-api-metrics">
          <div className="backend-api-metric">
            <div className="backend-api-metric-value">{endpoints.length}</div>
            <div className="backend-api-metric-label">Endpoints</div>
          </div>
          <div className="backend-api-metric">
            <div className="backend-api-metric-value">{businessRules.length}</div>
            <div className="backend-api-metric-label">Regras</div>
          </div>
          <div className="backend-api-metric">
            <div className="backend-api-metric-value">{integrations.length}</div>
            <div className="backend-api-metric-label">Integrações</div>
          </div>
          <div className="backend-api-metric">
            <div className="backend-api-metric-value">RESTful</div>
            <div className="backend-api-metric-label">Arquitetura</div>
          </div>
        </div>
      </div>
    </div>
  );
};
