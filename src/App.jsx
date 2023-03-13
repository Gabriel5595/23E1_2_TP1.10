import './App.css'


export default function App() {

  let resultado = 0;
  const ArrayQualquer = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  resultado = ArrayQualquer.reduce(reducer);
  
  let sinal = (resultado > 150) ? '!' : resultado;

  let mainContainer = <main>
    <strong>{sinal}</strong>
  </main>;

  return mainContainer

}