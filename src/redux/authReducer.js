import { AuthAPI } from "../API/APIJS"

const SET_USER_AUTH='SET_USER_AUTH'
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
      default:{
         return {...state}
      }
   }
}

export const setAuth=(id, email, login)=>{
   return {type:SET_USER_AUTH, data:{id, email, login}}
}
export const usersDataThunkCreator=()=>{
   return (dispatch)=>{

      AuthAPI.getloginF()
      .then((data) => {
         if( data.resultCode===0){
            let {id, email, login}=data.data
             dispatch(setAuth(id, email, login))
         }         
      })
   }
}

export default authReducer