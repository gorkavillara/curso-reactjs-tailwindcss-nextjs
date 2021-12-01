import React, { useState } from "react";

const Selector = ({
  paises = ["Egipto", "Rusia", "China"],
  paisSeleccionado = "",
  muestraAlerta,
}) => {
  const [pais, setPais] = useState(
    paisSeleccionado === "" ? paises[0] : paisSeleccionado
  );
  return (
    <div style={{ padding: 25 }}>
      <select onChange={(e) => setPais(e.target.value)} value={pais}>
        {paises.map((p, i) => (
          <option key={i} value={p}>
            {p}
          </option>
        ))}
        {/* <option value="España">España</option>
        <option value="Marruecos">Marruecos</option>
        <option value="Francia">Francia</option>
        <option value="Argelia">Argelia</option> */}
      </select>
      <div>
        El país seleccionado es: <span role="pais-seleccionado">{pais}</span>
      </div>
      <button onClick={muestraAlerta}>Alerta</button>
    </div>
  );
};

export default Selector;
