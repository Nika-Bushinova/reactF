import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useMatch, useMatches, useNavigate, useParams } from 'react-router-dom'
import { setUserProfile} from '../../redux/profileReducer'
import {ProfileAPI } from '../../API/APIJS';
import { getDataThunkCreator, getStatusThunk , addFrase, updateThunkCreator } from './../../redux/profileReducer';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../HOC/AuthRedirect';
import { compose } from 'redux';
export let nameProfile = 'Rick Sanchez'

export function withRouter(Children) {
  return (props) => {
     const match = { params: useParams()};
  
     return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {
   componentDidMount() {  
    
      let userId = this.props.match.params.userId
      this.props.getDataThunkCreator(userId)
      this.props.getStatusThunk(userId)
      
   }
   render() {
      if(!this.props.isAuth){return <Navigate to={'/login'}/>}

      return (

         <Profile {...this.props} profile={this.props.profile} statusFrase={this.props.statusFrase} updateStatus={this.props.updateThunkCreator} getStatus={this.props.getStatusThunk}  />
      )
   }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  statusFrase:state.profilePage.statusFrase
});





export default compose(
  connect(mapStateToProps, {getDataThunkCreator,addFrase,updateThunkCreator,getStatusThunk}),
  withRouter,
  withAuthRedirect)(ProfileContainer)
