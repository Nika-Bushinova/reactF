import { LoginAPI } from "../../API/APIJS"
const SETLOGIN='SETLOGIN'
const SETEMAILLOGIN='SETEMAILLOGIN'
const SETNAMELOGIN='SETNAMELOGIN'

let initialState={}

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
      
      default:{
          return state
      }
   }

}

/* export const setEmailLogin=(data)=>{
   return {type:SETLOGIN, id:data.userId}
}
 */export const setIdLogin=(data)=>{
   return {type:SETEMAILLOGIN, email:data.email}
}
/* export const setNameLogin=(data)=>{
   return {type:SETNAMELOGIN, email:data.name}
} */

export const LoginThunkCreator=(formData)=>{
   return(dispatch)=>{
      
   /*    if(formData!==undefined){//по идее для регистрации
         console.log('form', formData)//по идее для регистрации
      dispatch(setEmailLogin(formData.email))//по идее для регистрации
      dispatch(setNameLogin(formData.name))//по идее для регистрации
      } */

      LoginAPI.onSubmitMine(formData)
      .then((response) => {
            dispatch(setIdLogin(response.data))

      })
   }
}
/* export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setLoading(true))
      dispatch(toggleProgress(true))
      UsersAPI.getUsers(currentPage, pageSize).then((data) => {
         dispatch(setLoading(false))
         dispatch(setUsers(data.items))//засунули в state.users itemsы с сервера
         dispatch(setTotalUsersCount(data.totalCount))//засунули в state totalCounts через totalUserCount
         dispatch(setCurrentPage(currentPage))
      })
   }
} */




export default loginReducer