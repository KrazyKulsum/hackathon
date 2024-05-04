// Button.js

import React from 'react';
import './SearchButton.css';

const Button = ({ onClick }) => {
  return (
    <div className="button-container">
    <button className="search-button" onClick={onClick}>
      Search the Map
    </button>
    </div>
  );
}

export default Button;
