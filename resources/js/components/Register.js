// resources/js/components/Register.js
import React, { useState } from 'react';
import '../../sass/Register.scss'; // Import the SCSS for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
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
        console.log('Registering user:', formData);
    };

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <div className="auth-links">
                <p>Already have an account? <Link to="/login">Login</Link></p> {/* Link to Login page */}
            </div>
            <div>
                <Link to="/">Back to Home</Link> {/* Add Back to Home link */}
            </div>
        </div>
    );
}
