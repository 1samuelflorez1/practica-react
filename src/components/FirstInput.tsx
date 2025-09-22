import { useState } from "react";

function PrimerInput() {

    const [text, setText] = useState<string>("") //se coloca vacio porque el valor inicio de un input siempre sera vacio

    return(<>
    <input
    className="FirstInput"
    type="text"
    value={text} 
    //a su vez, el input siempre muestra loque esta en el estado de "text" y como el onChange lo mantiene actualizando
    //siempre muestra lo que escribe el usuario
    onChange={(cadaVesQueSeEscriba) => setText(cadaVesQueSeEscriba.target.value)}
//este "onChange" se usa siempre para que cada vez que se escriba, se actualice la informacion pertinente
//que se esta colocando, sin esto, en el input se pudiese seguir escribiendo, pero la informacion no se pdoria
//usar.
//aqui mas especificamente 
//cada vez que el usuario escribe, tomamos ese valor (cadaVesQueSeEscriba.target.value) y lo guardamos en el estado con setText.
    ></input>
    </>)
}

export default PrimerInput;