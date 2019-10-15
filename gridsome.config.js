module.exports = {
  siteName: 'Brayckner',
  siteUrl: 'https://www.example.com',
  plugins: [
    {
      // https://www.npmjs.com/package/@gridsome/plugin-sitemap
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        shouldPurge: true,
      }
    },
    { use: 'gridsome-plugin-pug' }
  ]
}
