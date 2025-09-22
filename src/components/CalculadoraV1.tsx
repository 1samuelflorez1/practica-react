import { useState } from "react";

function SumarDosNumeros () {
    const [num1, setNum1] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)
    //en estas dos variable, se colocan los dos numeros que estaran en los dos inputs
    //estan en un useState con el objetivo de que siempre se actualicen

    const [suma, setSuma] = useState<number>(0)
    //luego tenemos esta variable de suma, es necesario para que posteriormente se puedan


    return(
    <>
    <div className="calculadora">
    <input
    type="number"
    value={num1}
    onChange={cadaNumeroColocar => setNum1(Number(cadaNumeroColocar.target.value))}
    ></input>

    <input
    type="number"
    value={num2}
    onChange={cadaNumerocolocar2 => setNum2(Number(cadaNumerocolocar2.target.value))}
    ></input>

    <button onClick={() => setSuma(num1 + num2)}>Sumar</button>
    <button onClick={() => setSuma(num1 - num2)}>Restar</button>
    <button onClick={() => setSuma(num1 * num2)}>Multiplicacion</button>
    <button onClick={() => setSuma(num1 / num2)}>Division</button>
    </div>
    <p>Resultado: {suma}</p>
    </>
)
}

export default SumarDosNumeros