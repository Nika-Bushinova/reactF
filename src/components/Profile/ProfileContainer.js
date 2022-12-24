import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import setUserProfile, { setUserProfileAC } from '../../redux/profileReducer'
export let nameProfile = 'Rick Sanchez'
class ProfileContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
         .then((response) => {
            console.log('cont', response.data)
            console.log('huy', this.props)
            this.props.setUserProfile(response.data)
         })
   }
   render() {

      return (
         <Profile {...this.props} profile={this.props.profile} />

      )
   }
}
let mapStateToProps = (state) => {
   console.log('cont2', state)
   return { profile: state.profilePage.profile }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setUserProfile: (profile) => {
         dispatch(setUserProfileAC(profile))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
