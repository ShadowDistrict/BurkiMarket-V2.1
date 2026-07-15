import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7m-OTJznlihWq_kdBFIRLgyh0YJtm9aY",
  authDomain: "burkimarket-99331.firebaseapp.com",
  databaseURL: "https://burkimarket-99331-default-rtdb.firebaseio.com",
  projectId: "burkimarket-99331",
  storageBucket: "burkimarket-99331.firebasestorage.app",
  messagingSenderId: "718625734611",
  appId: "1:718625734611:web:41c34f303b0ee9fc817926"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
