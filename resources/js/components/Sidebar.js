// Sidebar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChalkboardTeacher, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link
import '../../sass/Sidebar.scss'; // Sidebar styling

export default function Sidebar({ onLogout }) {
    const [isCollapsed, setIsCollapsed] = useState(false); // Use 'isCollapsed' for clarity

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {/* Sidebar navigation */}
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="link-text">{!isCollapsed && 'Dashboard'}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/students" className="nav-link">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="link-text">{!isCollapsed && 'Students'}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/teachers" className="nav-link">
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                        <span className="link-text">{!isCollapsed && 'Teachers'}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <button className="nav-link logout-btn" onClick={onLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className="link-text">{!isCollapsed && 'Logout'}</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
