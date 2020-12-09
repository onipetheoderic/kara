import React from 'react';
import ReactDOM from 'react-dom';
import "./slick/slick.css"; 
import "./slick/slick-theme.css";
import { CounterContextProvider } from "./store";
import './index.css';
import App from './App';

ReactDOM.render(
    <CounterContextProvider>
      <App />
    </CounterContextProvider>,
  document.getElementById('root')
);
