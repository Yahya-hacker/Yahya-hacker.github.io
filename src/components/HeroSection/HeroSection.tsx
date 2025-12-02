
import React, { useEffect, useState } from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  onTerminalToggle: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTerminalToggle }) => {
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'AEGIS AGENT v8.0';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">FULL-SPECTRUM CYBER OPERATIONS</div>
        <h1 className="hero-title">
          {titleText}
          {showCursor && <span className="cursor">_</span>}
        </h1>
        <p className="hero-subtitle">
          AI-Powered Autonomous Penetration Testing Platform
        </p>
        <div className="hero-description">
          <p>Transform from traditional vulnerability scanning into an intelligent zero-day research system.</p>
          <p>Built with multi-LLM architecture and advanced exploitation capabilities.</p>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value">5</div>
            <div className="stat-label">Capability Domains</div>
          </div>
          <div className="stat">
            <div className="stat-value">4</div>
            <div className="stat-label">AI Models</div>
          </div>
          <div className="stat">
            <div className="stat-value">∞</div>
            <div className="stat-label">Zero-Days</div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onTerminalToggle}>
            Launch Terminal
          </button>
          <button className="btn btn-secondary" onClick={() => {
            document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Quick Start →
          </button>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <pre className="code-content">
{`$ aegis --target https://api.target.com --auto-pwn
[*] Initializing Aegis Agent v8.0...
[*] Loading Multi-LLM Brain...
[+] Strategic LLM: Hermes 3 Online
[+] Reasoning LLM: Dolphin 3.0 Online
[+] Code LLM: Qwen 2.5 Online
[+] Visual LLM: Qwen VL Online
[*] Starting reconnaissance...
[!] Critical vulnerability discovered!
[*] Generating zero-day exploit...
[+] Exploitation successful!`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
