/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.viniciusneto.dev',
  generateRobotsTxt: false,
  outDir: './public',
  generateIndexSitemap: false,
  exclude: ['/admin', '/api/*', '/sentry-example-page'],
  additionalPaths: async config => {
    const result = [];
    result.push({ loc: '/', changefreq: 'weekly', priority: 1 });

    // Adicione páginas personalizadas que podem não ser detectadas automaticamente
    // Exemplo: caminhos dinâmicos
    // result.push({ loc: '/projetos/projeto-especial', changefreq: 'weekly', priority: 0.8 });

    return result;
  }
};
