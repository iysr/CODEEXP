// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase-app.js";
import { getFirestore, initializeFirestore } from "./firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsxz-bkbtsGKCQ2nR5yfmluiilhJ_p1N0",
  authDomain: "codeexp-799fd.firebaseapp.com",
  projectId: "codeexp-799fd",
  storageBucket: "codeexp-799fd.appspot.com",
  messagingSenderId: "614340129319",
  appId: "1:614340129319:web:b7513d208a43304cccd402",
  measurementId: "G-EC28ZQGMHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});