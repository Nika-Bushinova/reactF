import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'

//   <div className={`${classes.item} ${classes.active}`}><a href='#'>Profile</a></div>
const Nav = (props) => {//add classes
   let navPoint=props.point.nav.map((el)=>{ return <div className={classes.item} ><NavLink to={el.to} className={nav => nav.isActive ? classes.active : classes.item}>{el.name}</NavLink></div>})
   return (
      <nav className={classes.wrapper__nav}>
         {navPoint}
        </nav>)
}
export default Nav