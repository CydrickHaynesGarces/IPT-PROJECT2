import React, { useEffect, useState } from 'react';
import '../../sass/Header.scss';

export default function Header() {
    const [backgroundOpacity, setBackgroundOpacity] = useState(1); // For background opacity

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(1 - scrollY / 300, 0); // Decrease opacity to a minimum of 0
        setBackgroundOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header" style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}>
            <div className="header-content">
                <div className="header-text">
                    <h1>IPT-PROJECT SYSTEM</h1>
                    <p>Layo na pero layo pagyud T T.</p>
                </div>
            </div>
        </header>
    );
}
