import React from "react";
import classes from './Users.module.css'
import summer from '../../img/summer.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {
   console.log(props)
   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div>
            {pages.map((el) => <span className={props.currentPage === el?classes.page:null} onClick={(e) => props.onPageChange(el)}>{el}, </span>)}
         </div>
         <button /* onClick={getUsers} */> comon</button>
         {
            (props.users.map((el) => <div id={props.users.length + 1}>
               <div>
                  <div className={classes.users__img}>
                     <NavLink to={'/profile/'+el.id}>
                     <img src={el.photos.small !== null ? el.photos.small : summer}></img>
                     </NavLink>
                  </div>
                  <div>
                     {el.followed === true ?
                      <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`,{
                           withCredentials:true,
                        headers:{
                           'API-KEY':'7ce0a521-e4ad-4dd6-ae14-27843ba810f9'
                        }})
                        .then((response) => {
                           if(response.resultCode===0){
                              props.follow(el.id)
                           }
                          
                        })
                     }
                     }>Unfollow</button> :
                       <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`,null,{withCredentials:true, headers:{
                           'API-KEY':'7ce0a521-e4ad-4dd6-ae14-27843ba810f9'
                        }})
                        .then((response) => {
                           if(response.resultCode===0){
                              props.follow(el.id)
                           }
                          
                        })
                        }
                        }>Follow</button>}
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