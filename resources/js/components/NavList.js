// resources/js/components/NavList.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavList() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Example</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/Contactus">Contact Us</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/login">Login</Link></li> 
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}
