
import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import FeatureDomains from './components/FeatureDomains/FeatureDomains';
import ZeroDayCapabilities from './components/ZeroDayCapabilities/ZeroDayCapabilities';
import ArchitectureView from './components/ArchitectureView/ArchitectureView';
import MultiLLMBrain from './components/MultiLLMBrain/MultiLLMBrain';
import QuickStart from './components/QuickStart/QuickStart';
import SafetyWarning from './components/SafetyWarning/SafetyWarning';
import Navigation from './components/Navigation/Navigation';
import Terminal from './components/Terminal/Terminal';
import GridBackground from './components/GridBackground/GridBackground';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['hero', 'domains', 'zeroday', 'architecture', 'brain', 'quickstart'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <GridBackground />
      <SafetyWarning />
      <Navigation activeSection={activeSection} />
      
      <div id="hero">
        <HeroSection onTerminalToggle={() => setShowTerminal(!showTerminal)} />
      </div>
      
      <div id="domains">
        <FeatureDomains />
      </div>
      
      <div id="zeroday">
        <ZeroDayCapabilities />
      </div>
      
      <div id="architecture">
        <ArchitectureView />
      </div>
      
      <div id="brain">
        <MultiLLMBrain />
      </div>
      
      <div id="quickstart">
        <QuickStart />
      </div>

      {showTerminal && (
        <Terminal onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
}

export default App;
