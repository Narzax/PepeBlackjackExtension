// Initializing
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const roundsFirebaseConfig = {
  apiKey: "AIzaSyA52nupPGeHFILC5NxYjAhkpBGJxgv9yl8",
  authDomain: "blackjack-f7b9e.firebaseapp.com",
  databaseURL: "https://blackjack-f7b9e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blackjack-f7b9e",
  storageBucket: "blackjack-f7b9e.appspot.com",
  messagingSenderId: "801404726147",
  appId: "1:801404726147:web:c1f55242e76495f996e4b6",
  measurementId: "G-462EVZ5R36"
};

const baseUrl = 'https://firestore.googleapis.com/v1/projects/blackjackplayers-5cceb/databases/(default)/documents/Player';
const hitStandUrl = 'https://firestore.googleapis.com/v1/projects/blackjackdecision/databases/(default)/documents/Decision';
const app = initializeApp(roundsFirebaseConfig);
const round_db = getFirestore(app);

export { baseUrl, hitStandUrl, round_db, collection, onSnapshot };