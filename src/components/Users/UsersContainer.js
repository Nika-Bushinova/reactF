import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import { followActionCreater, setUsersActionCreater, unfollowActionCreater, setCurrentPageActionCreater, setTotalUsersCountActionCreater } from "../../redux/UsersReducer"
import Users from "./Users";
import loader from "../../img/loading.svg"
class UsersContainer extends React.Component {
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            console.log('resp', response)
            console.log('props', this.props)
            this.props.set_users(response.data.items)//засунули в state.users itemsы с сервера
            this.props.setTotalUsersCount(response.data.totalCount)//засунули в state totalCounts через totalUserCount
         })
   }

   onPageChange = (el) => {
      this.props.setCurrentPage(el)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.set_users(response.data.items)
         })
   }


   render() {

      return <>
      {this.props.isFetching?<img src={loader}/>:null}
      <Users totalUserCount={this.props.totalUserCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onPageChange={this.onPageChange}
         users={this.props.users}
         unfollow={this.props.unfollow}
         follow={this.props.follow} />
</>
   }


}

let mapStateToProps = (state) => {
   console.log(state)
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      isFetching:state.usersPage.isFetching
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

      follow: (userId) => {
         dispatch(followActionCreater(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreater(userId))
      },
      set_users: (users) => {
         dispatch(setUsersActionCreater(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageActionCreater(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountActionCreater(totalCount))
      }

   }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
