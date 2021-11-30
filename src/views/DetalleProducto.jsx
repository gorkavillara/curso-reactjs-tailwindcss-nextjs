import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import { Link, useParams } from "react-router-dom";

const DetalleProducto = () => {
  const [product, setProduct] = useState();
  const { products } = useContext(ProductContext);
  const params = useParams();
  console.log(`params`, params)
  useEffect(() => {
    const { productId } = params;
    const pr = products.find((prod) => prod.id.toString() === productId);
    setProduct(pr);
  }, [product]);

  return product ? (
    <>
      <div className="product-details">
        <div className="left-column">
          <img src={product.image} />
        </div>
        <div className="right-column">
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>$ {product.price}</p>
          <Link to="/productos">{"<< Volver"}</Link>
        </div>
      </div>
    </>
  ) : (
    <h3>Cargando...</h3>
  );
};

export default DetalleProducto;
