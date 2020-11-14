import React from 'react';
import SideBar from '../components/SideBar';
import styles from '../styles/leaderBoard.module.css';
import Avatar from '@material-ui/core/Avatar';
import RateReviewIcon from '@material-ui/icons/RateReview';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ExposureIcon from '@material-ui/icons/Exposure';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Mani from '../assets/mani.jpg';

function LeaderBoard(){
    return(
        <div className={styles.main}>
        <SideBar/>
        {/* center div */}
        <div className={styles.centerDiv}>
    
        {/* center div header */}
            <div className={styles.centerDivHeader}>
            <ul>
            <Avatar className={styles.avatar}>
        <RateReviewIcon />
        </Avatar>
        <br/>
         <a>REVIEWS</a> </ul>
            <ul>
            <Avatar className={styles.avatar} >
        <EmojiEmotionsIcon />
        </Avatar>
        <br/> <a> FOLLOWERS </a> </ul>
            <ul>
            <Avatar className={styles.avatar} > 
        <ThumbsUpDownIcon />
        </Avatar>
        <br/> <a> THUMBS UP </a> </ul>
            <ul>
            <Avatar className={styles.avatar} >
        <MovieCreationIcon/>
        </Avatar>
        <br/>
        <a> INVITES </a></ul>
            <ul>
            <Avatar className={styles.avatar} >
        <InsertInvitationIcon />
        </Avatar>
        <br/><a> CREADIBILITY </a></ul>

            </div>
            
            {/* center div leader container */}
            <div className={styles.leaderCont} >
            <h3> Your current postion in the reviews leaderboard: #50  </h3>
            <div className={styles.contentBoxes}>
            <div className={styles.boxes} >
             <Avatar className={styles.avt} alt="Remy Sharp" src={Mani} />
             <div className={styles.profile}>
             <h5> SULEMAN AHMED </h5>
             <table >
  <tr>
    <th>Reviews</th>
    <th>Followers</th>
  </tr>
  <tr>
    <td>4k</td>
    <td>12</td>
   
  </tr>

</table>
</div>
<div className={styles.point}>
<ExposureIcon className={styles.pointicon}/>
<h4> 1.5k Points</h4>
</div>
    
             
            </div>



            <div className={styles.boxes} >
             <Avatar className={styles.avt} alt="Remy Sharp" src={Mani} />
             <div className={styles.profile}>
             <h5> SULEMAN AHMED </h5>
             <table >
  <tr>
    <th>Reviews</th>
    <th>Followers</th>
  </tr>
  <tr>
    <td>4k</td>
    <td>12</td>
   
  </tr>

</table>
</div>
<div className={styles.point}>
<ExposureIcon className={styles.pointicon}/>
<h4> 1.5k Points</h4>
</div>
    
             
            </div>





            <div className={styles.boxes} >
             <Avatar className={styles.avt} alt="Remy Sharp" src={Mani} />
             <div className={styles.profile}>
             <h5> SULEMAN AHMED </h5>
             <table >
  <tr>
    <th>Reviews</th>
    <th>Followers</th>
  </tr>
  <tr>
    <td>4k</td>
    <td>12</td>
   
  </tr>

</table>
</div>
<div className={styles.point}>
<ExposureIcon className={styles.pointicon}/>
<h4> 1.5k Points</h4>
</div>
    
             
            </div>

            </div>


            </div>
        </div>
        </div>
    )
}

export default LeaderBoard
