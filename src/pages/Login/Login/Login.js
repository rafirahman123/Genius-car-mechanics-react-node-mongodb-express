import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle} type="button" class="btn btn-outline-info">Google signin</button>

        </div>
    );
};

export default Login;