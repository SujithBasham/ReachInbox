import React from 'react';
import './Login.css'; // Make sure you have this file in place

const Login = () => {
    const handleLogin = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/auth';
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="/logo.png" alt="Reachinbox Logo" className="logo" />
                <h1 className="login-title">Create a new account</h1>
                <button className="google-signup" onClick={handleLogin}>
                    <img src="/google-icon.png" alt="Google Icon" /> Sign Up with Google
                </button>
                <button className="create-account">Create an Account</button>
                <p className="signin-text">
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
            </div>
            <footer className="login-footer">
                &copy; 2023 Reachinbox. All rights reserved.
            </footer>
        </div>
    );
};

export default Login;
