import React, { useState } from "react";
import useTareas from "../../hooks/useTareas";

const TareasComponent = () => {
  const [textoTarea, setTextoTarea] = useState("");
  const {
    tareas: tareas,
    nuevaTarea,
    cambiaCompletada,
  } = useTareas([{ texto: "Hacer la compra", completada: false }]);

  const Tarea = (tarea, i) => (
    <li
      key={i}
      style={{ textDecoration: tarea.completada ? "line-through" : "none" }}
      onClick={() => cambiaCompletada(i)}
    >
      {i}. {tarea.texto}
    </li>
  );

  return (
    <div>
      {tareas.length > 0 && tareas.map(Tarea)}
      <input
        type="text"
        value={textoTarea}
        placeholder="Escribe la nueva tarea"
        onChange={(e) => setTextoTarea(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            nuevaTarea({ texto: textoTarea });
            setTextoTarea("");
          }
        }}
      />
      <button
        onClick={() => {
          nuevaTarea({ texto: textoTarea });
          setTextoTarea("");
        }}
      >
        Añade nueva tarea
      </button>
    </div>
  );
};

export default TareasComponent;
