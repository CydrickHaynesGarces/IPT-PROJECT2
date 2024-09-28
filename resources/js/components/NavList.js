// resources/js/components/NavList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/NavList.scss';

export default function NavList() {
    return (
        <nav>
            <ul className="nav-list">
                <li><a href="#home">Home</a></li> {/* Use anchor link for smooth scroll */}
                <li><a href="#about-us">About Us</a></li> {/* Use anchor link for smooth scroll */}
                <li><a href="#contact-us">Contact Us</a></li> {/* Use anchor link for smooth scroll */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}
