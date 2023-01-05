import React from 'react';
import classes from'./Posts.module.css'
import { nameProfile } from '../Profile';
import like from './../../../img/heart.svg'
import { photoProfile } from '../Profile__info';
import { addLikeActionCreater } from './../../../redux/profileReducer';

function Post(props){
  let likeElement=React.createRef()
   let likeCountF=()=>{
    let count=props.likeCounts
    props.addLike(props.id,count)
   } 
   return(     <div className={classes.item}>
      <div className ={classes.image}><img src={photoProfile} alt='mini avatar'></img></div>
      <div>
      <p>{'h'}</p>
      <p>{props.message}</p>
      <div className={classes.button}><div className={classes.countLikes}><img className={classes.like} src={like} onClick={likeCountF}alt='like'></img></div> <span ref={likeElement}>{props.likeCounts}</span></div>
      </div>
      </div>)
}


export default Post