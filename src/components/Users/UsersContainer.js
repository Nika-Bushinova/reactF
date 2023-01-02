import { connect } from "react-redux";
import React from "react";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setLoading } from "../../redux/UsersReducer"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UsersAPI } from "../../API/APIJS";
import { toggleProgress, getUsersThunkCreator, onPageChangeThunkCreator } from './../../redux/UsersReducer';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import { withAuthRedirect } from "../../HOC/AuthRedirect";

class UsersContainer extends React.Component {
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)//колбэк для санки getUsersThunkCreator
   }
   onPageChange = (el) => {
      this.props.getUsersThunkCreator(el, this.props.pageSize)//коллбэк для санка onPageChangeThunkCreator
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
      followingInProgress: state.usersPage.followingInProgress,
      isAuth:state.auth.isAuth
   }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);
export default withAuthRedirect( connect(mapStateToProps, {
   follow,
   unfollow,
  getUsersThunkCreator
}
)(AuthRedirectComponent))
