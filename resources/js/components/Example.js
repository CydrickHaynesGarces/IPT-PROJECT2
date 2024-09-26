// resources/js/components/Example.js
import React from 'react';
import NavList from './Navlist'; // Adjust the path if needed

export default function Example() {
    return (
        <div>
            <h1>Welcome to the Example Page</h1>
            <p>This is the example page content.</p>
            <NavList /> {/* Include the NavList component */}
        </div>
    );
}
