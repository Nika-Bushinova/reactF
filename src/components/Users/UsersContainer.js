import { connect } from "react-redux"
import { followActionCreater, setUsersActionCreater, unfollowActionCreater,setCurrentPageActionCreater,setTotalUsersCountActionCreater } from "../../redux/UsersReducer"
import Users from "./Users"

let mapStateToProps=(state)=>{
   return{
      users:state.usersPage.users,
      pageSize:state.usersPage.pageSize,
      totalUserCount:state.usersPage.totalUserCount,
      currentPage:state.usersPage.currentPage,
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
      },
      setCurrentPage:(pageNumber)=>{
         dispatch(setCurrentPageActionCreater(pageNumber))
      },
      setTotalUsersCount:(totalCount)=>{ 
         dispatch(setTotalUsersCountActionCreater(totalCount))
      }
   
   }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer