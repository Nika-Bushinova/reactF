import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, { subscribe } from './redux/store';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
  root.render(
    <React.StrictMode>

      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />

    </React.StrictMode>

  );
}


reRender(store.getState())
store.subscribe(reRender)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
