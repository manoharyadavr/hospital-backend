import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBRVrXgJtGZN85alN4NDn0yQZIJUF7jh3g",
  authDomain: "hospital-website-3036e.firebaseapp.com",
  databaseURL: "https://hospital-website-3036e-default-rtdb.firebaseio.com",
  projectId: "hospital-website-3036e",
  storageBucket: "hospital-website-3036e.firebasestorage.app",
  messagingSenderId: "32160969356",
  appId: "1:32160969356:web:343b0e80e84e99cda3c1a9",
  measurementId: "G-3E37CX23Z1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };