
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPostF } from './redux/state'
import {addLikeF} from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'));
export let reRender = (state) => {
   root.render(
     <React.StrictMode>
 
       <App appState={state} addPostF={addPostF} addLike={addLikeF} />
 
     </React.StrictMode>
 
   );
 }
