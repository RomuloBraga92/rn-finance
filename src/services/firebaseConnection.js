import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCXibVUCEPBSZ-UWKN1xu6pgiKBV7FD1Bg",
  authDomain: "rn-finance-21b6c.firebaseapp.com",
  databaseURL: "https://rn-finance-21b6c.firebaseio.com",
  projectId: "rn-finance-21b6c",
  storageBucket: "rn-finance-21b6c.appspot.com",
  messagingSenderId: "195384539648",
  appId: "1:195384539648:web:4d4fb423539489e20736e5",
  measurementId: "G-QSM3HTSPWX"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;