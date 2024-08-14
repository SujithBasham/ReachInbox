import React, { useState } from 'react';
import './Onebox.css';

const Onebox = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`onebox-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className="sidebar">
                <img src="/icons/logo.png" alt="Logo" className="sidebar-logo" />
                <ul className="sidebar-menu">
                    <li>
                        <img src="/icons/home-icon.png" alt="Home" />
                    </li>
                    <li>
                        <img src="/icons/email-icon.png" alt="Email" />
                    </li>
                    <li>
                        <img src="/icons/send-icon.png" alt="Send" />
                    </li>
                    <li>
                        <img src="/icons/drafts-icon.png" alt="Drafts" />
                    </li>
                    <li>
                        <img src="/icons/trash-icon.png" alt="Trash" />
                    </li>
                    <li>
                        <img src="/icons/contacts-icon.png" alt="Contacts" />
                    </li>
                    <li>
                        <img src="/icons/analytics-icon.png" alt="Analytics" />
                    </li>
                </ul>
                <div className="profile-section">
                    <img src="/icons/profile-icon.png" alt="Profile" className="profile-icon" />
                </div>
            </div>
            <div className="main-content">
                <div className="top-bar">
                    <div className="workspace-title">Onebox</div>
                    <div className="dark-mode-toggle" onClick={handleToggleDarkMode}>
                        <img 
                            src={darkMode ? "/icons/dark-toggle-icon.png" : "/icons/light-toggle-icon.png"} 
                            alt="Toggle Dark Mode" 
                            className="toggle-icon"
                        />
                    </div>
                    <div className="workspace-name">Tim's Workspace</div>
                </div>
                <div className="content">
                    {selectedEmail ? (
                        <>
                            {/* Add components to handle selected email */}
                        </>
                    ) : (
                        <div className="no-email-selected">
                            <img src="/icons/inbox-empty.png" alt="No Emails" className="empty-inbox-image" />
                            <p>It's the beginning of a legendary sales pipeline</p>
                            <p>When you have inbound Emails you'll see them here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Onebox;
