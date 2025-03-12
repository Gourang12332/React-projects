import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
 <App/>
 </React.Fragment>
)


// pure javascript
// var h1 = document.createElement("h1");
// h1.innerHTML = "hi Shraddha"
// document.getElementById("root").appendChild(h1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//    [
//     <h1>Hello i am Gourang</h1>,
//     <h2>I am learning react</h2>,
//     <h3>Come and join me</h3>
//    ],
  
// );