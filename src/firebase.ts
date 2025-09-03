import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjqem-rsvP1SYUTOFX4c8niItZmlaySiI",
  authDomain: "the-student-spot-app.firebaseapp.com",
  projectId: "the-student-spot-app",
  storageBucket: "the-student-spot-app.firebasestorage.app",
  messagingSenderId: "227603916953",
  appId: "1:227603916953:web:809dfb8c3b5e7cc5df7008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
