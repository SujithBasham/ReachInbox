import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode-toggle" onClick={handleToggle}>
            <img
                src={darkMode ? "/icons/dark-toggle-icon.png" : "/icons/light-toggle-icon.png"}
                alt="Toggle Dark Mode"
                className="toggle-icon"
            />
        </div>
    );
};

export default DarkModeToggle;
