import React from "react";
import axios from 'axios';
import Header from "./Header";
import { connect } from "react-redux";
import { setAuth, usersDataThunkCreator,LogOutThunkCreator,LoginThunkCreator} from './../../redux/authReducer';
import { AuthAPI, getloginF } from "../../API/APIJS";

class HeaderContainer extends React.Component{
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state

      this.props.usersDataThunkCreator()
   }
   render(){
      return <Header {...this.props}/>
   }

}
let mapStateToProps=(state)=>{
   return {isAuth:state.auth.isAuth,
   id:state.auth.id,
   email:state.auth.email,
   login:state.auth.login
   }

}


export default connect(mapStateToProps, {usersDataThunkCreator,setAuth,LogOutThunkCreator})(HeaderContainer )