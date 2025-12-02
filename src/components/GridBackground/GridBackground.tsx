
import React from 'react';
import './GridBackground.css';

const GridBackground: React.FC = () => {
  return (
    <div className="grid-background">
      <div className="grid-lines"></div>
      <div className="grid-glow"></div>
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default GridBackground;
