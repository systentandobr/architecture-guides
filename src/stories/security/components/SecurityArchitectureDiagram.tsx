// src/stories/security/components/SecurityArchitectureDiagram.tsx
import React from 'react';
import '../styles/theme.css';

interface ArchitectureLayer {
  name: string;
  description: string;
  components: string[];
  technologies: string[];
  color: string;
  borderColor: string;
  height: string;
}

interface SecurityArchitectureDiagramProps {
  title: string;
  layers: ArchitectureLayer[];
}

export const SecurityArchitectureDiagram: React.FC<SecurityArchitectureDiagramProps> = ({ 
  title, 
  layers 
}) => {
  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.5rem', 
        margin: '2rem 0',
        background: 'var(--security-bg-secondary)',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid var(--security-border)'
      }}>
        {layers.map((layer, index) => (
          <div
            key={index}
            style={{
              border: `2px solid ${layer.borderColor}`,
              borderRadius: '8px',
              padding: '1.5rem',
              minHeight: layer.height,
              position: 'relative',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 className="security-high-contrast" style={{ margin: 0, fontSize: '1.25rem' }}>
                {layer.name}
              </h3>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.2)', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Camada {index + 1}
              </div>
            </div>
            
            <p className="security-text" style={{ marginBottom: '1rem', fontSize: '1rem' }}>
              {layer.description}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <h4 className="security-high-contrast" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Componentes:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {layer.components.map((component, compIndex) => (
                    <li key={compIndex} style={{ 
                      color: 'var(--security-text-secondary)',
                      fontSize: '0.875rem',
                      marginBottom: '0.25rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        left: 0, 
                        color: layer.borderColor,
                        fontWeight: 'bold'
                      }}>•</span>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="security-high-contrast" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Tecnologias:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {layer.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'var(--security-text-primary)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: `1px solid ${layer.borderColor}`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="security-card" style={{ marginTop: '2rem' }}>
        <h3 className="security-high-contrast">🔄 Fluxo de Dados</h3>
        <p className="security-text">
          Cada requisição passa por todas as camadas de segurança antes de chegar à aplicação de negócio. 
          Isso garante autenticação, autorização, validação e monitoramento completos.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '1rem',
          marginTop: '1rem',
          padding: '1rem',
          background: 'var(--security-bg-tertiary)',
          borderRadius: '8px'
        }}>
          <span style={{ color: 'var(--security-text-secondary)' }}>Cliente</span>
          <span style={{ color: 'var(--security-accent)', fontSize: '1.5rem' }}>→</span>
          <span style={{ color: 'var(--security-text-secondary)' }}>Gateway</span>
          <span style={{ color: 'var(--security-accent)', fontSize: '1.5rem' }}>→</span>
          <span style={{ color: 'var(--security-text-secondary)' }}>Autenticação</span>
          <span style={{ color: 'var(--security-accent)', fontSize: '1.5rem' }}>→</span>
          <span style={{ color: 'var(--security-text-secondary)' }}>Autorização</span>
          <span style={{ color: 'var(--security-accent)', fontSize: '1.5rem' }}>→</span>
          <span style={{ color: 'var(--security-text-secondary)' }}>Aplicação</span>
        </div>
      </div>
    </div>
  );
};
