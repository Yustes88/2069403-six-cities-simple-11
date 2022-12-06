import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { Cities } from './const';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction } from './store/user/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App
        cities = {Cities}

      />
    </Provider>
  </React.StrictMode>,
);
