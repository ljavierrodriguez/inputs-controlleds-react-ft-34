import React, { useEffect, useState } from 'react'
import Button from './components/Button';
import Encabezado from './components/Encabezado'

const Main = () => {
    // initialValue = valor inicial del estado que se esta creando puede contener cualquier tipo de datos (string, number, boolean, array, object)
    // state = nombre para acceder al valor de ese estado
    // setState = nombre para el metodo o funcion que me permite modificar el estado 
    // const [ state, setState] = useState(initialValue) // por defecto es inmutable (no puede ser cambiado directamente)

    const [name, setName] = useState("Rabbit");

    const [show, setShow] = useState(false);

    //const [animals, setAnimals] = useState(["Dog", "Cat", "Horse", "Dolphin", "Turtle"])
    const [animals, setAnimals] = useState([])

    const [person, setPerson] = useState({
        firstname: '',
        lastname: ''
    })

    const addAnimal = () => {
        /* let newAnimals = animals.concat("Dog")
        setAnimals(newAnimals) */

        //setAnimals(animals.concat("Bird"))

        //setAnimals(animals.concat("Bird")) // ["Dog", "Cat", "Horse", "Dolphin", "Turtle"]
        //setAnimals(animals.concat("Snake")) // ["Dog", "Cat", "Horse", "Dolphin", "Turtle", "Snake"] // se pierde el animal anterior porque no ve ese nuevo estado
        // 1 
        // setAnimals([...animals, "Bird"]); // ["Dog", "Cat", "Horse", "Dolphin", "Turtle"]
        // 2
        // setAnimals([...animals, "Snake"]); // ["Dog", "Cat", "Horse", "Dolphin", "Turtle"] // se pierde el animal anterior porque no ve ese nuevo estado

        /* setAnimals((prevState) => {
            console.log(prevState);
            return [...prevState, "Bird"]
        })

        setAnimals((prevState) => {
            console.log(prevState);
            return [...prevState, "Snake"]
        }) */

        setAnimals(animals.concat(name))
        setName("");
    }

    const addFirstName = () => {
        setPerson({
            ...person,
            firstname: "John"
        })
    }
    const addLastName = () => {
        setPerson({
            ...person,
            lastname: 'Doe'
        })
    }

    useEffect(() => {
        console.log("Se cargo el component Main...");

        return () => {
            console.log("Se va a eliminar el component Main...");
        }
    }, [])

    useEffect(() => {
        console.log("Se modifico person...");
    }, [person])


    useEffect(() => {
        console.log("Se agrego un nuevo animal...");
        console.log(animals[animals.length - 1])
    }, [animals])

    return (
        <div className="container">
            <h1 className="text-primary text-center">MAIN</h1>
            <Encabezado texto={name} className={"text-danger text-center fs-3"} />
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

            <button className="btn btn-info btn-sm my-3" onClick={addAnimal}>Add Animal</button>

            <span className='text-mutted d-block'>{ person.firstname } {person.lastname}</span>
            <button className="btn btn-warning btn-sm" onClick={addFirstName}>Add First Name</button>
            <button className="btn btn-warning btn-sm" onClick={addLastName}>Add Last Name</button>



            {
                show ? (
                    <>
                    <Encabezado texto={"Me voy..."} className={"text-primary"} />
                    <Button className={"btn btn-danger btn-sm my-3"} onClick={() => setShow(!show)}>
                        Ocultar
                    </Button>
                    </>
                ):(
                    <>
                    <Button className={"btn btn-success btn-sm my-3"} onClick={() => setShow(!show)}>
                        Mostrar
                    </Button>
                    </>
                )
            }

        </div>
    )
}

export default Main