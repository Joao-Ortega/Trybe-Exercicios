import React from "react";
import './style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      aboutFood: '',
    }
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText (event) {
    this.setState({
      aboutFood: event.target.value,
    })
  }

  render() {
  return (
    <div>
      <form className="div-form">
        <label>Comida Favorita
          <select name="Comida Favorita">
            <option value="Strogonoff">Strogonoff</option>
            <option value="Feijoada">Feijoada</option>
            <option value="Pizza">Pizza</option>
            <option value="Lasanha">Lasanha</option>
          </select>
        </label>
        <label>Nome
          <input type="name"></input>
        </label>
        <label>Email
          <input type="email"></input>
        </label>
        <label>Descrição
          <textarea name="About your Food" value={this.state.aboutFood} onChange={this.handleChangeText}>Conte sobre sua comida favorita...</textarea>
        </label>
      </form>
    </div>
  );
}
}

export default App;
