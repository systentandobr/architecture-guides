// src/stories/backend/components/BackendOverview.tsx
import React from 'react';
import '../styles/theme.css';

interface BackendOverviewProps {
  title: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export const BackendOverview: React.FC<BackendOverviewProps> = ({ 
  title, 
  description, 
  technologies, 
  responsibilities 
}) => {
  return (
    <div className="backend-container">
      <h1 className="backend-title">{title}</h1>
      <p className="backend-description">{description}</p>
      
      <div className="backend-sections">
        <div className="backend-section">
          <h2 className="backend-subtitle">🛠️ Tecnologias Utilizadas</h2>
          <ul className="backend-list">
            {technologies.map((tech, index) => (
              <li key={index} className="backend-list-item">
                <span className="backend-icon">✅</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="backend-section">
          <h2 className="backend-subtitle">🎯 Principais Responsabilidades</h2>
          <ul className="backend-list">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="backend-list-item">
                <span className="backend-icon">🎯</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="backend-highlights">
        <div className="backend-highlight">
          <h3 className="backend-highlight-title">📊 Métricas do Sistema</h3>
          <div className="backend-metrics">
            <div className="backend-metric">
              <div className="backend-metric-value">3</div>
              <div className="backend-metric-label">Tecnologias</div>
            </div>
            <div className="backend-metric">
              <div className="backend-metric-value">8+</div>
              <div className="backend-metric-label">Microserviços</div>
            </div>
            <div className="backend-metric">
              <div className="backend-metric-value">100%</div>
              <div className="backend-metric-label">Containerizado</div>
            </div>
            <div className="backend-metric">
              <div className="backend-metric-value">24/7</div>
              <div className="backend-metric-label">Disponibilidade</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
