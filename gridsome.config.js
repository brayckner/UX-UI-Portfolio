module.exports = {
  siteName: 'Brayckner',
  siteUrl: 'https://www.brayckner.com',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-150615032-1'
      }
    },
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
