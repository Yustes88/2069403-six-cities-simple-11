import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { CITY } from './mocks/city';
import {offerMock} from './mocks/offerMock';
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
        city = {CITY}
      />
    </Provider>
  </React.StrictMode>,
);
