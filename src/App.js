import React from 'react'
import './App.css';
import ComponenteClase from './components/ComponenteClase';
import ComponenteFuncional from './components/ComponenteFuncional';

const App = () => {
  const [estaMontado, setEstaMontado] = React.useState(false);

  return (
    <div className="App">
      <h1>Este es el componente App</h1>
      {estaMontado && <ComponenteFuncional />}
      {/* <ComponenteClase /> */}
      <button onClick={() => setEstaMontado(!estaMontado)}>
        {estaMontado ? 'Desmontar' : 'Montar'}
      </button>
    </div>
  )
}

export default App