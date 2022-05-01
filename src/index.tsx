import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root')!,
root = createRoot(container);
root.render(
  <>
    <App />
  </>
  
);

