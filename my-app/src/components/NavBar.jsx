import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    let navigate = useNavigate();  // Get access to the navigate function

    const navigateToHalalConnect = () => { 
        navigate('/halal-connect');  // Navigate programmatically
    }

    const navigateToLandingPage = () => { 
        navigate('/');  // Navigate programmatically
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <button className="nav-button" onClick={navigateToLandingPage}>Halal Connect</button>
            </div>
            <div className="nav-items">
                <button className="nav-button" onClick={navigateToHalalConnect}>Map</button>
            </div>
        </nav>
    );
}

export default NavBar;