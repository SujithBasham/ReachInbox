import React, { useEffect, useState } from 'react';
import './EmailDetails.css';

const EmailDetails = ({ email }) => {
    const [emailDetails, setEmailDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmailDetails = async () => {
            try {
                const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${email.threadId}`, {
                    headers: {
                        'Authorization': `Bearer YOUR_BEARER_TOKEN`,
                    },
                });
                const data = await response.json();
                if (data.status === 200) {
                    setEmailDetails(data.data);
                } else {
                    setError("Failed to fetch email details.");
                }
            } catch (err) {
                setError("An error occurred while fetching email details.");
            }
        };

        fetchEmailDetails();
    }, [email.threadId]);

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="email-details">
            {emailDetails ? (
                <>
                    <h2>{emailDetails.subject}</h2>
                    <p><strong>From:</strong> {emailDetails.fromName} ({emailDetails.fromEmail})</p>
                    <p><strong>To:</strong> {emailDetails.toName ? emailDetails.toName : "You"} ({emailDetails.toEmail})</p>
                    <p><strong>Sent At:</strong> {new Date(emailDetails.sentAt).toLocaleString()}</p>
                    <div className="email-body" dangerouslySetInnerHTML={{ __html: emailDetails.body }} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EmailDetails;
