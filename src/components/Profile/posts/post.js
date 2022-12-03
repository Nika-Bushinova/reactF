import React from 'react';
import pC from'./Posts.module.css'
import { nameProfile } from './../Profile';
function Post(props){
   return(     <div className={pC.item}>
      <div className ={pC.image}></div>
      <div>
      <p>{nameProfile}</p>
      <p>{props.message}</p>
      <div className={pC.button}><span>Like {props.likeCounts}</span></div>
      </div>
      </div>)
}
export default Post