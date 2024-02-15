import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBjQAvuPkkxnfN6jZslvNwemugJ1w-TnKE",
  authDomain: "clocking-4fac3.firebaseapp.com",
  projectId: "clocking-4fac3",
  storageBucket: "clocking-4fac3.appspot.com",
  messagingSenderId: "117738311331",
  appId: "1:117738311331:web:100728b623661c1f853916",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
