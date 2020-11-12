import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          description
          title
          type
        }
      }
    }
  }
}
  `)
  return (
    <div>
      {
        data.allMarkdownRemark.edges.map((edge) => {
          return(
            <h1>{edge.node.frontmatter.title}</h1>
          )
        })
      }
    </div>
  )
}
