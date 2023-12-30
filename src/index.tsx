import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Moralis from 'moralis';


const APIKEY_MORALIS =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg5OWI4Yjg2LTdkODctNDdiOS1hYmUzLTc3ZjU4OTBlMjNkMSIsIm9yZ0lkIjoiMTYzNzQiLCJ1c2VySWQiOiIxNzM4MSIsInR5cGVJZCI6IjAwNzUwMjFhLTFmODQtNGVjZS1iNDI4LTU1Zjg0MDVkNWRlZiIsInR5cGUiOiJQUk9KRUNUIiwiaWF0IjoxNjkxNzM4NTkzLCJleHAiOjQ4NDc0OTg1OTN9.aBarE2P37wf6wgrATfXG-ZflLb98BImLfyW17_SHUL0";

// Initialize Moralis once here
Moralis.start({ apiKey: APIKEY_MORALIS });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
