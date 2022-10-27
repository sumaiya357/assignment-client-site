// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW_uq4H3RXIjlqF7tf2j_j34qZ0AitSl8",
  authDomain: "assignment-client-site.firebaseapp.com",
  projectId: "assignment-client-site",
  storageBucket: "assignment-client-site.appspot.com",
  messagingSenderId: "755047887767",
  appId: "1:755047887767:web:4b2c26d34b9a8cc90f0ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;