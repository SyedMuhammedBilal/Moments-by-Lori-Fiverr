const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {

    let parentNode = getNode(node.parent)
  if (node.internal.type === "MarkdownRemark") {
    if (parentNode.sourceInstanceName === "blogs") {
    let slug = createFilePath({ node, getNode })
    slug = slug.replace(/\//g, '');
    actions.createNodeField({ node, name: "slug", value: slug })
    }
  }
}

