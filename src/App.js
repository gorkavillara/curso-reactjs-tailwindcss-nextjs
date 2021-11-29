import { useState, createContext } from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes';

export const LoginContext = createContext(null);

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);
  return (
    <Router>
      <LoginContext.Provider value={{ isLogged, logIn, logOut }}>
        <div className="App">
          <nav className="links">
            <div className="principal">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/clientes">Clientes</NavLink>
              <NavLink to="/facturas">Facturas</NavLink>
              {isLogged && <NavLink to="/admin">Admin</NavLink>}
            </div>
            <div className="secundario">
              {isLogged
                ? <Link to="#" onClick={logOut}>LogOut</Link>
                : <Link to="/login">Login</Link>}
            </div>
          </nav>
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
