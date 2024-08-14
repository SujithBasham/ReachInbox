import React, { useEffect, useState } from 'react';
import './EmailList.css';

const EmailList = ({ onSelectEmail }) => {
    const [emails, setEmails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmails = async () => {
            const token = localStorage.getItem('bearerToken'); // Get the token from localStorage

            if (!token) {
                alert("You're not logged in!");
                return;
            }

            try {
                const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (data.status === 200) {
                    setEmails(data.data);
                } else {
                    setError("Failed to fetch emails.");
                }
            } catch (err) {
                setError("An error occurred while fetching emails.");
            }
        };

        fetchEmails();
    }, []);

    return (
        <div className="email-list">
            {error && <div className="error">{error}</div>}
            {emails.map(email => (
                <div 
                    key={email.id} 
                    className="email-item" 
                    onClick={() => onSelectEmail(email)}
                >
                    <p className="email-subject">{email.subject}</p>
                    <p className="email-from">{email.fromName} - {new Date(email.sentAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default EmailList;
