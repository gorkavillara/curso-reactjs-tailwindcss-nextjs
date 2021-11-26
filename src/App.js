import React from 'react'
import './App.css';
import ComponenteTema02 from './components/ComponenteTema02';
import ComponenteTema03 from './components/ComponenteTema03';
import ComponenteTema04 from './components/ComponenteTema04';



const App = () => {
  const [username, setUsername] = React.useState('gorkavillar');
  return (
    <div className="App">
      {/* <ComponenteTema02 /> */}
      {/* <ComponenteTema03 /> */}
      <ComponenteTema04 username={username} setUsername={setUsername} />
    </div>
  )
}

export default App