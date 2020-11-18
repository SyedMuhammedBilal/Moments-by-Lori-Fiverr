module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog-posts`,
        name: "blogs",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- photography -->`
      }
    },
  ],
};