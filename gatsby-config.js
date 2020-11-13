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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 590,
                  },
              },
          ],
      },
    }
  ],
}