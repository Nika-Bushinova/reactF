import React from 'react';
import classes from './Nav.module.css'
//   <div className={`${classes.item} ${classes.active}`}><a href='#'>Profile</a></div>
const Nav=()=>{//add classes
   return(
   <nav className={classes.wrapper__nav}>
   <div className={classes.item}><a href='#'>Profile</a></div>
   <div className={classes.item}><a href='#'>Messages</a></div>
   <div className={classes.item}><a href='#'>News</a></div>
   <div className={classes.item}><a href='#'>Music</a></div>
   <div className={classes.item}><a href='#'>Settings</a></div>
   </nav>)
}
export default Nav