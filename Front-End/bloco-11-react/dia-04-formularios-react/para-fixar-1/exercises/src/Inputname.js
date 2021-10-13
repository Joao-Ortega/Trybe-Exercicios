import React from "react";

class Inputname extends React.Component {
  render() {
    const { value, handleChange, handleErrors } = this.props;
    if (value.length > 50) handleErrors(true);
    
    return (
      <input type="name" name="Name" value={ value } onChange={ handleChange } ></input>
    )
  }
}
export default Inputname;