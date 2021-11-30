import React from "react";
import { Routes, Route } from "react-router";
import Home from "../views/Home";
import Clientes from "../views/Clientes";
import Facturas from "../views/Facturas";
import Productos from "../views/Productos";
import Busqueda from "../views/Busqueda";
import DetalleProducto from "../views/DetalleProducto";
import Login from "../views/Login";
import Admin from "../views/Admin";
import Error from "../views/404";

// const rutas = [
//   { path: "/", element: <Home /> },
//   { path: "/clientes", element: <Clientes /> },
//   { path: "/facturas", element: <Facturas /> },
//   { path: "/login", element: <Login /> },
//   { path: "/admin", element: <Admin /> },
//   { path: "*", element: <Error /> },
// ];

const AppRoutes = () => {
  return (
    <Routes>
      {/* {rutas.map((ruta, i) => (
        <Route key={i} path={ruta.path} element={ruta.element} />
      ))} */}
      <Route path="/" element={<Home />}>
        <Route path="clientes" element={<Clientes />} />
        <Route path="facturas" element={<Facturas />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/search" element={<Busqueda />} />
        <Route path="productos/:productId" element={<DetalleProducto />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
