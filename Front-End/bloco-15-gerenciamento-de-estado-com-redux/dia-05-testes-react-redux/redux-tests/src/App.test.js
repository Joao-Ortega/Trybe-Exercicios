import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {} ) => {
    return {
      ...render(<Provider store={ store }>{component}</Provider>), store,
    }
  }

  describe('testing clicks', () => {
    beforeEach(cleanup);
    it('the page should has a button and a text 0', () => {
      const { queryByText } = renderWithRedux(<App />);
      const buttonAdicionar = queryByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      expect(queryByText('0')).toBeInTheDocument();
    });

    it('a click in a button should increment the value of clicks', () => {
      const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
  
      expect(queryByText('5')).toBeInTheDocument();
    });

    it('tests if the click counter works correctly', () => {
      const { getByText, getByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } } );

      const btnClick = getByRole('button', { name: /clique aqui/i });
      userEvent.click(btnClick);

      const numberOfClicks = getByText('11');

      expect(numberOfClicks).toBeInTheDocument();
    })
  });
