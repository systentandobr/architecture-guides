// src/stories/backend/components/TechnologyStack.tsx
import React from 'react';
import '../styles/theme.css';

interface Technology {
  name: string;
  description: string;
  color: string;
  borderColor: string;
  icon: string;
  modules: string[];
  responsibilities: string[];
}

interface TechnologyStackProps {
  title: string;
  technologies: Technology[];
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({ title, technologies }) => {
  const getTechnologyClass = (techName: string) => {
    const name = techName.toLowerCase();
    if (name.includes('node') || name.includes('nestjs')) return 'backend-tech-nodejs';
    if (name.includes('golang') || name.includes('go')) return 'backend-tech-golang';
    if (name.includes('python')) return 'backend-tech-python';
    return 'backend-tech-card';
  };

  const getTechnologyIcon = (techName: string) => {
    const name = techName.toLowerCase();
    if (name.includes('node') || name.includes('nestjs')) return '🟢';
    if (name.includes('golang') || name.includes('go')) return '🔵';
    if (name.includes('python')) return '🐍';
    return '⚙️';
  };

  return (
    <div className="backend-container">
      <h2 className="backend-subtitle">{title}</h2>
      
      <div className="backend-tech-grid">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`backend-tech-card ${getTechnologyClass(tech.name)}`}
          >
            <div className="backend-tech-header">
              <h3 className="backend-tech-title">
                {getTechnologyIcon(tech.name)} {tech.name}
              </h3>
              <p className="backend-tech-description">{tech.description}</p>
            </div>
            
            <div className="backend-tech-content">
              <div className="backend-tech-section">
                <h4 className="backend-tech-section-title">📦 Módulos</h4>
                <ul className="backend-tech-list">
                  {tech.modules.map((module, modIndex) => (
                    <li key={modIndex} className="backend-tech-list-item">
                      <span className="backend-tech-icon">📦</span>
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="backend-tech-section">
                <h4 className="backend-tech-section-title">🎯 Responsabilidades</h4>
                <ul className="backend-tech-list">
                  {tech.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="backend-tech-list-item">
                      <span className="backend-tech-icon">🎯</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="backend-tech-summary">
        <h3 className="backend-tech-summary-title">📊 Resumo das Tecnologias</h3>
        <div className="backend-tech-metrics">
          <div className="backend-tech-metric">
            <div className="backend-tech-metric-value">{technologies.length}</div>
            <div className="backend-tech-metric-label">Tecnologias</div>
          </div>
          <div className="backend-tech-metric">
            <div className="backend-tech-metric-value">
              {technologies.reduce((acc, tech) => acc + tech.modules.length, 0)}
            </div>
            <div className="backend-tech-metric-label">Módulos</div>
          </div>
          <div className="backend-tech-metric">
            <div className="backend-tech-metric-value">Microserviços</div>
            <div className="backend-tech-metric-label">Arquitetura</div>
          </div>
          <div className="backend-tech-metric">
            <div className="backend-tech-metric-value">Docker</div>
            <div className="backend-tech-metric-label">Containerização</div>
          </div>
        </div>
      </div>
    </div>
  );
};
