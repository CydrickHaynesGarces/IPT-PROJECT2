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
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-container">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Log in</button>
            </form>

            <div className="auth-links">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>

            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
