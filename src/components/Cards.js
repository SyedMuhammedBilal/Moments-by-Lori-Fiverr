import React from 'react';
import './Cards.css';
import { graphql, useStaticQuery } from 'gatsby'
import CardItem from './CardItem';
import img1 from '../assets/img-9.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-8.jpg'

function Cards() {
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
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
              {
                  data.allMarkdownRemark.edges.map((edge) => {
                      return (
                        <ul className='cards__items'>
                          <CardItem
                            src={edge.node.frontmatter.picture}
                            text={edge.node.frontmatter.title}
                            label='Adventure'
                            path='/services'
                            />
                        </ul>
                      )
                  })
              }
        </div>
      </div>
    </div>
  );
}

export default Cards;
