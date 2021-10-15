import React from "react";
import Fieldset from "./componentes/Fieldset";
import "./style.css"

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      Name: '',
      Email: '',
      CPF: '',
      Address: '',
      City: '',
      Estado: '',
    }
    this.toUpper = this.toUpper.bind(this);
    this.newState = this.newState.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  toUpper (event) {
    let { name, value } = event.target;
    if (name === 'Name') {
     value = value.toUpperCase();
    }
    this.newState(name, value)
  }

  handleChange ({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value,
    })
  }

  newState (name, value) {
    this.setState({
      [name]: value,
    })
  }

  render() {
  return (
   <div>
     <form>
       <Fieldset Name={ this.state.Name } toUpper={ this.toUpper } handleChange={ this.handleChange } Estado={ this.state.Estado } />
     </form>
   </div>
  );
}
}

export default App;
