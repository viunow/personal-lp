'use client';

import { useState, useEffect, useRef } from 'react';
import WebPage from '@/components/WebPage';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bootLines, setBootLines] = useState([]);
  const terminalRef = useRef(null);

  // ASCII Art com escape correto para as barras invertidas
  const asciiArt = [
    {
      line: ' __      ___       _      _             _   _      _        ',
      color: '#FF0000'
    },
    {
      line: ' \\ \\    / (_)     (_)    (_)           | \\ | |    | |       ',
      color: '#FF4500'
    },
    {
      line: '  \\ \\  / / _ _ __  _  ___ _ _   _ ___  |  \\| | ___| |_ ___  ',
      color: '#FFA500'
    },
    {
      line: "   \\ \\/ / | | '_ \\| |/ __| | | | / __| | . ` |/ _ \\ __/ _ \\ ",
      color: '#00FF00'
    },
    {
      line: '    \\  /  | | | | | | (__| | |_| \\__ \\ | |\\  |  __/ || (_) |',
      color: '#0000FF'
    },
    {
      line: '     \\/   |_|_| |_|_|\\___|_|\\__,_|___/ |_| \\_|\\___|\\__\\___/ ',
      color: '#8A2BE2'
    },
    {
      line: '                                                            ',
      color: '#9400D3'
    },
    {
      line: '                                                            ',
      color: '#9400D3'
    }
  ];

  useEffect(() => {
    const bootSequence = [
      {
        text: '@viniciusneto v1.0.0 - Developer Environment',
        delay: 400,
        type: 'info'
      },
      {
        text: '[OK] Starting system initialization...',
        delay: 300,
        type: 'success'
      },
      {
        text: '[OK] Mounting virtual file systems...',
        delay: 400,
        type: 'success'
      },
      {
        text: '[OK] Setting up network interfaces...',
        delay: 350,
        type: 'success'
      },
      { text: '[OK] Starting system services...', delay: 300, type: 'success' },
      { text: '$ sudo start frontend-services', delay: 500, type: 'command' },
      { text: '[....] Starting V8 engine', delay: 200, type: 'info' },
      { text: '[....] Loading components', delay: 200, type: 'info' },
      { text: '[....] Loading modules', delay: 200, type: 'info' },
      {
        text: '[....] Configuring environment',
        delay: 200,
        type: 'info'
      },
      {
        text: '[OK] React components loaded successfully',
        delay: 300,
        type: 'success'
      },
      {
        text: '[OK] Tailwind modules loaded successfully',
        delay: 310,
        type: 'success'
      },
      {
        text: '[OK] Next.js environment configured',
        delay: 320,
        type: 'success'
      },
      { text: '$ starting developer profile...', delay: 400, type: 'command' },
      {
        text: '[OK] Developer profile loaded successfully',
        delay: 500,
        type: 'success'
      },
      { text: '$ sudo initialize interface', delay: 600, type: 'command' },
      { text: 'Loading system interface...', delay: 900, type: 'info' }
    ];

    let timeoutIds = [];

    const displayLines = async () => {
      let totalDelay = 0;

      for (let i = 0; i < bootSequence.length; i++) {
        const line = bootSequence[i];
        totalDelay += line.delay;

        const timeoutId = setTimeout(() => {
          setBootLines(prev => [...prev, line]);

          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, totalDelay);

        timeoutIds.push(timeoutId);
      }

      const finalTimeoutId = setTimeout(() => {
        setLoading(false);
      }, totalDelay + 1000);

      timeoutIds.push(finalTimeoutId);
    };

    displayLines();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  const getLineStyle = type => {
    switch (type) {
      case 'command':
        return { color: '#64B5F6' };
      case 'success':
        return { color: '#81C784' };
      case 'error':
        return { color: '#E57373' };
      case 'warning':
        return { color: '#FFD54F' };
      case 'info':
        return { color: '#FFFFFF' };
      default:
        return { color: '#FFFFFF' };
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex flex-col">
        {/* Conteúdo do terminal */}
        <div
          ref={terminalRef}
          className="flex-grow p-4 overflow-y-auto font-mono text-sm terminal-scrollbar bg-black text-white"
        >
          <div className="mb-4">
            {/* ASCII Art com degradê de cores (abordagem corrigida) */}
            <div className="font-mono">
              {asciiArt.map((item, index) => (
                <div
                  key={index}
                  className="whitespace-pre"
                  style={{ color: item.color }}
                >
                  {item.line}
                </div>
              ))}
            </div>
          </div>

          {bootLines.map((line, index) => (
            <div key={index} className="mb-1" style={getLineStyle(line.type)}>
              {line.text}
            </div>
          ))}

          {/* Cursor piscante */}
          <div className="inline-block w-2 h-4 bg-white/70 ml-1 animate-blink"></div>
        </div>
      </div>
    );
  }

  // Renderiza o WebPage após o boot
  return (
    <div className="w-full h-screen">
      <WebPage />
    </div>
  );
}
