import React from "react";
import classes from './Users.module.css'
import summer from '../../img/summer.png'
import { NavLink } from 'react-router-dom';
import { FollowAPI, setFollowF, setUnFollowF } from "../../API/APIJS";
import { follow } from "../../redux/UsersReducer";


let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div>
         <div>
            {pages.map((el) => <span className={props.currentPage === el ? classes.page : null} onClick={(e) => props.onPageChange(el)}>{el}, </span>)}
         </div>
         <button> comon</button>
         {
            (props.users.map((el) => <div id={props.users.length + 1}>
               <div>

                  <div className={classes.users__img}>
                     <NavLink to={'/profile/' + el.id}>
                        <img src={el.photos.small !== null ? el.photos.small : summer}></img>
                     </NavLink>
                  </div>

                  <div>

                     {el.followed
                        ? <button disabled={props.followingInProgress.some((id) => {
                           return id === el.id
                        })}
                           onClick={() => {
                              props.unfollow(el)

                           }
                           }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some((id) => {
                           return id === el.id
                        })} className={props.followingInProgress ? classes.toogleTrue : null}
                           onClick={() => {
                              props.follow(el)

                           }
                           }>Follow</button>
                     }
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
   )
}
export default Users