import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const { contador, listado } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux</h2>
      <div>
        <h3>Redux contador</h3>
        <p>Valor: {contador}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
      <div>
        <h3>Redux listado</h3>
        <p>Tamaño del listado: {listado.length}</p>
        <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: "Hola" })}>+</button>
        {listado.map((item, i) => <li key={i}>{item}</li>)}
      </div>
    </div>
  );
}

export default App;