import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const basename =
  configuredBase || window.location.pathname.startsWith('/PhoneBook')
    ? '/PhoneBook'
    : '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);