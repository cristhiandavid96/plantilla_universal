// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWMDNWE9XsSWYhQGjFkkGTeMt2cRnVZsU",
  authDomain: "universal-test-ac827.firebaseapp.com",
  projectId: "universal-test-ac827",
  storageBucket: "universal-test-ac827.appspot.com",
  messagingSenderId: "434377338387",
  appId: "1:434377338387:web:0eabb685ba9ae4968299e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);