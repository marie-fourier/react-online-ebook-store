//eslint-disable import/first

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './configureStore';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import Cart from './containers/Cart';
import CashDesk from './containers/CashDesk';
import Header from './components/Header';
import Book from './containers/Book';

const store = createStore();

store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
          <Route path="/cash-desk" component={CashDesk} />
          <Route path="/book/:isbn" render={({match}) => <Book isbn={match.params.isbn} />} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);