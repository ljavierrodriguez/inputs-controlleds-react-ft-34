import React, { useEffect } from 'react'

const Encabezado = (props) => {
    useEffect(() => {
        console.log("Cargando Encabezado...");

        return () => {
            console.log("Eliminando Encabezado...");
        }

    }, [])
    
    return (
        <h1 className={props.className}>{props.texto}</h1>
    )
}

export default Encabezado