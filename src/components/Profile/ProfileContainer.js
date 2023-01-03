import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useMatch, useMatches, useNavigate, useParams } from 'react-router-dom'
import { setUserProfile} from '../../redux/profileReducer'
import {ProfileAPI } from '../../API/APIJS';
import { getDataThunkCreator } from './../../redux/profileReducer';
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

/* function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
} */

class ProfileContainer extends React.Component {
   componentDidMount() {  
    
      let userId = this.props.match.params.userId
      this.props.getDataThunkCreator(userId)
   }
   render() {
      if(!this.props.isAuth){return <Navigate to={'/login'}/>}

      return (

         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}


debugger
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});





export default compose(
  connect(mapStateToProps, {getDataThunkCreator}),
  withRouter,
  withAuthRedirect)(ProfileContainer)
