/* eslint-disable prettier/prettier */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
  apiKey: "AIzaSyBItAqsYmBSPDTFXaR1MOV1_jULXcCyepQ",
  authDomain: "ecomerce-352ab.firebaseapp.com",
  projectId: "ecomerce-352ab",
  storageBucket: "ecomerce-352ab.appspot.com",
  messagingSenderId: "1059070839589",
  appId: "1:1059070839589:web:b986e8c42fc99bb1d128cc",
  measurementId: "G-4V7MJZQQJ8",
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

const storage = firebase.storage();

const auth = firebase.auth();

export { storage, auth, firebase as default };
