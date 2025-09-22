import FirstButton from "./components/FirtsButton";
import SecondButton from "./components/SecondButton"
import ThirdButton from "./components/ThirdButton"
import FourButton from "./components/FourButton"
import FirstplusMinusBtn from "./components/FirstPlusMinusBtn"
import FirstInput from "./components/FirstInput"
import CalculadoraV1 from "./components/Calculadorav1"
import CalculadoraV2 from "./components/CalculadoraV2"
import "./styles/main.css"

function PruebaApp (){
  return(
    <>
      <h1 className="holaReact">Hola, React</h1>
      <FirstButton/>
      <SecondButton/>
      <ThirdButton/>
      <FourButton/>
      <FirstplusMinusBtn/>
      <FirstInput/>
      <CalculadoraV1/>
      <CalculadoraV2/>
    </>
  )
}

export default PruebaApp