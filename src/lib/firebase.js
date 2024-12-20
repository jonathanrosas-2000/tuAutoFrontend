// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyASlh0blPvFHxQcqCwOXG73NB-2pz_gmqA",
  authDomain: "tuautoseminuevo-ad7b8.firebaseapp.com",
  databaseURL: "https://tuautoseminuevo-ad7b8-default-rtdb.firebaseio.com",
  projectId: "tuautoseminuevo-ad7b8",
  storageBucket: "tuautoseminuevo-ad7b8.firebasestorage.app",
  messagingSenderId: "23700492160",
  appId: "1:23700492160:web:75ba8745c5d456dc4dbb65",
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };