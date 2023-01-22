
import { ProfileAPI } from "../API/APIJS"

const addPost = 'ADD-POST'
const upDateNewPostText = 'UPDATE-NEW-POST-TEXT'
const addLike = 'ADD-LIKEF'
let SET_USERS_PROFILE = 'SET-USERS-PROFILE'
let ADDSTATUSFRASE = 'ADDSTATUSFRASE'

let initialState = {

   arrLikes: [
      { id: 1, likeCounts: '7000', message: 'What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?' },
      { id: 2, likeCounts: '9500', message: "Weddings are basically funerals with cake. If I wanted to watch someone throw their life away, I'd hang out with Jerry all day." },
      { id: 3, likeCounts: '15000', message: "I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it" }
   ],
   profile: null,
   statusFrase: '',
}


const profileReducer = (state = initialState, action) => {
   switch (action.type) {

      case addPost: {
         let stateCopy = { 
            ...state,
            arrLikes:[...state.arrLikes], 
          }
         let idNewPost = stateCopy.arrLikes.length + 1;
         let newPost = {
            id: idNewPost,
            likeCounts: '0',
            message: action.post
         }
         stateCopy.arrLikes.push(newPost)
         return stateCopy ;
      }
      case upDateNewPostText: {
         state.newText = action.newTexttext;
         return state;
      }
      case addLike: {
         let stateCopy = { 
            ...state,
            arrLikes:[...state.arrLikes], 
          }
         let likes = parseInt(stateCopy.arrLikes[action.idLike - 1].likeCounts) + 1
         stateCopy.arrLikes[action.idLike - 1].likeCounts = likes

         return stateCopy;
      }
      case SET_USERS_PROFILE: {

         return { ...state, profile: action.profile }//вернем копию стейта и поменяем профайл на профайл, который сидит в экшене
      }
      case ADDSTATUSFRASE:{
         return {...state, statusFrase:action.statusFrase}
      }

      default:
         return state

   }
}

export const addPostActionCreater = (post) => {
   return {
      type: addPost, post
   }
}

export const updTextActionCreater = (text) => {
   return {
      type: upDateNewPostText, newTexttext: text
   }
}

export const addLikeActionCreater = (id, count) => {
   return {
      type: addLike, idLike: id, countLike: count
   }
}
export const setUserProfile = (profile) => {
   return {
      type: SET_USERS_PROFILE, profile
   }
}
export const addFrase=(statusFrase)=>{
   return{
      type:ADDSTATUSFRASE, statusFrase
   }
}

export const getDataThunkCreator = (userId) => {
   return (dispatch) => {
      if (!userId) { 

         userId = /* this.props.loggedUser|| */27206 }
      ProfileAPI.getDatas(userId)
         .then((response) => {

            dispatch(setUserProfile(response))
         })
   }
}

export const getStatusThunk = (userId) => {
   return (dispatch) => {
     // if (!userId) { userId = 27206 }
         ProfileAPI.getStatus(userId)
         .then((response) => {
            dispatch(addFrase(response.data))
         }) 
   }
}
export const updateThunkCreator=(status)=>{
   return(dispatch)=>{
      ProfileAPI.updStatus(status)
      .then((response) => {
         if(response.data.resultCode===0){
                    dispatch(addFrase(status)) 
         }

      })
   }
}



export default profileReducer