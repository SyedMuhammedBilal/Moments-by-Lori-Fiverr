import React from "react"
import SideBar from '../components/SideBar';
import GoogleLogo from '../assets/google.png'
import Logo from '../assets/WrapLogo.png'
import Secimg from '../assets/topic.jpg'
import styles from '../styles/getit.module.css'

function Getit(){
    return(
        <div>
            <SideBar/>
            <div className={styles.getCont}>
                <div className={styles.centerCont}>
                    <div className={styles.extensionCont}>
                        <img  className={styles.img} src={GoogleLogo} alt='image'/>
                        <div className={styles.starter} >
                            <h1 > 1.  Start Webwrap </h1>
                            <p> You can start using Webwrap here by clicking <a> Webwrap</a> </p>
                            <p> for a more complete experience go ahead install Webwrap. 
                                You will be able to start inviting followers and sharing you reviews in minutes </p> 
                        <div className={styles.buttoncont}> 
                            <button className={styles.but}> Chrome Extension </button> 
                            <button className={styles.but}> Android App (Beta)</button></div>
                        </div>               
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.end} >
                        <div className={styles.secondpoint}>
                            <img  className={styles.imgsec} src={Logo} alt='image'/>
                            <p> Go to any unique internet page you want to wrap and click our Blue hat! Now you can review , expand chat and invite followers </p>
                        </div>
                        <b/>
                        <img src={Secimg} className={styles.image} alt='image' /> 
                    </div>
                </div> 
                <br />   
            </div>
        </div>
    )
};

export default Getit;