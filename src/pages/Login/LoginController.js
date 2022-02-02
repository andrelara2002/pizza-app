import api from '../../services/api';
import React from 'react'
import LoginView from './LoginView';

import { authenticateUser } from '../../services/userApi'

export default function LoginController(props) {
    const [loading, setLoading] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''),

    if (loading) return <LoginView />

    return <LoginView
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
    />
}