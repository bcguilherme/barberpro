import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc4piI0jJGU2vHICOboqMiJT343vqUjzI",
  authDomain: "barberpro-7810b.firebaseapp.com",
  projectId: "barberpro-7810b",
  storageBucket: "barberpro-7810b.firebasestorage.app",
  messagingSenderId: "459293555313",
  appId: "1:459293555313:web:a0547f2222c284e4e8f9d0"
}

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

// Initialize Firebase services
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const googleProvider = new GoogleAuthProvider()

export { app, db, auth, storage, googleProvider } 