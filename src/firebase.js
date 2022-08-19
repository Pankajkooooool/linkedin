import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCzNZlGc9qjnbb8WWme6sPiDBC3XqYQXlQ",
    authDomain: "linkedin-clone-626e3.firebaseapp.com",
    projectId: "linkedin-clone-626e3",
    storageBucket: "linkedin-clone-626e3.appspot.com",
    messagingSenderId: "186987572779",
    appId: "1:186987572779:web:d9d33e5d4ac241ac4f846e"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};