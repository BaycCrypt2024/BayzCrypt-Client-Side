import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZWwUWxFZT_14mdGf9vD0KN_OWCIoV-No",
  authDomain: "chats-474a4.firebaseapp.com",
  projectId: "chats-474a4",
  storageBucket: "chats-474a4.appspot.com",
  messagingSenderId: "376732126946",
  appId: "1:376732126946:web:dea0645018cccd66a658bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
