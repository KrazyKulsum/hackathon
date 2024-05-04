// Button.js

import React from 'react';
import './SearchButton.css';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  let navigate = useNavigate();  // Get access to the navigate function

  const navigateToHalalConnect = () => { 
    navigate('/halal-connect');  // Navigate programmatically
}
  return (
    <div className="button-container">
    <button className="search-button" onClick={navigateToHalalConnect}>
      Search the Map
    </button>
    </div>
  );
}

export default Button;
