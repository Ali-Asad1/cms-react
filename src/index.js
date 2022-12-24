import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/Modals/cms-modal.css'
import './index.css';
import './custom.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);