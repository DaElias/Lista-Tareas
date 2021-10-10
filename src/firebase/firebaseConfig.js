import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
//*  import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
/* 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};
*/
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREFABE_APIKEY,
    authDomain: process.env.REACT_APP_FIREFABE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREFABE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREFABE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREFABE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREFABE_APPID
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { getAuth, createUserWithEmailAndPassword, db,onAuthStateChanged };