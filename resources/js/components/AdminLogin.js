// resources/js/components/AdminLogin.js
import React, { useState } from 'react';
import '../../sass/AdminLogin.scss'; // Update the SCSS for admin login styling
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function AdminLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in as admin:', formData);
        // Add login logic for admin here
    };

    return (
        <div className="admin-login">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" " // Leave this empty for floating label effect
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder=" " // Leave this empty for floating label effect
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit">Login as Admin</button>
            </form>
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
