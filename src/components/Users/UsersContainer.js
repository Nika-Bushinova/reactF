import { connect } from "react-redux";
import React from "react";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setLoading } from "../../redux/UsersReducer"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UsersAPI } from "../../API/APIJS";
import { toggleProgress } from './../../redux/UsersReducer';
class UsersContainer extends React.Component {
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state
      this.props.setLoading(true)
      this.props.toggleProgress(true)
      UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
         this.props.setLoading(false)
         this.props.setUsers(data.items)//засунули в state.users itemsы с сервера
         this.props.setTotalUsersCount(data.totalCount)//засунули в state totalCounts через totalUserCount

      })
   }
   onPageChange = (el) => {
      this.props.setCurrentPage(el)
      this.props.setLoading(true)
      UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
         this.props.setUsers(data.items)
         this.props.setLoading(false)
         this.props.toggleProgress(true)
      })
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow} 
            followingInProgress={this.props.followingInProgress}
            toggleProgress={this.props.toggleProgress}
            />
            
      </>
   }


}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress:state.usersPage.followingInProgress
   }
}


export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   setLoading,
   toggleProgress
}
)(UsersContainer)
