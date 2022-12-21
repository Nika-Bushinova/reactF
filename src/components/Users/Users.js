import React from "react";
import classes from './Users.module.css'
import squanchy from '../../img/squanchy.png'
import bet from '../../img/bet.png'
import summer from '../../img/summer.png'
import axios from "axios";

class Users extends React.Component {
   constructor(props) {
      super(props);
 
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
               .then((response) => {
                  this.props.set_users(response.data.items)
               })
            /*     props.set_users([
                   { id: 1, followed: false, fullName: 'Squanchy', status: "alive", location: { orbit: 'Sun', planet: 'Earth' }, photoProfile: squanchy },
                   { id: 2, followed: true, fullName: 'Bet', status: "alive", location: { orbit: 'Sun', planet: 'Earth' }, photoProfile: bet },
                   { id: 3, followed: true, fullName: 'Summer', status: "alive", location: { orbit: 'Sun', planet: 'Earth' }, photoProfile: summer },
                ]) */
   }
   
   render() {
      return  <div>
      <button onclick={this.getUsers}> comon</button>
{
   (this.props.users.map((el) => <div id={this.props.users.length + 1}>
      <div>
         <div className={classes.users__img}>
            <img src={el.photos.small !== null ? el.photos.small : summer}></img>
         </div>
         <div>

            {el.followed === true ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button> : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
         </div>
      </div>
      <div>
         <div>
            <div>{el.name}
               <div>{el.status}</div>
            </div>
            <div>
               {'el.location.orbit'}, {'el.location.planet'}
            </div>
         </div>
      </div>
   </div>
   )


   )
}
   </div >
   }


}
export default Users 