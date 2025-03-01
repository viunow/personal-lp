import './globals.css';
import { Inter } from 'next/font/google';
import ogImage from '../../public/og.png';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export function generateMetadata() {
  const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

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
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: '@viniciusneto | Front-end Developer',
      description:
        'Frontend Developer specializing in React, Next.js, and modern JavaScript frameworks.',
      url: baseUrl,
      siteName: 'Vinícius Neto Portfolio',
      images: [
        {
          url: ogImage.src,
          width: 1200,
          height: 630,
          alt: 'Vinícius Neto - Frontend Developer'
        }
      ],
      locale: 'en',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: '@viniciusneto | Front-end Developer',
      description:
        'Frontend Developer specializing in React, Next.js, and modern JavaScript frameworks.',
      images: [ogImage.src]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
