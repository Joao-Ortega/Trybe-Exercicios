// Simulando pela primeira vez uma chamada a API com mock!
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('Verifica se a API funciona corretamente', async () => {
//  global.fetch = (url) => {
//   return Promise.resolve({
//     json: () => Promise.resolve({
//       id: '7h3oGtrOfxc',
//       joke: 'Whiteboards ... are remarkable.',
//       status: 200,
//     })
//   })
//  }
// Uma forma mais simplificada de fazer essa simulação de API seria com o jest.fn().mockResolvedValue();
// global.fetch = jest.fn().mockResolvedValue({
//   json: jest.fn().mockResolvedValue({
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   })
// })


//  render(<App/>);
//  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//  expect(renderedJoke).toBeDefined();
// });
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
// Essa é outra forma de mockar o fetch retirando o Promise.resolve e colocando async/await:
//   global.fetch = jest.fn(async () => ({
//   json: async () => joke
// }));

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});