// src/stories/security/components/SecurityMetrics.tsx
import React from 'react';
import '../styles/theme.css';

interface Metric {
  name: string;
  value: string;
  unit: string;
  status: 'success' | 'warning' | 'error' | 'info';
  description: string;
  trend?: 'up' | 'down' | 'stable';
}

interface SecurityMetricsProps {
  title: string;
  metrics: Metric[];
}

export const SecurityMetrics: React.FC<SecurityMetricsProps> = ({ title, metrics }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return '#10b981';
      case 'warning': return '#f59e0b';
      case 'error': return '#ef4444';
      case 'info': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '';
    }
  };

  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        margin: '2rem 0'
      }}>
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="security-card"
            style={{
              borderLeft: `4px solid ${getStatusColor(metric.status)}`,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h3 className="security-high-contrast" style={{ margin: 0, fontSize: '1.1rem' }}>
                {metric.name}
              </h3>
              <div style={{
                background: getStatusColor(metric.status),
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {metric.status}
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'baseline', 
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <span style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: getStatusColor(metric.status)
              }}>
                {metric.value}
              </span>
              <span className="security-text" style={{ fontSize: '1rem' }}>
                {metric.unit}
              </span>
              {metric.trend && (
                <span style={{ fontSize: '1.2rem' }}>
                  {getTrendIcon(metric.trend)}
                </span>
              )}
            </div>
            
            <p className="security-text" style={{ 
              fontSize: '0.9rem',
              lineHeight: '1.4',
              margin: 0
            }}>
              {metric.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="security-card" style={{ marginTop: '2rem' }}>
        <h3 className="security-high-contrast">📊 Monitoramento em Tempo Real</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'var(--security-success)',
              marginBottom: '0.5rem'
            }}>
              🟢 Online
            </div>
            <div className="security-text">Status do Sistema</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'var(--security-accent)',
              marginBottom: '0.5rem'
            }}>
              🔄 Ativo
            </div>
            <div className="security-text">Cache Redis</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'var(--security-info)',
              marginBottom: '0.5rem'
            }}>
              📡 24/7
            </div>
            <div className="security-text">Monitoramento</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'var(--security-warning)',
              marginBottom: '0.5rem'
            }}>
              🛡️ Seguro
            </div>
            <div className="security-text">Nível de Segurança</div>
          </div>
        </div>
      </div>
    </div>
  );
};
