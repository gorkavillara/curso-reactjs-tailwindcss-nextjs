import React, { useContext } from 'react'
import { AppContext } from '../ContextComponent'

const Username = () => {
    const { username } = useContext(AppContext);
    return <p>Username: {username}</p>
}

export default Username
