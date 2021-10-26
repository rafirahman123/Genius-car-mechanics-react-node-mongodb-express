import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/usefirebase,';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContex.Provider value={allContext}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;