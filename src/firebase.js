import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoDVOfGwtyQwRQPe_L7ELjMNqwWxyKNXU",
  authDomain: "slack-clone-yt-a9108.firebaseapp.com",
  projectId: "slack-clone-yt-a9108",
  storageBucket: "slack-clone-yt-a9108.appspot.com",
  messagingSenderId: "708034796699",
  appId: "1:708034796699:web:94f9cfe8ca706000e3fa3e",
  measurementId: "G-W6N2DT9LB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
