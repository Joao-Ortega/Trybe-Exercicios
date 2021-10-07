import './App.css';
import React from 'react';

function text1 () {
  console.log('Você clicou no texto 1!')
}
function text2 () {
  console.log('Você clicou no botão do meio!!')
}

function text3 () {
  console.log('Você tem apenas 24 horas!!Run')
}

class App extends React.Component {
  render() {
  return (
    <div className="btns-div">
    <button onClick={text1}>Imprime Texto1</button>
    <button onClick={text2}>Imprime Texto2</button>
    <button onClick={text3}>Imprime Texto3</button>
    </div>
  )
  }
}

export default App;
