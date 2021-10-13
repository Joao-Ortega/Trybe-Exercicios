import React from "react";
import './style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      FavoriteFood: 'Strogonoff',
      Name: '',
      Email: '',
      Description: '',
      OnlyOneFav: 'false',
    }
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange ({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
  return (
    <div>
      <form className="div-form">
        <label>Comida Favorita
          <select name="FavoriteFood" value={ this.state.FavoriteFood } onChange={ this.handleChange }>
            <option value="Strogonoff">Strogonoff</option>
            <option value="Feijoada">Feijoada</option>
            <option value="Pizza">Pizza</option>
            <option value="Lasanha">Lasanha</option>
          </select>
        </label>
        <fieldset>
        <label>Nome
          <input type="name" name="Name" value={ this.state.Name } onChange={ this.handleChange }></input>
        </label>
        <label>Email
          <input type="email" name="Email" value={ this.state.Email } onChange={ this.handleChange }></input>
        </label>
        <label>Descrição
          <textarea name="Description" value={this.state.Description} onChange={this.handleChange} />
        </label>
        </fieldset>
        <label>Quer receber dicas sobre comida?
          <input type="checkbox" name="OnlyOneFav" value={this.state.OnlyOneFav} onChange={this.handleChange}></input>Sim
        </label>
        <label>
          <input type="file" ref={ this.fileInput }></input>
        </label>
      </form>
    </div>
  );
}
}

export default App;
// Criando 1 componente controlado
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       aboutFood: '',
//     }
//     this.handleChangeText = this.handleChangeText.bind(this);
//   }

//   handleChangeText (event) {
//     this.setState({
//       aboutFood: event.target.value,
//     })
//   }

//   render() {
//   return (
//     <div>
//       <form className="div-form">
//         <label>Comida Favorita
//           <select name="Comida Favorita">
//             <option value="Strogonoff">Strogonoff</option>
//             <option value="Feijoada">Feijoada</option>
//             <option value="Pizza">Pizza</option>
//             <option value="Lasanha">Lasanha</option>
//           </select>
//         </label>
//         <label>Nome
//           <input type="name"></input>
//         </label>
//         <label>Email
//           <input type="email"></input>
//         </label>
//         <label>Descrição
//           <textarea name="About your Food" value={this.state.aboutFood} onChange={this.handleChangeText}>Conte sobre sua comida favorita...</textarea>
//         </label>
//       </form>
//     </div>
//   );
// }
// }