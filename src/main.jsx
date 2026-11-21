import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1. Vendor CSS & JS
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 2. Global Custom Stylesheets
import './styles/fonts.css';
import './styles/style.css';
import './styles/services.css'
import './styles/about.css'
import './styles/english.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);