'use client';

import * as Sentry from '@sentry/nextjs';

export const initSentry = () => {
  if (typeof window === 'undefined' || window?.SENTRY_INITIALIZED) return;

  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
    integrations: [
      // Adicione quaisquer integrações aqui se necessário
    ]
  });

  window.SENTRY_INITIALIZED = true;
};

export const logError = (error, extras = {}) => {
  if (typeof window === 'undefined' || !Sentry) return;

  Sentry.captureException(error, {
    extra: extras
  });
};

export const logMessage = (message, level = 'info', extras = {}) => {
  if (typeof window === 'undefined' || !Sentry) return;

  Sentry.captureMessage(message, {
    level,
    extra: extras
  });
};
