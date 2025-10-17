import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcfhJdWto8qhZGc2e-rSKQOyvMYq853c4",
  authDomain: "fir-store-44e3b.firebaseapp.com",
  projectId: "fir-store-44e3b",
  storageBucket: "fir-store-44e3b.firebasestorage.app",
  messagingSenderId: "672731650101",
  appId: "1:672731650101:web:b3f425698a51c32edd397c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth}