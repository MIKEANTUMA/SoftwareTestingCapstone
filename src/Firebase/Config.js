// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBokw8pWj26EA4W0NdBdossh8MSCWGIFRw",
  authDomain: "golf-f05e5.firebaseapp.com",
  databaseURL: "https://golf-f05e5-default-rtdb.firebaseio.com",
  projectId: "golf-f05e5",
  storageBucket: "golf-f05e5.appspot.com",
  messagingSenderId: "244392410120",
  appId: "1:244392410120:web:8abe6031ca145e6c16e5bd"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = app
