import squanchy from '../img/squanchy.png'
import birdperson from '../img/birdperson.png'
import poopybutthole from '../img/poopybutthole.png'
import summer from '../img/summer.png'
import bet from '../img/bet.png'
import president from '../img/president.png'
import { photoProfile } from '../components/Profile/Profile__info';
import { nameProfile } from '../components/Profile/Profile';
const addMessage = 'ADD-MESSAGE';
let initialState = {
   messagesData: [
      { id: 1, idM: 1, message: "What's up!", photo: squanchy },
      { id: 2, idM: 2, message: 'Hi', photo: squanchy },
      { id: 1, idM: 1, message: 'Yo', photo: squanchy },
      { id: 2, idM: 3, message: 'Yo', photo: squanchy }
   ],
   newMessageText: ' '
   ,

   arr: [{ id: 0, name: 'Rick Sanchez', photo: photoProfile },
   { id: 1, name: 'Squanchy', photo: squanchy },
   { id: 2, name: 'Birdperson', photo: birdperson },
   { id: 3, name: 'Mr.Poopybutthole', photo: poopybutthole },
   { id: 4, name: 'Summer', photo: summer },
   { id: 5, name: 'Bet', photo: bet },
   { id: 6, name: 'The_President', photo: president }
   ]
}
export const messageReducer = (state = initialState, action) => {
   let stateCopy;
   switch (action.type) {
          case addMessage:
let body=action.newMessageText
         stateCopy = { 
            ...state,
            messagesData:[...state.messagesData], 
            arr:    [...state.arr],
          }
          let idNewMessage = stateCopy.messagesData.length + 1;
          let newMessage = {
             id: idNewMessage, idM: 0, message: body, photo: stateCopy.arr[0].photo
          }
         stateCopy.messagesData.push(newMessage);
         return stateCopy
       
      default:
        return stateCopy = { ...state }
   }

}
export const addMessageActionCreater = (newMessageText) => {
   return {
      type: addMessage, newMessageText
   }
}

export default messageReducer