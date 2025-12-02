
import React, { useState } from 'react';
import './ZeroDayCapabilities.css';

const ZeroDayCapabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fuzzing');

  const capabilities = {
    fuzzing: {
      title: 'Evolutionary Genetic Fuzzing',
      icon: '🧬',
      description: 'Byte-level mutations with feedback loops identify edge cases that static payloads miss',
      features: [
        'Intelligent mutation strategies',
        'Feedback-driven evolution',
        'Automatic payload generation',
        'Context-aware targeting'
      ],
      code: `fuzzer = get_genesis_fuzzer()
fuzzer.compile_grammar({
    "username": {"type": "string", "max_len": 20},
    "amount": {"type": "integer", "min": 0, "max": 999999}
})

result = await fuzzer.fuzz_endpoint(
    url="https://api.target.com/transfer",
    method="POST",
    base_payload={"username": "admin", "amount": 100}
)`
    },
    differential: {
      title: 'Differential Analysis',
      icon: '🔬',
      description: 'Levenshtein distance, timing analysis, and structure comparison detect blind vulnerabilities',
      features: [
        'Response time analysis',
        'Content-length comparison',
        'Error message detection',
        'Behavioral pattern recognition'
      ],
      code: `# Timing-based blind SQL injection detection
response_time_delta = analyze_timing(
    baseline_request, 
    injection_request
)

if response_time_delta > THRESHOLD:
    vulnerability_confirmed = True`
    },
    contextual: {
      title: 'Context-Aware Mutations',
      icon: '🎯',
      description: 'Technology fingerprinting enables framework-specific payloads',
      features: [
        'Framework detection (Flask, Django, Express)',
        'Language-specific exploits',
        'Custom payload generation',
        'Technology stack analysis'
      ],
      code: `# Detect framework and generate specific payloads
framework = detect_framework(target_url)

if framework == "Django":
    payloads = generate_django_payloads()
elif framework == "Express":
    payloads = generate_nodejs_payloads()`
    }
  };

  return (
    <section className="zeroday-capabilities">
      <div className="section-header">
        <h2>Zero-Day Discovery Engine</h2>
        <p className="section-subtitle">Genesis Fuzzer discovers unknown vulnerabilities through intelligent mutation</p>
      </div>

      <div className="capabilities-container">
        <div className="tab-nav">
          {Object.entries(capabilities).map(([key, cap]) => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{cap.icon}</span>
              <span className="tab-title">{cap.title}</span>
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab && capabilities[activeTab] && (
            <div className="capability-detail">
              <h3>{capabilities[activeTab].title}</h3>
              <p className="capability-description">{capabilities[activeTab].description}</p>
              
              <div className="capability-features">
                <h4>Key Features:</h4>
                <ul>
                  {capabilities[activeTab].features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="code-example">
                <div className="code-header">
                  <span>Python Example</span>
                </div>
                <pre>{capabilities[activeTab].code}</pre>
              </div>
            </div>
          )}
        </div>

        <div className="mutation-strategies">
          <h3>7 Mutation Strategies</h3>
          <div className="strategies-grid">
            {[
              { name: 'Integer Overflow', icon: '💯' },
              { name: 'Format Strings', icon: '📝' },
              { name: 'Boundary Violations', icon: '🚫' },
              { name: 'Unicode Injection', icon: '🌐' },
              { name: 'Null Bytes', icon: '⚫' },
              { name: 'Command Injection', icon: '💉' },
              { name: 'Template Injection', icon: '🔤' }
            ].map((strategy, i) => (
              <div key={i} className="strategy-card">
                <span className="strategy-icon">{strategy.icon}</span>
                <span className="strategy-name">{strategy.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroDayCapabilities;
