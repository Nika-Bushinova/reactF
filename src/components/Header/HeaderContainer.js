import React from "react";
import axios from 'axios';
import Header from "./Header";
import { connect } from "react-redux";
import { setAuth } from './../../redux/authReducer';
import { AuthAPI, getloginF } from "../../API/APIJS";

class HeaderContainer extends React.Component{
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state

      AuthAPI.getloginF()
         .then((data) => {
            if( data.resultCode===0){
               let {id, email, login}=data.data
                this.props.setAuth(id, email, login)
            }         
         })
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


export default connect(mapStateToProps, {setAuth})(HeaderContainer )