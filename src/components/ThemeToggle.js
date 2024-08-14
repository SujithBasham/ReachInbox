import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="theme-toggle">
            <img 
                src={theme === 'light' ? '/icons/logo-dark.png' : '/icons/logo-light.png'} 
                alt="Toggle theme" 
                onClick={toggleTheme} 
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
};

export default ThemeToggle;
