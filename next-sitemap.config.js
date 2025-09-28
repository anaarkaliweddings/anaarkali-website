/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://anaarkaliproduction.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  
  exclude: ['/admin/*', '/api/*', '/dashboard/*', '/test-db'],
  
  additionalPaths: async (config) => [
    await config.transform(config, '/wedding-photography'),
    await config.transform(config, '/wedding-cinematography'),
    await config.transform(config, '/inclusive-wedding-photography'),
    await config.transform(config, '/portfolio'),
    await config.transform(config, '/stories'),
    await config.transform(config, '/love-is-love'),
    await config.transform(config, '/four-acts'),
    await config.transform(config, '/our-vision'),
    await config.transform(config, '/begin-your-story'),
    await config.transform(config, '/consultation')
  ],
  
  transform: async (config, path) => {
    // High priority for main service pages
    if (path.includes('/wedding-photography') || path.includes('/wedding-cinematography')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Medium-high priority for inclusive content
    if (path.includes('/inclusive') || path.includes('/love-is-love')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Medium priority for portfolio and stories
    if (path.includes('/stories') || path.includes('/portfolio')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Standard priority for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/admin', '/api', '/test-db'] },
      { userAgent: 'Googlebot', allow: '/' }
    ],
    additionalSitemaps: [
      'https://anaarkaliproduction.com/sitemap-portfolio.xml',
      'https://anaarkaliproduction.com/sitemap-blog.xml'
    ]
  }
}
