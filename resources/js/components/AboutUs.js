import React from 'react';
import '../../sass/AboutUs.scss';

export default function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="fade-in">About Us</h1>
            <p className="fade-in">Hey there! This is just a sample project where we’re having fun with some cool function implementations and routing in React.</p>
            <p className="fade-in">Our aim? To create an easy-to-use platform where you can check out educational resources and features without any hassle.</p>

            {/* Image Section */}
            <div className="image-gallery">
                <div className="image-container">
                    <img 
                        src="https://i.pinimg.com/564x/6e/19/0d/6e190db115b92da9fd4447db53c48cf2.jpg" 
                        className="image-fade-in"
                    />
                    <span className="tooltip"></span>
                </div>
                <div className="image-container">
                    <img 
                        src="https://i.pinimg.com/564x/09/3f/67/093f6715d49d8f14a65c5c8a56050b34.jpg" 
                        className="image-fade-in"
                    />
                    <span className="tooltip"></span>
                </div>
                <div className="image-container">
                    <img 
                        src="https://i.pinimg.com/564x/c9/10/3a/c9103af2aabd2915a405caf8c87cc4e1.jpg" 
                        className="image-fade-in"
                    />
                    <span className="tooltip"></span>
                </div>
            </div>
        </div>
    );
}
