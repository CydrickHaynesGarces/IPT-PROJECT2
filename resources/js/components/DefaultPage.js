// resources/js/components/DefaultPage.js
import React from 'react';
import Header from './Header'; // Import Header component
import NavList from './NavList';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer'; // Import Footer component
import '../../sass/DefaultPage.scss';

export default function DefaultPage() {
    return (
        <div className="default-page-container">
            <Header /> {/* Add Header here */}
            <NavList /> {/* NavList renders at the top */}

            <div id="home" className="main-content">
                <h1>Welcome to the IPT-PROJECT System</h1>
                <p>This project serves as a sample platform.</p>
            </div>

            {/* New Section for Images and Motivational Quotes */}
            <div className="image-section">
                <div className="image-container">
                    <img src="https://i.pinimg.com/564x/34/a0/87/34a0877c1d52908a53a9c11ff31515d4.jpg" alt="Motivation 1" />
                    <p>"Believe you can and you're halfway there."</p>
                </div>
                <div className="image-container">
                    <img src="https://i.pinimg.com/564x/b2/84/48/b2844861573c2700c893c9fae2d01af6.jpg" alt="Motivation 2" />
                    <p>"The only way to do great work is to love what you do."</p>
                </div>
            </div>

            <div id="about-us"> {/* Scroll target for About Us */}
                <AboutUs />
            </div>

            <div id="contact-us"> {/* Scroll target for Contact Us */}
                <ContactUs />
            </div>

            <Footer /> {/* Add Footer component here */}
        </div>
    );
}
