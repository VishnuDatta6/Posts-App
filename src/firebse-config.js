import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACQIurnnoni1VRua5JDMhjgWz2FRiU7tI",
  authDomain: "posts-app-1.firebaseapp.com",
  projectId: "posts-app-1",
  storageBucket: "posts-app-1.appspot.com",
  messagingSenderId: "522024493610",
  appId: "1:522024493610:web:4aa739b307e665c8ccd953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();