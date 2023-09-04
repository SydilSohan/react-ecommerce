// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth"
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1maRSlu15GjCuqGlBPOwzzVCNfgpJA1o",
  authDomain: "react-ecommerce-80bfb.firebaseapp.com",
  projectId: "react-ecommerce-80bfb",
  storageBucket: "react-ecommerce-80bfb.appspot.com",
  messagingSenderId: "382130881184",
  appId: "1:382130881184:web:acab964cc8c78e4ac97fc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {db, auth, provider};