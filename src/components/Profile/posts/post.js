import React from 'react';
import pC from'./Posts.module.css'

function Post(props){
   console.log(props.message)
   return(     <div className={pC.item}>
      <div className ={pC.image}></div>
      <p>{props.message}</p>
      <div className={pC.button}><span>Like {props.likeCounts}</span></div>
      
      </div>)
}
export default Post