import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTLbPIdh9gMYJq3_fQmdCblpgoz1JaCaE',
  authDomain: 'my-signal-39318.firebaseapp.com',
  projectId: 'my-signal-39318',
  storageBucket: 'my-signal-39318.appspot.com',
  messagingSenderId: '724732346202',
  appId: '1:724732346202:web:4e065f94b9a51782bcfd63',
  measurementId: 'G-0M4B1EV35F',
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
