import FirstButton from "./components/FirtsButton";
import SecondButton from "./components/SecondButton"
import ThirdButton from "./components/ThirdButton"
import FourButton from "./components/FourButton"
import "./styles/main.css"

function PruebaApp (){
  return(
    <>
      <h1 className="holaReact">Hola, React</h1>
      <FirstButton/>
      <SecondButton/>
      <ThirdButton/>
      <FourButton/>
    </>
  )
}

export default PruebaApp