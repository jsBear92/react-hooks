import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from "react-icons/fa"

const createArray = (length) => [
  ...Array(length)
]

function Star({ selected = false }) {
  return (<FaStar color={selected ? "red" : "gray"} />);
}

function StarRating({ totalStarts = 5 }) {
  return createArray(totalStarts).map((n, i) => (<Star key={i} />));
}

function App() {
  return <StarRating />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
