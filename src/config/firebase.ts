import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6uToYymGD88gFt7kMwAKS6EqDcxetaBs",
  authDomain: "atom-db.firebaseapp.com",
  projectId: "atom-db",
  storageBucket: "atom-db.appspot.com",
  messagingSenderId: "204214218236",
  appId: "1:204214218236:web:6c2fc3d13b96d46ed41679",
  measurementId: "G-4JV38HRTRQ"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);