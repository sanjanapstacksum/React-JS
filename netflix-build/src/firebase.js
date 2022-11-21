import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCWTPYT_LUYKsXWWJRdOkicW7H65doQqEI",
  authDomain: "netflix-clone-214da.firebaseapp.com",
  projectId: "netflix-clone-214da",
  storageBucket: "netflix-clone-214da.appspot.com",
  messagingSenderId: "874016239671",
  appId: "1:874016239671:web:283cc1e6c56bfaab260fb2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
