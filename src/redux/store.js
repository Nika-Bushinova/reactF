import squanchy from '../img/squanchy.png'
import birdperson from '../img/birdperson.png'
import poopybutthole from '../img/poopybutthole.png'
import summer from '../img/summer.png'
import bet from '../img/bet.png'
import president from '../img/president.png'

import { photoProfile } from '../components/Profile/Profile__info';
import { nameProfile } from '../components/Profile/Profile';
import profileReducer from './profileReducer'
import messageReducer from './MessageReduser'
import sideBarReducer from './sideBar';
let store = {
   _state: {
      profilePage: {

         arrLikes: [
            { id: 1, likeCounts: '7000', message: 'What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?' },
            { id: 2, likeCounts: '9500', message: "Weddings are basically funerals with cake. If I wanted to watch someone throw their life away, I'd hang out with Jerry all day." },
            { id: 3, likeCounts: '15000', message: "I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it" }
         ],
         newText: ' '

      },

      dialogsPage: {
         messagesData: [
            { id: 1, idM: 1, message: "What's up!", photo: squanchy },
            { id: 2, idM: 2, message: 'Hi', photo: squanchy },
            { id: 1, idM: 1, message: 'Yo', photo: squanchy },
            { id: 2, idM: 3, message: 'Yo', photo: squanchy }
         ],
         newMessageText: ' '
         ,

         arr: [{ id: 0, name: nameProfile, photo: photoProfile },
         { id: 1, name: 'Squanchy', photo: squanchy },
         { id: 2, name: 'Birdperson', photo: birdperson },
         { id: 3, name: 'Mr.Poopybutthole', photo: poopybutthole },
         { id: 4, name: 'Summer', photo: summer },
         { id: 5, name: 'Bet', photo: bet },
         { id: 6, name: 'The_President', photo: president }
         ],
      },
      sideBar: {
         nav: [
            { to: '/profile', name: 'Profile', id: '1' },
            { to: '/messages', name: 'Messages', id: '2' },
            { to: '/news', name: 'News', id: '3' },
            { to: '/music', name: 'Music', id: '4' },
            { to: '/settings', name: 'Settings', id: '5' },
            { to: '/friends', name: 'Friends', id: '6' }
         ]
      }
   },
   _callSubscriber: function () {//Render
      console.log('y')
   },
   subscribe: function (observer) {
      this._callSubscriber = observer
   },
   getState: function () {
      return this._state
   },

 /*   addLikeF: function (id, likes) {
      likes = parseInt(likes) + 1
      this._state.profilePage.arrLikes[id - 1].likeCounts = likes

      this._callSubscriber(this._state)
   }, */
   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = messageReducer(this._state.dialogsPage, action)
      this._state.sideBar = sideBarReducer(this._state.sideBar, action)

      this._callSubscriber(this.state)

   }
}
export default store