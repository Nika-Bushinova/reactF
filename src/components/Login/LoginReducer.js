/* 

const loginReducer=(state=initialState, action)=>{
   switch (action.type){
      case SETLOGIN:{
         return {...state.auth, id:action.id}
      }
      case SETEMAILLOGIN:{
         return {...state.auth, email:action.email}
      }
      case SETNAMELOGIN:{
         return {...state.auth, login:action.name}
      }
      case LOGOUT:{
         return{...state, isAuth:false}
      }
      default:{
          return state
      }
   }

}
export const setAuthFalse=()=>{
   return {type:LOGOUT}
}
export const setIdLogin=(data)=>{
   return {type:SETEMAILLOGIN, email:data.email}
}

export const LoginThunkCreator=(formData)=>{
   return(dispatch)=>{
      LoginAPI.onSubmitMine(formData)
      .then((response) => {
       
            dispatch(setIdLogin(response.data)) 

      })
   }
}
export const LogOutThunkCreator=(userId)=>{
   return(dispatch)=>{
      LogOutAPI.onDeleteMine(userId)
      .then((data) => {
            dispatch(setAuthFalse(null, null, null,false))

      })
   }
}




export default loginReducer */