import { useState } from "react";

function BtnCount (){
    const [BtnPlus, setBtnPlus] = useState(0)

    return ( 
    <>
    <button
    className="BtnCount" 
    onClick = {() => setBtnPlus(antes => antes + 1 )}>
        Suma      
    </button>
    <p className="TextCounter">Contador: {BtnPlus}</p>
    </>
)}

export default BtnCount