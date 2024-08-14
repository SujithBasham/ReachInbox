import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const userEmail = urlParams.get('email');
        const userName = urlParams.get('name');

        if (token) {
            localStorage.setItem('bearerToken', token);
            localStorage.setItem('userEmail', userEmail);
            localStorage.setItem('userName', userName);

            navigate('/onebox');
        } else {
            alert('Login failed. No token received.');
        }
    }, [navigate]);

    return <div>Logging you in...</div>;
};

export default AuthHandler;
