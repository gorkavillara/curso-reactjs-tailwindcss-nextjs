import React from 'react'
import './App.css';
import ComponenteTema02 from './components/ComponenteTema02';

const ComponenteRef = () => {
  // const referenciaInput = React.useRef(null);
  // const [nombre, setNombre] = React.useState('Iñigo');
  // const [edad, setEdad] = React.useState(31);
  const [campos, setCampos] = React.useState({ nombre: '', edad: '' });
  const [checked, setChecked] = React.useState(false);

  const handleChange = event => {
    const field = event.target.name;
    setCampos(
      { ...campos,
        [field]: event.target.value
      })
  }

  console.log(`campos`, campos)

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        // Se hace lo que queramos
        // Podemos enviar axios.post()...
      }}>
        <h1>Componente Referencias</h1>
        <span>Cuál es tu nombre </span>
        <input type="text" name="nombre" value={campos.nombre} onChange={handleChange} />
        <br />
        <span>Cuántos años tienes </span>
        <input type="text" name="edad" value={campos.edad} onChange={handleChange} style={{ backgroundColor: 'yellowgreen' }} />
        <br />
        <label>¿Sabes programar?
          <input type="checkbox" name="Programacion" checked={checked} onChange={() => setChecked(!checked)} />
        </label>
        {/* <button onClick={() => alert(referenciaInput.current.value)}>Alerta Nombre</button>
      <br />
      <button onClick={() => referenciaInput.current.focus()}>Enfócate en el input</button>
      <button onClick={() => referenciaInput.current.value = ""}>Reset</button> */}
      </form>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      {/* <ComponenteTema02 /> */}
      <ComponenteRef />
    </div>
  )
}

export default App