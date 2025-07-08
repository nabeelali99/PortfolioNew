import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo_vHJBPAwLhqSEZTRbsap1Ets6c-eUeg",
  authDomain: "myportfolio-c4c98.firebaseapp.com",
  projectId: "myportfolio-c4c98",
  storageBucket: "myportfolio-c4c98.firebasestorage.app",
  messagingSenderId: "171682456759",
  appId: "1:171682456759:web:ac98465d8d70e8a80b5932",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
