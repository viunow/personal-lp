'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Grid2X2,
  List,
  Sun,
  Moon
} from 'lucide-react';
import { sidebarSections } from '@/utils/sidebarSections';
import { sectionContent } from '@/utils/sectionContent';
import Link from 'next/link';
import TerminalModal from '@/components/TerminalModal';
import { generateTerminalContent } from '@/utils/terminalGenerator';
import profileImg from '../../public/profile.jpg';

export default function WebPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalTitle, setTerminalTitle] = useState('');
  const [terminalContent, setTerminalContent] = useState([]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
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

  const theme = {
    background: darkMode ? '#1e1e1e' : '#ffffff',
    sidebar: darkMode ? '#333333' : '#f5f5f7',
    titleBar: darkMode ? '#3C3B39' : '#e7e7e7',
    text: darkMode ? '#ffffff' : '#000000',
    secondaryText: darkMode ? '#9a9a9a' : '#6e6e73',
    border: darkMode ? '#383838' : '#d2d2d7',
    fileHover: darkMode ? '#2a2a2a' : '#f0f0f0',
    fileActive: darkMode ? '#00bc7d' : '#e8e8ed',
    searchBg: darkMode ? '#0c0c0c' : '#f0f0f0',
    avatarBorder: darkMode ? '#00bc7d' : '#d2d2d7',
    avatarGlow: darkMode ? 'rgba(0, 188, 125, 1)' : 'rgba(59, 130, 246, 0.3)'
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
        <div
          className="flex items-center space-x-4"
          style={{ color: theme.secondaryText }}
        >
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

          <div className="mx-4 flex space-x-1">
            <button className="p-1 rounded-md hover:bg-emerald-500/10">
              <Grid2X2 size={16} />
            </button>
            <button className="p-1 rounded-md hover:bg-emerald-500/10">
              <List size={16} />
            </button>
          </div>
        </div>

        <div className="w-[65px] text-xs ml-2" style={{ color: theme.text }}>
          {currentSectionName}
        </div>

        <div className="flex-grow flex justify-center">
          <div
            className="rounded-md px-2 py-2 flex items-center w-64"
            style={{ background: theme.searchBg }}
          >
            <Search
              size={14}
              className="mr-2"
              style={{ color: theme.secondaryText }}
            />
            <span className="text-xs" style={{ color: theme.secondaryText }}>
              front-end developer
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
      <div className="w-full flex flex-1 overflow-hidden">
        {/* Barra lateral */}
        <div
          className="w-[30%] lg:w-[15%] flex flex-col justify-between h-full overflow-y-auto border-r"
          style={{
            background: theme.sidebar,
            borderColor: theme.border
          }}
        >
          <div>
            {/* Avatar do usuário - NOVO */}
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
              <span className="text-xs text-neutral-300">
                Front-end Developer
              </span>
            </div>

            <div
              className="p-2 pt-4 pb-1 text-xs"
              style={{ color: theme.secondaryText }}
            >
              Favorites
            </div>
            <ul>
              {sidebarSections.map(section => (
                <li
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-[90%] px-2 py-1.5 flex items-center cursor-pointer mx-2 rounded-md font-medium ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-black'
                      : 'bg-transparent text-white'
                  }`}
                >
                  <span className="w-5 text-center mr-2">{section.icon}</span>
                  <span className="text-sm">{section.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 pt-4 flex items-end justify-end">
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

        {/* Área do conteúdo */}
        <div
          className="w-[70%] lg:w-[85%] flex-grow p-6 overflow-y-auto"
          style={{ background: theme.background }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
