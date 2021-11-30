import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import listadoReducer from "./listadoReducer";

export default combineReducers({
    contador: contadorReducer,
    listado: listadoReducer
});