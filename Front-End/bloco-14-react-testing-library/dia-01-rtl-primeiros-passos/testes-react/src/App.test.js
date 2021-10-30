import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testa se App funciona corretamente', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('Verifica se o texto Aprenda com o Ortega está na tela', () => {
    const linkElement = screen.getByText(/Aprenda com o Ortega/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('Verifica se existe o campo email', () => {
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  })

  it('Verifica se existe um botão de enviar', () => {
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  })

  it('Verifica se existe dois botões', () => {
    const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(2);
  })

  it('Verificando se o botão funciona corretamente', () => {
    const EMAIL = 'joaozinho@test.com';
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL);
    userEvent.click(btnSend);
    const textEmail = screen.getByTestId('id-email-user')

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL}`);
  } )
})


