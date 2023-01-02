import React from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
let mapStateToPropsForRedirect = (state) => {
   return { 
      isAuth:state.auth.isAuth
   }
}
export const withAuthRedirect = (Component) => {
   const RedirectComponent =(props)=> {

   if (props.isAuth===false) return <Navigate to={'/login'} />
   return <Component{...props} />
   }

         


let ConnectedRedirectAuthComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
return ConnectedRedirectAuthComponent

}

/* class RedirectComponent extends React.Component {
   render() {
      if (!this.props.isAuth) return <Navigate to={'/login'} /> 
      return <Component{...this.props} />
   }
}  */