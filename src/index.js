import React from 'react';
import ReactDOM from 'react-dom';

const name = "Keith J. Francis";
let year = new Date().getFullYear();


ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>&copy; {year}</p>
  </div>
  ,document.getElementById('root'));