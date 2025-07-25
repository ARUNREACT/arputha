import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// src/index.js
import 'flowbite';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HelmetProvider>
	  <App />
	</HelmetProvider>
);

reportWebVitals();
