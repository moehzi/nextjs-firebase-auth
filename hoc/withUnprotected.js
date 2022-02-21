import { useRouter } from "next/dist/client/router";
import { useUser } from "../context/user";

import React from "react";

const withUnProtected = (Pages) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (uid) {
      router.replace("/dashboard");
      return <></>;
    }
    return <Pages {...props} />;
  };
};

export default withUnProtected;