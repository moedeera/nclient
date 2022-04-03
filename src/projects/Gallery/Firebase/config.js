// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZHxPmNrd1TXSAgyQdttWBWLiwuLUUNM",
  authDomain: "gallery-ed7f7.firebaseapp.com",
  projectId: "gallery-ed7f7",
  storageBucket: "gallery-ed7f7.appspot.com",
  messagingSenderId: "451603087203",
  appId: "1:451603087203:web:d11801c908ddc88d639d56",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
