
import React, { useState } from 'react';
import './ArchitectureView.css';

const ArchitectureView: React.FC = () => {
  const [highlightedLayer, setHighlightedLayer] = useState<string | null>(null);

  const layers = [
    {
      id: 'llm',
      title: 'Multi-LLM Layer',
      components: ['Strategic LLM', 'Reasoning LLM', 'Code + Visual LLM'],
      color: 'var(--accent-purple)'
    },
    {
      id: 'orchestrator',
      title: 'Multi-LLM Orchestrator',
      components: ['API Key Sharding', 'Role Assignment', 'Load Balancing'],
      color: 'var(--accent-cyan)'
    },
    {
      id: 'memory',
      title: 'Cortex Memory',
      components: ['Facts', 'Goals', 'Vectors', 'Attack Path'],
      color: 'var(--accent-green)'
    },
    {
      id: 'tools',
      title: 'Tool Layer',
      components: ['Genesis Fuzzer', 'Nuclei', 'SQLMap', 'Visual Recon', 'CDP Hooks'],
      color: 'var(--accent-yellow)'
    }
  ];

  return (
    <section className="architecture-view">
      <div className="section-header">
        <h2>System Architecture</h2>
        <p className="section-subtitle">Modular design with intelligent orchestration</p>
      </div>

      <div className="architecture-container">
        <div className="architecture-diagram">
          {layers.map((layer, index) => (
            <div 
              key={layer.id}
              className={`architecture-layer ${highlightedLayer === layer.id ? 'highlighted' : ''}`}
              onMouseEnter={() => setHighlightedLayer(layer.id)}
              onMouseLeave={() => setHighlightedLayer(null)}
              style={{ '--layer-color': layer.color } as React.CSSProperties}
            >
              <h3 className="layer-title">{layer.title}</h3>
              <div className="layer-components">
                {layer.components.map((component, i) => (
                  <div key={i} className="component-box">
                    {component}
                  </div>
                ))}
              </div>
              {index < layers.length - 1 && (
                <div className="layer-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">▼</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="architecture-details">
          <h3>Data Flow</h3>
          <div className="flow-description">
            <div className="flow-step">
              <span className="step-number">1</span>
              <p>Strategic LLM analyzes mission objectives and creates attack plan</p>
            </div>
            <div className="flow-step">
              <span className="step-number">2</span>
              <p>Orchestrator distributes tasks based on expertise and availability</p>
            </div>
            <div className="flow-step">
              <span className="step-number">3</span>
              <p>Cortex Memory maintains context and discovered vulnerabilities</p>
            </div>
            <div className="flow-step">
              <span className="step-number">4</span>
              <p>Tool Layer executes reconnaissance and exploitation actions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureView;
