import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAWyQgTlNTnxZfmBSoFO4HxZNs40ZDUa0g",
  authDomain: "discord-clone-420ae.firebaseapp.com",
  projectId: "discord-clone-420ae",
  storageBucket: "discord-clone-420ae.appspot.com",
  messagingSenderId: "986019509050",
  appId: "1:986019509050:web:098e6116297ed09ca61603"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;