import React from "react";

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <select name="FavoriteFood" value={ value } onChange={ handleChange }>
      <option value="Strogonoff">Strogonoff</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Pizza">Pizza</option>
      <option value="Lasanha">Lasanha</option>
    </select>
    )
  }
}
export default Select;