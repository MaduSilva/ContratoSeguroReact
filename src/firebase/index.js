import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCumYuXDAYEeLPg6aiPpbjv75hJ9bH_UM0",
    authDomain: "contratosegurochat.firebaseapp.com",
    projectId: "contratosegurochat",
    storageBucket: "contratosegurochat.appspot.com",
    messagingSenderId: "494917392314",
    appId: "1:494917392314:web:3b1f4b3a16b1858e182f83"
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()