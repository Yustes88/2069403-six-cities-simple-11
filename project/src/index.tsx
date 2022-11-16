import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Cities } from './const';

import {offerMock, ReviewsMock} from './mocks/offerMock';
import { store } from './store';

const Setting = {
  totalAmount: 405,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        totalAmount={Setting.totalAmount}
        offers = {offerMock}
        reviews = {ReviewsMock}
        cities = {Cities}

      />
    </Provider>
  </React.StrictMode>,
);
