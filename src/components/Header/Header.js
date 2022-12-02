import React from 'react';
import s from './Header.module.css'

function Header(){
   return(

   <header className={s.wrapper__header}>
      <div><h3>Rick and Morty</h3>
   <h2> Social network</h2>
   </div>
  </header>

  )
}
export default Header