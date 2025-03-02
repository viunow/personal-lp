'use client';

// Função para inicializar o Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || window?.GA_INITIALIZED) return;

  // Carregar o script do Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Configurar o Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

  window.GA_INITIALIZED = true;
};

// Função para enviar um evento personalizado
export const logEvent = (action, category, label, value) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

// Função para registrar uma visualização de página
export const logPageView = url => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    page_path: url
  });
};
