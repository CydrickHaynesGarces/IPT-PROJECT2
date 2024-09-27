// resources/js/components/Example.js
require('../../sass/Example.scss');
import React from 'react';
import NavList from './NavList'; // Adjust the path if needed

// Header Component
function Header() {
    return (
        <header className="header">
            <h1>School Profiling</h1>
            <p>Your pathway to educational excellence!</p>
        </header>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 School Profiling. All rights reserved.</p>
        </footer>
    );
}

// Main Example component
export default function Example() {
    return (
        <div className="example-container">
            <Header /> {/* Include the Header component */}

            <div className="main-content"> {/* New class for centering content */}
                <h1>Welcome to Our School Profiling Page!</h1>
                <p>
                    We are delighted to have you here. Explore our projects, learn more about us, 
                    and feel free to get in touch!
                </p>
                <p>
                    Our mission is to provide a supportive and engaging environment for learning and 
                    growth. Dive into our resources, participate in our community events, and let's 
                    embark on this journey together!
                </p>
            </div>

            <NavList /> {/* Include the NavList component at the bottom */}

            <Footer /> {/* Include the Footer component */}
        </div>
    );
}
