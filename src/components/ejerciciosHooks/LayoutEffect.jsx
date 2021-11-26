import React, { useRef, useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        inputRef.current.value = "Aritz";
    }, []);

    useEffect(() => {
        inputRef.current.value = "Gorka";
    }, [])

    return (
        <div>
            <input ref={inputRef} value='' onChange={() => true} />
        </div>
    )
}

export default LayoutEffect



