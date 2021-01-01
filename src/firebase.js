// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJgvFRC9em5tq31lT1rq1p_0uXn5jGkN0",
  authDomain: "linkedinclo.firebaseapp.com",
  projectId: "linkedinclo",
  storageBucket: "linkedinclo.appspot.com",
  messagingSenderId: "885464496675",
  appId: "1:885464496675:web:883883fa1c4d99e6678f96",
  measurementId: "G-EQFQ55CNTR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };