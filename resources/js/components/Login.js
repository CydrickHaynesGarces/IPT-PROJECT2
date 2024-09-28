// resources/js/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/Login.scss';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password);
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <div className="auth-links">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>

            {/* Back to Home link */}
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
