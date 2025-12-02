
import React, { useState, useEffect } from 'react';
import './SafetyWarning.css';

const SafetyWarning: React.FC = () => {
  const [show, setShow] = useState(true);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('aegis-warning-accepted');
    if (hasAccepted) {
      setShow(false);
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aegis-warning-accepted', 'true');
    setAccepted(true);
    setTimeout(() => setShow(false), 500);
  };

  if (!show) return null;

  return (
    <div className={`safety-warning ${accepted ? 'fade-out' : ''}`}>
      <div className="warning-content">
        <div className="warning-icon">⚠️</div>
        <h2>AUTHORIZED USE ONLY</h2>
        <p className="warning-text">
          This tool is designed for professional penetration testers and security researchers.
        </p>
        <ul className="warning-list">
          <li>Always obtain explicit written permission before testing any system</li>
          <li>Unauthorized testing is illegal and unethical</li>
          <li>Use only on systems you own or have permission to test</li>
        </ul>
        <button className="accept-btn" onClick={handleAccept}>
          I Understand & Accept
        </button>
      </div>
    </div>
  );
};

export default SafetyWarning;
