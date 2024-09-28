// resources/js/components/SocialMediaLinks.js
import React from 'react';
import '../../sass/SocialMediaLinks.scss'; // Ensure the path is correct

export default function SocialMediaLinks() {
    return (
        <div className="social-media-links">
            <ul>
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
            </ul>
        </div>
    );
}
