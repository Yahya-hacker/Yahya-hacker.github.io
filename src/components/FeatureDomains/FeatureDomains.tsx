
import React, { useState } from 'react';
import './FeatureDomains.css';

const FeatureDomains: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);

  const domains = [
    {
      icon: '🔐',
      title: 'Cryptography',
      module: 'crypto_engine',
      tools: 'Ciphey, hashid, John',
      functions: ['solve_crypto()', 'crack_hash()'],
      description: 'Advanced cryptanalysis and hash cracking capabilities'
    },
    {
      icon: '🔧',
      title: 'Reverse Engineering',
      module: 'reverse_engine',
      tools: 'strings, objdump, radare2, gdb',
      functions: ['analyze_binary()', 'disassemble_function()'],
      description: 'Binary analysis and disassembly tools'
    },
    {
      icon: '🔬',
      title: 'Forensics',
      module: 'forensics_lab',
      tools: 'exiftool, binwalk, steghide, volatility',
      functions: ['analyze_file_artifacts()', 'extract_steghide()'],
      description: 'Digital forensics and steganography detection'
    },
    {
      icon: '💀',
      title: 'Binary Exploitation',
      module: 'pwn_exploiter',
      tools: 'checksec, pwntools',
      functions: ['check_binary_protections()', 'find_rop_gadgets()'],
      description: 'Exploit development and binary vulnerability analysis'
    },
    {
      icon: '📡',
      title: 'Network Analysis',
      module: 'network_sentry',
      tools: 'tshark, tcpdump',
      functions: ['analyze_pcap()', 'follow_tcp_stream()'],
      description: 'Network traffic analysis and protocol inspection'
    }
  ];

  return (
    <section className="feature-domains">
      <div className="section-header">
        <h2>Five Specialized Capability Domains</h2>
        <p className="section-subtitle">Full-spectrum CTF & Red Team operations with autonomous self-healing</p>
      </div>

      <div className="domains-grid">
        {domains.map((domain, index) => (
          <div 
            key={index}
            className={`domain-card ${selectedDomain === index ? 'active' : ''}`}
            onClick={() => setSelectedDomain(index)}
          >
            <div className="domain-icon">{domain.icon}</div>
            <h3 className="domain-title">{domain.title}</h3>
            <div className="domain-module">{domain.module}</div>
            <p className="domain-description">{domain.description}</p>
            
            <div className="domain-details">
              <div className="tools-section">
                <strong>Tools:</strong>
                <div className="tools-list">{domain.tools}</div>
              </div>
              <div className="functions-section">
                <strong>Functions:</strong>
                <div className="functions-list">
                  {domain.functions.map((func, i) => (
                    <code key={i} className="function">{func}</code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="self-healing-banner">
        <div className="banner-icon">🔄</div>
        <div className="banner-content">
          <h4>Self-Healing Infrastructure</h4>
          <p>Automatically installs missing dependencies when tools fail</p>
          <code>export AEGIS_SELF_HEALING=true</code>
        </div>
      </div>
    </section>
  );
};

export default FeatureDomains;
