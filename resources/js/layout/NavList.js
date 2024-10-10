import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../../sass/NavList.scss'; // Import SCSS for styling

export default function NavList() {
    return (
        <nav>
            <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/admin-login">Admin Login</Link></li> 
            </ul>
        </nav>
    );
}
