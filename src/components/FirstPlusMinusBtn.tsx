import { useState } from "react";
function SecondCounter(){
    const [counter, setCounter] = useState(0)

    const plus = () => {
        setCounter(counter + 1)
    }
    const minus = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
        return(
        <>
            <button onClick={plus} className="plus">Plus</button>
            <p>{counter}</p>
            <button onClick={minus} className="minus">Minus</button>
        </>
    )}
export default SecondCounter
