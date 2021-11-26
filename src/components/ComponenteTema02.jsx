import React from 'react'
import ComponenteClase from './ComponenteClase';
import ComponenteFuncional from './ComponenteFuncional';

const ComponenteTema02 = () => {
    const [estaMontado, setEstaMontado] = React.useState(false);
    return (
        <div>
            <h1>Este es el componente App</h1>
            {estaMontado && <ComponenteFuncional />}
            {/* <ComponenteClase /> */}
            <button onClick={() => setEstaMontado(!estaMontado)}>
                {estaMontado ? 'Desmontar' : 'Montar'}
            </button>
        </div>
    )
}

export default ComponenteTema02
