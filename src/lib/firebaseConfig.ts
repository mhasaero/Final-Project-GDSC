// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: String(process.env.REACT_APP_FIREBASE_API_KEY),
//   authDomain: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
//   projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
//   storageBucket: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
//   messagingSenderId: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
//   appId: String(process.env.REACT_APP_FIREBASE_APP_ID),
//   measurementId: String(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID),
// };

const firebaseConfig = {
  apiKey: "AIzaSyC3O5BN_6byrROl28FOheesa3_V1WA4EMM",
  authDomain: "final-project-gdsc-1a77e.firebaseapp.com",
  databaseURL: "https://final-project-gdsc-1a77e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-project-gdsc-1a77e",
  storageBucket: "final-project-gdsc-1a77e.appspot.com",
  messagingSenderId: "78759283330",
  appId: "1:78759283330:web:b56e1586d386d1b647029b",
  measurementId: "G-N6V653G14R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
