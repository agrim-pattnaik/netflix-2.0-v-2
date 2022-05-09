// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWvrslPK2TrqvTZgvAIcrNH2gGhaX3_xE",
    authDomain: "netflix-clone-e2194.firebaseapp.com",
    projectId: "netflix-clone-e2194",
    storageBucket: "netflix-clone-e2194.appspot.com",
    messagingSenderId: "394590579378",
    appId: "1:394590579378:web:454cec5cdc2a5163dab7ab"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }