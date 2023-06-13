// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBokVWPIkCNdzAC2NHXyo3Ts3KKzRAGWdE",
  authDomain: "myfinalproject-f6b3c.firebaseapp.com",
  projectId: "myfinalproject-f6b3c",
  storageBucket: "myfinalproject-f6b3c.appspot.com",
  messagingSenderId: "51995080952",
  appId: "1:51995080952:web:50ce261d1842fdad2e630d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export const storage = getStorage(app); 