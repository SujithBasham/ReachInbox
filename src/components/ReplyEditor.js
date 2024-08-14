import React, { useState } from 'react';
import './ReplyEditor.css';

const ReplyEditor = ({ email, onSendReply }) => {
    const [replyBody, setReplyBody] = useState('');

    // Retrieve the user's email and name from localStorage
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');

    const handleSendReply = async () => {
        const replyData = {
            toName: email.fromName,
            to: email.fromEmail,
            from: userEmail, // Use the user's email stored in localStorage
            fromName: userName, // Use the user's name stored in localStorage
            subject: `Re: ${email.subject}`,
            body: replyBody,
            inReplyTo: email.messageId,
            references: [email.messageId],
        };

        try {
            const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${email.threadId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('bearerToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(replyData),
            });

            const data = await response.json();
            if (data.status === 200) {
                onSendReply();
            } else {
                alert("Failed to send reply.");
            }
        } catch (error) {
            alert("An error occurred while sending the reply.");
        }
    };

    return (
        <div className="reply-editor">
            <textarea 
                value={replyBody} 
                onChange={(e) => setReplyBody(e.target.value)} 
                placeholder="Write your reply here..."
            />
            <button onClick={handleSendReply}>Send</button>
        </div>
    );
};

export default ReplyEditor;
