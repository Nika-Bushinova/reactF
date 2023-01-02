import React from 'react';
import classes from '../Messages.module.css'
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
   return (
      <div className={classes.name}>
         <div>
         <img src={props.photo} className={classes.min__Img} alt={props.name}></img>
         </div>
         <NavLink to={`/messages/ ${props.name} `} className={(nameA) => nameA.isActive ? classes.active : classes.name}>{props.name}</NavLink>
         
      </div>
   )
}
export default DialogItem