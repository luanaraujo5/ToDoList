import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5pcKIkutqoSqTd4Th3-lBID0wNTF4krM",
    authDomain: "todo-8771f.firebaseapp.com",
    projectId: "todo-8771f",
    storageBucket: "todo-8771f.appspot.com",
    messagingSenderId: "1007205191926",
    appId: "1:1007205191926:web:281b7094fa211960841cd7",
    measurementId: "G-9FKG66217Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);