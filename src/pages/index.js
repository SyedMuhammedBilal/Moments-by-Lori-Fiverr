import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           title
//           picture
//         }
//       }
//     }
//   }
// }

//   `)
  return (
    <div>
      {/* {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div>
            <img src={edge.node.frontmatter.picture} />
            <h1> {edge.node.frontmatter.title} </h1>
          </div>
        )
      })} */}
      <Navbar />
      <HeroSection />
      <Cards/> 
      <Footer />
    </div>
  )
}