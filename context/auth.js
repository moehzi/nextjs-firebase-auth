import { useEffect, useState } from "react";
import { Authentication } from "../services/firebase";
import { CircularProgress } from "@mui/material/CircularProgress";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const initiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated");
        console.log(user);
      } else {
        console.log("User is not authenticated");
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    initiateAuthStateChange();
  }, []);
  if (isLoading) {
    return <CircularProgress />;
  }
  return children;
};

export default AuthStateChangeProvider;
