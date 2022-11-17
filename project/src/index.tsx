import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Cities } from './const';

import {offerMock, ReviewsMock} from './mocks/offerMock';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offerMock}
        reviews = {ReviewsMock}
        cities = {Cities}

      />
    </Provider>
  </React.StrictMode>,
);
