import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

// we need a config here
const config = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCrWPViwpI8ti0d65pQo8nVMnvVAUD7L-A",
    authDomain: "pinterest-57ffa.firebaseapp.com",
    databaseURL: "https://pinterest-57ffa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pinterest-57ffa",
    storageBucket: "pinterest-57ffa.appspot.com",
    messagingSenderId: "1057576434343",
    appId: "1:1057576434343:web:275b4db2cf2c085e0af982",
    measurementId: "G-F1613DZ2H8"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };