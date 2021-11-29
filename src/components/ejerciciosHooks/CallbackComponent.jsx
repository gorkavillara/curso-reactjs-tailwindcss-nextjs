import { useCallback, useState } from "react";

const CallbackComponent = () => {
  const [saludo, setSaludo] = useState("Hola");
  const [nombre, setNombre] = useState("Silvia");
  const [ids, setIds] = useState([]);

  const Saludo = () => <h1>{devuelveSaludo()}</h1>;

  const devuelveSaludo = useCallback(() => {
    console.log("Se ha ejecutado");
    return `${saludo}, ${nombre}`;
  }, [saludo, nombre]);

  //   const busquedaProductos = (ids) => {
  //       axios.get(`https://blablabla.com/${JSON.stringify(ids)}`)
  //         .then(r => console.log(r))
  //         .catch(e => console.log(e))
  //   }
//   const busquedaProductos = useCallback(
//     (ids) => {
//       axios
//         .get(`https://blablabla.com/${JSON.stringify(ids)}`)
//         .then((r) => console.log(r))
//         .catch((e) => console.log(e));
//     },
//     [ids]
//   );

  //   const stringSaludo = useMemo(() => `${saludo}, ${nombre}`, [nombre]);

  return (
    <div>
      <Saludo />
      <input
        type="text"
        value={saludo}
        onChange={(event) => setSaludo(event.target.value)}
      />
      <input
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
    </div>
  );
};

export default CallbackComponent;
