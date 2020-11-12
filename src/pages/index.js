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
          picture
        }
      }
    }
  }
}
  `)
  console.log(data)
  return (
    <div>
      {
        data.allMarkdownRemark.edges.map((edge) => {
          return(
            <div>
              <h1>{edge.node.frontmatter.title}</h1>
              <img src={edge.node.frontmatter.picture} />
            </div>
          )
        })
      }
    </div>
  )
}