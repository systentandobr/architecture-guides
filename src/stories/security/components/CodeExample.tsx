// src/stories/security/components/CodeExample.tsx
import React from 'react';
import '../styles/theme.css';

interface CodeExampleProps {
  title: string;
  description?: string;
  code: string;
  language?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const CodeExample: React.FC<CodeExampleProps> = ({
  title,
  description,
  code,
  language = 'javascript',
  backgroundColor,
  borderColor
}) => {
  return (
    <div className="security-card" style={{ 
      backgroundColor: backgroundColor || 'var(--security-bg-secondary)',
      borderColor: borderColor || 'var(--security-border)'
    }}>
      <h3 className="security-high-contrast">{title}</h3>
      {description && <p className="security-text">{description}</p>}
      <pre className="security-code">
        <code>{code}</code>
      </pre>
    </div>
  );
};
