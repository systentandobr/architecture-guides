// src/stories/backend/components/BusinessRules.tsx
import React from 'react';
import '../styles/theme.css';

interface BusinessRule {
  category: string;
  rules: string[];
}

interface BusinessRulesProps {
  title: string;
  rules: BusinessRule[];
}

export const BusinessRules: React.FC<BusinessRulesProps> = ({ title, rules }) => {
  const getCategoryClass = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes('autenticação') || name.includes('segurança')) return 'backend-rule-auth';
    if (name.includes('limites') || name.includes('quotas')) return 'backend-rule-limits';
    if (name.includes('validação') || name.includes('dados')) return 'backend-rule-validation';
    if (name.includes('processamento')) return 'backend-rule-processing';
    return 'backend-rule-card';
  };

  const getCategoryIcon = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes('autenticação') || name.includes('segurança')) return '🔐';
    if (name.includes('limites') || name.includes('quotas')) return '📊';
    if (name.includes('validação') || name.includes('dados')) return '✅';
    if (name.includes('processamento')) return '⚙️';
    return '📋';
  };

  return (
    <div className="backend-container">
      <h2 className="backend-subtitle">{title}</h2>
      
      <div className="backend-rules-grid">
        {rules.map((ruleCategory, index) => (
          <div
            key={index}
            className={`backend-rule-card ${getCategoryClass(ruleCategory.category)}`}
          >
            <div className="backend-rule-header">
              <h3 className="backend-rule-title">
                {getCategoryIcon(ruleCategory.category)} {ruleCategory.category}
              </h3>
            </div>
            
            <div className="backend-rule-content">
              <ul className="backend-rule-list">
                {ruleCategory.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="backend-rule-item">
                    <span className="backend-rule-icon">✅</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="backend-rules-summary">
        <h3 className="backend-rules-summary-title">📊 Resumo das Regras</h3>
        <div className="backend-rules-metrics">
          <div className="backend-rules-metric">
            <div className="backend-rules-metric-value">{rules.length}</div>
            <div className="backend-rules-metric-label">Categorias</div>
          </div>
          <div className="backend-rules-metric">
            <div className="backend-rules-metric-value">
              {rules.reduce((acc, category) => acc + category.rules.length, 0)}
            </div>
            <div className="backend-rules-metric-label">Regras</div>
          </div>
          <div className="backend-rules-metric">
            <div className="backend-rules-metric-value">100%</div>
            <div className="backend-rules-metric-label">Cobertura</div>
          </div>
          <div className="backend-rules-metric">
            <div className="backend-rules-metric-value">Ativo</div>
            <div className="backend-rules-metric-label">Status</div>
          </div>
        </div>
      </div>
    </div>
  );
};
