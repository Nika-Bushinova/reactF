
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {

   users: []
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
         return { ...state, users: [...state.users, ...action.users] }
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


export default usersReducer