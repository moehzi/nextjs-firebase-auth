import { initializeApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLluhtuFK2wHqnn9Qe2SUozN1MmMOvG5Y",
  authDomain: "nextjs-auth-e73be.firebaseapp.com",
  projectId: "nextjs-auth-e73be",
  storageBucket: "nextjs-auth-e73be.appspot.com",
  messagingSenderId: "995555919668",
  appId: "1:995555919668:web:27c946e966dd8d0f364761",
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
