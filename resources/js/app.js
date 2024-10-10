// app.js
require('./bootstrap'); // Load all JavaScript dependencies

import React from 'react'; // Import React
import { createRoot } from 'react-dom/client'; // Import createRoot
import Routers from './router/Router'; // Load the Router which contains all your routes

// Check if the root element exists and render the Router
const container = document.getElementById("root");
let root;

if (container) {
    if (!root) {
        root = createRoot(container); // Create a root if it doesn't exist
    }
    root.render(<Routers />); // Render the Routers component
}
