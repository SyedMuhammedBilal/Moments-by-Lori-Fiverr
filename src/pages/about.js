import React from 'react'
import SideBar from '../components/SideBar';
import BoxImage from '../assets/topic.jpg';
import styles from '../styles/About.module.css';
import { Link } from 'gatsby'

function About() {
    return (
        <div className={styles.container}>
            <SideBar/>
                <div className={styles.centercont}>
                <div className={styles.contentBoxes}>
                <div className={styles.box}>  
                    <img className={styles.img} src={BoxImage} alt="image" />   
                </div>     
            </div>
                <ul className={styles.textcont}>
                    <Link  className={styles.text}>TOS</Link>
                    <Link className={styles.text}>FAQ</Link>
                    <Link className={styles.text}>HELP</Link>
                    <Link className={styles.text}>CONTACT</Link>
                </ul>
            </div>   
        </div>
    )
};

export default About;
