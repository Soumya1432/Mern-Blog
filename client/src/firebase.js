// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-1800b.firebaseapp.com",
  projectId: "mernblog-1800b",
  storageBucket: "mernblog-1800b.appspot.com",
  messagingSenderId: "907532921183",
  appId: "1:907532921183:web:3d154b2a4f87d8724e6eea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);