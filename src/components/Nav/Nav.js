import React from 'react';
import classes from './Nav.module.css'
//   <div className={`${classes.item} ${classes.active}`}><a href='#'>Profile</a></div>
const Nav=()=>{//add classes
   return(
   <nav className={classes.wrapper__nav}>
   <div className={classes.item}><a href='/profile'>Profile</a></div>
   <div className={classes.item}><a href='/messages'>Messages</a></div>
   <div className={classes.item}><a href='/news'>News</a></div>
   <div className={classes.item}><a href='/music'>Music</a></div>
   <div className={classes.item}><a href='/settings'>Settings</a></div>
   </nav>)
}
export default Nav