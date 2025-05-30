// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUiPnDHhSw3pPwF0o6SchpQ2QCRo_TTtI",
  authDomain: "tripwise-5a6e3.firebaseapp.com",
  projectId: "tripwise-5a6e3",
  storageBucket: "tripwise-5a6e3.firebasestorage.app",
  messagingSenderId: "913382057610",
  appId: "1:913382057610:web:de7c0b7af0e2a779d36f73",
  measurementId: "G-KCC9KB1308"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);