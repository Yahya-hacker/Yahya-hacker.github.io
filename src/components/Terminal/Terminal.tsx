
import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

interface TerminalProps {
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> Aegis Agent v8.0 Terminal',
    '> Type "help" for available commands',
    ''
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let output: string[] = [];

    switch(command) {
      case 'help':
        output = [
          'Available commands:',
          '  scan <url>     - Start vulnerability scan',
          '  fuzz <target>  - Run Genesis fuzzer',
          '  status         - Show current status',
          '  models         - List available LLM models',
          '  clear          - Clear terminal',
          '  exit           - Close terminal'
        ];
        break;
      case 'clear':
        setHistory(['> Aegis Agent v8.0 Terminal', '']);
        return;
      case 'exit':
        onClose();
        return;
      case 'status':
        output = [
          'System Status: OPERATIONAL',
          'LLM Models: 4/4 Connected',
          'Tools: All systems ready',
          'Self-Healing: Enabled'
        ];
        break;
      case 'models':
        output = [
          'Active Models:',
          '  [Strategic] Hermes 3 Llama 70B',
          '  [Reasoning] Dolphin 3.0 R1 Mistral 24B',
          '  [Coding] Qwen 2.5 72B',
          '  [Visual] Qwen 2.5 VL 32B'
        ];
        break;
      default:
        if (command.startsWith('scan ')) {
          output = [
            `[*] Initiating scan on ${cmd.substring(5)}...`,
            '[*] Loading reconnaissance modules...',
            '[*] Scan in progress...'
          ];
        } else if (command.startsWith('fuzz ')) {
          output = [
            `[*] Preparing Genesis fuzzer for ${cmd.substring(5)}...`,
            '[*] Compiling mutation strategies...',
            '[*] Fuzzing initiated...'
          ];
        } else {
          output = [`Command not recognized: ${cmd}`, 'Type "help" for available commands'];
        }
    }

    setHistory([...history, `> ${cmd}`, ...output, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <div className="terminal-overlay">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control-dot red" onClick={onClose}></span>
            <span className="control-dot yellow"></span>
            <span className="control-dot green"></span>
          </div>
          <div className="terminal-title">Aegis Terminal</div>
        </div>
        <div className="terminal-body" ref={terminalRef}>
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('>') ? 'terminal-prompt' : 'terminal-output'}>
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="terminal-input-form">
            <span className="terminal-prompt">{'> '}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
