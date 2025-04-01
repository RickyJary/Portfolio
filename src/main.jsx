import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
