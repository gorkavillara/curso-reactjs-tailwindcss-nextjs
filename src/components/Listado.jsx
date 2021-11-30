import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Listado = () => {
    const listado = useSelector(state => state.listado);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const nuevoItem = () => {
        const item = inputRef.current.value;
        // dispatch({ type: 'RESET' });
        return dispatch({ type: 'NUEVO', payload: item });
    }
    
    return (
        <div>
            <h3>Este es el listado</h3>
            <input type="text" placeholder="Añade nuevo item" ref={inputRef} />
            <button onClick={nuevoItem}>Añadir</button>
            {listado.map((elemento, i) => <li key={i}>{elemento}</li>)}
        </div>
    )
}

export default Listado
