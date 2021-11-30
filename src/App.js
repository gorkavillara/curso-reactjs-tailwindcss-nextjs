import { createStore } from 'redux'
import reducer from './reducers';
import { Provider } from 'react-redux';
import './App.css';
import Contador from './components/Contador';
import Listado from './components/Listado';

const store = createStore(reducer);
store.subscribe(() => { });

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Bienvenidos a Redux</h1>
                <Contador />
                <Listado />
            </div>
        </Provider>
    )
}

export default App
