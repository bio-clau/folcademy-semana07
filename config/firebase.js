import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkWfIIrT2qzs5lyoIIgJOSHd_zfwghB0o",
  authDomain: "next-auth-4617f.firebaseapp.com",
  projectId: "next-auth-4617f",
  storageBucket: "next-auth-4617f.appspot.com",
  messagingSenderId: "194010764940",
  appId: "1:194010764940:web:3a88a6470bff8d9f5ccda9",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
