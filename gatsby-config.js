module.exports = {
  siteMetadata: {
    title: `helloHackers Society`,
    description: `A hackathon society based out of Manchester Metropolitain University, we run ManMetHacks anually aswell as workshops, talks, meet-ups, coding courses and more! Accelerate your degree and join the society today!`,
    author: `Tom Misson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `helloHackers Society`,
        short_name: `helloHackers`,
        start_url: `/`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/hellohackers.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/events`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
