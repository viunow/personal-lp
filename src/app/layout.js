import './globals.css';
import { Inter } from 'next/font/google';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import { PersonSchema, WebsiteSchema } from '@/components/SEO';
import { Suspense } from 'react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export function generateMetadata({ params }) {
  // URL base para produção
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

  // URL dinâmica para a OG image
  const ogImageUrl = `${baseUrl}/api/og`;

  return {
    title: '@viniciusneto | Front-end Developer',
    description:
      'Vinícius Neto - Frontend Developer specializing in React, Next.js, and modern JavaScript frameworks.',
    keywords: [
      'frontend',
      'developer',
      'react',
      'nextjs',
      'javascript',
      'tailwind',
      'web development'
    ],
    authors: [{ name: 'Vinícius Neto', url: 'https://github.com/viunow' }],
    creator: 'Vinícius Neto',
    openGraph: {
      title: '@viniciusneto | Front-end Developer',
      description:
        'Frontend Developer specializing in React, Next.js, and modern JavaScript frameworks.',
      url: baseUrl,
      siteName: 'Vinícius Neto Portfolio',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Vinícius Neto - Frontend Developer'
        }
      ],
      locale: 'pt_BR',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: '@viniciusneto | Front-end Developer',
      description:
        'Frontend Developer specializing in React, Next.js, and modern JavaScript frameworks.',
      images: [ogImageUrl]
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    },
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: baseUrl
    },
    verification: {
      google: 'Vl5ltq7SSb9HkFNbq4HFzK4fnFY8eH6kiJxD04Qzk5s'
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Esquemas JSON-LD para SEO */}
        <PersonSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* {children} */}
        <Suspense>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
