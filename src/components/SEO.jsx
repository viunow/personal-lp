import Script from 'next/script';

export function JsonLd({ data }) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}

export function PersonSchema() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vinícius Neto',
    jobTitle: 'Front-end Developer',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://viniciusneto.dev',
    sameAs: [
      'https://github.com/viunow',
      'https://linkedin.com/in/viniciusneto'
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Frontend Development'
    ]
  };

  return <JsonLd data={personData} />;
}

export function WebsiteSchema() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://viniciusneto.dev',
    name: 'Vinícius Neto - Front-end Developer',
    description:
      'Vinícius Neto, Frontend Developer specializing in React, Next.js, and modern JavaScript frameworks',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://viniciusneto.dev'}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return <JsonLd data={websiteData} />;
}
