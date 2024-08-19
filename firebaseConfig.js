const firebaseConfig = {
    apiKey: "AIzaSyDYLwFSSDkjE2WmehZyGEA127zllKA_BZY",
    authDomain: "cantares-bags-f2181.firebaseapp.com",
    projectId: "cantares-bags-f2181",
    storageBucket: "cantares-bags-f2181.appspot.com",
    messagingSenderId: "82964783162",
    appId: "1:82964783162:web:57f37513edeb4d7bd69503"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();