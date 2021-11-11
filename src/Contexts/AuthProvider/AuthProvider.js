import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext();

//context API for firebase authentication
const AuthProvider = ( props ) => {
    const { children } = props;
    const allContext = useFirebase();

    //rendering the context for using it as the parent of all Router
    return (
        <AuthContext.Provider value={ allContext }>
            { children }
        </AuthContext.Provider >
    );
};

export default AuthProvider;