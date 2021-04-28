import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdiltEEoDIegG6ZOg4s8QMROhUwKYb1Q8",
  authDomain: "ever-bot-1f8bb.firebaseapp.com",
  projectId: "ever-bot-1f8bb",
  storageBucket: "ever-bot-1f8bb.appspot.com",
  messagingSenderId: "1072844520541",
  appId: "1:1072844520541:web:142c4958f8722932e261b4",
  measurementId: "G-FTL76EJN17"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
