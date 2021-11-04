import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se a API funciona corretamente', async () => {
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
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  })
})


 render(<App/>);
 const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
 expect(renderedJoke).toBeDefined();
});
