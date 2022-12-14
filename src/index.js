// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './store/store'
import userReducer from './store/userSlice'
import { savestate, loadstate } from './store/local';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const persistedState = loadstate();
// const store = createStore(
//   userReducer,
//   persistedState
// );

store.subscribe(() =>{
  console.log('looks like i need to do more then i thought ', store.getState)
  savestate(store.getState())
})

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
