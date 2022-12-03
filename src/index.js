import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import squanchy from './img/squanchy.png'
import birdperson from './img/birdperson.png'
import poopybutthole from './img/poopybutthole.png'
import summer from './img/summer.png'
import bet from './img/bet.png'
import president from './img/president.png'
import reportWebVitals from './reportWebVitals';

export let arr = [
  { name1: 'Squanchy', id1: 1, photo1: squanchy },
  { name1: 'Birdperson', id1: 2, photo1: birdperson },
  { name1: 'Mr.Poopybutthole', id1: 3, photo1: poopybutthole },
  { name1: 'Summer', id1: 4, photo1: summer },
  { name1: 'Bet', id1: 5, photo1: bet },
  { name1: 'The_President', id1: 6, photo1: president }
]

export let messagesData = [
  { id: 1, message: "What's up!" },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' }
]
export let arrLikes=[
  {id:1,likeCounts:'7000',message:'What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?' },
  {id:2,likeCounts:'9500',message:"Weddings are basically funerals with cake. If I wanted to watch someone throw their life away, I'd hang out with Jerry all day." },
  {id:3,likeCounts:'15000',message:"I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
