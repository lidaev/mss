// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwAy8IDKR8iCcPFI24dl-VnWO7CePAaco",
  authDomain: "mss-editor.firebaseapp.com",
  projectId: "mss-editor",
  storageBucket: "mss-editor.appspot.com",
  messagingSenderId: "936846406055",
  appId: "1:936846406055:web:a88a8c51d81fc9f1450682",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
