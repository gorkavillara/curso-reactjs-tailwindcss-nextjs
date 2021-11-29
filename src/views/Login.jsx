import React, { useContext } from "react";
import { LoginContext } from "../App";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isLogged, logIn } = useContext(LoginContext);
  return isLogged ? (
    <Navigate to="/" />
  ) : (
    <>
      <h1>Haz clic en el botón para hacer Login</h1>
      <button onClick={logIn}>Log In</button>
    </>
  );
};

export default Login;
