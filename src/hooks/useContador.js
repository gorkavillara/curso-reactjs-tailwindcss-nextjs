import { useState } from "react";

const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reset = () => setContador(0);
  return {
    contador,
    incrementar,
    decrementar,
    reset,
  };
};

export default useContador;
