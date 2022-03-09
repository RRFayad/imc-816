import { Component } from 'react';
import './App.css';
import Input from './components/Input'
import { Button } from './components/Button'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: ''
    };
    this.calcular = this.calcular.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  calcular(event) {
    event.preventDefault();

    const calculo = (this.state.peso || 0) / Math.pow((this.state.altura || 1), 2)
    window.alert(calculo);
  }

  limpar() {
    this.setState({
      peso: '',
      altura: ''
    });
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.calcular} className="calculadora">
          <Input 
            value={this.state.peso} 
            onChange={(event) => this.setState({ peso: event.target.value })} 
            placeholder="Peso" 
            type="number"
          />

          <Input 
            value={this.state.altura} 
            onChange={(event) => this.setState({ altura: event.target.value })}
            placeholder="Altura" 
            type="number"
          />

          <Button type="submit">Calcula</Button>
          <Button type="reset" onClick={this.limpar} children="Limpar"/>
        </form>
      </>
    );
  }
}

export default App;
