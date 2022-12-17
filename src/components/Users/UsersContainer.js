import { connect } from "react-redux"
import { followActionCreater, setUsersActionCreater, unfollowActionCreater } from "../../redux/UsersReducer"
import Users from "./Users"

let mapStateToProps=(state)=>{
   return{
      users:state.usersPage.users
   }
}

let mapDispatchToProps=(dispatch)=>{
   return{
 
      follow :(userId)=>{
         dispatch(followActionCreater (userId))
      },
      unfollow:(userId)=>{
         dispatch(unfollowActionCreater (userId))
      },
      set_users:(users)=>{
         dispatch(setUsersActionCreater(users))
      }
   
   }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer