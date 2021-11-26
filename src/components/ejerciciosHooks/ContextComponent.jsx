import React, { createContext, useState } from 'react'
import App from '../../App';
import Login from './apoyo/Login';
import Username from './apoyo/Username';

export const AppContext = createContext(null);

const ContextComponent = () => {
    const [username, setUsername] = useState('');
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Login />
            <Username />
        </AppContext.Provider>
    )
}

export default ContextComponent
