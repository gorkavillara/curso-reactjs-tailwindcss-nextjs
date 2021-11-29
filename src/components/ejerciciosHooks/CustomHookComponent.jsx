import React from "react";
import useContador from "../../hooks/useContador";

const CustomHookComponent = () => {
  const { contador, incrementar, decrementar, reset } = useContador(5);
  return (
    <div>
      <h1>El contador es: {contador}</h1>
        <button onClick={incrementar}>Inc</button>
        <button onClick={decrementar}>Dec</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHookComponent;
