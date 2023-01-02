import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from '../Messages.module.css'
const Message = (props) => {
   return (
    <div className={classes.div__message}><div><img src={props.photo} className={classes.img__message}alt='friend'></img></div><div className={classes.message}>{props.text}</div></div>  
   )
}
export default Message