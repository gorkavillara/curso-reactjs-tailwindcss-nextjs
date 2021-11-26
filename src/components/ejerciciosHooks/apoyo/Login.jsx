import React, { useContext } from 'react'
import { AppContext } from '../ContextComponent'

const Login = () => {
    const { username, setUsername } = useContext(AppContext);

    return <>
        <span>Login: </span>
        <input value={username} onChange={e => setUsername(e.target.value)} />
    </>
}

export default Login
