// src/stories/security/components/ActorsGrid.tsx
import React from 'react';
import { SystemActor } from '../types';
import '../styles/theme.css';

interface ActorsGridProps {
  title: string;
  actors: SystemActor[];
}

export const ActorsGrid: React.FC<ActorsGridProps> = ({ title, actors }) => {
  return (
    <div className="security-container">
      <h2 className="security-subtitle">{title}</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1rem 0' }}>
        {actors.map((actor, index) => (
          <div
            key={index}
            className="security-card"
          >
            <h3 className="security-high-contrast">{actor.name}</h3>
            <p className="security-text"><strong>Nível:</strong> {actor.level}</p>
            <p className="security-text"><strong>Domínios:</strong> {actor.domains.join(', ')}</p>
            <p className="security-text"><strong>Permissões:</strong> {actor.permissions.join(', ')}</p>
            <ul>
              {actor.capabilities.map((capability, capIndex) => (
                <li key={capIndex} className="security-text">{capability}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
