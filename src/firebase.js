import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3bWVz0Q25hu_SHGi8gXHSxzBFonM9wZM",
  authDomain: "todo-app-680e2.firebaseapp.com",
  databaseURL: "https://todo-app-680e2.firebaseio.com",
  projectId: "todo-app-680e2",
  storageBucket: "todo-app-680e2.appspot.com",
  messagingSenderId: "845360415838",
  appId: "1:845360415838:web:19400b8c2c19753f03e0cf",
  measurementId: "G-HECPC45JTH",
});

const db = firebaseApp.firestore();

export default db;
