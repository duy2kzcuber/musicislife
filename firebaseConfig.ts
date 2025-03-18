// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hPJI1J2BKKloME_D9HckMaaZXptLroA",
  authDomain: "test-cd6af.firebaseapp.com",
  databaseURL: "https://test-cd6af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-cd6af",
  storageBucket: "test-cd6af.firebasestorage.app",
  messagingSenderId: "732576122959",
  appId: "1:732576122959:web:7801b5e4bd3bad81d1423a",
  measurementId: "G-Z0XS1D7F6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const auth = getAuth(app);