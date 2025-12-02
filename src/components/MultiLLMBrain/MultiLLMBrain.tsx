
import React, { useState } from 'react';
import './MultiLLMBrain.css';

const MultiLLMBrain: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState(0);

  const models = [
    {
      role: 'Strategic',
      model: 'Hermes 3 Llama 70B',
      specialization: 'Mission planning, triage, scope analysis',
      envKey: 'STRATEGIC_API_KEY',
      icon: '🎯'
    },
    {
      role: 'Reasoning',
      model: 'Dolphin 3.0 R1 Mistral 24B',
      specialization: 'Vulnerability analysis, exploit reasoning',
      envKey: 'REASONING_API_KEY',
      icon: '🧠'
    },
    {
      role: 'Coding',
      model: 'Qwen 2.5 72B',
      specialization: 'Payload generation, code analysis',
      envKey: 'CODE_API_KEY',
      icon: '💻'
    },
    {
      role: 'Visual',
      model: 'Qwen 2.5 VL 32B',
      specialization: 'Screenshot analysis, UI reconnaissance',
      envKey: 'VISUAL_API_KEY',
      icon: '👁️'
    }
  ];

  return (
    <section className="multi-llm-brain">
      <div className="section-header">
        <h2>Multi-LLM Brain Architecture</h2>
        <p className="section-subtitle">Sharded API architecture for parallel execution and cost isolation</p>
      </div>

      <div className="brain-container">
        <div className="models-grid">
          {models.map((model, index) => (
            <div 
              key={index}
              className={`model-card ${selectedModel === index ? 'active' : ''}`}
              onClick={() => setSelectedModel(index)}
            >
              <div className="model-icon">{model.icon}</div>
              <h3 className="model-role">{model.role}</h3>
              <div className="model-name">{model.model}</div>
              <p className="model-spec">{model.specialization}</p>
              <div className="model-env">
                <code>{model.envKey}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="brain-benefits">
          <h3>Key Benefits</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h4>Parallel Execution</h4>
              <p>Different API keys per role bypass per-account rate limits</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h4>Cost Isolation</h4>
              <p>Track spending per capability independently</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h4>Model Flexibility</h4>
              <p>Change any model via .env without code changes</p>
            </div>
          </div>
        </div>

        <div className="config-example">
          <h3>Configuration Example</h3>
          <div className="code-block">
            <pre>{`# .env configuration
OPENROUTER_API_KEY=sk-main-key           # Fallback for all roles
STRATEGIC_API_KEY=sk-strategic-key       # Separate account for planning
REASONING_API_KEY=sk-reasoning-key       # Separate account for analysis
CODE_API_KEY=sk-code-key                 # Separate account for payloads
VISUAL_API_KEY=sk-visual-key             # Separate account for screenshots`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiLLMBrain;
