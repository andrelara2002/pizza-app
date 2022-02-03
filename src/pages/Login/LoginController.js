import api from '../../services/api';
import React from 'react'
import LoginView from './LoginView';


export default function LoginController(props) {
    const [loading, setLoading] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''),

    if (loading) return <LoginView />


    const onSignUp = () => {
        console.log("PEDIDO DE CADASTRO")
    }

    return <LoginView
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSignUp={() => onSignUp}
    />
}