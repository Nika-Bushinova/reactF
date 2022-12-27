import React from "react";
import axios from 'axios';
import Header from "./Header";
import { connect } from "react-redux";
import { setAuth } from './../../redux/authReducer';

class HeaderContainer extends React.Component{
   componentDidMount() {//нам нужно как-то данные с сервера через пропсы засунуть в state

      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
         .then((response) => {
            if( response.data.resultCode===0){
               let {id, email, login}=response.data.data
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