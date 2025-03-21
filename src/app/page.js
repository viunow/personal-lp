'use client';

import { useState, useEffect, useRef } from 'react';
import WebPage from '@/components/WebPage';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [bootOpacity, setBootOpacity] = useState(1);
  const [webpageOpacity, setWebpageOpacity] = useState(0);
  const [bootLines, setBootLines] = useState([]);
  const terminalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ASCII Art para desktop
  const desktopAsciiArt = [
    {
      line: ' __      ___       _      _             _   _      _        ',
      color: '#9400D3'
    },
    {
      line: ' \\ \\    / (_)     (_)    (_)           | \\ | |    | |       ',
      color: '#8A2BE2'
    },
    {
      line: '  \\ \\  / / _ _ __  _  ___ _ _   _ ___  |  \\| | ___| |_ ___  ',
      color: '#9400D3'
    },
    {
      line: "   \\ \\/ / | | '_ \\| |/ __| | | | / __| | . ` |/ _ \\ __/ _ \\ ",
      color: '#8A2BE2'
    },
    {
      line: '    \\  /  | | | | | | (__| | |_| \\__ \\ | |\\  |  __/ || (_) |',
      color: '#9400D3'
    },
    {
      line: '     \\/   |_|_| |_|_|\\___|_|\\__,_|___/ |_| \\_|\\___|\\__\\___/ ',
      color: '#8A2BE2'
    },
    {
      line: '                                                            ',
      color: '#9400D3'
    }
  ];

  // ASCII Art para mobile - VINICIUS na primeira parte
  const mobileAsciiArtVinicius = [
    {
      line: ' __      ___       _      _             ',
      color: '#9400D3'
    },
    {
      line: ' \\ \\    / (_)     (_)    (_)           ',
      color: '#8A2BE2'
    },
    {
      line: '  \\ \\  / / _ _ __  _  ___ _ _   _ ___  ',
      color: '#9400D3'
    },
    {
      line: "   \\ \\/ / | | '_ \\| |/ __| | | | / __| ",
      color: '#8A2BE2'
    },
    {
      line: '    \\  /  | | | | | | (__| | |_| \\__ \\ ',
      color: '#9400D3'
    },
    {
      line: '     \\/   |_|_| |_|_|\\___|_|\\__,_|___/ ',
      color: '#8A2BE2'
    },
    {
      line: '                                        ',
      color: '#9400D3'
    }
  ];

  // ASCII Art para mobile - NETO na segunda parte
  const mobileAsciiArtNeto = [
    {
      line: ' _   _      _        ',
      color: '#9400D3'
    },
    {
      line: '| \\ | |    | |       ',
      color: '#8A2BE2'
    },
    {
      line: '|  \\| | ___| |_ ___  ',
      color: '#9400D3'
    },
    {
      line: '| . ` |/ _ \\ __/ _ \\ ',
      color: '#8A2BE2'
    },
    {
      line: '| |\\  |  __/ || (_) |',
      color: '#9400D3'
    },
    {
      line: '|_| \\_|\\___|\\__\\___/ ',
      color: '#8A2BE2'
    },
    {
      line: '                     ',
      color: '#9400D3'
    }
  ];

  // Detectar se é mobile baseado na largura da tela
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px é um breakpoint comum para mobile
    };

    // Verificar no carregamento inicial
    checkIfMobile();

    // Adicionar listener para mudanças de tamanho da tela
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
      { text: '[....] Starting V8 engine', delay: 300, type: 'info' },
      { text: '[....] Loading components', delay: 300, type: 'info' },
      { text: '[....] Loading modules', delay: 300, type: 'info' },
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
      { text: '$ sudo initialize interface', delay: 800, type: 'command' },
      { text: 'Loading system interface...', delay: 800, type: 'info' },
      { text: '[OK] Interface ready', delay: 800, type: 'success' },
      { text: '$ launch', delay: 1000, type: 'command' }
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

      const startTransitionId = setTimeout(() => {
        setBootOpacity(0);

        const showWebpageId = setTimeout(() => {
          setWebpageOpacity(1);

          const completeTransitionId = setTimeout(() => {
            setBootComplete(true);
          }, 500);

          timeoutIds.push(completeTransitionId);
        }, 500);

        timeoutIds.push(showWebpageId);
      }, totalDelay + 800);

      timeoutIds.push(startTransitionId);
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

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
      {/* Container com fundo preto fixo para garantir que não apareça fundo branco */}
      <div className="absolute inset-0 bg-black">
        {/* WebPage - sempre presente, mas inicialmente com opacity 0 */}
        <div
          className="absolute inset-0 w-full h-screen"
          style={{
            opacity: webpageOpacity,
            transition: 'opacity 0.6s ease-in-out',
            zIndex: 10
          }}
        >
          <WebPage />
        </div>

        {/* Terminal de Boot - permanece no DOM até que bootComplete seja true */}
        {!bootComplete && (
          <div
            className="absolute inset-0 w-full h-screen bg-black flex flex-col"
            style={{
              opacity: bootOpacity,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: 20
            }}
          >
            <div
              ref={terminalRef}
              className="flex-grow p-4 overflow-y-auto font-mono text-sm terminal-scrollbar bg-black text-white"
            >
              <div className="mb-4">
                {/* ASCII Art responsivo */}
                <div className="font-mono">
                  {isMobile ? (
                    <>
                      {/* Versão mobile - VINICIUS */}
                      {mobileAsciiArtVinicius.map((item, index) => (
                        <div
                          key={`vinicius-${index}`}
                          className="whitespace-pre text-center"
                          style={{ color: item.color }}
                        >
                          {item.line}
                        </div>
                      ))}
                      {/* Versão mobile - NETO */}
                      {mobileAsciiArtNeto.map((item, index) => (
                        <div
                          key={`neto-${index}`}
                          className="whitespace-pre text-center"
                          style={{ color: item.color }}
                        >
                          {item.line}
                        </div>
                      ))}
                    </>
                  ) : (
                    // Versão desktop
                    desktopAsciiArt.map((item, index) => (
                      <div
                        key={index}
                        className="whitespace-pre"
                        style={{ color: item.color }}
                      >
                        {item.line}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {bootLines.map((line, index) => (
                <div
                  key={index}
                  className="mb-1"
                  style={getLineStyle(line.type)}
                >
                  {line.text}
                </div>
              ))}

              {/* Cursor piscante */}
              <div className="inline-block w-2 h-4 bg-white/70 ml-1 animate-blink"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
