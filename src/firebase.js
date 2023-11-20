import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqqDIU99pizKn3cGkOwoyZV_KHTFmSu3s",
  authDomain: "react-notetaking-app-5596a.firebaseapp.com",
  projectId: "react-notetaking-app-5596a",
  storageBucket: "react-notetaking-app-5596a.appspot.com",
  messagingSenderId: "833979183226",
  appId: "1:833979183226:web:62c9a0dcbc3206debecbc3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
