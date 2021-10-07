import Pokedex from './Pokedex';
import React from 'react';
import pokemons from './data';
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokes={ pokemons }/>
      </div>
    );
  }
}

export default App;
