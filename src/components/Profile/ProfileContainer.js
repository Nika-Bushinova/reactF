import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setUserProfile} from '../../redux/profileReducer'
import {ProfileAPI } from '../../API/APIJS';
import { getDataThunkCreator } from './../../redux/profileReducer';
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
      this.props.getDataThunkCreator(userId)
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


let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getDataThunkCreator})(withUrlDataContainerComponent)
