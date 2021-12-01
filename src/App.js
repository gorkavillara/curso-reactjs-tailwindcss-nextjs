import { createStore } from 'redux'
import reducer from './reducers';
import { Provider } from 'react-redux';
import './App.css';
import Contador from './components/Contador';
import Listado from './components/Listado';
import Selector from './components/Selector';

const store = createStore(reducer);
store.subscribe(() => { });

const App = () => {
    const muestraAlerta = () => alert('Alerta mostrada');
    return (
        // <Provider store={store}>
        //     <div className="App">
        //         <h1>Bienvenidos a Redux</h1>
        //         <Contador />
        //         <Listado />
        //     </div>
        // </Provider>
        <div>
            <Selector muestraAlerta={muestraAlerta} />
        </div>
    )
}

export default App
