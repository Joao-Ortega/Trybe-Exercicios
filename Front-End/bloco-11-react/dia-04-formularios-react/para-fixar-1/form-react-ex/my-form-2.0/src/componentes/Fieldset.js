import React from "react";

class Fieldset extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    const { Name, Estado, toUpper, handleChange } = this.props;
    const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];
    return (
      <div>
        <fieldset className="forms">
          <label>Nome
            <input
              type='text'
              name="Name"
              maxLength='40'
              value={ Name }
              required
              onChange={ toUpper }
            />
          </label>

          <label>Email
            <input
              type='email'
              name='Email'
              maxLength='50'
              required
              onChange={ handleChange }
            />
          </label>

          <label>CPF
            <input
              type='text'
              name='CPF'
              maxLength='11'
              required
              onChange={ handleChange }
            />
          </label>

          <label>Endereço
            <input
              type='text'
              name='Address'
              maxLength='200'
              required
              onChange={ handleChange }
            />
          </label>

          <label>Cidade
            <input
              type='text'
              name='City'
              maxLength='28'
              required
              onChange={ handleChange }
            />
          </label>

          <label>Estado
            <select required defaultValue="AC" name={ Estado } onChange={ handleChange }>
           { estados.map((sigla) => {
             return (
               <option key={ sigla } value={ sigla } > { sigla } </option>
             )
           }) }
           </select>
          </label>

          <button type="submit">ENVIAR</button>
        </fieldset>
      </div>
    )
  }
}

export default Fieldset;