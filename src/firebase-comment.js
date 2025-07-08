import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo_vHJBPAwLhqSEZTRbsap1Ets6c-eUeg",
  authDomain: "myportfolio-c4c98.firebaseapp.com",
  projectId: "myportfolio-c4c98",
  storageBucket: "myportfolio-c4c98.firebasestorage.app",
  messagingSenderId: "171682456759",
  appId: "1:171682456759:web:ac98465d8d70e8a80b5932",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
