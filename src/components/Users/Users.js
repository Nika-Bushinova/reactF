import React from "react";
import classes from './Users.module.css'
import squanchy from '../../img/squanchy.png'
import bet from '../../img/bet.png'
import summer from '../../img/summer.png'
let Users = (props) => {
   if (!props.users.length) {
      props.set_users([
         { id: 1, followed: false, fullName: 'Squanchy', status: "alive", location: { orbit: 'Sun', planet: 'Earth' }, photoProfile: squanchy },
         { id: 2, followed: true, fullName: 'Bet', status: "alive", location: { orbit: 'Sun', planet: 'Earth' }, photoProfile: bet },
         { id: 3, followed: true, fullName: 'Summer', status: "alive", location: { orbit: 'Sun', planet: 'Earth' }, photoProfile: summer },
      ])
   }
   return <div>
      {(props.users.map((el) => <div id={props.users.length+1}>
         <div>
            <div className={classes.users__img}>
               <img src={el.photoProfile}></img>
            </div>
            <div>

               {el.followed === true ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button> : <button onClick={() => props.follow(el.id)}>Follow</button>}
            </div>
         </div>
         <div>
            <div>
               <div>{el.fullName}
                  <div>{el.status}</div>
               </div>
               <div>
                  {el.location.orbit}, {el.location.planet}
               </div>
            </div>
         </div>
      </div>
      )


      )}
   </div>

}
export default Users 