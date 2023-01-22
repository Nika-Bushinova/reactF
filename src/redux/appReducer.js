import { stopSubmit } from "redux-form"
import { AuthAPI, LogOutAPI,LoginAPI } from "../API/APIJS"
import { usersDataThunkCreator } from "./authReducer"

const SET_INITIALIZED='SET_INITIALIZED'


let initialState={
  initialized:false
}
const appReducer=(state=initialState, action)=>{

   switch(action.type){
      case SET_INITIALIZED:{
         return {...state,
            initialized:true}
      }

      default:{
         return {...state}
      }
   }
}

export const initializedSuccess=()=>{
   return {type:'SET_INITIALIZED'}
}

export const initializeApp=()=>(dispatch)=>{
let promise=dispatch(usersDataThunkCreator())
Promise.all([promise])
   .then(()=>{   dispatch(initializedSuccess())}
   )

}





export default appReducer