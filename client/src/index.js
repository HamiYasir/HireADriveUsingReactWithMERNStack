import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';

const firebaseConfig={
  apiKey: "AIzaSyCooxSvr5kOXdwf-ACV-w6QnI5EPHVKnWM",
  authDomain: "hire-a-drive-storage.firebaseapp.com",
  projectId: "hire-a-drive-storage",
  storageBucket: "hire-a-drive-storage.appspot.com",
  messagingSenderId: "269470816919",
  appId: "1:269470816919:web:16b55635ba456d5dbb67d2",
  measurementId: "G-EWVETL36J2"
};

firebase.initializeApp(firebaseConfig);

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
