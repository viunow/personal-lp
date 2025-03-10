// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.viniciusneto.dev',
  generateRobotsTxt: true, // Altere para true para garantir que o robots.txt seja atualizado
  outDir: './public',
  sitemapSize: 7000,
  exclude: ['/admin', '/api/*', '/sentry-example-page'],
  robotsTxtOptions: {
    additionalSitemaps: [
      // Você pode adicionar sitemaps adicionais aqui se necessário
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
};
