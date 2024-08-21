import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"


const DashboardForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [template, setTemplate] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('template', template);

        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/email/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Emails sent successfully');
        } catch (error) {
            console.error('Failed to send emails', error);
        }
    };

    const handleSendEmail = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                '/api/email/send',
                { email, name, company, template },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Email sent successfully');
        } catch (error) {
            console.error('Failed to send email', error);
        }
    };

    return (
        <form onSubmit={handleUpload} className="space-y-4">
            <Input type="email" placeholder="Receiver Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} required />
            <Textarea placeholder="Email Template" value={template} onChange={(e) => setTemplate(e.target.value)} required />
            <Button type="button" onClick={handleSendEmail}>Send Email</Button>
            <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <Button type="submit">Upload and Send Bulk Emails</Button>
        </form>
    );
};

export default DashboardForm;
