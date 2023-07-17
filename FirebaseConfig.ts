// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC8ZyN6cpdqI_ohJHSoWNLTQI2jKM3SEg",
  authDomain: "signin-auth-48ee8.firebaseapp.com",
  projectId: "signin-auth-48ee8",
  storageBucket: "signin-auth-48ee8.appspot.com",
  messagingSenderId: "1061463550978",
  appId: "1:1061463550978:web:c71ac9c7020bd18a140b1b",
  measurementId: "G-5TLV0JNRG3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);