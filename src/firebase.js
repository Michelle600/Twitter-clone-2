// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBWgccK8Lg1zz6NMHJc-muNM54oCvjjLB8",
//     authDomain: "twitter-app-2650c.firebaseapp.com",
//     projectId: "twitter-app-2650c",
//     storageBucket: "twitter-app-2650c.firebasestorage.app",
//     messagingSenderId: "952360733858",
//     appId: "1:952360733858:web:352e786bc489e13aecdbfb"
// };

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE.MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
}


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);