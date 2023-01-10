import Container from './layouts/Container';
import Calculadora from './Calculadora'
import Display from "./Display"
import Teclado from "./Teclado"
import Logica from "./matematica/logicas_retorno";
import './App.css';
import React from 'react';

class App extends React.Component {

    state = {
      valor: null,
      dado: null,
      outro:null,
      apagar:false,
    };

    
    NumeroClicou = BotaoValor => {
        this.setState(Logica(this.state,BotaoValor));

    }

    

    render(){
        
      return (
        <Container tamanhoTodo itensMeio fundo>
    
          <Calculadora>
          <Display valor={this.state.outro ? this.state.outro : this.state.valor} dado={this.state.dado} />
          <Teclado funcao={this.NumeroClicou} />
    
          </Calculadora>
    
        </Container>
      );
    }

  
}

export default App;
