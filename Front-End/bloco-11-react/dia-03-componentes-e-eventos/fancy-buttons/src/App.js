import './App.css';
import React from 'react';
// JEITO CORRETO!
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0,
    }
    this.text1 = this.text1.bind(this)
    this.text2 = this.text2.bind(this)
    this.text3 = this.text3.bind(this)
  }
  text1(param) {
    this.setState((stateBefore, _props) => ({
      clicks1: stateBefore.clicks1 + 1,
    }))
    if (param % 2 !== 0) {
      console.log('VERDE')
    }
  }
  text2() {
    this.setState((stateBefore, _props) => ({
      clicks2: stateBefore.clicks2 + 1,
    }))
  }
  text3() {
    this.setState((stateBefore, _props) => ({
      clicks3: stateBefore.clicks3 + 1,
    }))
  }
  render() {
    return (
      <div className="btns-div">
        <button onClick={() => this.text1(this.state.clicks1)}>{ this.state.clicks1 }</button>
        <button onClick={this.text2}>{ this.state.clicks2 }</button>
        <button onClick={this.text3}>{ this.state.clicks3 }</button>
      </div>
    )
  }
}

export default App;

// JEITO ERRADO DE DECLARAR FUNÇÕES QUE LIDAM COM EVENTOS DENTRO DO COMPONENTE
// function text1 () {
//   console.log('Você clicou no texto 1!')
// }
// function text2 () {
//   console.log('Você clicou no botão do meio!!')
// }

// function text3 () {
//   console.log('Você tem apenas 24 horas!!Run')
// }

// class App extends React.Component {
//   render() {
//   return (
//     <div className="btns-div">
//     <button onClick={text1}>Imprime Texto1</button>
//     <button onClick={text2}>Imprime Texto2</button>
//     <button onClick={text3}>Imprime Texto3</button>
//     </div>
//   )
//   }
// }

// export default App;
