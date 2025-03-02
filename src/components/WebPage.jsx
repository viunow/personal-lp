'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Grid2X2,
  List,
  Sun,
  Moon,
  Menu,
  X,
  Info
} from 'lucide-react';
import { sidebarSections } from '@/utils/sidebarSections';
import { sectionContent } from '@/utils/sectionContent';
import Link from 'next/link';
import TerminalModal from '@/components/TerminalModal';
import { generateTerminalContent } from '@/utils/terminalGenerator';
import profileImg from '../../public/profile.jpg';
import githubImg from '../../public/github.png';

export default function WebPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalTitle, setTerminalTitle] = useState('');
  const [terminalContent, setTerminalContent] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é um dispositivo móvel baseado na largura da tela
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar no carregamento inicial
    checkIfMobile();

    // Adicionar listener para mudanças de tamanho da tela
    window.addEventListener('resize', checkIfMobile);

    // Limpar o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navigatePrevious = () => {
    const currentIndex = sidebarSections.findIndex(
      section => section.id === activeSection
    );
    if (currentIndex > 0) {
      setActiveSection(sidebarSections[currentIndex - 1].id);
    } else {
      setActiveSection(sidebarSections[sidebarSections.length - 1].id);
    }
  };

  const navigateNext = () => {
    const currentIndex = sidebarSections.findIndex(
      section => section.id === activeSection
    );
    if (currentIndex < sidebarSections.length - 1) {
      setActiveSection(sidebarSections[currentIndex + 1].id);
    } else {
      setActiveSection(sidebarSections[0].id);
    }
  };

  const openTerminal = item => {
    setTerminalTitle(item.title);
    setTerminalContent(generateTerminalContent(item, darkMode));
    setShowTerminal(true);
  };

  const closeTerminal = () => {
    setShowTerminal(false);
  };

  const handleSectionClick = sectionId => {
    setActiveSection(sectionId);
    if (isMobile) {
      closeSidebar();
    }
  };

  const theme = {
    background: darkMode ? '#1e1e1e' : '#ffffff',
    sidebar: darkMode ? '#333333' : '#f5f5f7',
    titleBar: darkMode ? '#2a2a2a' : '#e7e7e7',
    text: darkMode ? '#ffffff' : '#000000',
    secondaryText: darkMode ? '#9a9a9a' : '#6e6e73',
    border: darkMode ? '#383838' : '#d2d2d7',
    fileHover: darkMode ? '#2a2a2a' : '#f0f0f0',
    fileActive: darkMode ? '#00bc7d' : '#e8e8ed',
    searchBg: darkMode ? '#0c0c0c' : '#f0f0f0',
    avatarBorder: darkMode ? '#00bc7d' : '#00bc7d',
    avatarGlow: darkMode ? 'rgba(0, 188, 125, 1)' : 'rgba(0, 188, 125, 1)',
    overlay: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
    dock: darkMode ? '#333333' : '#f5f5f7',
    dockBorder: darkMode ? '#444444' : '#e0e0e0',
    dockIconActive: '#00bc7d',
    dockIconInactive: darkMode ? '#9a9a9a' : '#6e6e73'
  };

  const currentSectionName =
    sidebarSections.find(section => section.id === activeSection)?.label ||
    '@viniciusneto';

  return (
    <div
      className="w-full overflow-hidden shadow-xl border flex flex-col"
      style={{
        height: '100vh',
        background: theme.background,
        borderColor: theme.border
      }}
    >
      {/* Barra de título com semáforo */}
      <div
        className="flex items-center px-4 py-2 border-b"
        style={{
          background: theme.titleBar,
          borderColor: theme.border
        }}
      >
        {/* Botão do menu para mobile */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="mr-0 hover:bg-emerald-500/50 hover:text-white p-1 rounded-md"
            style={{ color: theme.text }}
          >
            <Menu size={20} />
          </button>
        )}

        <div
          className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-4'}`}
          style={{ color: theme.secondaryText }}
        >
          {!isMobile && (
            <div className="ml-2 mr-6 flex space-x-4">
              <button
                onClick={navigatePrevious}
                className="hover:bg-emerald-500/50 hover:text-white p-1 rounded-md hover:cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={navigateNext}
                className="hover:bg-emerald-500/50 hover:text-white p-1 rounded-md hover:cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {!isMobile && (
            <div className="mx-4 flex space-x-1">
              <button className="p-1 rounded-md hover:bg-emerald-500/10">
                <Grid2X2 size={16} />
              </button>
              <button className="p-1 rounded-md hover:bg-emerald-500/10">
                <List size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="text-xs ml-2" style={{ color: theme.text }}>
          {currentSectionName}
        </div>

        <div
          className={`flex-grow flex justify-center ${isMobile ? 'ml-2' : ''}`}
        >
          <div
            className="rounded-md px-2 py-2 flex items-center w-auto min-w-0 max-w-[90%] lg:w-[20%] flex-shrink"
            style={{ background: theme.searchBg }}
          >
            <Search
              size={14}
              className="mr-2 flex-shrink-0"
              style={{ color: theme.secondaryText }}
            />
            <span
              className="text-[10px] lg:text-xs truncate"
              style={{ color: theme.secondaryText }}
            >
              @viniciusneto | Front-end Developer
            </span>
          </div>
        </div>

        {/* Toggle de tema (botão para alternar entre claro/escuro) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full mr-2 hover:cursor-pointer"
          style={{ color: theme.text }}
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="w-full flex flex-1 overflow-hidden relative">
        {/* Overlay para dispositivos móveis quando o menu está aberto */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 z-30"
            style={{ backgroundColor: theme.overlay }}
            onClick={closeSidebar}
          />
        )}

        {/* Barra lateral - versão desktop sempre visível, mobile condicional */}
        <div
          className={`
            ${isMobile ? 'fixed left-0 top-0 bottom-0 z-40 w-4/5 max-w-[300px]' : 'w-[30%] lg:w-[15%]'}
            flex flex-col justify-between h-full overflow-y-auto border-r
            transition-transform duration-500 ease-in-out
            ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
          `}
          style={{
            background: theme.sidebar,
            borderColor: theme.border
          }}
        >
          <div>
            {/* Botão fechar para mobile */}
            {isMobile && (
              <div className="flex justify-end p-3">
                <button
                  onClick={closeSidebar}
                  className="p-1 rounded-full"
                  style={{ color: theme.text }}
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Avatar do usuário */}
            <div className="flex flex-col items-center pt-6 pb-4">
              <div
                className="rounded-full p-1 mb-2"
                style={{
                  border: `1px solid ${theme.avatarBorder}`,
                  boxShadow: `0 0 15px ${theme.avatarGlow}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={profileImg.src}
                    alt="Avatar"
                    width={64}
                    height={64}
                    quality={100}
                    className="rounded-full scale-[1.1]"
                  />
                </div>
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: theme.text }}
              >
                Vinícius Neto
              </span>
              <span
                className={`text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}
              >
                Front-end Developer
              </span>
            </div>

            <div
              className="p-2 pt-4 pb-2 text-xs"
              style={{ color: theme.secondaryText }}
            >
              Sections
            </div>
            <ul>
              {sidebarSections.map(section => (
                <li
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-[90%] px-2 py-1.5 flex items-center cursor-pointer mx-2 rounded-md font-medium ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-black'
                      : `bg-transparent ${darkMode ? 'text-white' : 'text-neutral-600'}`
                  }`}
                >
                  <span className="w-5 text-center mr-2">{section.icon}</span>
                  <span className="text-sm">{section.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`p-2 pt-4 flex flex-col gap-1 items-end justify-end ${isMobile ? '-translate-y-18' : '-translate-y-0'}`}
          >
            <h2 className="text-neutral-400 text-xs">
              check out my
              <Link
                href="https://github.com/viunow"
                target="_blank"
                className="pl-1 underline hover:text-emerald-500"
              >
                @github
              </Link>
            </h2>
            <h2 className="text-neutral-400 text-xs">
              developed by
              <Link
                href="https://linkedin.com/in/viniciusneto"
                target="_blank"
                className="pl-1 underline hover:text-emerald-500"
              >
                @viniciusneto
              </Link>
            </h2>
          </div>
        </div>

        {/* Área do conteúdo - sempre 100% em dispositivos móveis */}
        <div
          className={`w-full flex-grow p-6 overflow-y-auto ${isMobile ? 'pb-20' : ''}`}
          style={{ background: theme.background }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectionContent[activeSection].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-md cursor-pointer"
                style={{
                  color: theme.text,
                  transition: 'background-color 0.15s ease'
                }}
                onClick={() => openTerminal(item)}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor = theme.fileHover)
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm text-center font-medium truncate w-full">
                  {item.title}
                </div>
                <div
                  className="text-xs text-center mt-1 truncate w-full"
                  style={{ color: theme.secondaryText }}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu dock inferior para dispositivos móveis */}
      {isMobile && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center py-2 px-2 border-t"
          style={{
            background: theme.dock,
            borderColor: theme.dockBorder,
            boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          {sidebarSections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="flex flex-col items-center justify-center p-1 relative"
            >
              {/* Indicador de ativo */}
              {activeSection === section.id && (
                <div
                  className="absolute bottom-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: theme.dockIconActive }}
                />
              )}

              <div
                style={{
                  color:
                    activeSection === section.id
                      ? theme.dockIconActive
                      : theme.dockIconInactive
                }}
                className={`
                  transition-all duration-300 ease-in-out
                  text-2xl
                  ${activeSection === section.id ? 'transform -translate-y-1' : 'transform translate-y-0'}
                `}
              >
                {section.icon}
              </div>

              {/* Etiqueta opcional - descomente para mostrar o nome também */}
              {/* <span 
                className="text-[10px] mt-0.5" 
                style={{ 
                  color: activeSection === section.id 
                    ? theme.dockIconActive 
                    : theme.dockIconInactive 
                }}
              >
                {section.label}
              </span> */}
            </button>
          ))}

          {/* Botão de informações/sobre */}
          <button
            onClick={toggleSidebar}
            className="flex flex-col items-center justify-center p-1"
          >
            <div
              style={{
                color: theme.dockIconInactive,
                fontSize: '1.5rem'
              }}
              className="transition-colors duration-200 hover:text-emerald-500"
            >
              <Info size={20} />
            </div>
          </button>
        </div>
      )}

      {/* Terminal Modal como componente separado */}
      <TerminalModal
        isOpen={showTerminal}
        onClose={closeTerminal}
        title={terminalTitle}
        content={terminalContent}
        darkMode={darkMode}
      />
    </div>
  );
}
