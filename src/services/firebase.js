import { firebase } from "@firebase/app";
import { FIREBASE_CONFIG } from "./base";
import "firebase/firestore";
import "@firebase/auth";
import "firebase/storage";

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const db = firebaseApp.firestore();
export const storageRef = firebase.storage().ref();
export const ConvertSnapShotToJSON = (res, cb) => {
  const items = [];
  res.forEach(doc => {
    const data = doc.data();
    data.id = doc.id;
    items.push(data);
  });
  cb(null, items);
};
