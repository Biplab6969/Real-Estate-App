// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estste-20a8c.firebaseapp.com",
  projectId: "real-estste-20a8c",
  storageBucket: "real-estste-20a8c.firebasestorage.app",
  messagingSenderId: "32596533465",
  appId: "1:32596533465:web:896247d5fedcf81f7adec8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);