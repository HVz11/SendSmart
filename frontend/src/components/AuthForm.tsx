import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


type AuthFormProps = {
    type: 'login' | 'signup';
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/${type}`, { email, password });
            localStorage.setItem('token', response.data.token);
            router.push('/dashboard');
        } catch (error) {
            console.error('Authentication failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit">{type === 'login' ? 'Login' : 'Sign Up'}</Button>
        </form>
    );
};

export default AuthForm;
