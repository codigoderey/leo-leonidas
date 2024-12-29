// initialize fb app
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQoXfS8AQ1DxP7BCrHuC6G-EjzhY99wx0",
  authDomain: "leo-leonidas.firebaseapp.com",
  projectId: "leo-leonidas",
  storageBucket: "leo-leonidas.firebasestorage.app",
  messagingSenderId: "78367131115",
  appId: "1:78367131115:web:3903312cab819acaaac5ae",
  measurementId: "G-8WZL8TV731"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);