import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import s from './Header.module.css'

function Header(props){


   return(

   <header className={s.wrapper__header}>
      <div><h3>Rick and Morty</h3>
   <h2> Social network</h2>
   </div>
   <div className={s.loginBlock}>
      
{props.isAuth
?<div>{props.login}<div>{props.email}</div><div><p>Log Out</p></div></div>

:<NavLink to={'/login'}>Login</NavLink>}
   </div>
  </header>

  )
}
export default Header