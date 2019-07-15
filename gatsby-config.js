module.exports = {
  siteMetadata: {
    title: `Rocio Corona`,
    description: `Portfolio oficial de Rocio Corona. Fotógrafa de eventos, momentos y viajes. `,
    author: `Juanma Perez`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `proyectos`,
        path: `${__dirname}/src/content/proyectos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lugares`,
        path: `${__dirname}/src/content/lugares`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `momentos`,
        path: `${__dirname}/src/content/momentos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fbf9f3`,
        theme_color: `#323846`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
