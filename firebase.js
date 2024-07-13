// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile  } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxyY2bYBMQc5B26IHaX42gTrB8j6G04KU",
  authDomain: "mydb-ed1aa.firebaseapp.com",
  databaseURL: "https://mydb-ed1aa-default-rtdb.firebaseio.com",
  projectId: "mydb-ed1aa",
  storageBucket: "mydb-ed1aa.appspot.com",
  messagingSenderId: "817372530572",
  appId: "1:817372530572:web:cfaa344a7c3b0bb74178a9",
  measurementId: "G-VEY5XNGG1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getDatabase(app);

export { auth , database , createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile  };
