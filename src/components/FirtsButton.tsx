function BtnAlert () {
    const information = () => {
        alert("Presionaste el Primer Boton");
    };

    return <button onClick={information} className="firstBtn">Dale click Pa</button>
}

export default BtnAlert;