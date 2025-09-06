
import { useState } from 'react'

const Ejercicio2 = () => {

    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setList([...list, inputValue]);
        setInputValue("");
    }

    const handleOnChange = e => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <h1>Elementos de la lista:
                {
                    list.map(i => (
                        <li key={Math.random()}>{i}</li>
                    ))
                }

            </h1>

            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleOnChange} placeholder='Add new To do' />
                <button type='submit' >Ingresar nueva tarea</button>
            </form>

        </div>
    )
}

export default Ejercicio2
