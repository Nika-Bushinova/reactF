
const addPost = 'ADD-POST'
const upDateNewPostText = 'UPDATE-NEW-POST-TEXT'
const addLike = 'ADD-LIKEF'
let initialState = {

   arrLikes: [
      { id: 1, likeCounts: '7000', message: 'What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?' },
      { id: 2, likeCounts: '9500', message: "Weddings are basically funerals with cake. If I wanted to watch someone throw their life away, I'd hang out with Jerry all day." },
      { id: 3, likeCounts: '15000', message: "I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it" }
   ],
   newText: ' '

}
const profileReducer = (state = initialState, action) => {
   let stateCopy = { 
      ...state,
      arrLikes:[...state.arrLikes]
    }
   switch (action.type) {
      case addPost: {
         let idNewPost = stateCopy.arrLikes.length + 1;
         let newPost = {
            id: idNewPost,
            likeCounts: '0',
            message: stateCopy.newText
         }
         stateCopy.arrLikes.push(newPost);
         stateCopy.newText = ' ';
         return stateCopy;
      }
      case upDateNewPostText: {
         stateCopy.newText = action.newTexttext;
         return stateCopy;
      }
      case addLike: {
         let likes = parseInt(stateCopy.arrLikes[action.idLike - 1].likeCounts) + 1
         stateCopy.arrLikes[action.idLike - 1].likeCounts = likes

         return stateCopy;
      }
      default:
         return stateCopy

   }
}

export const addPostActionCreater = () => {
   return {
      type: addPost
   }
}

export const updTextActionCreater = (text) => {
   return {
      type: upDateNewPostText, newTexttext: text
   }
}

export const addLikeActionCreater = (id, count) => {
   console.log('ttttt')
   return {
      type: addLike, idLike: id, countLike: count
   }
}

export default profileReducer