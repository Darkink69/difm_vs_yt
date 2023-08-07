import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const isLoading = false;


root.render(
  <React.StrictMode>
    <App isLoading={isLoading}/>
  </React.StrictMode>
);

