import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const initalState = {
  message: "hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      };
    case "whisper":
      return {
        message: `excuese me, I just said ${state.message}`
      };
    default:
      return {
        message: "nothing"
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper"})}>whisper</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
