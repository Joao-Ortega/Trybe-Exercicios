import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokes: { name, type, averageWeight, image } } = this.props
    return (
      <div className='pokemons'>
        <div className='inside-Div'>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value}:{averageWeight.measurementUnit}</p>
        </div>
        <img src={ image } alt={ name }></img>
      </div>
    )
  }
}

export default Pokemon;