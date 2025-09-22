import { useState } from "react";

function Calculadora2 () {

    const [num1, setNum1] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)
    const [operador, setOperador] = useState("")
    const [operacion, setOperacion] = useState<number>(0)

    const calcular = () => {
        switch(operador){
            case "+":
            setOperacion(num1 + num2)
            break

            case "-":
            setOperacion(num1 - num2)
            break

            
            case "*":
            setOperacion(num1 * num2)
            break

            
            case "/":
            setOperacion(num1 / num2)
            break
        }}
    return(<>
    <input 
    className="primerNumero"
    type="number"
    value={num1}
    onChange={changeNumber => setNum1(Number(changeNumber.target.value))}
    ></input>

    <input 
    className="operador"
    type="text"
    value={operador}
    placeholder='Operador   +, -, *, /'
    onChange={changeoperator => setOperador(changeoperator.target.value)}
    ></input>

    <input 
    className="SegundoNumero"
    type="number"
    value={num2}
    onChange={changeNumber2 => setNum2(Number(changeNumber2.target.value))}
    ></input>

    <button onClick={calcular}>Calcular</button>

    <p>Resultado: {operacion}</p>
    </>)}
export default Calculadora2