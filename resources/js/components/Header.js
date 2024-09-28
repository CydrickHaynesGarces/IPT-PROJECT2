// resources/js/components/Header.js
import React from 'react';
import '../../sass/Header.scss';
import SocialMediaLinks from './SocialMediaLinks'; // Import SocialMediaLinks

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-text">
                    <h1>IPT-PROJECT SYSTEM</h1>
                    <p>Layo na pero layo pagyud T T.</p>
                </div>
                {/* Add the SocialMediaLinks component here */}
                <SocialMediaLinks />
            </div>
        </header>
    );
}
