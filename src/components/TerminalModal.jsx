'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Minimize2 } from 'lucide-react';

export default function TerminalModal({
  isOpen,
  onClose,
  title,
  content,
  darkMode
}) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  const terminalRef = useRef(null);

  const theme = {
    text: darkMode ? '#ffffff' : '#000000',
    secondaryText: darkMode ? '#9d9d9d' : '#6e6e73',
    border: darkMode ? '#383838' : '#d2d2d7',
    terminalBg: darkMode ? '#1a1a1a' : '#282828',
    terminalText: darkMode ? '#f0f0f0' : '#f0f0f0',
    terminalBar: darkMode ? '#323233' : '#363636',
    terminalBarText: darkMode ? '#f0f0f0' : '#f0f0f0',
    terminalSuccess: '#4CAF50',
    terminalError: '#F44336',
    terminalWarning: '#FF9800',
    terminalInfo: '#2196F3'
  };

  const toggleMaximize = () => {
    setIsTerminalMaximized(!isTerminalMaximized);
  };

  // Efeito para exibir as linhas gradualmente
  useEffect(() => {
    if (!isOpen) return;

    // Resetar as linhas exibidas quando o modal abrir
    setDisplayedLines([]);

    let timeoutId;

    const displayLines = async () => {
      for (let i = 0; i < content.length; i++) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayedLines(prev => [...prev, content[i]]);

            // Auto-scroll para mostrar a última linha
            if (terminalRef.current) {
              terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
            resolve();
          }, content[i].delay || 300);
        });
      }
    };

    displayLines();

    return () => clearTimeout(timeoutId);
  }, [isOpen, content]);

  const getLineStyle = type => {
    switch (type) {
      case 'command':
        return { color: theme.terminalText };
      case 'success':
        return { color: theme.terminalSuccess };
      case 'error':
        return { color: theme.terminalError };
      case 'warning':
        return { color: theme.terminalWarning };
      case 'info':
        return { color: theme.terminalInfo };
      default:
        return { color: theme.terminalText };
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`rounded-lg shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isTerminalMaximized ? 'fixed inset-0 m-0' : 'max-w-2xl w-full'
        }`}
        style={{
          border: `1px solid ${theme.border}`,
          boxShadow: darkMode
            ? '0 0 15px rgba(0, 0, 0, 0.3)'
            : '0 0 15px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Barra do terminal */}
        <div
          className="flex items-center px-4 py-2"
          style={{
            background: theme.terminalBar,
            borderBottom: `1px solid ${theme.border}`
          }}
        >
          {/* Botões de controle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"
            >
              <X
                size={8}
                className="opacity-0 group-hover:opacity-100"
                color="white"
              />
            </button>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Título do terminal */}
          <div
            className="flex-grow text-center text-sm font-medium"
            style={{ color: theme.terminalBarText }}
          >
            {title} - Terminal
          </div>

          {/* Botão maximizar/minimizar */}
          <button
            onClick={toggleMaximize}
            className="p-1 hover:bg-white/10 rounded"
            style={{ color: theme.terminalBarText }}
          >
            {isTerminalMaximized ? (
              <Minimize2 size={14} />
            ) : (
              <Maximize2 size={14} />
            )}
          </button>
        </div>

        {/* Conteúdo do terminal */}
        <div
          ref={terminalRef}
          className="flex-grow p-4 overflow-y-auto font-mono text-sm terminal-scrollbar"
          style={{
            background: theme.terminalBg,
            color: theme.terminalText,
            height: isTerminalMaximized ? 'calc(100vh - 42px)' : '400px',
            maxHeight: isTerminalMaximized ? 'none' : '400px'
          }}
        >
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className="mb-1 animate-fadeIn"
              style={getLineStyle(line.type)}
            >
              {line.text}
            </div>
          ))}

          {/* Cursor piscante */}
          {displayedLines.length < content.length && (
            <div className="inline-block w-2 h-4 bg-white/70 ml-1 animate-blink"></div>
          )}
        </div>
      </div>
    </div>
  );
}
