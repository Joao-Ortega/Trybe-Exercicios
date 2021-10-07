import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
  render(){
    return (
      <div className='display'>
        {pokemons.map(pkes => <Pokemon pokes={pkes}/>) }
      </div>
    )
  }
}

export default Pokedex