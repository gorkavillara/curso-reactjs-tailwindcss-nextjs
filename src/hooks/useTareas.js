import React, { useState, useDebugValue } from 'react'

const useTareas = (tareasIniciales = []) => {
    const [tareas, setTareas] = useState(tareasIniciales)
    const nuevaTarea = tarea => setTareas([...tareas, tarea])
    const cambiaCompletada = id => {
        let newTareas = [...tareas];
        newTareas[id].completada = !newTareas[id].completada;
        setTareas(newTareas);
    }
    useDebugValue('Ejemplo hook de tareas');
    return {
        tareas,
        nuevaTarea,
        cambiaCompletada
    }
}

export default useTareas
