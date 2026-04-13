/**
 * @file   src\main.jsx
 * @author Ewerton
 * @date   2026-04-13
 * @desc   [Descrição do componente ou arquivo]
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import './estilizacao/reset.css';
import './estilizacao/globals.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

