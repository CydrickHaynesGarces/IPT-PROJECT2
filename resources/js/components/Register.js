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
                <div className="input-container">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder=" " // Leave this empty for floating label effect
                    />
                    <label htmlFor="username">Username</label>
                </div>
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
                <button type="submit">Register</button>
                <div className="google-signin">
                    <span>Sign up with Google</span>
                </div>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
