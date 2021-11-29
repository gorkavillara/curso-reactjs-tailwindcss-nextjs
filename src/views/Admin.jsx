import React, { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "../App";

const Admin = () => {
    const { isLogged } = useContext(LoginContext)
  return isLogged ? <h1>Soy Admin</h1> : <Navigate to="/login" />;
};

export default Admin;
