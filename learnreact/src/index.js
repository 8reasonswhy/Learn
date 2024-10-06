import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Helloword from './Learning/helloword';
import Textform from './Learning/Textform';
import reportWebVitals from './reportWebVitals';
import Fruit from './learnjsx/Fruit';
import Event from './EVENT/Event';        
import Counter from './Counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const faray = [
  "pomme",
  "zoke",
  "limoune",
  "farawla",
]
root.render(
  <React.StrictMode>
    <Fruit />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
