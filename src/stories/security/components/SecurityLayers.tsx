// src/stories/security/components/SecurityLayers.tsx
import React from 'react';
import { SecurityLayer } from '../types';
import '../styles/theme.css';

interface SecurityLayersProps {
  title: string;
  layers: SecurityLayer[];
}

export const SecurityLayers: React.FC<SecurityLayersProps> = ({ title, layers }) => {
  const getLayerClass = (layerName: string) => {
    const name = layerName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return 'security-layer-auth';
    if (name.includes('autorização') || name.includes('authorization')) return 'security-layer-authorization';
    if (name.includes('performance') || name.includes('performance')) return 'security-layer-performance';
    if (name.includes('validação') || name.includes('validation')) return 'security-layer-validation';
    if (name.includes('monitoramento') || name.includes('monitoring')) return 'security-layer-monitoring';
    if (name.includes('dados') || name.includes('data')) return 'security-layer-data';
    return 'security-layer-card';
  };

  const getLayerIcon = (layerName: string) => {
    const name = layerName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return '🔐';
    if (name.includes('autorização') || name.includes('authorization')) return '👥';
    if (name.includes('performance') || name.includes('performance')) return '⚡';
    if (name.includes('validação') || name.includes('validation')) return '🔒';
    if (name.includes('monitoramento') || name.includes('monitoring')) return '📊';
    if (name.includes('dados') || name.includes('data')) return '💾';
    return '🛡️';
  };

  const getLayerDescription = (layerName: string) => {
    const name = layerName.toLowerCase();
    if (name.includes('autenticação') || name.includes('auth')) return 'Estratégias de autenticação e verificação de identidade';
    if (name.includes('autorização') || name.includes('authorization')) return 'Controle de acesso por roles e permissões';
    if (name.includes('performance') || name.includes('performance')) return 'Otimizações de performance e rate limiting';
    if (name.includes('validação') || name.includes('validation')) return 'Validação de dados e tokens';
    if (name.includes('monitoramento') || name.includes('monitoring')) return 'Monitoramento e logging de segurança';
    if (name.includes('dados') || name.includes('data')) return 'Proteção e criptografia de dados';
    return 'Camada de segurança do sistema';
  };

  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      <div className="security-layers-grid">
        {layers.map((layer, index) => (
          <div
            key={index}
            className={`security-layer-card ${getLayerClass(layer.name)}`}
          >
            <h3>
              {getLayerIcon(layer.name)} {layer.name}
            </h3>
            
            <p style={{ 
              color: 'inherit', 
              fontSize: '0.9rem', 
              marginBottom: '1rem',
              fontStyle: 'italic'
            }}>
              {getLayerDescription(layer.name)}
            </p>
            
            <ul>
              {layer.components.map((component, compIndex) => (
                <li key={compIndex}>{component}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="security-layers-summary">
        <h3>📊 Resumo das Camadas de Segurança</h3>
        
        <div className="security-layers-metrics">
          <div className="security-layer-metric auth">
            <div className="metric-value">{layers.filter(l => l.name.toLowerCase().includes('autenticação') || l.name.toLowerCase().includes('auth')).length}</div>
            <div className="metric-label">Autenticação</div>
          </div>
          
          <div className="security-layer-metric authorization">
            <div className="metric-value">{layers.filter(l => l.name.toLowerCase().includes('autorização') || l.name.toLowerCase().includes('authorization')).length}</div>
            <div className="metric-label">Autorização</div>
          </div>
          
          <div className="security-layer-metric performance">
            <div className="metric-value">{layers.filter(l => l.name.toLowerCase().includes('performance')).length}</div>
            <div className="metric-label">Performance</div>
          </div>
          
          <div className="security-layer-metric validation">
            <div className="metric-value">{layers.filter(l => l.name.toLowerCase().includes('validação') || l.name.toLowerCase().includes('validation')).length}</div>
            <div className="metric-label">Validação</div>
          </div>
          
          <div className="security-layer-metric monitoring">
            <div className="metric-value">{layers.filter(l => l.name.toLowerCase().includes('monitoramento') || l.name.toLowerCase().includes('monitoring')).length}</div>
            <div className="metric-label">Monitoramento</div>
          </div>
          
          <div className="security-layer-metric data">
            <div className="metric-value">{layers.filter(l => l.name.toLowerCase().includes('dados') || l.name.toLowerCase().includes('data')).length}</div>
            <div className="metric-label">Dados</div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          background: 'var(--security-bg-tertiary)', 
          borderRadius: '8px',
          border: '1px solid var(--security-border)'
        }}>
          <h4 style={{ 
            color: 'var(--security-text-primary)', 
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            🎯 Objetivos das Camadas
          </h4>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            color: 'var(--security-text-secondary)'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Proteção Completa:</strong> Múltiplas camadas de segurança</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Controle de Acesso:</strong> Autenticação e autorização robustas</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Validação de Dados:</strong> Verificação e sanitização</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Monitoramento:</strong> Logging e alertas em tempo real</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Performance:</strong> Otimização sem comprometer segurança</li>
            <li>✅ <strong>Conformidade:</strong> Atendimento a padrões de segurança</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
