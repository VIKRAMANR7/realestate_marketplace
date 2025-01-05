// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "realestate-marketplace-2947d.firebaseapp.com",
  projectId: "realestate-marketplace-2947d",
  storageBucket: "realestate-marketplace-2947d.firebasestorage.app",
  messagingSenderId: "123130079881",
  appId: "1:123130079881:web:4868304c0f1ada5d3c7458",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
