// src/stories/backend/components/ArchitectureDiagram.tsx
import React from 'react';
import '../styles/theme.css';

interface ArchitectureLayer {
  name: string;
  description: string;
  components: string[];
  color: string;
  borderColor: string;
}

interface ArchitectureDiagramProps {
  title: string;
  description: string;
  layers: ArchitectureLayer[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ 
  title, 
  description, 
  layers 
}) => {
  const getLayerClass = (layerName: string) => {
    const name = layerName.toLowerCase();
    if (name.includes('gateway') || name.includes('api')) return 'backend-layer-gateway';
    if (name.includes('microserviços') || name.includes('microservices')) return 'backend-layer-microservices';
    if (name.includes('persistência') || name.includes('persistence')) return 'backend-layer-persistence';
    if (name.includes('integrações') || name.includes('integrations')) return 'backend-layer-integrations';
    return 'backend-layer-card';
  };

  const getLayerIcon = (layerName: string) => {
    const name = layerName.toLowerCase();
    if (name.includes('gateway') || name.includes('api')) return '🌐';
    if (name.includes('microserviços') || name.includes('microservices')) return '🔧';
    if (name.includes('persistência') || name.includes('persistence')) return '💾';
    if (name.includes('integrações') || name.includes('integrations')) return '🔗';
    return '🏗️';
  };

  return (
    <div className="backend-container">
      <h2 className="backend-subtitle">{title}</h2>
      <p className="backend-description">{description}</p>
      
      <div className="backend-architecture-layers">
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`backend-layer-card ${getLayerClass(layer.name)}`}
          >
            <div className="backend-layer-header">
              <h3 className="backend-layer-title">
                {getLayerIcon(layer.name)} {layer.name}
              </h3>
              <p className="backend-layer-description">{layer.description}</p>
            </div>
            
            <div className="backend-layer-components">
              <h4 className="backend-layer-components-title">Componentes:</h4>
              <div className="backend-layer-components-grid">
                {layer.components.map((component, compIndex) => (
                  <div key={compIndex} className="backend-layer-component">
                    <span className="backend-layer-component-icon">⚙️</span>
                    <span className="backend-layer-component-name">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="backend-architecture-flow">
        <h3 className="backend-architecture-flow-title">🔄 Fluxo de Dados</h3>
        <div className="backend-architecture-flow-diagram">
          <div className="backend-flow-step">
            <div className="backend-flow-step-number">1</div>
            <div className="backend-flow-step-content">
              <h4>Cliente</h4>
              <p>Frontend/Mobile</p>
            </div>
          </div>
          <div className="backend-flow-arrow">→</div>
          <div className="backend-flow-step">
            <div className="backend-flow-step-number">2</div>
            <div className="backend-flow-step-content">
              <h4>API Gateway</h4>
              <p>Nginx + Load Balancer</p>
            </div>
          </div>
          <div className="backend-flow-arrow">→</div>
          <div className="backend-flow-step">
            <div className="backend-flow-step-number">3</div>
            <div className="backend-flow-step-content">
              <h4>Microserviços</h4>
              <p>Node.js + Golang + Python</p>
            </div>
          </div>
          <div className="backend-flow-arrow">→</div>
          <div className="backend-flow-step">
            <div className="backend-flow-step-number">4</div>
            <div className="backend-flow-step-content">
              <h4>Persistência</h4>
              <p>MongoDB + Redis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
