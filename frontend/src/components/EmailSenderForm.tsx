import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailSenderForm = () => {
    const [senderEmail, setSenderEmail] = useState('');
    const [appPassword, setAppPassword] = useState('');

    const handleSendEmails = async () => {
        // Logic to handle sending emails
    };

    return (
        <form className="space-y-4">
            <Input type="email" placeholder="Sender Email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} required />
            <Input type="password" placeholder="App Password" value={appPassword} onChange={(e) => setAppPassword(e.target.value)} required />
            <Button onClick={handleSendEmails}>Send Emails</Button>
        </form>
    );
};

export default EmailSenderForm;
