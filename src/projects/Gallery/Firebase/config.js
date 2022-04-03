// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
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
const app = initializeApp(firebaseConfig);

const projectStorage = app.storage();

const projectFirestore = app.firestore();

export { projectStorage, projectFirestore };
