import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import { store } from './redux/store'
import { Provider } from 'react-redux'
// react router dom
import { BrowserRouter } from "react-router-dom";
// global styles
import './index.scss';
// components
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
