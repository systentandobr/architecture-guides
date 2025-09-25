// src/stories/security/components/SecurityOverview.tsx
import React from 'react';
import { SystemActor, SecurityLayer } from '../types';
import '../styles/theme.css';

interface SecurityOverviewProps {
  title: string;
  description: string;
  features: string[];
  actors?: SystemActor[];
  layers?: SecurityLayer[];
}

export const SecurityOverview: React.FC<SecurityOverviewProps> = ({
  title,
  description,
  features,
  actors,
  layers
}) => {
  return (
    <div className="security-container">
      <h1 className="security-title">{title}</h1>
      <p className="security-description">{description}</p>
      
      <h2 className="security-subtitle">🎯 Visão Geral</h2>
      <p className="security-text">O SYS-SEGURANÇA é um serviço centralizado que fornece autenticação, autorização e gestão de usuários para todas as aplicações do ecossistema. Este módulo implementa:</p>
      
      <ul className="security-list">
        {features.map((feature, index) => (
          <li key={index}><strong>{feature}</strong></li>
        ))}
      </ul>

      {actors && (
        <div className="security-card">
          <h3>Componentes Principais</h3>
          <ul>
            {actors.map((actor, index) => (
              <li key={index}><strong>{actor.name}</strong> - {actor.description}</li>
            ))}
          </ul>
        </div>
      )}

      {layers && (
        <div className="security-card">
          <h3>Camadas de Segurança</h3>
          <ol>
            {layers.map((layer, index) => (
              <li key={index}><strong>{layer.name}</strong> - {layer.description}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
