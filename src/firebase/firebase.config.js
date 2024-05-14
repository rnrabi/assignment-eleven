// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_apiKey)
const firebaseConfig = {
  VITE_apiKey: import.meta.env.VITE_apiKey,
  VITE_authDomain: import.meta.env.VITE_apiKey,
  VITE_projectId: import.meta.env.VITE_apiKey,
  VITE_storageBucket: import.meta.env.VITE_apiKey,
  VITE_messagingSenderId: import.meta.env.VITE_apiKey,
  VITE_appId: import.meta.env.VITE_apiKey
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);