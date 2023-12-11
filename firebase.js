import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD0lEAIN1qLNAKT4hHbnNuXLQVjmG91p4",
  authDomain: "newsapp-c1303.firebaseapp.com",
  projectId: "newsapp-c1303",
  storageBucket: "newsapp-c1303.appspot.com",
  messagingSenderId: "160534420811",
  appId: "1:160534420811:web:14e3c95077263460929cce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };