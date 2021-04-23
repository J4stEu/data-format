import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './assets/css/normalize.css';
import './assets/css/style.css';


/*let yaml = require("js-yaml") 
let jn = {
  "orderID": 12345,
  "shopperName": "Ваня Иванов",
  "shopperEmail": "ivanov@example.com",
  "contents": [
    {
      "productID": 34,
      "productName": "Супер товар",
      "quantity": 1
    },
    {
      "productID": 56,
      "productName": "Чудо товар",
      "quantity": 3
    }
  ],
  "orderCompleted": true
};  

try {
  const output = yaml.dump(jn);
  console.log(output);
  const newJn = yaml.load(output);
  console.log(newJn);
} catch (e) {
  console.log(e);
}*/ 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);