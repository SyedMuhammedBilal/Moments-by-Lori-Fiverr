import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo from '../assets/WrapLogo.png'
import SideBar from '../components/SideBar';
import styles from '../styles/webwrap.module.css';
import './global.css'

const BASE_URL = process.env.GATSBY_BASE_URL;
console.log(BASE_URL);

export default function Home() {

  // fetching all query from GraphQL for Index Page
  const data = useStaticQuery(graphql`
    query MyQuery(
      $from: Int, 
      $query: String, 
      $size: Int, 
      $sortField: String
      ) {
      webwrap {
        queryFilterableReviews(filter: {
          excludingReviews: [],
          mustIncludePicture: true,
        }, 
        sortField: $sortField, 
        size: $size, 
        query: $query, 
        from: $from
        ) {
          items {
            content
            id
            title
            picture
            added
          }
          total
          hasMore
        }
      }
    }  
  `
  );

  console.log(data);

  return (
    <div>
      <SideBar />
      <div>
        <div  className={styles.container}>
          <div className={styles.contentBoxes} >
            {
              data.webwrap.queryFilterableReviews.items.map((web, index) => {
                return(
                  <a style={{textDecoration: "none", color: "white"}} href={`${BASE_URL}/review/${web.id}`}>
                    <div className={styles.box}> 
                    {
                      web.picture === null ? <img src={logo} alt="logo" /> : <img className={styles.img} src={web.picture} alt="pic" />
                    } 
                    <div className={styles.centered}>
                        <h3><span>{web.title}</span></h3> 
                    </div>
                    </div>            
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};