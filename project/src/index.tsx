import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITY } from './mocks/city';
import {offerMock} from './mocks/offerMock';

const Setting = {
  totalAmount: 405,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      totalAmount={Setting.totalAmount}
      offers = {offerMock}
      city = {CITY}
    />
  </React.StrictMode>,
);
