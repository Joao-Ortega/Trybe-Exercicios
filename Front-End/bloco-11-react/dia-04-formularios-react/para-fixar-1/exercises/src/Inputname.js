import React from "react";

class Inputname extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    
    return (
      <label>Nome
        { value.length > 50 ? <span>Nome Gigante</span> : '' }
      <input type="name" name="Name" value={ value } onChange={ handleChange } />
      </label>
    )
  }
}
export default Inputname;