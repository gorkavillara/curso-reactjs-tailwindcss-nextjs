const listadoReducer = (state = ['ir a la compra', 'hacer la cama'], action) => {
    if (action.type === 'NUEVO') return [...state, action.payload];
    if (action.type === 'ELIMINA_ULTIMO') {
        let newState = [...state];
        newState.pop();
        return newState;
    }
    if (action.type === 'LISTADO_RESET') return [];
    
    return state;
}

export default listadoReducer;