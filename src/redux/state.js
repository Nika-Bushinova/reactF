import squanchy from '../img/squanchy.png'
import birdperson from '../img/birdperson.png'
import poopybutthole from '../img/poopybutthole.png'
import summer from '../img/summer.png'
import bet from '../img/bet.png'
import president from '../img/president.png'


let state = {
   profilePage: {

      arrLikes: [
         { id: 1, likeCounts: '7000', message: 'What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?' },
         { id: 2, likeCounts: '9500', message: "Weddings are basically funerals with cake. If I wanted to watch someone throw their life away, I'd hang out with Jerry all day." },
         { id: 3, likeCounts: '15000', message: "I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it" }
      ]

   },

   dialogsPage: {
      messagesData: [
         { id: 1, message: "What's up!" },
         { id: 2, message: 'Hi' },
         { id: 1, message: 'Yo' },
         { id: 2, message: 'Yo' }
      ]
      ,

      arr: [
         { id: 1,name: 'Squanchy',  photo: squanchy },
         { id: 2,name: 'Birdperson',  photo: birdperson },
         { id: 3,name: 'Mr.Poopybutthole',  photo: poopybutthole },
         { id: 4,name: 'Summer',  photo: summer },
         { id: 5,name: 'Bet',  photo: bet },
         { id: 6,name: 'The_President',  photo: president }
      ],
   },
   sideBar:{
      nav:[
      {to:'/profile', name:'Profile', id:'1'},
      {to:'/messages', name:'Messages', id:'2'},
      {to:'/news', name:'News', id:'3'},
      {to:'/music', name:'Music', id:'4'},
      {to:'/settings', name:'Settings', id:'5'},
      {to:'/friends', name:'Friends', id:'6'}
   ]
   }
}



export default state