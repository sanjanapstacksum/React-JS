
import {getFirestore} from "firebase/firestore"
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9QyNN1UFxMeIRAxmA8BEROUyjo_pJ1FM",
    authDomain: "todo-list-6797a.firebaseapp.com",
    projectId: "todo-list-6797a",
    storageBucket: "todo-list-6797a.appspot.com",
    messagingSenderId: "947006240512",
    appId: "1:947006240512:web:9a412b7ee7c835fff8e5e5",
    measurementId: "G-PLXG3CLG9T"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};