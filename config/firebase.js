// firebase.js

// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC8hls0p0W2Pj8BB865_DNVTYll3HAGePE",
  authDomain: "college-bot-95fde.firebaseapp.com",
  projectId: "college-bot-95fde",
  storageBucket: "college-bot-95fde.appspot.com", // corrected `.app` → `.com`
  messagingSenderId: "619348302879",
  appId: "1:619348302879:web:e05e91e6f7205a1f15892a",
  measurementId: "G-02VB25P488"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Export Firestore instance
export default db;
