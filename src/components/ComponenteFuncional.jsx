import { useState, useEffect } from "react";
import axios from "axios";

const ComponenteFuncional = (props) => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log('El componente está montado o actualizado'); // Se ejecuta nada más inicializarse (o actualizarse)
    }, [contador]); // Parámetros para actualizar el componente

    useEffect(() => {
        return () => console.log('El componente se va a desmontar') // Se ejecuta justo antes de desmontarse
    }, []); // Parámetros para actualizar el componente

    return (
        <div>
            <h2>El valor del contador es: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    )
}

export default ComponenteFuncional;