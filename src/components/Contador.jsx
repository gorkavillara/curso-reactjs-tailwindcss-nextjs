import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Contador = () => {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();
  return (
    <div>
      Contador
      <p>El valor del Redux state es: <span data-testid="contador">{contador}</span></p>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

    </div>
  );
};

export default Contador;
