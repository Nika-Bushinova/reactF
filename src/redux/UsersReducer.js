
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'

let initialState = {

   users: [],
   pageSize:5,
   totalUserCount:0,
   currentPage:3,
}
const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map((el) => {
               if (el.id === action.id) {//если id массива-основы совпадает с id массива-экшена, то возвращаем копию этого массива с измененным followed
                  return { ...el, followed: true }
               } else {
                  return el
               }
            })
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map((el) => {
               if (el.id === action.id) { //если id массива-основы совпадает с id массива-экшена, то возвращаем копию этого массива с измененным followed
                  return { ...el, followed: false }
               } else {
                  return el
               }
            })
         }
      }
      case SET_USERS: {
       /*  if (!state.users.length) {
            return { ...state, users: [...state.users, ...action.users] }
         }*/
        return { ...state, users: action.users }

      }
      case SET_CURRENT_PAGE:{
         return {...state, currentPage:action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT:{
         return {...state, totalUserCount:action.count}
      }
      default:
         return state

   }
}

export const followActionCreater = (id) => {
   return {
      type: FOLLOW, id
   }
}

export const unfollowActionCreater = (id) => {
   return {
      type: UNFOLLOW, id
   }
}
export const setUsersActionCreater = (users) => {
   return {
      type: SET_USERS, users
   }
}
export const setCurrentPageActionCreater = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE, currentPage
   }
}

export const setTotalUsersCountActionCreater=(totalUsersCount)=>{
   return{
      type: SET_TOTAL_USERS_COUNT, count:totalUsersCount
   }
}


export default usersReducer