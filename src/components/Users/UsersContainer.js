import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setLoading } from "../../redux/UsersReducer"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
class UsersContainer extends React.Component {
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state
      this.props.setLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.setLoading(false)
            this.props.setUsers(response.data.items)//засунули в state.users itemsы с сервера
            this.props.setTotalUsersCount(response.data.totalCount)//засунули в state totalCounts через totalUserCount
         })
   }

   onPageChange = (el) => {
      this.props.setCurrentPage(el)
      this.props.setLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setLoading(false)
         })
   }


   render() {

      return <>
           {this.props.isFetching?<Preloader/>:null}
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
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      currentPage: state.usersPage.currentPage,
      isFetching:state.usersPage.isFetching,
   }
}


export default connect(mapStateToProps, {
   follow,
unfollow,
setUsers,
setCurrentPage,
setTotalUsersCount,
setLoading
}
)(UsersContainer)
