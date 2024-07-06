// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDTSbIpV7PeDCvHT5n5hBwafoGviO_518",
  authDomain: "react-lms-6114e.firebaseapp.com",
  databaseURL: "https://react-lms-6114e-default-rtdb.firebaseio.com",
  projectId: "react-lms-6114e",
  storageBucket: "react-lms-6114e.appspot.com",
  messagingSenderId: "900071050436",
  appId: "1:900071050436:web:681afe257f2052c55d4d91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
