import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'

//   <div className={`${classes.item} ${classes.active}`}><a href='#'>Profile</a></div>
const Nav = () => {//add classes
   return (
      <nav className={classes.wrapper__nav}>
         <div className={classes.item} ><NavLink to='/profile' className={nav => nav.isActive ? classes.active : classes.item}>Profile</NavLink></div>
         <div className={classes.item}><NavLink to='/messages' className={nav => nav.isActive ? classes.active : classes.item}>Messages</NavLink></div>
         <div className={classes.item}><NavLink to='/news' className={nav => nav.isActive ? classes.active : classes.item}>News</NavLink></div>
         <div className={classes.item}><NavLink to='/music' className={nav => nav.isActive ? classes.active : classes.item}>Music</NavLink></div>
         <div className={classes.item}><NavLink to='/settings' className={nav => nav.isActive ? classes.active : classes.item}>Settings</NavLink></div>
      </nav>)
}
export default Nav