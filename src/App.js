import React from 'react'
import './App.css';
import ComponenteClase from './components/ComponenteClase';
import ComponenteFuncional from './components/ComponenteFuncional';

const App = () => {
  return (
    <div className="App">
      <h1>Vamos a renderizar un componente</h1>
      <ComponenteFuncional />
    </div>
  )
}

export default App