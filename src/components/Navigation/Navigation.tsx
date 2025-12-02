
import React from 'react';
import './Navigation.css';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'domains', label: 'Domains', icon: '🔐' },
    { id: 'zeroday', label: 'Zero-Day', icon: '🎯' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'brain', label: 'AI Brain', icon: '🧠' },
    { id: 'quickstart', label: 'Quick Start', icon: '🚀' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">AEGIS</span>
          <span className="version-badge">v8.0</span>
        </div>
        <div className="nav-links">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
