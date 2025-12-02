
import React, { useState } from 'react';
import './QuickStart.css';

const QuickStart: React.FC = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'Clone Repository',
      command: 'git clone https://github.com/Yahya-hacker/Aegis_agent.git\ncd Aegis_agent'
    },
    {
      title: 'Install Dependencies',
      command: 'pip install -r requirements.txt\nplaywright install chromium'
    },
    {
      title: 'Configure API Keys',
      command: 'cp .env.example .env\nnano .env  # Add your OpenRouter API key(s)'
    },
    {
      title: 'Run Aegis',
      command: 'python main.py'
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <section className="quick-start">
      <div className="section-header">
        <h2>Quick Start Guide</h2>
        <p className="section-subtitle">Get Aegis up and running in minutes</p>
      </div>

      <div className="quickstart-container">
        <div className="prerequisites">
          <h3>Prerequisites</h3>
          <ul>
            <li>Python 3.8+</li>
            <li>OpenRouter API key (<a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">get one here</a>)</li>
            <li>Node.js (for Mirror JS Sandbox)</li>
          </ul>
        </div>

        <div className="installation-steps">
          <h3>Installation</h3>
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                <span className="step-number">{index + 1}</span>
                <h4>{step.title}</h4>
              </div>
              <div className="step-command">
                <pre>{step.command}</pre>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard(step.command, index)}
                >
                  {copiedStep === index ? '✓ Copied' : '📋 Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="optional-tools">
          <h3>Optional Security Tools</h3>
          <div className="tools-commands">
            <div className="tool-section">
              <h4>Go-based Tools</h4>
              <pre>{`go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest
go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest`}</pre>
            </div>
            <div className="tool-section">
              <h4>SQLMap</h4>
              <pre>apt install sqlmap  # or pip install sqlmap</pre>
            </div>
          </div>
        </div>

        <div className="testing-section">
          <h3>Testing</h3>
          <div className="test-commands">
            <code>python test_v7_5_features.py</code>
            <code>python test_multi_llm.py</code>
            <code>python demo_v7_5_integration.py</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
