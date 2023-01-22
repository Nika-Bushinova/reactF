import { stopSubmit } from "redux-form"
import { AuthAPI, LogOutAPI,LoginAPI } from "../API/APIJS"

const SET_USER_AUTH='SET_USER_AUTH'
const SETEMAILLOGIN='SETEMAILLOGIN'
const LOGOUT='LOGOUT'

let initialState={
   id:null,
   email:null,
   login:null,
   isAuth:false
}
const authReducer=(state=initialState, action)=>{

   switch(action.type){
      case SET_USER_AUTH:{
         return {...state, ...action.data, isAuth:true}
      }
      case SETEMAILLOGIN:{
         return {...state, email:action.email, isAuth:true, login:action.login, name:action.name}
      }
      case LOGOUT:{
         return{...state, isAuth:false, email:null, login:null, name:null}
      }

      default:{
         return {...state}
      }
   }
}

export const setAuth=(id, email, login, isAuth)=>{
   return {type:SET_USER_AUTH, data:{id, email, login, isAuth}}
}


export const setAuthFalse=(email, login, name)=>{
   return {type:LOGOUT, email:null, login:null, name:null}
}
export const setIdLogin=(data)=>{
   return {type:SETEMAILLOGIN, email:data.email, login:data.login, name:data.name}
}


export const usersDataThunkCreator=()=>{
   return (dispatch)=>{
      return AuthAPI.getloginF()
      .then((data) => {
         if( data.resultCode===0){
            let {id, email, login}=data.data
             dispatch(setAuth(id, email, login,true))
         }         
      })
   }
}
export const LoginThunkCreator=(formData)=>{

   return(dispatch)=>{
       LoginAPI.onSubmitMine(formData)
      .then((response) => {
         if( response.resultCode===0){
            dispatch(setIdLogin(response.data)) 
         }else{
           let message= response.messages.length>0?response.messages[0]:'Some error';
            dispatch(stopSubmit('login', {_error:message}))
         }
      }) 
   }
}
export const LogOutThunkCreator=()=>{
   return(dispatch)=>{
      LogOutAPI.onDeleteMine()
      .then((response) => {
            dispatch(setAuthFalse(response.data))

      })
   }
}





export default authReducer