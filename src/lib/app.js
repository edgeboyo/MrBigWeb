// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5iuL-8aw6H6lfgt68rDzVrZJYhGbfcrQ",
  authDomain: "mr-big-338423.firebaseapp.com",
  projectId: "mr-big-338423",
  storageBucket: "mr-big-338423.appspot.com",
  messagingSenderId: "984358428836",
  appId: "1:984358428836:web:67ffa209b35827c0664631",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
