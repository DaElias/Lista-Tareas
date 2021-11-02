import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore, collection, getDocs,setDoc,doc,addDoc,deleteDoc } from 'firebase/firestore';
//*  import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
export { getAuth, createUserWithEmailAndPassword,getDocs, db,deleteDoc,onAuthStateChanged,signInWithEmailAndPassword,signOut,setDoc,doc,addDoc,collection };