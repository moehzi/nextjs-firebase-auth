import { useEffect } from "react";
import { Authentication } from "../services/firebase";

const AuthStateChangeProvider = () => {
  const initiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated");
        console.log(user);
      } else {
        console.log("User is not authenticated");
      }
    });
  };

  useEffect(() => {
    initiateAuthStateChange;
  }, []);
  return <></>;
};

export default AuthStateChangeProvider;
