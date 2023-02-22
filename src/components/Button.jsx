import React, { useEffect } from 'react'

const Button = ({ className, children, onClick }) => {

    useEffect(() => {
        console.log("Cargando Boton...");

        return () => {
            console.log("Eliminando Boton...");
        }

    }, [])

  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button