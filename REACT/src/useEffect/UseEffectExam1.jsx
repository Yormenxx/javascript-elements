
import { useState, useEffect } from "react"


const UseEffectExam1 = () => {

    const [value, setValue] = useState(0);
    const [something, setSomething] = useState(0);



    useEffect(() => {

        if (value > 0) {
            console.log("call useEffect");
            document.title = `Increment ${value}`;
        }
    }, [value, something])




    return (
        <div>

            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>Click me</button>
            <button onClick={() => setSomething(something + 1)}>Click me</button>

        </div>
    )
}

export default UseEffectExam1
