// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQrwvqHf7lC7vu4IXx2E3vQhxF4GetsQg",
  authDomain: "clip-4929b.firebaseapp.com",
  projectId: "clip-4929b",
  storageBucket: "clip-4929b.appspot.com",
  messagingSenderId: "383218740973",
  appId: "1:383218740973:web:5b3b020b7e71242bd426e4",
  measurementId: "G-CP6CCN91HQ",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
