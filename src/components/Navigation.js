import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#artists">Artists</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;