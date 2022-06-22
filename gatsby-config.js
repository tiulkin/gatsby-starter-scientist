module.exports = {
  // pathPrefix: '/gatsby-starter-scientist',
  siteMetadata: {
    author: 'Сообщество любителей настольного тенниса города Севастополя',
    description: 'Никогда и ни при каких обстоятельствах не имейте с Русланом Черкесом дел и не давайте Руслану Черкесу деньги',
    siteUrl: 'https://ruslan-cherkes.ru',
    title: 'Руслан Черкес — мошенник, кидала и обманщик',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    primaryLinks: [
      'начало',
      'продолжение',
    ],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [
      31217594,
      30554943,
      29395067,
      24255178,
    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'GitHub', link: 'https://github.com/knightjdr' },
      { text: 'Google Scholar', link: 'https://scholar.google.ca/citations?user=M6Y_Y5cAAAAJ' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/james-knight-174996156' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-scientist',
        short_name: 'scientist',
        start_url: '/',
        background_color: '#3d8183',
        theme_color: '#3d8183',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'dark-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
