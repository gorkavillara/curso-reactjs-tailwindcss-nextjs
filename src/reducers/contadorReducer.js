const contadorReducer = (state = 90, action) => {
    if (action.type === 'INCREMENTAR') return state + 1;
    if (action.type === 'DECREMENTAR') return state - 1;
    if (action.type === 'RESET') return 0;
    return state;
}

export default contadorReducer;