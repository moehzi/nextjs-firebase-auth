import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PULIC_API_KEY,
  authDomain: process.env.NEXT_PULIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PULIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PULIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PULIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PULIC_APP_ID,
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
