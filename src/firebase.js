// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage'; // Import Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtvHrPtZcPJisPeRVRj5hpFLgbJ2IN4yM",
  authDomain: "fir-d2d94.firebaseapp.com",
  projectId: "fir-d2d94",
  storageBucket: "fir-d2d94.appspot.com",
  messagingSenderId: "501517566570",
  appId: "1:501517566570:web:db053b0e275c4934050013",
  measurementId: "G-KE2YKM8LG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

export { auth, db, storage }; // Export db and storage
