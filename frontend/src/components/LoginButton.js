import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          redirectUri: "http://localhost:3000/dashboard",
        })
      }
    >
      Login
    </button>
  );
};

export default LoginButton;
