import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcZ62t4jo8uWZ0aVRycuX02IwQ_bF3FNA",
  authDomain: "dulcepuchiko.firebaseapp.com",
  projectId: "dulcepuchiko",
  storageBucket: "dulcepuchiko.appspot.com",
  messagingSenderId: "743236420114",
  appId: "1:743236420114:web:0d6ce412b290f900f68ecb"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
