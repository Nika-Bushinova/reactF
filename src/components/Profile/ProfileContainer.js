import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import setUserProfile, { setUserProfileAC } from '../../redux/profileReducer'
import {ProfileAPI } from '../../API/APIJS';
export let nameProfile = 'Rick Sanchez'
export function withRouter(Children) {
   return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}
class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) { userId = 9 }
      ProfileAPI.getDatas(userId).then((response) => {
         this.props.setUserProfile(response)
      })
   }
   render() {
      console.log('3')
      return (

         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}
let mapStateToProps = (state) => {
   console.log('map 1', state.profilePage.profile)
   return { profile: state.profilePage.profile }
}
let mapDispatchToProps = (dispatch) => {
   console.log('map 2')
   return {
      setUserProfile: (profile) => {
         dispatch(setUserProfileAC(profile))
      }
   }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)
