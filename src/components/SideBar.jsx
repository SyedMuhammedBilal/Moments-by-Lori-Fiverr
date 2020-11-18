import React from 'react'
import styles from '../styles/sidebar.module.css'
import Logo from '../assets/WrapLogo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'gatsby';

function SideBar(){
    return(
        <div className={styles.sideBar}>
            <img className={styles.Logo}  src={Logo} />
            <br/>
            <ul className={styles.navlist}>
                <Link  className={styles.list} to="/" >Wraps</Link>
                <Link className={styles.list} >Follows</Link>
                <Link className={styles.list} to="/leaderboard" >Leaders</Link>
                <Link className={styles.list} to="/get-it" >Get it</Link>
                <Link className={styles.list} to="/about" >About</Link>
            </ul>
            <br/>
            <div className={styles.socialMedia}>
                <YouTubeIcon className={styles.icon} />
                <InstagramIcon className={styles.icon} />
                <LinkedInIcon className={styles.icon} />
                <FacebookIcon className={styles.icon}/>
                <TwitterIcon className={styles.icon} />
            </div>
        </div>
    )
};

export default SideBar;