import React, { useState } from 'react';
import '../../sass/AdminLogin.scss'; // Update the SCSS for admin login styling
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation

export default function AdminLogin() {
    const navigate = useNavigate(); // Hook for navigation
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
        // Hardcoded check for demonstration
        if (formData.email === 'haynesgarces@gmail.com' && formData.password === 'garces') {
            console.log('Logging in as admin:', formData);
            navigate('/dashboard'); // Redirect to dashboard
        } else {
            console.error('Invalid credentials'); // Handle invalid credentials
        }
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
