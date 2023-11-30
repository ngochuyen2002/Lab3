import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have this CSS file in the same directory as index.js
import DrumKitApp from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DrumKitApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
