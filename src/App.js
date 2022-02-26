import './App.css';
import Input from './components/Input'
import { Button } from './components/Button'

function App() {

  function calcular() {

  }
  
  return (
    <>

      <div className="calculadora">
        <Input />
        <Input />
        <Button banana="Calcular" onClick={calcular} />
        <Button banana="Limpar"/>
      </div>
    </>
  );
}

export default App;
