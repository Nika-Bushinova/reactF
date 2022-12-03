import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css'
const Messages = () => {//add classes
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogs__messages}>
            <div>Messages</div>
            
         </div>
         <div className={classes.dialogs__names}>
            <div>Dialogs</div>
            
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>Squanchy</NavLink></div>
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>Birdperson</NavLink></div>
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>Morty</NavLink></div>
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>Mr.Poopybutthole</NavLink></div>
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>Summer</NavLink></div>
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>Bet</NavLink></div>
            <div className={classes.name}><NavLink to='/' className={(nameA)=>nameA.isActive?classes.active:classes.name}>The President</NavLink></div>

         </div>


      </div>
   )
}
export default Messages