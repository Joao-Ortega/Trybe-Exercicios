// actionCreator que é nossa action que recebe o objeto JS ue será passado para o reducer para mudança do state central
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

// Estado inicial que será passado para o reducer
const ESTADO_INICIAL = {
  login: false,
  email: '',
};

// Criando o reducer, entidade responsável por alterar a store
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN' :
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
    default:
      return state;
  }
};

// Criando um store
const store = Redux.createStore(reducer);
// Função que envia a mudança para a action que coloca a informação dentro de um objeto, o envia para o reducer que altera o estado.
store.dispatch(fazerLogin('alguem@email.com'));

console.log(store.getState());
