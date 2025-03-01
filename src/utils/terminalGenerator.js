// Utilitário para gerar o conteúdo do terminal com base no item (versão mais rápida)
export const generateTerminalContent = (item, isDarkMode = true) => {
  const prefix = isDarkMode ? '$ ' : '> ';

  // Função para reduzir os valores de delay de um array de conteúdo
  const speedUpContent = (contentArray, speedFactor = 5) => {
    return contentArray.map((line, index) => ({
      ...line,
      // Primeira linha com delay mínimo de 50ms, as demais com intervalos reduzidos
      delay:
        index === 0 ? 50 : Math.max(50, Math.floor(line.delay / speedFactor))
    }));
  };

  // Definição de conteúdos específicos para cada item (usando os mesmos conteúdos)
  const itemContents = {
    // About Section
    'About.md': [
      { text: `${prefix}cat About.md`, type: 'command', delay: 100 },
      { text: `# Vinícius Neto`, type: 'info', delay: 150 },
      {
        text: `Front-end Developer | Javascript | React | NextJS | NestJS`,
        type: 'info',
        delay: 180
      },
      {
        text: `Caxias do Sul, Rio Grande do Sul, Brazil`,
        type: 'info',
        delay: 210
      },
      { text: ``, type: 'info', delay: 240 },
      { text: `## Professional Profile`, type: 'info', delay: 270 },
      {
        text: `Experienced front-end developer specialized in building career and HR websites for`,
        type: 'info',
        delay: 300
      },
      {
        text: `educational institutions using JavaScript, ReactJS, and NextJS. Focused on`,
        type: 'info',
        delay: 330
      },
      {
        text: `delivering high-performance and user-friendly web applications with strong emphasis`,
        type: 'info',
        delay: 360
      },
      {
        text: `on SEO optimization. Skilled at solving complex performance challenges, reducing`,
        type: 'info',
        delay: 390
      },
      {
        text: `server costs, and creating standardized boilerplates to streamline and unify the`,
        type: 'info',
        delay: 420
      },
      { text: `website development process.`, type: 'info', delay: 450 },
      { text: `${prefix}`, type: 'command', delay: 500 }
    ],

    'Location.txt': [
      { text: `${prefix}cat Location.txt`, type: 'command', delay: 100 },
      {
        text: `Location: Caxias do Sul, Rio Grande do Sul, Brazil`,
        type: 'info',
        delay: 150
      },
      { text: ``, type: 'info', delay: 180 },
      {
        text: `Caxias do Sul is located in the state of Rio Grande do Sul, in southern Brazil.`,
        type: 'info',
        delay: 210
      },
      {
        text: `It's the second largest city in the state and is known for its Italian heritage.`,
        type: 'info',
        delay: 240
      },
      { text: `${prefix}`, type: 'command', delay: 270 }
    ],

    'Bio.txt': [
      { text: `${prefix}cat Bio.txt`, type: 'command', delay: 100 },
      { text: `# Developer Bio`, type: 'info', delay: 150 },
      { text: ``, type: 'info', delay: 180 },
      {
        text: `Experienced front-end developer specialized in building career and HR websites for educational institutions using JavaScript, ReactJS, and NextJS.`,
        type: 'info',
        delay: 210
      },
      {
        text: `Focused on delivering high-performance and user-friendly web applications with strong emphasis on SEO optimization.`,
        type: 'info',
        delay: 220
      },
      {
        text: `Skilled at solving complex performance challenges, reducing server costs, and creating standardized boilerplates to streamline and unify the website development process.`,
        type: 'info',
        delay: 230
      },
      {
        text: `Also develop microservices using NestJS and PostgreSQL, such as resume scrapers,`,
        type: 'info',
        delay: 240
      },
      {
        text: `job listing APIs, and other HR-related services.`,
        type: 'info',
        delay: 250
      },
      { text: ``, type: 'info', delay: 270 },
      { text: `## Focus Areas`, type: 'info', delay: 300 },
      {
        text: `- Career and HR websites for educational institutions`,
        type: 'info',
        delay: 330
      },
      { text: `- High-performance web applications`, type: 'info', delay: 360 },
      { text: `- SEO optimization`, type: 'info', delay: 390 },
      {
        text: `- Standardized boilerplates for website development`,
        type: 'info',
        delay: 420
      },
      { text: `${prefix}`, type: 'command', delay: 450 }
    ],

    // Skills Section
    'JavaScript.js': [
      { text: `${prefix}cat JavaScript.js`, type: 'command', delay: 100 },
      { text: `// JavaScript & TypeScript Skills`, type: 'info', delay: 130 },
      { text: ``, type: 'info', delay: 160 },
      { text: `const skills = {`, type: 'info', delay: 190 },
      { text: `  javascript: 'Advanced',`, type: 'info', delay: 220 },
      { text: `  typescript: 'Proficient',`, type: 'info', delay: 250 },
      { text: `  es6Features: [`, type: 'info', delay: 280 },
      { text: `    'Arrow Functions',`, type: 'info', delay: 310 },
      { text: `    'Destructuring',`, type: 'info', delay: 340 },
      { text: `    'Async/Await',`, type: 'info', delay: 370 },
      { text: `    'Promises',`, type: 'info', delay: 400 },
      { text: `    'Modules'`, type: 'info', delay: 430 },
      { text: `  ],`, type: 'info', delay: 460 },
      {
        text: `  certifications: 'JavaScript: Object-Oriented Programming'`,
        type: 'info',
        delay: 490
      },
      { text: `};`, type: 'info', delay: 520 },
      { text: ``, type: 'info', delay: 550 },
      {
        text: `console.log('JavaScript expertise loaded successfully!');`,
        type: 'success',
        delay: 580
      },
      { text: `${prefix}`, type: 'command', delay: 610 }
    ],

    'React.jsx': [
      { text: `${prefix}cat React.jsx`, type: 'command', delay: 100 },
      { text: `// React & Next.js Skills`, type: 'info', delay: 130 },
      { text: ``, type: 'info', delay: 160 },
      { text: `import React from 'react';`, type: 'info', delay: 190 },
      { text: ``, type: 'info', delay: 220 },
      { text: `const ReactSkills = () => {`, type: 'info', delay: 250 },
      { text: `  const skills = [`, type: 'info', delay: 280 },
      { text: `    'Components & Props',`, type: 'info', delay: 310 },
      {
        text: `    'State Management (Redux, Context API)',`,
        type: 'info',
        delay: 340
      },
      {
        text: `    'Hooks (useState, useEffect, useContext)',`,
        type: 'info',
        delay: 370
      },
      { text: `    'Next.js (SSR, SSG, ISR)',`, type: 'info', delay: 400 },
      { text: `    'Performance Optimization'`, type: 'info', delay: 430 },
      { text: `  ];`, type: 'info', delay: 460 },
      { text: ``, type: 'info', delay: 490 },
      { text: `  return (`, type: 'info', delay: 520 },
      { text: `    <div className="react-skills">`, type: 'info', delay: 550 },
      {
        text: `      <h2>React & Next.js Expertise</h2>`,
        type: 'info',
        delay: 580
      },
      { text: `      <ul>`, type: 'info', delay: 610 },
      {
        text: `        {skills.map(skill => <li key={skill}>{skill}</li>)}`,
        type: 'info',
        delay: 640
      },
      { text: `      </ul>`, type: 'info', delay: 670 },
      {
        text: `      <p>Certified in ReactJS and NextJS</p>`,
        type: 'success',
        delay: 700
      },
      { text: `    </div>`, type: 'info', delay: 730 },
      { text: `  );`, type: 'info', delay: 760 },
      { text: `};`, type: 'info', delay: 790 },
      { text: ``, type: 'info', delay: 820 },
      { text: `export default ReactSkills;`, type: 'info', delay: 850 },
      { text: `${prefix}`, type: 'command', delay: 880 }
    ],

    'Backend.js': [
      { text: `${prefix}cat Backend.js`, type: 'command', delay: 100 },
      {
        text: `// Backend Skills with NestJS and PostgreSQL`,
        type: 'info',
        delay: 130
      },
      { text: ``, type: 'info', delay: 160 },
      { text: `const backendSkills = {`, type: 'info', delay: 190 },
      { text: `  frameworks: {`, type: 'info', delay: 220 },
      { text: `    nestjs: 'Proficient',`, type: 'info', delay: 250 },
      { text: `    express: 'Proficient'`, type: 'info', delay: 280 },
      { text: `  },`, type: 'info', delay: 310 },
      { text: `  databases: {`, type: 'info', delay: 340 },
      { text: `    postgresql: 'Intermediate',`, type: 'info', delay: 370 },
      { text: `    mongodb: 'Intermediate'`, type: 'info', delay: 400 },
      { text: `  },`, type: 'info', delay: 430 },
      { text: `  apis: [`, type: 'info', delay: 460 },
      { text: `    'RESTful API Design',`, type: 'info', delay: 490 },
      { text: `    'API Authentication',`, type: 'info', delay: 520 },
      { text: `    'Microservices Architecture'`, type: 'info', delay: 550 },
      { text: `  ],`, type: 'info', delay: 580 },
      { text: `  projects: [`, type: 'info', delay: 610 },
      { text: `    'Resume Scrapers',`, type: 'info', delay: 640 },
      { text: `    'Job Listing APIs',`, type: 'info', delay: 670 },
      { text: `    'HR-related Services'`, type: 'info', delay: 700 },
      { text: `  ]`, type: 'info', delay: 730 },
      { text: `};`, type: 'info', delay: 760 },
      { text: ``, type: 'info', delay: 790 },
      {
        text: `console.log('Backend services initialized successfully');`,
        type: 'success',
        delay: 820
      },
      { text: `${prefix}`, type: 'command', delay: 850 }
    ],

    'UI.css': [
      { text: `${prefix}cat UI.css`, type: 'command', delay: 100 },
      { text: `/* UI Development Skills */`, type: 'info', delay: 130 },
      { text: ``, type: 'info', delay: 160 },
      { text: `.ui-skills {`, type: 'info', delay: 190 },
      { text: `  display: flex;`, type: 'info', delay: 220 },
      { text: `  flex-direction: column;`, type: 'info', delay: 250 },
      { text: `}`, type: 'info', delay: 280 },
      { text: ``, type: 'info', delay: 310 },
      { text: `.frameworks {`, type: 'info', delay: 340 },
      { text: `  /* Tailwind CSS */`, type: 'info', delay: 370 },
      { text: `  display: grid;`, type: 'info', delay: 400 },
      {
        text: `  grid-template-columns: repeat(3, 1fr);`,
        type: 'info',
        delay: 430
      },
      { text: `  gap: 1.5rem;`, type: 'info', delay: 460 },
      { text: `}`, type: 'info', delay: 490 },
      { text: ``, type: 'info', delay: 520 },
      { text: `/* Skills List */`, type: 'info', delay: 550 },
      { text: `.skills-list {`, type: 'info', delay: 580 },
      { text: `  list-style-type: none;`, type: 'info', delay: 610 },
      { text: `}`, type: 'info', delay: 640 },
      { text: ``, type: 'info', delay: 670 },
      { text: `.skills-list li {`, type: 'info', delay: 700 },
      { text: `  margin-bottom: 0.5rem;`, type: 'info', delay: 730 },
      { text: `  padding-left: 1.5rem;`, type: 'info', delay: 760 },
      { text: `  position: relative;`, type: 'info', delay: 790 },
      { text: `}`, type: 'info', delay: 820 },
      { text: ``, type: 'info', delay: 850 },
      { text: `/* UI Skills */`, type: 'info', delay: 880 },
      {
        text: `#tailwind { font-weight: bold; color: #38bdf8; }`,
        type: 'info',
        delay: 910
      },
      {
        text: `#responsive { font-weight: bold; color: #34d399; }`,
        type: 'info',
        delay: 940
      },
      {
        text: `#modern-ui { font-weight: bold; color: #f472b6; }`,
        type: 'info',
        delay: 970
      },
      { text: `${prefix}`, type: 'command', delay: 1000 }
    ],

    // Projects Section
    'Career-Sites.zip': [
      { text: `${prefix}unzip Career-Sites.zip`, type: 'command', delay: 100 },
      { text: `Extracting files...`, type: 'info', delay: 130 },
      { text: `Archive:  Career-Sites.zip`, type: 'info', delay: 160 },
      { text: `  inflating: README.md`, type: 'info', delay: 190 },
      { text: `  inflating: project-details.txt`, type: 'info', delay: 220 },
      { text: `  inflating: technologies.json`, type: 'info', delay: 250 },
      { text: `Extraction completed.`, type: 'success', delay: 280 },
      { text: `${prefix}cat README.md`, type: 'command', delay: 310 },
      { text: `# Career Sites Project`, type: 'info', delay: 340 },
      { text: ``, type: 'info', delay: 370 },
      {
        text: `HR websites for educational institutions built with:`,
        type: 'info',
        delay: 400
      },
      { text: `- React 18/19`, type: 'info', delay: 430 },
      { text: `- Next.js 14/15`, type: 'info', delay: 460 },
      { text: `- Tailwind CSS`, type: 'info', delay: 490 },
      { text: `- SEO optimized`, type: 'info', delay: 520 },
      { text: ``, type: 'info', delay: 550 },
      {
        text: `Performance focused with reduced server costs and optimized user experience.`,
        type: 'info',
        delay: 580
      },
      { text: `${prefix}`, type: 'command', delay: 610 }
    ],

    'Boilerplate.git': [
      {
        text: `${prefix}git clone Boilerplate.git`,
        type: 'command',
        delay: 100
      },
      { text: `Cloning into 'Boilerplate'...`, type: 'info', delay: 130 },
      {
        text: `remote: Enumerating objects: 127, done.`,
        type: 'info',
        delay: 160
      },
      {
        text: `remote: Counting objects: 100% (127/127), done.`,
        type: 'info',
        delay: 190
      },
      {
        text: `remote: Compressing objects: 100% (98/98), done.`,
        type: 'info',
        delay: 220
      },
      {
        text: `Receiving objects: 100% (127/127), 24.8 KiB | 8.27 MiB/s, done.`,
        type: 'success',
        delay: 250
      },
      {
        text: `Resolving deltas: 100% (45/45), done.`,
        type: 'success',
        delay: 280
      },
      { text: `${prefix}cd Boilerplate`, type: 'command', delay: 310 },
      { text: `${prefix}cat README.md`, type: 'command', delay: 340 },
      {
        text: `# Standardized Website Development Process`,
        type: 'info',
        delay: 370
      },
      { text: ``, type: 'info', delay: 400 },
      {
        text: `This boilerplate provides a standardized approach for website development, including:`,
        type: 'info',
        delay: 430
      },
      { text: ``, type: 'info', delay: 460 },
      {
        text: `- Folder structure for Next.js projects`,
        type: 'info',
        delay: 490
      },
      { text: `- Tailwind CSS configuration`, type: 'info', delay: 520 },
      { text: `- Reusable components library`, type: 'info', delay: 550 },
      { text: `- SEO optimization tools`, type: 'info', delay: 580 },
      {
        text: `- Integration with Google Tag Manager and Facebook Pixel`,
        type: 'info',
        delay: 610
      },
      { text: `- Automated sitemap generation`, type: 'info', delay: 640 },
      { text: ``, type: 'info', delay: 670 },
      { text: `Benefits:`, type: 'info', delay: 700 },
      { text: `- Streamlined development process`, type: 'info', delay: 730 },
      { text: `- Consistent code quality`, type: 'info', delay: 760 },
      { text: `- Faster project initialization`, type: 'info', delay: 790 },
      {
        text: `- Unified approach across team members`,
        type: 'info',
        delay: 820
      },
      { text: `${prefix}`, type: 'command', delay: 850 }
    ],

    'API-Services.js': [
      { text: `${prefix}node API-Services.js`, type: 'command', delay: 100 },
      { text: `Loading API services...`, type: 'info', delay: 130 },
      {
        text: `Initializing NestJS microservices...`,
        type: 'info',
        delay: 160
      },
      {
        text: `Connecting to PostgreSQL database...`,
        type: 'info',
        delay: 190
      },
      { text: `[SUCCESS] Connected to database`, type: 'success', delay: 220 },
      { text: ``, type: 'info', delay: 250 },
      { text: `Available Services:`, type: 'info', delay: 280 },
      { text: `1. Resume Scraper API`, type: 'info', delay: 310 },
      {
        text: `   - Extracts structured data from uploaded resumes`,
        type: 'info',
        delay: 340
      },
      {
        text: `   - Supports PDF, DOCX, and plain text formats`,
        type: 'info',
        delay: 370
      },
      { text: ``, type: 'info', delay: 400 },
      { text: `2. Job Listing API`, type: 'info', delay: 430 },
      {
        text: `   - Aggregates job postings from multiple sources`,
        type: 'info',
        delay: 460
      },
      {
        text: `   - Provides search and filtering capabilities`,
        type: 'info',
        delay: 490
      },
      { text: ``, type: 'info', delay: 520 },
      { text: `3. HR Analytics Service`, type: 'info', delay: 550 },
      {
        text: `   - Tracks application metrics and conversion rates`,
        type: 'info',
        delay: 580
      },
      {
        text: `   - Generates reports on recruitment performance`,
        type: 'info',
        delay: 610
      },
      { text: ``, type: 'info', delay: 640 },
      {
        text: `All services deployed and running successfully.`,
        type: 'success',
        delay: 670
      },
      { text: `${prefix}`, type: 'command', delay: 700 }
    ],

    // Experience Section
    'Valorizza.work': speedUpContent([
      { text: `${prefix}cat Valorizza.work`, type: 'command', delay: 100 },
      { text: `# Valorizza`, type: 'info', delay: 130 },
      {
        text: `Front-end Developer (Front-end Development with JS, ReactJS, NextJS and NestJS)`,
        type: 'info',
        delay: 160
      },
      {
        text: `July 2023 - Present (1 year 9 months)`,
        type: 'info',
        delay: 190
      },
      { text: ``, type: 'info', delay: 220 },
      { text: `## Responsibilities:`, type: 'info', delay: 250 },
      {
        text: `- Building career and HR websites for educational institutions`,
        type: 'info',
        delay: 280
      },
      {
        text: `- Developing front-end applications using React and Next.js`,
        type: 'info',
        delay: 310
      },
      {
        text: `- Creating microservices with NestJS and PostgreSQL`,
        type: 'info',
        delay: 340
      },
      {
        text: `- Implementing resume scrapers and job listing APIs`,
        type: 'info',
        delay: 370
      },
      {
        text: `- Optimizing web application performance and SEO`,
        type: 'info',
        delay: 400
      },
      {
        text: `- Standardizing website development processes`,
        type: 'info',
        delay: 430
      },
      { text: `${prefix}`, type: 'command', delay: 460 }
    ]),

    'Skeel.work': speedUpContent([
      { text: `${prefix}cat Skeel.work`, type: 'command', delay: 100 },
      { text: `# Skeel - Recrutamento Inteligente`, type: 'info', delay: 130 },
      {
        text: `Developer (Web development using C# and Angular)`,
        type: 'info',
        delay: 160
      },
      {
        text: `September 2022 - June 2023 (10 months)`,
        type: 'info',
        delay: 190
      },
      { text: ``, type: 'info', delay: 220 },
      { text: `## Responsibilities:`, type: 'info', delay: 250 },
      {
        text: `- Web application development using C# backend`,
        type: 'info',
        delay: 280
      },
      {
        text: `- Creating UI components with Angular framework`,
        type: 'info',
        delay: 310
      },
      {
        text: `- Working on recruitment and HR technology solutions`,
        type: 'info',
        delay: 340
      },
      {
        text: `- Implementing intelligent recruitment features`,
        type: 'info',
        delay: 370
      },
      { text: `${prefix}`, type: 'command', delay: 400 }
    ]),

    'Promob.work': speedUpContent([
      { text: `${prefix}cat Promob.work`, type: 'command', delay: 100 },
      {
        text: `# Promob Software Solutions | A 2020 Company`,
        type: 'info',
        delay: 130
      },
      {
        text: `Programmer I (Web development using C# and Angular)`,
        type: 'info',
        delay: 160
      },
      {
        text: `November 2021 - September 2022 (11 months)`,
        type: 'info',
        delay: 190
      },
      { text: ``, type: 'info', delay: 220 },
      { text: `## Responsibilities:`, type: 'info', delay: 250 },
      {
        text: `- Web development using C# and Angular frameworks`,
        type: 'info',
        delay: 280
      },
      {
        text: `- Maintaining and enhancing existing applications`,
        type: 'info',
        delay: 310
      },
      {
        text: `- Collaborating with cross-functional teams`,
        type: 'info',
        delay: 340
      },
      {
        text: `- Implementing new features and bug fixes`,
        type: 'info',
        delay: 370
      },
      { text: `${prefix}`, type: 'command', delay: 400 }
    ]),

    // Contact Section
    'Phone.contact': speedUpContent([
      { text: `${prefix}cat Phone.contact`, type: 'command', delay: 100 },
      { text: `Phone: +55 54 981241241 (Mobile)`, type: 'info', delay: 130 },
      { text: ``, type: 'info', delay: 160 },
      {
        text: `Available for calls and WhatsApp messages.`,
        type: 'info',
        delay: 190
      },
      { text: `${prefix}`, type: 'command', delay: 220 }
    ]),

    'LinkedIn.url': speedUpContent([
      { text: `${prefix}open LinkedIn.url`, type: 'command', delay: 100 },
      { text: `Opening LinkedIn profile...`, type: 'info', delay: 130 },
      { text: `URL: linkedin.com/in/viniciusneto`, type: 'info', delay: 160 },
      { text: `Profile loaded successfully.`, type: 'success', delay: 190 },
      { text: ``, type: 'info', delay: 220 },
      {
        text: `Connect with me on LinkedIn for professional inquiries and networking.`,
        type: 'info',
        delay: 250
      },
      { text: `${prefix}`, type: 'command', delay: 280 }
    ]),

    'GitHub.url': speedUpContent([
      { text: `${prefix}open GitHub.url`, type: 'command', delay: 100 },
      { text: `Opening GitHub profile...`, type: 'info', delay: 130 },
      { text: `URL: github.com/viunow`, type: 'info', delay: 160 },
      { text: `Profile loaded successfully.`, type: 'success', delay: 190 },
      { text: ``, type: 'info', delay: 220 },
      {
        text: `Check out my repositories and code samples on GitHub.`,
        type: 'info',
        delay: 250
      },
      { text: `${prefix}`, type: 'command', delay: 280 }
    ]),

    // Home Section
    'Welcome.txt': speedUpContent([
      { text: `${prefix}cat Welcome.txt`, type: 'command', delay: 100 },
      { text: `# Welcome to My Portfolio!`, type: 'info', delay: 130 },
      { text: ``, type: 'info', delay: 160 },
      {
        text: `Hi there! I'm Vinícius Neto, a Front-end Developer from Brazil.`,
        type: 'info',
        delay: 190
      },
      { text: ``, type: 'info', delay: 220 },
      {
        text: `Feel free to explore my portfolio to learn more about my:`,
        type: 'info',
        delay: 250
      },
      { text: `- Skills & expertise`, type: 'info', delay: 270 },
      { text: `- Professional experience`, type: 'info', delay: 290 },
      { text: `- Projects`, type: 'info', delay: 310 },
      { text: `- Contact information`, type: 'info', delay: 330 },
      { text: ``, type: 'info', delay: 350 },
      {
        text: `Navigate through the sidebar sections to discover more!`,
        type: 'info',
        delay: 380
      },
      { text: `${prefix}`, type: 'command', delay: 410 }
    ]),

    'Status.md': speedUpContent([
      { text: `${prefix}cat Status.md`, type: 'command', delay: 100 },
      {
        text: `# Current Status: Front-end Developer @ Valorizza`,
        type: 'info',
        delay: 130
      },
      { text: ``, type: 'info', delay: 160 },
      { text: `## Technologies:`, type: 'info', delay: 190 },
      { text: `- JavaScript`, type: 'info', delay: 210 },
      { text: `- React`, type: 'info', delay: 230 },
      { text: `- NextJS`, type: 'info', delay: 250 },
      { text: `- NestJS`, type: 'info', delay: 270 },
      { text: ``, type: 'info', delay: 290 },
      { text: `## Current Focus:`, type: 'info', delay: 320 },
      {
        text: `Building career and HR websites for educational institutions`,
        type: 'info',
        delay: 350
      },
      { text: ``, type: 'info', delay: 380 },
      { text: `## Looking for:`, type: 'info', delay: 410 },
      {
        text: `Challenging projects in front-end development with a focus on UI/UX and performance.`,
        type: 'info',
        delay: 440
      },
      { text: `${prefix}`, type: 'command', delay: 470 }
    ])
  };

  // Verifique se existe conteúdo específico para o item
  if (itemContents[item.title]) {
    return itemContents[item.title];
  }

  // Conteúdo básico do terminal para itens sem conteúdo específico
  return [
    { text: `${prefix}cat ${item.title}`, type: 'command', delay: 100 },
    { text: `Loading content for: ${item.title}`, type: 'info', delay: 130 },
    { text: `Title: ${item.title}`, type: 'info', delay: 160 },
    { text: `Description: ${item.description}`, type: 'info', delay: 190 },
    { text: `Content loading completed.`, type: 'success', delay: 220 },
    { text: `${prefix}`, type: 'command', delay: 250 }
  ];
};
