function BtnBackColor (){
    const changeBackroundColor = () => {
        document.body.style = `background-color: rgba(149, 33, 33, 1)`
    }

    return <button onClick={changeBackroundColor} className="secondBtn">Cambiar el Fondo</button>
}

export default BtnBackColor;