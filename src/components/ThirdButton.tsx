import { useState } from "react";

function ToggleColorBtn (){
    const [isBtnOn, setisBtnon] = useState(true)

    function changeState (){
        setisBtnon(!isBtnOn)
    }

    return <button
    className="BtnOnOff"
    style={{backgroundColor: isBtnOn ? "rgba(22, 162, 29, 1)" : "rgba(90, 90, 90, 1)",
        color: isBtnOn ? "black" : "white"
    }} 
    onClick={changeState}>
        {isBtnOn ? "On" : "Off"}
    </button>
}

export default ToggleColorBtn