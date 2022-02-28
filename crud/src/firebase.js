// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX0THzQ03THGSKh4atGLEBpiwUt9sW6MY",
  authDomain: "crud-udemy-react-efabf.firebaseapp.com",
  databaseURL: "https://crud-udemy-react-efabf-default-rtdb.firebaseio.com",
  projectId: "crud-udemy-react-efabf",
  storageBucket: "crud-udemy-react-efabf.appspot.com",
  messagingSenderId: "552531666726",
  appId: "1:552531666726:web:44849c22930854281543e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

