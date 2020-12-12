import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCI-wAgviFz9ZhQmzm9pz33PRL9CEosPWo",
  authDomain: "book-santa-9b8d2.firebaseapp.com",
  databaseURL: "https://book-santa-9b8d2.firebaseio.com",
  projectId: "book-santa-9b8d2",
  storageBucket: "book-santa-9b8d2.appspot.com",
  messagingSenderId: "256226897946",
  appId: "1:256226897946:web:c6c858a7a1ecbb88d161a3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
