import { firebase } from "@firebase/app";
import { FIREBASE_CONFIG } from "./base";
import "firebase/firestore";

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const db = firebaseApp.firestore();

