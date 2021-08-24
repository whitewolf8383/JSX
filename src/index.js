import React from 'react';
import ReactDOM from 'react-dom';

const name = "Keith";
let year = new Date().getFullYear();


ReactDOM.render(
  <div>
    <p>Created by Keith J. Francis</p>
    <p>&copy; {year}</p>
  </div>
  ,document.getElementById('root'));