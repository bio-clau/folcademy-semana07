import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  //datos de configuracion de Firebase
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
