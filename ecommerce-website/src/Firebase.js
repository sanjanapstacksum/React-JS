import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import{ getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyBvAWNTTXy9x40S-OORXcn80I4EM3ysCHY",
    authDomain: "ecommerce-website-e9db2.firebaseapp.com",
    projectId: "ecommerce-website-e9db2",
    storageBucket: "ecommerce-website-e9db2.appspot.com",
    messagingSenderId: "661193676910",
    appId: "1:661193676910:web:0bc48524833db36623ee7f"
  };

  const app = firebase.initializeApp(firebaseConfig);
   export const db = getFirestore(app);
  export const auth =getAuth(app);
  export const storage = getStorage(app);