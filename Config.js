import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDaaaBx94coPZ8ak0u2qJGQss2-f3YHWtw",
    authDomain: "willy-e13c3.firebaseapp.com",
    projectId: "willy-e13c3",
    storageBucket: "willy-e13c3.appspot.com",
    messagingSenderId: "295996334202",
    appId: "1:295996334202:web:55465d1eecfea1c116dbc3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();