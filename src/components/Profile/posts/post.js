import React from 'react';
import classes from'./Posts.module.css'
import { nameProfile } from './../Profile';
import like from './../../../img/heart.svg'
import { photo2 } from '../Profile__info';

function Post(props){
   return(     <div className={classes.item}>
      <div className ={classes.image}><img src={photo2} alt='mini avatar'></img></div>
      <div>
      <p>{nameProfile}</p>
      <p>{props.message}</p>
      <div className={classes.button}><div className={classes.countLikes}><img className={classes.like} src={like} alt='like'></img></div> <span>{props.likeCounts}</span></div>
      </div>
      </div>)
}


export default Post