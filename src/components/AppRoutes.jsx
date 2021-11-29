import React from "react";
import { Routes, Route } from "react-router";
import Home from "../views/Home";
import Clientes from "../views/Clientes";
import Facturas from "../views/Facturas";
import Login from "../views/Login";
import Admin from "../views/Admin";
import Error from "../views/404";

const rutas = [
  { path: "/", element: <Home /> },
  { path: "/clientes", element: <Clientes /> },
  { path: "/facturas", element: <Facturas /> },
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <Admin /> },
  { path: "*", element: <Error /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {rutas.map((ruta, i) => (
        <Route key={i} path={ruta.path} element={ruta.element} />
      ))}
      {/* <Route path="/" element={<h1>Soy el home</h1>} />
      <Route path="/clientes" element={<h1>Soy clientes</h1>} />
      <Route path="/facturas" element={<h1>Soy facturas</h1>} />
      <Route path="/login" element={<h1>Soy login</h1>} />
      <Route path="*" element={<h1>Error 404: Not Found</h1>} /> */}
    </Routes>
  );
};

export default AppRoutes;
