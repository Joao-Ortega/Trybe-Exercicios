import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div>
        {conteudos.map((obj) => (
          <div>
            <h4 key={obj.conteudo}>O conteúdo é: {obj.conteudo}</h4>
            <p>Status: {obj.status}</p>
            <p>Bloco: {obj.bloco}</p>
          </div>
        ))}
      </div>


    )
  }
}

export default Content;