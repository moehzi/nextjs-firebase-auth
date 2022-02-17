import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

export const FirebaseAuth = getAuth();

export const Authentication = () => {
  return FirebaseAuth;
};

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password);
};

export const logout = async () => {
  await signOut(FirebaseAuth);
};

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Email tidak terdaftar";
    case "auth/wrong-password":
    default:
      return "Email atau password salah";
  }
};
