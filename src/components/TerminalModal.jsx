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
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  const terminalRef = useRef(null);
  const typingRef = useRef(null);

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
    terminalInfo: '#00bc7d'
  };

  const toggleMaximize = () => {
    setIsTerminalMaximized(!isTerminalMaximized);
  };

  // Reset do estado quando o modal abre
  useEffect(() => {
    if (!isOpen) return;

    // Limpar qualquer temporizador existente
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentText('');

    // Inicia a digitação da primeira linha
    typeNextLine(0);

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [isOpen, content]);

  // Função principal para gerenciar a digitação
  const typeNextLine = lineIndex => {
    if (!isOpen || lineIndex >= content.length) return;

    const currentLine = content[lineIndex];
    let charIndex = 0;
    const fullText = currentLine.text;

    // Calcular a velocidade de digitação
    const baseSpeed = currentLine.type === 'command' ? 30 : 10;

    // Função que digita um caractere por vez
    const typeChar = () => {
      if (charIndex < fullText.length) {
        charIndex++;
        setCurrentText(fullText.substring(0, charIndex));

        // Scroll para o final
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }

        // Programar o próximo caractere
        const randomVariation = Math.random() * 5;
        typingRef.current = setTimeout(typeChar, baseSpeed + randomVariation);
      } else {
        // Linha completa, adicionar às linhas exibidas
        setDisplayedLines(prevLines => [
          ...prevLines,
          { ...currentLine, text: fullText }
        ]);

        // Resetar o texto atual
        setCurrentText('');

        // Atualizar o índice da linha atual
        setCurrentLineIndex(lineIndex + 1);

        // Determinar a pausa antes da próxima linha
        const pauseTime =
          currentLine.type === 'command'
            ? 1000
            : currentLine.type === 'error'
              ? 1000
              : currentLine.delay || 300;

        // Programar a próxima linha após a pausa
        typingRef.current = setTimeout(() => {
          typeNextLine(lineIndex + 1);
        }, pauseTime);
      }
    };

    // Iniciar a digitação da linha
    typeChar();
  };

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
          {/* Linhas já digitadas completamente */}
          {displayedLines.map((line, index) => (
            <div key={index} className="mb-1" style={getLineStyle(line.type)}>
              {line.text}
            </div>
          ))}

          {/* Linha atual sendo digitada */}
          {currentLineIndex < content.length && currentText && (
            <div
              className="mb-1"
              style={getLineStyle(content[currentLineIndex].type)}
            >
              {currentText}
            </div>
          )}

          {/* Cursor piscante */}
          <div className="inline-block w-2 h-4 bg-white/70 ml-1 animate-blink"></div>
        </div>
      </div>
    </div>
  );
}
