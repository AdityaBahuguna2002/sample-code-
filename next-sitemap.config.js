/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cynoteck.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: true,
    exclude: ['/admin/**', '/login'], 
  };
  