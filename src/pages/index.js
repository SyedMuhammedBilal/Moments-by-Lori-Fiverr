import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function index() {
  const data = useStaticQuery(graphql`
    query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          picture
        }
      }
    }
  }
}

  `)
  return (
    <div>
      {data.allMarkdownRemark.edges.node.map((edge) => {
        return (
          <div>
            <img src={edge.frontmatter.picture} />
            <h1> {edge.frontmatter.title} </h1>
          </div>
        )
      })}
    </div>
  )
}

export default index
