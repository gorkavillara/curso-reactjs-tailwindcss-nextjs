import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductContext } from "../App";

const Busqueda = () => {
  const { products } = useContext(ProductContext);
  const [searchparams] = useSearchParams();
  const busqueda = searchparams.get("busqueda");
  return <div></div>;
};

export default Busqueda;
