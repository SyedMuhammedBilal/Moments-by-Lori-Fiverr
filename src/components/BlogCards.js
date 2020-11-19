import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './BlogCards.css'

function BlogCards() {
    const data = useStaticQuery(graphql`
        query  {
            allMarkdownRemark {
                edges {
                node {
                    frontmatter {
                    title
                    picture
                    }
                    html
                }
                }
            }
        }
    `)
    return (
        <div class="container">
            <div class="row">
            {
                  data.allMarkdownRemark.edges.map((edge) => {
                      return (
                            <div class="blog-containers">
                                <div class="card">
                                    <div class="image">
                                        <img src={edge.node.frontmatter.picture} width="100%" />
                                    </div>
                                    <div class="text">
                                        <h2>{edge.node.frontmatter.title}</h2>
                                        <p dangerouslySetInnerHTML={{ __html: edge.node.html }}></p>
                                    </div>
                                </div>
                            </div>
                        )
                  })
              }
            </div>
        </div>
    )
}

export default BlogCards
