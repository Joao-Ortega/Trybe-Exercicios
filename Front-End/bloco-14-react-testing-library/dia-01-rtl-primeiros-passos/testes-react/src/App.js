import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail = (value) => {
    this.setState({ email: value });
  }

  changeSaveEmail = (value) => {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda com o Ortega
        </a>
        <label htmlFor="id-email">
        Email
        <input
          type="email"
          id="id-email"
          value={email}
          onChange={ (e) => this.changeEmail(e.target.value) }
        />
      </label>
      <button
        type="button"
        value="Enviar"
        id="btn-send"
        data-testid="id-send"
        onClick={ () => this.changeSaveEmail(email) }
      >
        Enviar
      </button>
      <button type="button" value="Voltar" id="btn-Back">Votar</button>
      <h2 data-testid="id-email-user">{ `Valor: ${saveEmail}` }</h2>
      </header>
    </div>
  );
  }
}

export default App;
