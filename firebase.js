import firebase from "firebase";

//
const firebaseConfig = {
  apiKey: "AIzaSyA1BoMD_aq28XRluudT0V5oZOzUJIkYeME",
  authDomain: "clones-30c03.firebaseapp.com",
  projectId: "clones-30c03",
  storageBucket: "clones-30c03.appspot.com",
  messagingSenderId: "484240502256",
  appId: "1:484240502256:web:d376ade545427a0a664135",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
