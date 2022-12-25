import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import setUserProfile, { setUserProfileAC } from '../../redux/profileReducer'
export let nameProfile = 'Rick Sanchez'
class ProfileContainer extends React.Component {
   componentDidMount() {
      async function getDatas() {
         let response = await fetch('https://social-network.samuraijs.com/api/1.0/profile/9', {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=utf-8' }
         })
         let data = await response.json()
         return data
      }
      getDatas()
         .then((response) => {
            this.props.setUserProfile(response)
         })
   }

   /*    componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`)
            .then((response) => {
               console.log('cont', response.data)
               this.props.setUserProfile(response.data)
            })
      } */

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
