import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
  return <h1 onClick={() => setNumber(1)}>{number}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
