import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAimPwsgzvJVzmAEbIsxd2Ll-CVz6aVjd4",
  authDomain: "react-coderhouse-cae21.firebaseapp.com",
  projectId: "react-coderhouse-cae21",
  storageBucket: "react-coderhouse-cae21.appspot.com",
  messagingSenderId: "698543204703",
  appId: "1:698543204703:web:b402d4560f119250d86eea",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
