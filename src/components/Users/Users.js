import React from "react";
import classes from './Users.module.css'
import summer from '../../img/summer.png'

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div>
            {pages.map((el) => <span className={props.currentPage === el && classes.page} onClick={(e) => props.onPageChange(el)}>{el}, </span>)}
         </div>
         <button /* onClick={getUsers} */> comon</button>
         {
            (props.users.map((el) => <div id={props.users.length + 1}>
               <div>
                  <div className={classes.users__img}>
                     <img src={el.photos.small !== null ? el.photos.small : summer}></img>
                  </div>
                  <div>
                     {el.followed === true ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button> : <button onClick={() => props.follow(el.id)}>Follow</button>}
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