import { UsersAPI } from "../API/APIJS"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const LOADING = 'LOADING'
const TOGGLE_FOLLOWING_PROGESS = 'TOGGLE_FOLLOWING_PROGESS'

let initialState = {

   users: [],
   pageSize: 20,
   totalUserCount: 0,
   currentPage: 3,
   isFetching: true,
   followingInProgress: []
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

         return { ...state, users: action.users }

      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case SET_TOTAL_USERS_COUNT: {
         return { ...state, totalUserCount: action.count }
      }
      case LOADING: {
         return { ...state, isFetching: action.isFetching }
      }
      case TOGGLE_FOLLOWING_PROGESS: {
         return {
            ...state,
            followingInProgress: action.progressToggle
               ? [...state.followingInProgress, action.id]
               : state.followingInProgress.filter((el) => el !== action.id)
         }
      }
      default:
         return state

   }
}

export const follow = (id) => {
   return {
      type: FOLLOW, id
   }
}

export const unfollow = (id) => {
   return {
      type: UNFOLLOW, id
   }
}
export const setUsers = (users) => {
   return {
      type: SET_USERS, users
   }
}
export const setCurrentPage = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE, currentPage
   }
}

export const setTotalUsersCount = (totalUsersCount) => {
   return {
      type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
   }
}
export const setLoading = (isFetching) => {
   return {
      type: LOADING, isFetching
   }
}
export const toggleProgress = (progressToggle, id) => {
   return {
      type: TOGGLE_FOLLOWING_PROGESS, progressToggle, id
   }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch)=>{
   dispatch(setLoading(true))
   dispatch(toggleProgress(true))
   UsersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setLoading(false))
      dispatch(setUsers(data.items))//засунули в state.users itemsы с сервера
      dispatch(setTotalUsersCount(data.totalCount))//засунули в state totalCounts через totalUserCount
      dispatch(setCurrentPage(currentPage))
   })
}
}


export default usersReducer