import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEiIhYUri89wDBb0_xWUDgnrFdlHDEOe4",
  authDomain: "spyworld803.firebaseapp.com",
  projectId: "spyworld803",
  storageBucket: "spyworld803.appspot.com",
  messagingSenderId: "981527982195",
  appId: "1:981527982195:web:3a1b7af3df651595be3a06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
