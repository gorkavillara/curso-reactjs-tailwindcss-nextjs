import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

const Productos = () => {
  const [search, setSearch] = useState("");
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) return;
    axios
      .get("https://fakestoreapi.com/products")
      .then((r) => setProducts(r.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="listado-productos">
      <h4>Búsqueda de productos</h4>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>Listado Productos</h1>
      {products.length > 0 ? (
        products.map(
          (product, i) =>
            product.title.toLowerCase().includes(search.toLowerCase()) && (
              <Link key={i} to={`/productos/${product.id}`}>
                <li>{product.title}</li>
              </Link>
            )
        )
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
};

export default Productos;
