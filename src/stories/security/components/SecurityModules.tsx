// src/stories/security/components/SecurityModules.tsx
import React from 'react';
import '../styles/theme.css';

interface SecurityModule {
  name: string;
  level: string;
  domains: string[];
  permissions: string[];
  description: string;
  capabilities: string[];
}

interface SecurityModulesProps {
  title: string;
  modules: SecurityModule[];
}

export const SecurityModules: React.FC<SecurityModulesProps> = ({ title, modules }) => {
  const getModuleClass = (moduleName: string) => {
    const name = moduleName.toLowerCase();
    if (name.includes('auth')) return 'security-module-auth';
    if (name.includes('user')) return 'security-module-users';
    if (name.includes('role')) return 'security-module-roles';
    if (name.includes('token')) return 'security-module-tokens';
    if (name.includes('device')) return 'security-module-devices';
    if (name.includes('domain')) return 'security-module-domains';
    return 'security-module-card';
  };

  const getModuleIcon = (moduleName: string) => {
    const name = moduleName.toLowerCase();
    if (name.includes('auth')) return '🔐';
    if (name.includes('user')) return '👥';
    if (name.includes('role')) return '👑';
    if (name.includes('token')) return '🔑';
    if (name.includes('device')) return '📱';
    if (name.includes('domain')) return '🌐';
    return '⚙️';
  };

  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      <div className="security-modules-grid">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`security-module-card ${getModuleClass(module.name)}`}
          >
            <h3>
              {getModuleIcon(module.name)} {module.name}
            </h3>
            
            <p>{module.description}</p>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 className="security-high-contrast" style={{ 
                fontSize: '0.9rem', 
                marginBottom: '0.5rem',
                color: 'inherit'
              }}>
                Nível: {module.level}
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'inherit',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  Domínios: {module.domains.join(', ')}
                </span>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'inherit',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  Permissões: {module.permissions.join(', ')}
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="security-high-contrast" style={{ 
                fontSize: '0.9rem', 
                marginBottom: '0.5rem',
                color: 'inherit'
              }}>
                Capacidades:
              </h4>
              <ul>
                {module.capabilities.map((capability, capIndex) => (
                  <li key={capIndex}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="security-card" style={{ marginTop: '2rem' }}>
        <h3 className="security-high-contrast">📊 Resumo dos Módulos</h3>
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
              {modules.length}
            </div>
            <div className="security-text">Módulos</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-accent)',
              marginBottom: '0.5rem'
            }}>
              Core
            </div>
            <div className="security-text">Nível</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-warning)',
              marginBottom: '0.5rem'
            }}>
              All
            </div>
            <div className="security-text">Domínios</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: 'var(--security-info)',
              marginBottom: '0.5rem'
            }}>
              RBAC
            </div>
            <div className="security-text">Sistema</div>
          </div>
        </div>
      </div>
    </div>
  );
};
