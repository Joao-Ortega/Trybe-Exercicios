import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Verifica caso o email seja inválido', () => {
  const EMAIL_USER = 'joaozinho.com.br';
  render(<ValidEmail email={ EMAIL_USER } />);
  const notValid = screen.getByText('Email Inválido');
  expect(notValid).toBeDefined();
})