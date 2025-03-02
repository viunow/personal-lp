/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.viniciusneto.dev',
  generateRobotsTxt: false,
  outDir: './public',
  sitemapSize: 7000,
  exclude: ['/admin', '/api/*', '/sentry-example-page'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
};
