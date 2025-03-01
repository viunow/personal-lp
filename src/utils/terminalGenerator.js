// Utilitário para gerar o conteúdo do terminal com base no item
export const generateTerminalContent = (item, isDarkMode = true) => {
  const prefix = isDarkMode ? '$ ' : '> ';

  // Definição de conteúdos específicos para cada item
  const itemContents = {
    // About Section
    'About.md': [
      { text: `${prefix}cat About.md`, type: 'command', delay: 300 },
      { text: `# Vinícius Neto`, type: 'info', delay: 600 },
      {
        text: `Frontend Developer | Javascript | React | NextJS | NestJS`,
        type: 'info',
        delay: 900
      },
      {
        text: `Caxias do Sul, Rio Grande do Sul, Brazil`,
        type: 'info',
        delay: 1200
      },
      { text: ``, type: 'info', delay: 1500 },
      { text: `## Professional Profile`, type: 'info', delay: 1800 },
      {
        text: `Experienced front-end developer specialized in building career and HR websites for`,
        type: 'info',
        delay: 2100
      },
      {
        text: `educational institutions using JavaScript, ReactJS, and NextJS. Focused on`,
        type: 'info',
        delay: 2400
      },
      {
        text: `delivering high-performance and user-friendly web applications with strong emphasis`,
        type: 'info',
        delay: 2700
      },
      {
        text: `on SEO optimization. Skilled at solving complex performance challenges, reducing`,
        type: 'info',
        delay: 3000
      },
      {
        text: `server costs, and creating standardized boilerplates to streamline and unify the`,
        type: 'info',
        delay: 3300
      },
      { text: `website development process.`, type: 'info', delay: 3600 },
      { text: `${prefix}`, type: 'command', delay: 4000 }
    ],

    'Location.txt': [
      { text: `${prefix}cat Location.txt`, type: 'command', delay: 300 },
      {
        text: `Location: Caxias do Sul, Rio Grande do Sul, Brazil`,
        type: 'info',
        delay: 600
      },
      { text: ``, type: 'info', delay: 900 },
      {
        text: `Caxias do Sul is located in the state of Rio Grande do Sul, in southern Brazil.`,
        type: 'info',
        delay: 1200
      },
      {
        text: `It's the second largest city in the state and is known for its Italian heritage.`,
        type: 'info',
        delay: 1500
      },
      { text: `${prefix}`, type: 'command', delay: 1800 }
    ],

    'Bio.txt': [
      { text: `${prefix}cat Bio.txt`, type: 'command', delay: 300 },
      { text: `# Developer Bio`, type: 'info', delay: 600 },
      { text: ``, type: 'info', delay: 900 },
      {
        text: `Also develop microservices using NestJS and PostgreSQL, such as resume scrapers,`,
        type: 'info',
        delay: 1200
      },
      {
        text: `job listing APIs, and other HR-related services.`,
        type: 'info',
        delay: 1500
      },
      { text: ``, type: 'info', delay: 1800 },
      { text: `## Focus Areas`, type: 'info', delay: 2100 },
      {
        text: `- Career and HR websites for educational institutions`,
        type: 'info',
        delay: 2400
      },
      {
        text: `- High-performance web applications`,
        type: 'info',
        delay: 2700
      },
      { text: `- SEO optimization`, type: 'info', delay: 3000 },
      {
        text: `- Standardized boilerplates for website development`,
        type: 'info',
        delay: 3300
      },
      { text: `${prefix}`, type: 'command', delay: 3600 }
    ],

    // Skills Section
    'JavaScript.js': [
      { text: `${prefix}cat JavaScript.js`, type: 'command', delay: 300 },
      { text: `// JavaScript & TypeScript Skills`, type: 'info', delay: 600 },
      { text: ``, type: 'info', delay: 900 },
      { text: `const skills = {`, type: 'info', delay: 1200 },
      { text: `  javascript: 'Advanced',`, type: 'info', delay: 1500 },
      { text: `  typescript: 'Proficient',`, type: 'info', delay: 1800 },
      { text: `  es6Features: [`, type: 'info', delay: 2100 },
      { text: `    'Arrow Functions',`, type: 'info', delay: 2400 },
      { text: `    'Destructuring',`, type: 'info', delay: 2700 },
      { text: `    'Async/Await',`, type: 'info', delay: 3000 },
      { text: `    'Promises',`, type: 'info', delay: 3300 },
      { text: `    'Modules'`, type: 'info', delay: 3600 },
      { text: `  ],`, type: 'info', delay: 3900 },
      {
        text: `  certifications: 'JavaScript: Object-Oriented Programming'`,
        type: 'info',
        delay: 4200
      },
      { text: `};`, type: 'info', delay: 4500 },
      { text: ``, type: 'info', delay: 4800 },
      {
        text: `console.log('JavaScript expertise loaded successfully!');`,
        type: 'success',
        delay: 5100
      },
      { text: `${prefix}`, type: 'command', delay: 5400 }
    ],

    'React.jsx': [
      { text: `${prefix}cat React.jsx`, type: 'command', delay: 300 },
      { text: `// React & Next.js Skills`, type: 'info', delay: 600 },
      { text: ``, type: 'info', delay: 900 },
      { text: `import React from 'react';`, type: 'info', delay: 1200 },
      { text: ``, type: 'info', delay: 1500 },
      { text: `const ReactSkills = () => {`, type: 'info', delay: 1800 },
      { text: `  const skills = [`, type: 'info', delay: 2100 },
      { text: `    'Components & Props',`, type: 'info', delay: 2400 },
      {
        text: `    'State Management (Redux, Context API)',`,
        type: 'info',
        delay: 2700
      },
      {
        text: `    'Hooks (useState, useEffect, useContext)',`,
        type: 'info',
        delay: 3000
      },
      { text: `    'Next.js (SSR, SSG, ISR)',`, type: 'info', delay: 3300 },
      { text: `    'Performance Optimization'`, type: 'info', delay: 3600 },
      { text: `  ];`, type: 'info', delay: 3900 },
      { text: ``, type: 'info', delay: 4200 },
      { text: `  return (`, type: 'info', delay: 4500 },
      { text: `    <div className="react-skills">`, type: 'info', delay: 4800 },
      {
        text: `      <h2>React & Next.js Expertise</h2>`,
        type: 'info',
        delay: 5100
      },
      { text: `      <ul>`, type: 'info', delay: 5400 },
      {
        text: `        {skills.map(skill => <li key={skill}>{skill}</li>)}`,
        type: 'info',
        delay: 5700
      },
      { text: `      </ul>`, type: 'info', delay: 6000 },
      {
        text: `      <p>Certified in ReactJS and NextJS</p>`,
        type: 'success',
        delay: 6300
      },
      { text: `    </div>`, type: 'info', delay: 6600 },
      { text: `  );`, type: 'info', delay: 6900 },
      { text: `};`, type: 'info', delay: 7200 },
      { text: ``, type: 'info', delay: 7500 },
      { text: `export default ReactSkills;`, type: 'info', delay: 7800 },
      { text: `${prefix}`, type: 'command', delay: 8100 }
    ],

    'Backend.js': [
      { text: `${prefix}cat Backend.js`, type: 'command', delay: 300 },
      {
        text: `// Backend Skills with NestJS and PostgreSQL`,
        type: 'info',
        delay: 600
      },
      { text: ``, type: 'info', delay: 900 },
      { text: `const backendSkills = {`, type: 'info', delay: 1200 },
      { text: `  frameworks: {`, type: 'info', delay: 1500 },
      { text: `    nestjs: 'Advanced',`, type: 'info', delay: 1800 },
      { text: `    express: 'Proficient'`, type: 'info', delay: 2100 },
      { text: `  },`, type: 'info', delay: 2400 },
      { text: `  databases: {`, type: 'info', delay: 2700 },
      { text: `    postgresql: 'Advanced',`, type: 'info', delay: 3000 },
      { text: `    mongodb: 'Intermediate'`, type: 'info', delay: 3300 },
      { text: `  },`, type: 'info', delay: 3600 },
      { text: `  apis: [`, type: 'info', delay: 3900 },
      { text: `    'RESTful API Design',`, type: 'info', delay: 4200 },
      { text: `    'API Authentication',`, type: 'info', delay: 4500 },
      { text: `    'Microservices Architecture'`, type: 'info', delay: 4800 },
      { text: `  ],`, type: 'info', delay: 5100 },
      { text: `  projects: [`, type: 'info', delay: 5400 },
      { text: `    'Resume Scrapers',`, type: 'info', delay: 5700 },
      { text: `    'Job Listing APIs',`, type: 'info', delay: 6000 },
      { text: `    'HR-related Services'`, type: 'info', delay: 6300 },
      { text: `  ]`, type: 'info', delay: 6600 },
      { text: `};`, type: 'info', delay: 6900 },
      { text: ``, type: 'info', delay: 7200 },
      {
        text: `console.log('Backend services initialized successfully');`,
        type: 'success',
        delay: 7500
      },
      { text: `${prefix}`, type: 'command', delay: 7800 }
    ],

    'UI.css': [
      { text: `${prefix}cat UI.css`, type: 'command', delay: 300 },
      { text: `/* UI Development Skills */`, type: 'info', delay: 600 },
      { text: ``, type: 'info', delay: 900 },
      { text: `.ui-skills {`, type: 'info', delay: 1200 },
      { text: `  display: flex;`, type: 'info', delay: 1500 },
      { text: `  flex-direction: column;`, type: 'info', delay: 1800 },
      { text: `}`, type: 'info', delay: 2100 },
      { text: ``, type: 'info', delay: 2400 },
      { text: `.frameworks {`, type: 'info', delay: 2700 },
      { text: `  /* Tailwind CSS */`, type: 'info', delay: 3000 },
      { text: `  display: grid;`, type: 'info', delay: 3300 },
      {
        text: `  grid-template-columns: repeat(3, 1fr);`,
        type: 'info',
        delay: 3600
      },
      { text: `  gap: 1.5rem;`, type: 'info', delay: 3900 },
      { text: `}`, type: 'info', delay: 4200 },
      { text: ``, type: 'info', delay: 4500 },
      { text: `/* Skills List */`, type: 'info', delay: 4800 },
      { text: `.skills-list {`, type: 'info', delay: 5100 },
      { text: `  list-style-type: none;`, type: 'info', delay: 5400 },
      { text: `}`, type: 'info', delay: 5700 },
      { text: ``, type: 'info', delay: 6000 },
      { text: `.skills-list li {`, type: 'info', delay: 6300 },
      { text: `  margin-bottom: 0.5rem;`, type: 'info', delay: 6600 },
      { text: `  padding-left: 1.5rem;`, type: 'info', delay: 6900 },
      { text: `  position: relative;`, type: 'info', delay: 7200 },
      { text: `}`, type: 'info', delay: 7500 },
      { text: ``, type: 'info', delay: 7800 },
      { text: `/* UI Skills */`, type: 'info', delay: 8100 },
      {
        text: `#tailwind { font-weight: bold; color: #38bdf8; }`,
        type: 'info',
        delay: 8400
      },
      {
        text: `#responsive { font-weight: bold; color: #34d399; }`,
        type: 'info',
        delay: 8700
      },
      {
        text: `#modern-ui { font-weight: bold; color: #f472b6; }`,
        type: 'info',
        delay: 9000
      },
      { text: `${prefix}`, type: 'command', delay: 9300 }
    ],

    // Projects Section
    'Career-Sites.zip': [
      { text: `${prefix}unzip Career-Sites.zip`, type: 'command', delay: 300 },
      { text: `Extracting files...`, type: 'info', delay: 600 },
      { text: `Archive:  Career-Sites.zip`, type: 'info', delay: 900 },
      { text: `  inflating: README.md`, type: 'info', delay: 1200 },
      { text: `  inflating: project-details.txt`, type: 'info', delay: 1500 },
      { text: `  inflating: technologies.json`, type: 'info', delay: 1800 },
      { text: `Extraction completed.`, type: 'success', delay: 2100 },
      { text: `${prefix}cat README.md`, type: 'command', delay: 2400 },
      { text: `# Career Sites Project`, type: 'info', delay: 2700 },
      { text: ``, type: 'info', delay: 3000 },
      {
        text: `HR websites for educational institutions built with:`,
        type: 'info',
        delay: 3300
      },
      { text: `- React 18/19`, type: 'info', delay: 3600 },
      { text: `- Next.js 14/15`, type: 'info', delay: 3900 },
      { text: `- Tailwind CSS`, type: 'info', delay: 4200 },
      { text: `- SEO optimized`, type: 'info', delay: 4500 },
      { text: ``, type: 'info', delay: 4800 },
      {
        text: `Performance focused with reduced server costs and optimized user experience.`,
        type: 'info',
        delay: 5100
      },
      { text: `${prefix}`, type: 'command', delay: 5400 }
    ],

    'Boilerplate.git': [
      {
        text: `${prefix}git clone Boilerplate.git`,
        type: 'command',
        delay: 300
      },
      { text: `Cloning into 'Boilerplate'...`, type: 'info', delay: 600 },
      {
        text: `remote: Enumerating objects: 127, done.`,
        type: 'info',
        delay: 900
      },
      {
        text: `remote: Counting objects: 100% (127/127), done.`,
        type: 'info',
        delay: 1200
      },
      {
        text: `remote: Compressing objects: 100% (98/98), done.`,
        type: 'info',
        delay: 1500
      },
      {
        text: `Receiving objects: 100% (127/127), 24.8 KiB | 8.27 MiB/s, done.`,
        type: 'success',
        delay: 1800
      },
      {
        text: `Resolving deltas: 100% (45/45), done.`,
        type: 'success',
        delay: 2100
      },
      { text: `${prefix}cd Boilerplate`, type: 'command', delay: 2400 },
      { text: `${prefix}cat README.md`, type: 'command', delay: 2700 },
      {
        text: `# Standardized Website Development Process`,
        type: 'info',
        delay: 3000
      },
      { text: ``, type: 'info', delay: 3300 },
      {
        text: `This boilerplate provides a standardized approach for website development, including:`,
        type: 'info',
        delay: 3600
      },
      { text: ``, type: 'info', delay: 3900 },
      {
        text: `- Folder structure for Next.js projects`,
        type: 'info',
        delay: 4200
      },
      { text: `- Tailwind CSS configuration`, type: 'info', delay: 4500 },
      { text: `- Reusable components library`, type: 'info', delay: 4800 },
      { text: `- SEO optimization tools`, type: 'info', delay: 5100 },
      {
        text: `- Integration with Google Tag Manager and Facebook Pixel`,
        type: 'info',
        delay: 5400
      },
      { text: `- Automated sitemap generation`, type: 'info', delay: 5700 },
      { text: ``, type: 'info', delay: 6000 },
      { text: `Benefits:`, type: 'info', delay: 6300 },
      { text: `- Streamlined development process`, type: 'info', delay: 6600 },
      { text: `- Consistent code quality`, type: 'info', delay: 6900 },
      { text: `- Faster project initialization`, type: 'info', delay: 7200 },
      {
        text: `- Unified approach across team members`,
        type: 'info',
        delay: 7500
      },
      { text: `${prefix}`, type: 'command', delay: 7800 }
    ],

    'API-Services.js': [
      { text: `${prefix}node API-Services.js`, type: 'command', delay: 300 },
      { text: `Loading API services...`, type: 'info', delay: 600 },
      {
        text: `Initializing NestJS microservices...`,
        type: 'info',
        delay: 900
      },
      {
        text: `Connecting to PostgreSQL database...`,
        type: 'info',
        delay: 1200
      },
      { text: `[SUCCESS] Connected to database`, type: 'success', delay: 1500 },
      { text: ``, type: 'info', delay: 1800 },
      { text: `Available Services:`, type: 'info', delay: 2100 },
      { text: `1. Resume Scraper API`, type: 'info', delay: 2400 },
      {
        text: `   - Extracts structured data from uploaded resumes`,
        type: 'info',
        delay: 2700
      },
      {
        text: `   - Supports PDF, DOCX, and plain text formats`,
        type: 'info',
        delay: 3000
      },
      { text: ``, type: 'info', delay: 3300 },
      { text: `2. Job Listing API`, type: 'info', delay: 3600 },
      {
        text: `   - Aggregates job postings from multiple sources`,
        type: 'info',
        delay: 3900
      },
      {
        text: `   - Provides search and filtering capabilities`,
        type: 'info',
        delay: 4200
      },
      { text: ``, type: 'info', delay: 4500 },
      { text: `3. HR Analytics Service`, type: 'info', delay: 4800 },
      {
        text: `   - Tracks application metrics and conversion rates`,
        type: 'info',
        delay: 5100
      },
      {
        text: `   - Generates reports on recruitment performance`,
        type: 'info',
        delay: 5400
      },
      { text: ``, type: 'info', delay: 5700 },
      {
        text: `All services deployed and running successfully.`,
        type: 'success',
        delay: 6000
      },
      { text: `${prefix}`, type: 'command', delay: 6300 }
    ],

    // Experience Section
    'Valorizza.work': [
      { text: `${prefix}cat Valorizza.work`, type: 'command', delay: 300 },
      { text: `# Valorizza`, type: 'info', delay: 600 },
      {
        text: `Frontend Developer (Frontend Development with JS, ReactJS, NextJS and NestJS)`,
        type: 'info',
        delay: 900
      },
      {
        text: `July 2023 - Present (1 year 9 months)`,
        type: 'info',
        delay: 1200
      },
      { text: ``, type: 'info', delay: 1500 },
      { text: `## Responsibilities:`, type: 'info', delay: 1800 },
      {
        text: `- Building career and HR websites for educational institutions`,
        type: 'info',
        delay: 2100
      },
      {
        text: `- Developing frontend applications using React and Next.js`,
        type: 'info',
        delay: 2400
      },
      {
        text: `- Creating microservices with NestJS and PostgreSQL`,
        type: 'info',
        delay: 2700
      },
      {
        text: `- Implementing resume scrapers and job listing APIs`,
        type: 'info',
        delay: 3000
      },
      {
        text: `- Optimizing web application performance and SEO`,
        type: 'info',
        delay: 3300
      },
      {
        text: `- Standardizing website development processes`,
        type: 'info',
        delay: 3600
      },
      { text: `${prefix}`, type: 'command', delay: 3900 }
    ],

    'Skeel.work': [
      { text: `${prefix}cat Skeel.work`, type: 'command', delay: 300 },
      { text: `# Skeel - Recrutamento Inteligente`, type: 'info', delay: 600 },
      {
        text: `Developer (Web development using C# and Angular)`,
        type: 'info',
        delay: 900
      },
      {
        text: `September 2022 - June 2023 (10 months)`,
        type: 'info',
        delay: 1200
      },
      { text: ``, type: 'info', delay: 1500 },
      { text: `## Responsibilities:`, type: 'info', delay: 1800 },
      {
        text: `- Web application development using C# backend`,
        type: 'info',
        delay: 2100
      },
      {
        text: `- Creating UI components with Angular framework`,
        type: 'info',
        delay: 2400
      },
      {
        text: `- Working on recruitment and HR technology solutions`,
        type: 'info',
        delay: 2700
      },
      {
        text: `- Implementing intelligent recruitment features`,
        type: 'info',
        delay: 3000
      },
      { text: `${prefix}`, type: 'command', delay: 3300 }
    ],

    'Promob.work': [
      { text: `${prefix}cat Promob.work`, type: 'command', delay: 300 },
      {
        text: `# Promob Software Solutions | A 2020 Company`,
        type: 'info',
        delay: 600
      },
      {
        text: `Programmer I (Web development using C# and Angular)`,
        type: 'info',
        delay: 900
      },
      {
        text: `November 2021 - September 2022 (11 months)`,
        type: 'info',
        delay: 1200
      },
      { text: ``, type: 'info', delay: 1500 },
      { text: `## Responsibilities:`, type: 'info', delay: 1800 },
      {
        text: `- Web development using C# and Angular frameworks`,
        type: 'info',
        delay: 2100
      },
      {
        text: `- Maintaining and enhancing existing applications`,
        type: 'info',
        delay: 2400
      },
      {
        text: `- Collaborating with cross-functional teams`,
        type: 'info',
        delay: 2700
      },
      {
        text: `- Implementing new features and bug fixes`,
        type: 'info',
        delay: 3000
      },
      { text: `${prefix}`, type: 'command', delay: 3300 }
    ],

    // Contact Section
    'Phone.contact': [
      { text: `${prefix}cat Phone.contact`, type: 'command', delay: 300 },
      { text: `Phone: +55 54 981241241 (Mobile)`, type: 'info', delay: 600 },
      { text: ``, type: 'info', delay: 900 },
      {
        text: `Available for calls and WhatsApp messages.`,
        type: 'info',
        delay: 1200
      },
      { text: `${prefix}`, type: 'command', delay: 1500 }
    ],

    'LinkedIn.url': [
      { text: `${prefix}open LinkedIn.url`, type: 'command', delay: 300 },
      { text: `Opening LinkedIn profile...`, type: 'info', delay: 600 },
      { text: `URL: linkedin.com/in/viniciusneto`, type: 'info', delay: 900 },
      { text: `Profile loaded successfully.`, type: 'success', delay: 1200 },
      { text: ``, type: 'info', delay: 1500 },
      {
        text: `Connect with me on LinkedIn for professional inquiries and networking.`,
        type: 'info',
        delay: 1800
      },
      { text: `${prefix}`, type: 'command', delay: 2100 }
    ],

    'GitHub.url': [
      { text: `${prefix}open GitHub.url`, type: 'command', delay: 300 },
      { text: `Opening GitHub profile...`, type: 'info', delay: 600 },
      { text: `URL: github.com/viunow`, type: 'info', delay: 900 },
      { text: `Profile loaded successfully.`, type: 'success', delay: 1200 },
      { text: ``, type: 'info', delay: 1500 },
      {
        text: `Check out my repositories and code samples on GitHub.`,
        type: 'info',
        delay: 1800
      },
      { text: `${prefix}`, type: 'command', delay: 2100 }
    ],

    // Home Section
    'Welcome.txt': [
      { text: `${prefix}cat Welcome.txt`, type: 'command', delay: 300 },
      { text: `# Welcome to My Portfolio!`, type: 'info', delay: 600 },
      { text: ``, type: 'info', delay: 900 },
      {
        text: `Hi there! I'm Vinícius Neto, a Frontend Developer from Brazil.`,
        type: 'info',
        delay: 1200
      },
      { text: ``, type: 'info', delay: 1500 },
      {
        text: `Feel free to explore my portfolio to learn more about my:`,
        type: 'info',
        delay: 1800
      },
      { text: `- Skills & expertise`, type: 'info', delay: 1900 },
      { text: `- Professional experience`, type: 'info', delay: 2000 },
      { text: `- Projects`, type: 'info', delay: 2100 },
      { text: `- Contact information`, type: 'info', delay: 2200 },
      { text: ``, type: 'info', delay: 2300 },
      {
        text: `Navigate through the sidebar sections to discover more!`,
        type: 'info',
        delay: 3600
      },
      { text: `${prefix}`, type: 'command', delay: 3900 }
    ],

    'Status.md': [
      { text: `${prefix}cat Status.md`, type: 'command', delay: 300 },
      {
        text: `# Current Status: Frontend Developer @ Valorizza`,
        type: 'info',
        delay: 600
      },
      { text: ``, type: 'info', delay: 900 },
      { text: `## Technologies:`, type: 'info', delay: 1200 },
      { text: `- JavaScript`, type: 'info', delay: 1300 },
      { text: `- React`, type: 'info', delay: 1400 },
      { text: `- NextJS`, type: 'info', delay: 1500 },
      { text: `- NestJS`, type: 'info', delay: 1600 },
      { text: ``, type: 'info', delay: 1700 },
      { text: `## Current Focus:`, type: 'info', delay: 3000 },
      {
        text: `Building career and HR websites for educational institutions`,
        type: 'info',
        delay: 3300
      },
      { text: ``, type: 'info', delay: 3600 },
      { text: `## Looking for:`, type: 'info', delay: 3900 },
      {
        text: `Challenging projects in frontend development with a focus on UI/UX and performance.`,
        type: 'info',
        delay: 4100
      },
      { text: `${prefix}`, type: 'command', delay: 4400 }
    ]
  };

  // Verifique se existe conteúdo específico para o item
  if (itemContents[item.title]) {
    return itemContents[item.title];
  }

  // Conteúdo básico do terminal para itens sem conteúdo específico
  return [
    { text: `${prefix}cat ${item.title}`, type: 'command', delay: 300 },
    { text: `Loading content for: ${item.title}`, type: 'info', delay: 600 },
    { text: `Title: ${item.title}`, type: 'info', delay: 900 },
    { text: `Description: ${item.description}`, type: 'info', delay: 1200 },
    { text: `Content loading completed.`, type: 'success', delay: 1500 },
    { text: `${prefix}`, type: 'command', delay: 1800 }
  ];
};
