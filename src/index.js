import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, { subscribe } from './redux/store';

import App from './App';
import StoreContext, { Provider } from './StoreContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
  console.log('state', state)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>

  );
}


reRender(store.getState())
store.subscribe(reRender)

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
