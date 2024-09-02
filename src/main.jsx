import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDYLwFSSDkjE2WmehZyGEA127zllKA_BZY",
  authDomain: "cantares-bags-f2181.firebaseapp.com",
  projectId: "cantares-bags-f2181",
  storageBucket: "cantares-bags-f2181.appspot.com",
  messagingSenderId: "82964783162",
  appId: "1:82964783162:web:57f37513edeb4d7bd69503"
};

const app = initializeApp(firebaseConfig);;
const db = getFirestore(app);
export {app};
export { db };
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
    <App />
    
    
    
  </React.StrictMode>,
)
